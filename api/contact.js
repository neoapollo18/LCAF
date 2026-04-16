/**
 * POST /api/contact
 * Body: { name, email, message, newsletter?, company? } — `company` is a honeypot; must be empty.
 *
 * Setup (Google Sheets):
 * 1. New Google Sheet. Row 1: Timestamp | Name | Email | Message | Newsletter
 * 2. Extensions → Apps Script → paste doPost from the comment block at the bottom → Deploy → Web app →
 *    Execute as: Me → Who has access: Anyone
 * 3. Copy Web app URL → Vercel env APPS_SCRIPT_WEBHOOK_URL → Redeploy
 */

const MAX = { name: 500, email: 320, message: 10000 }

/** Shown when Google serves a login/consent HTML page instead of running doPost (wrong Web app access). */
const GOOGLE_APPS_SCRIPT_ACCESS_ERROR =
  'Form backend is blocked by Google. In Apps Script: Deploy → Manage deployments → Edit (pencil) → set “Who has access” to Anyone (not “Anyone with a Google account”), save, then copy the new Web app URL into Vercel APPS_SCRIPT_WEBHOOK_URL and redeploy.'

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

module.exports = async function contactHandler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const webhookUrl = process.env.APPS_SCRIPT_WEBHOOK_URL
  if (!webhookUrl) {
    return res.status(500).json({ error: 'Form is not configured yet' })
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

  const payload = JSON.stringify({ name, email, message, newsletter })

  let upstream
  try {
    upstream = await postToAppsScript(webhookUrl.trim(), payload)
  } catch {
    return res.status(502).json({ error: 'Could not reach form handler' })
  }

  const text = await upstream.text()
  const ct = upstream.headers.get('content-type') || ''

  // Google often returns 403/401 + HTML login page, or 200 + HTML — never leak raw HTML to the UI
  if (responseLooksLikeGoogleHtml(text)) {
    return res.status(502).json({ error: GOOGLE_APPS_SCRIPT_ACCESS_ERROR })
  }

  if (!upstream.ok) {
    return res.status(502).json({
      error: 'Could not save to the sheet (Google returned an error). Check Apps Script deployment access.',
      status: upstream.status,
    })
  }

  // Apps Script returns 200 even for script errors in doPost catch — check JSON body
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

/**
 * Google often responds to /exec with 302. Fetch follows 302 with GET and drops the POST body.
 * We follow the Location manually and POST again.
 */
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

/*
--- Google Apps Script (bound to your Sheet) — paste in Apps Script editor ---

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.email || '',
      data.message || '',
      data.newsletter ? 'yes' : 'no'
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

*/
