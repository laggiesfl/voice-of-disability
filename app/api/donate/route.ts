/**
 * PayFast payment initiation.
 *
 * Required environment variables:
 *   PAYFAST_MERCHANT_ID   — your PayFast merchant ID
 *   PAYFAST_MERCHANT_KEY  — your PayFast merchant key
 *   PAYFAST_PASSPHRASE    — your PayFast passphrase (if set in account)
 *   NEXT_PUBLIC_SITE_URL  — e.g. https://www.voiceofdisability.com
 *
 * PayFast signature reference:
 *   https://developers.payfast.co.za/docs#signing-requests
 */

import { createHash } from 'crypto';
import type { NextRequest } from 'next/server';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildSignature(
  params: Record<string, string>,
  passphrase?: string
): string {
  // Build query string from all params (already ordered)
  const parts = Object.entries(params)
    .filter(([, v]) => v !== '')
    .map(([k, v]) => `${k}=${encodeURIComponent(v.trim()).replace(/%20/g, '+')}`)
    .join('&');

  const strToHash = passphrase
    ? `${parts}&passphrase=${encodeURIComponent(passphrase.trim()).replace(/%20/g, '+')}`
    : parts;

  return createHash('md5').update(strToHash).digest('hex');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, name, email } = body as Record<string, string>;

    const merchantId  = process.env.PAYFAST_MERCHANT_ID;
    const merchantKey = process.env.PAYFAST_MERCHANT_KEY;
    const passphrase  = process.env.PAYFAST_PASSPHRASE;
    const siteUrl     = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.voiceofdisability.com';

    if (!merchantId || !merchantKey) {
      return Response.json(
        { error: 'Online payment is not yet configured. Please contact us directly at fadila@voiceofdisability.com to discuss your donation.' },
        { status: 503 }
      );
    }

    // Validate amount
    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum < 5) {
      return Response.json(
        { error: 'Please enter an amount of at least R5.' },
        { status: 400 }
      );
    }

    // Validate email if provided
    if (email && !EMAIL_REGEX.test(email.trim())) {
      return Response.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // PayFast requires name_first; split the full name on first space
    const nameParts  = (name?.trim() ?? '').split(/\s+/);
    const nameFirst  = nameParts[0] ?? '';
    const nameLast   = nameParts.slice(1).join(' ') ?? '';

    // Build params in the order PayFast expects them (order matters for signature)
    const params: Record<string, string> = {
      merchant_id:   merchantId,
      merchant_key:  merchantKey,
      return_url:    `${siteUrl}/#donate`,
      cancel_url:    `${siteUrl}/#donate`,
      notify_url:    `${siteUrl}/api/payfast-notify`,
      name_first:    nameFirst,
      name_last:     nameLast,
      email_address: email?.trim() ?? '',
      amount:        amountNum.toFixed(2),
      item_name:     'Donation to Voice of Disability NPC',
      item_description: 'Supporting disability rights advocacy and programmes for disabled women in South Africa',
    };

    // Remove empty values (PayFast signature must exclude them)
    for (const key of Object.keys(params)) {
      if (params[key] === '') delete params[key];
    }

    const signature = buildSignature(params, passphrase);
    const fields    = { ...params, signature };

    return Response.json({
      payFastUrl: 'https://www.payfast.co.za/eng/process',
      fields,
    });
  } catch (err) {
    console.error('[donate route]', err);
    return Response.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
