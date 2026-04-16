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
    upstream = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
    })
  } catch {
    return res.status(502).json({ error: 'Could not reach form handler' })
  }

  const text = await upstream.text()
  if (!upstream.ok) {
    return res.status(502).json({ error: 'Sheet handler failed', detail: text.slice(0, 200) })
  }

  return res.status(200).json({ ok: true })
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
