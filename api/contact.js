/**
 * POST /api/contact
 * Body: { name, email, message, newsletter?, company? } — `company` is honeypot; must be empty.
 *
 * --- Recommended: Google Sheets API (service account) ---
 * No Apps Script “Anyone” / Workspace issues. Vercel talks to Sheets as a robot account.
 *
 * 1. Google Cloud Console → project → APIs & Services → Enable “Google Sheets API”.
 * 2. IAM → Service Accounts → Create → Keys → Add JSON key. Download the JSON.
 * 3. Open your Sheet → Share → paste the JSON’s `client_email` (…@….iam.gserviceaccount.com) as Editor.
 * 4. Vercel env (Production):
 *    - GOOGLE_SERVICE_ACCOUNT_JSON = entire JSON as one line (or paste in Vercel multiline field)
 *    - GOOGLE_SHEET_ID = from the Sheet URL: …/d/SHEET_ID/edit
 *    - GOOGLE_SHEET_RANGE = optional, default Sheet1!A:E
 * 5. Redeploy. You can remove APPS_SCRIPT_WEBHOOK_URL once this works.
 *
 * --- Fallback: Apps Script Web App (APPS_SCRIPT_WEBHOOK_URL) ---
 * Often blocked by Workspace / HTML login responses; service account is more reliable.
 */

const MAX = { name: 500, email: 320, message: 10000 }

const GOOGLE_APPS_SCRIPT_ACCESS_ERROR =
  'Google blocked the Apps Script URL (common with school/work accounts). Prefer Google Sheets API: set GOOGLE_SERVICE_ACCOUNT_JSON + GOOGLE_SHEET_ID in Vercel (see api/contact.js header).'

function responseLooksLikeGoogleHtml(text) {
  if (!text || typeof text !== 'string') return false
  const t = text.slice(0, 8000)
  return (
    /<!DOCTYPE\s+html/i.test(t) ||
    /accounts\.google\.com/i.test(t) ||
    /\/signin/i.test(t) ||
    /Web word processing, presentations and spreadsheets/i.test(t) ||
    (/googleusercontent\.com/i.test(t) && /<html/i.test(t))
  )
}

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

function parseServiceAccount() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  if (!raw) return null
  try {
    const j = JSON.parse(raw)
    if (!j.client_email || !j.private_key) return null
    return {
      client_email: j.client_email,
      private_key: String(j.private_key).replace(/\\n/g, '\n'),
    }
  } catch {
    return null
  }
}

async function appendRowViaSheetsApi({ name, email, message, newsletter }) {
  const { google } = require('googleapis')
  const creds = parseServiceAccount()
  const spreadsheetId = process.env.GOOGLE_SHEET_ID
  if (!creds || !spreadsheetId) {
    throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_JSON or GOOGLE_SHEET_ID')
  }

  const auth = new google.auth.GoogleAuth({
    credentials: creds,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })
  const range = process.env.GOOGLE_SHEET_RANGE || 'Sheet1!A:E'

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [[new Date().toISOString(), name, email, message, newsletter ? 'yes' : 'no']],
    },
  })
}

module.exports = async function contactHandler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = await readJsonBody(req)

  const name = String(body.name ?? '').trim().slice(0, MAX.name)
  const email = String(body.email ?? '').trim().slice(0, MAX.email)
  const message = String(body.message ?? '').trim().slice(0, MAX.message)
  const newsletter = Boolean(body.newsletter)
  const honeypot = String(body.company ?? '').trim()

  if (honeypot) {
    return res.status(400).json({ error: 'Invalid submission' })
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email is required' })
  }

  const useSheetsApi = Boolean(process.env.GOOGLE_SHEET_ID && parseServiceAccount())

  if (useSheetsApi) {
    try {
      await appendRowViaSheetsApi({ name, email, message, newsletter })
      return res.status(200).json({ ok: true })
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      return res.status(502).json({
        error: 'Could not write to Google Sheet. Check sharing with the service account email and GOOGLE_SHEET_ID.',
        detail: msg.slice(0, 250),
      })
    }
  }

  const webhookUrl = process.env.APPS_SCRIPT_WEBHOOK_URL
  if (!webhookUrl) {
    return res.status(500).json({
      error:
        'Form backend not configured. Add GOOGLE_SERVICE_ACCOUNT_JSON + GOOGLE_SHEET_ID (recommended), or APPS_SCRIPT_WEBHOOK_URL.',
    })
  }

  const payload = JSON.stringify({ name, email, message, newsletter })

  let upstream
  try {
    upstream = await postToAppsScript(webhookUrl.trim(), payload)
  } catch {
    return res.status(502).json({ error: 'Could not reach form handler' })
  }

  const text = await upstream.text()
  const ct = upstream.headers.get('content-type') || ''

  if (responseLooksLikeGoogleHtml(text)) {
    return res.status(502).json({ error: GOOGLE_APPS_SCRIPT_ACCESS_ERROR })
  }

  if (!upstream.ok) {
    return res.status(502).json({
      error: 'Could not save via Apps Script. Prefer Google Sheets API (service account) in Vercel.',
      status: upstream.status,
    })
  }

  if (ct.includes('application/json')) {
    try {
      const j = JSON.parse(text)
      if (j && j.ok === false) {
        return res.status(502).json({
          error: 'Sheet script error',
          detail: String(j.error || 'unknown').slice(0, 400),
        })
      }
    } catch {
      /* fall through */
    }
  }

  if (text.includes('<!DOCTYPE') || text.includes('<html')) {
    return res.status(502).json({ error: GOOGLE_APPS_SCRIPT_ACCESS_ERROR })
  }

  return res.status(200).json({ ok: true })
}

async function postToAppsScript(webhookUrl, payload) {
  const headers = {
    'Content-Type': 'application/json',
    'User-Agent': 'LCAF-Contact/1.0',
  }

  let url = webhookUrl
  let res = await fetch(url, {
    method: 'POST',
    headers,
    body: payload,
    redirect: 'manual',
  })

  if ([301, 302, 303, 307, 308].includes(res.status)) {
    await res.text().catch(() => {})
    const loc = res.headers.get('location')
    if (loc) {
      url = new URL(loc, url).href
      res = await fetch(url, {
        method: 'POST',
        headers,
        body: payload,
        redirect: 'follow',
      })
    }
  }

  return res
}
