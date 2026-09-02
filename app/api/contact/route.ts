import { Resend } from 'resend';
import type { NextRequest } from 'next/server';
import { guardPublicForm, validHumanName } from '../../lib/form-security';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return Response.json({ error: 'The contact form is temporarily unavailable. Please email fadila@voiceofdisability.com.' }, { status: 503 });

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim().toLowerCase();
    const subject = String(body.subject ?? '').trim();
    const message = String(body.message ?? '').trim();

    const guard = await guardPublicForm(request, 'contact', {
      website: String(body.website ?? ''),
      startedAt: Number(body.startedAt),
      turnstileToken: String(body.turnstileToken ?? ''),
    });
    if (!guard.ok) return Response.json({ error: guard.error }, { status: guard.status });

    if (!validHumanName(name)) {
      return Response.json({ error: 'Please enter your name using letters, spaces, hyphens or apostrophes.' }, { status: 400 });
    }
    if (!EMAIL_REGEX.test(email) || email.length > 254) {
      return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }
    if (!message || message.length > 5000 || subject.length > 140) {
      return Response.json({ error: 'Please check the subject and message length and try again.' }, { status: 400 });
    }

    const resend = new Resend(apiKey);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    const result = await resend.emails.send({
      from: 'Voice of Disability <hello@voiceofdisability.com>',
      to: 'fadila@voiceofdisability.com',
      replyTo: email,
      subject: safeSubject ? `Contact form: ${safeSubject}` : `Contact form message from ${safeName}`,
      html: `<!doctype html><html><body style="font-family:Arial,Helvetica,sans-serif;color:#222;line-height:1.6"><h1 style="font-size:24px;color:#5B2A86">New contact message</h1><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p>${safeSubject ? `<p><strong>Subject:</strong> ${safeSubject}</p>` : ''}<p><strong>Message:</strong></p><p>${safeMessage}</p></body></html>`,
    });
    if (result.error) {
      console.error('[contact/resend]', result.error);
      return Response.json({ error: 'We could not send your message right now. Please email fadila@voiceofdisability.com directly.' }, { status: 503 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('[contact]', error);
    return Response.json({ error: 'Something went wrong. Please try again later.' }, { status: 500 });
  }
}
