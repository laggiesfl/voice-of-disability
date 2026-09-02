import { Resend } from 'resend';
import type { NextRequest } from 'next/server';
import { createConfirmationToken, guardPublicForm, validHumanName } from '../../lib/form-security';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: 'Email verification is temporarily unavailable. Please email fadila@voiceofdisability.com.' }, { status: 503 });
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim().toLowerCase();
    const phone = String(body.phone ?? '').trim();

    const guard = await guardPublicForm(request, 'membership', {
      website: String(body.website ?? ''),
      startedAt: Number(body.startedAt),
      turnstileToken: String(body.turnstileToken ?? ''),
    });
    if (!guard.ok) return Response.json({ error: guard.error }, { status: guard.status });

    if (!validHumanName(name)) {
      return Response.json({ error: 'Please enter your full name using letters, spaces, hyphens or apostrophes.' }, { status: 400 });
    }
    if (!EMAIL_REGEX.test(email) || email.length > 254) {
      return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }
    if (phone.length > 40) {
      return Response.json({ error: 'Please enter a shorter phone number.' }, { status: 400 });
    }

    const token = createConfirmationToken({ purpose: 'membership', email, name, phone });
    if (!token) return Response.json({ error: 'Membership verification is temporarily unavailable.' }, { status: 503 });

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.voiceofdisability.com';
    const confirmUrl = `${siteUrl}/api/membership/confirm?token=${encodeURIComponent(token)}`;
    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from: 'Voice of Disability <hello@voiceofdisability.com>',
      to: email,
      replyTo: 'hello@voiceofdisability.com',
      subject: 'Confirm your Voice of Disability membership',
      html: `<!doctype html><html><body style="font-family:Arial,Helvetica,sans-serif;color:#222;line-height:1.6"><h1 style="font-size:24px;color:#5B2A86">Confirm your membership</h1><p>Hello ${escapeHtml(name)},</p><p>Please confirm that you submitted this Voice of Disability membership application.</p><p><a href="${confirmUrl}" style="display:inline-block;padding:12px 18px;background:#5B2A86;color:#fff;text-decoration:none;border-radius:6px">Confirm membership</a></p><p>This link expires in 24 hours. If you did not request membership, you can ignore this email.</p><p>Voice of Disability NPC</p></body></html>`,
    });
    if (result.error) {
      console.error('[membership/resend]', result.error);
      return Response.json({ error: 'We could not send the confirmation email right now. Please try again later.' }, { status: 503 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('[membership]', error);
    return Response.json({ error: 'Something went wrong. Please try again later.' }, { status: 500 });
  }
}
