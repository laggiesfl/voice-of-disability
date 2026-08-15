const crypto = require('crypto');

/* Public account identifiers — safe to expose, these are not secrets.
   The passphrase (the actual secret) lives only in the PAYFAST_PASSPHRASE
   environment variable, set in the Vercel project settings, and is never
   sent to the browser. */
const PAYFAST_MERCHANT_ID = "36108925";
const PAYFAST_MERCHANT_KEY = "zgguzygqtmpjl";
const DEFAULT_ORIGIN = "https://www.voiceofdisability.com";

/* PayFast requires the exact URL-encoding behaviour of PHP's urlencode():
   upper-case hex escapes, spaces as "+", and a slightly larger set of
   characters escaped than JavaScript's encodeURIComponent leaves alone. */
function phpUrlEncode(str) {
  return encodeURIComponent(str)
    .replace(/[!'()*~]/g, c => '%' + c.charCodeAt(0).toString(16).toUpperCase())
    .replace(/%20/g, '+');
}

/* Implements PayFast's documented signature algorithm exactly:
   https://developers.payfast.co.za/docs#step_2_signature
   Fields must be concatenated in the order PayFast documents them (the
   order they're inserted into `data` below), not alphabetically. */
function generateSignature(data, passPhrase) {
  let pfOutput = '';
  for (const key of Object.keys(data)) {
    const val = data[key];
    if (val !== '' && val !== undefined && val !== null) {
      pfOutput += `${key}=${phpUrlEncode(String(val).trim())}&`;
    }
  }
  let getString = pfOutput.slice(0, -1);
  if (passPhrase) {
    getString += `&passphrase=${phpUrlEncode(String(passPhrase).trim())}`;
  }
  return crypto.createHash('md5').update(getString).digest('hex');
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const passPhrase = process.env.PAYFAST_PASSPHRASE;
  if (!passPhrase) {
    res.status(500).json({
      error: 'Payments are not fully set up yet. The site owner needs to add the PAYFAST_PASSPHRASE environment variable in Vercel.'
    });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  body = body || {};

  const amount = Number(body.amount);
  if (!amount || amount < 5) {
    res.status(400).json({ error: 'Invalid amount' });
    return;
  }

  const origin = (typeof body.origin === 'string' && body.origin.startsWith('http'))
    ? body.origin
    : (req.headers.origin || DEFAULT_ORIGIN);

  const fullName = String(body.full_name || '').trim();
  const nameParts = fullName.split(/\s+/).filter(Boolean);
  const nameFirst = nameParts[0] || '';
  const nameLast = nameParts.slice(1).join(' ');
  const email = String(body.email || '').trim();
  const frequencyLabel = body.frequency === 'monthly' ? 'Monthly donation' : 'Once-off donation';

  /* Build fields in the exact order PayFast's docs list them in — this
     order is what the signature is calculated from. */
  const data = {};
  data.merchant_id = PAYFAST_MERCHANT_ID;
  data.merchant_key = PAYFAST_MERCHANT_KEY;
  data.return_url = origin + '/?donation=success';
  data.cancel_url = origin + '/#donate';
  if (nameFirst) data.name_first = nameFirst;
  if (nameLast) data.name_last = nameLast;
  if (email) data.email_address = email;
  data.amount = amount.toFixed(2);
  data.item_name = 'Donation to Voice of Disability NPC';
  data.item_description = `${frequencyLabel} – Voice of Disability NPC`;
  data.email_confirmation = '1';
  if (email) data.confirmation_address = email;

  const signature = generateSignature(data, passPhrase);

  res.status(200).json({ fields: data, signature });
};
