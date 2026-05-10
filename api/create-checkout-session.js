/**
 * POST /api/create-checkout-session
 * Body: { amount: number (USD), frequency: "once" | "monthly" }
 *
 * Creates a Stripe Checkout Session and returns its URL. Frontend redirects
 * the donor to Stripe's hosted page; Stripe handles card collection, 3DS,
 * Apple/Google Pay, and emails the receipt.
 *
 * Required env (Vercel → Settings → Environment Variables):
 *   STRIPE_SECRET_KEY            sk_live_… or rk_live_… (restricted key with
 *                                checkout_sessions:write, prices:write,
 *                                products:write, customers:write).
 *
 * Optional:
 *   PUBLIC_SITE_URL              https://lungcancerawarenessfoundation.org
 *                                (success/cancel base URL; falls back to the
 *                                request origin).
 *
 * Receipt copy (the "Thank you so much for your generous donation… Tax ID
 * 33-4280122…" message) is set in the Stripe Dashboard:
 *   Settings → Branding → Customer emails → Custom message.
 */

const MIN_AMOUNT_CENTS = 100 // $1 minimum
const MAX_AMOUNT_CENTS = 10_000_000 // $100,000 ceiling

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    if (req.body && typeof req.body === 'object' && !Buffer.isBuffer(req.body)) {
      resolve(req.body)
      return
    }
    let raw = ''
    req.on('data', (chunk) => {
      raw += chunk
    })
    req.on('end', () => {
      if (!raw) {
        resolve({})
        return
      }
      try {
        resolve(JSON.parse(raw))
      } catch {
        resolve({})
      }
    })
    req.on('error', reject)
  })
}

function resolveOrigin(req) {
  const explicit = process.env.PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/$/, '')
  const proto = req.headers['x-forwarded-proto'] || 'https'
  const host = req.headers['x-forwarded-host'] || req.headers.host
  return host ? `${proto}://${host}` : ''
}

module.exports = async function createCheckoutSessionHandler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) {
    return res.status(500).json({
      error:
        'Stripe is not configured. Set STRIPE_SECRET_KEY in Vercel environment variables.',
    })
  }

  const body = await readJsonBody(req)
  const amount = Number(body.amount)
  const frequency = body.frequency === 'monthly' ? 'monthly' : 'once'

  if (!Number.isFinite(amount) || amount <= 0) {
    return res.status(400).json({ error: 'Amount must be a positive number' })
  }

  const unitAmount = Math.round(amount * 100)
  if (unitAmount < MIN_AMOUNT_CENTS) {
    return res.status(400).json({ error: 'Minimum donation is $1' })
  }
  if (unitAmount > MAX_AMOUNT_CENTS) {
    return res.status(400).json({ error: 'Amount exceeds the allowed maximum' })
  }

  let stripe
  try {
    const Stripe = require('stripe')
    stripe = new Stripe(secretKey, { apiVersion: '2024-06-20' })
  } catch (err) {
    return res.status(500).json({
      error: 'Stripe SDK not installed. Run `npm install stripe` at the repo root.',
      detail: err instanceof Error ? err.message : String(err),
    })
  }

  const origin = resolveOrigin(req)
  const successUrl = `${origin}/donate?status=success&session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${origin}/donate?status=cancelled`

  const productName =
    frequency === 'monthly'
      ? 'Monthly Donation — Lung Cancer Awareness Foundation'
      : 'Donation — Lung Cancer Awareness Foundation'

  const productDescription =
    'Lung Cancer Awareness Foundation is a qualified 501(c)(3) tax-exempt organization. Tax ID 33-4280122.'

  const lineItem =
    frequency === 'monthly'
      ? {
          quantity: 1,
          price_data: {
            currency: 'usd',
            unit_amount: unitAmount,
            recurring: { interval: 'month' },
            product_data: {
              name: productName,
              description: productDescription,
            },
          },
        }
      : {
          quantity: 1,
          price_data: {
            currency: 'usd',
            unit_amount: unitAmount,
            product_data: {
              name: productName,
              description: productDescription,
            },
          },
        }

  const params = {
    mode: frequency === 'monthly' ? 'subscription' : 'payment',
    line_items: [lineItem],
    success_url: successUrl,
    cancel_url: cancelUrl,
    billing_address_collection: 'required',
    allow_promotion_codes: false,
    submit_type: frequency === 'monthly' ? undefined : 'donate',
    custom_text: {
      submit: {
        message:
          'Lung Cancer Awareness Foundation is a qualified 501(c)(3) tax-exempt organization. Tax ID 33-4280122. No goods or services were provided in exchange for this contribution.',
      },
    },
    metadata: {
      donation_frequency: frequency,
      source: 'lcaf_website',
    },
  }

  // Receipts are sent automatically for one-time payments when an email is
  // provided. For subscriptions, Stripe sends invoice receipts. Both can be
  // configured/enabled in Dashboard → Settings → Customer emails.
  if (frequency === 'once') {
    params.payment_intent_data = {
      description: productDescription,
      metadata: { donation_frequency: 'once' },
    }
  } else {
    params.subscription_data = {
      description: productDescription,
      metadata: { donation_frequency: 'monthly' },
    }
  }

  try {
    const session = await stripe.checkout.sessions.create(params)
    return res.status(200).json({ url: session.url, id: session.id })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return res.status(502).json({
      error: 'Could not create Stripe Checkout session',
      detail: message.slice(0, 400),
    })
  }
}
