import { Resend } from 'resend';
import type { NextRequest } from 'next/server';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: 'Email service is not yet configured. Please try again later.' },
      { status: 503 }
    );
  }
  const resend = new Resend(apiKey);

  try {
    const body  = await request.json();
    const email = (body as Record<string, string>).email?.trim();

    if (!email) {
      return Response.json(
        { error: 'Email address is required.' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return Response.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Add to Resend Audience (optional — only if RESEND_AUDIENCE_ID is set)
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (audienceId) {
      try {
        await resend.contacts.create({ email, audienceId, unsubscribed: false });
      } catch (audienceErr) {
        // Don't block — log and continue
        console.error('[newsletter/audience]', audienceErr);
      }
    }

    // Notify Fadila
    await resend.emails.send({
      from: 'Voice of Disability <hello@voiceofdisability.com>',
      to: 'fadila@voiceofdisability.com',
      subject: `New newsletter subscriber: ${escapeHtml(email)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #5B2A86;">New newsletter subscriber</h2>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p style="color:#666; font-size:0.85rem;">
            Submitted ${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })} (SAST)
          </p>
        </div>
      `,
    });

    // Confirmation to subscriber
    await resend.emails.send({
      from: 'Fadila at Voice of Disability <hello@voiceofdisability.com>',
      to: email,
      replyTo: 'hello@voiceofdisability.com',
      subject: "You're subscribed to Voice of Disability",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #5B2A86;">You're subscribed!</h2>
          <p>
            Thank you for subscribing to Voice of Disability updates.
            We'll be in touch with news, events, and resources — and we promise, no spam.
          </p>
          <p style="margin-top: 2rem;">
            — Fadila Lagadien<br>
            <em>Founder, Voice of Disability NPC</em>
          </p>
          <hr style="border:none; border-top:1px solid #eee; margin: 1.5rem 0;">
          <p style="color:#666; font-size:0.85rem;">
            <a href="https://www.voiceofdisability.com">voiceofdisability.com</a> · Cape Town, South Africa
          </p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('[newsletter route]', err);
    return Response.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
