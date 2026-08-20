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
      { error: 'Email service is not yet configured. Please email us directly at fadila@voiceofdisability.com.' },
      { status: 503 }
    );
  }
  const resend = new Resend(apiKey);

  try {
    const body = await request.json();
    const { name, email, subject, message } = body as Record<string, string>;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json(
        { error: 'Name, email address, and message are all required.' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      return Response.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const safeName    = escapeHtml(name.trim());
    const safeEmail   = escapeHtml(email.trim());
    const safeSubject = subject?.trim() ? escapeHtml(subject.trim()) : '';
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br>');

    await resend.emails.send({
      from: 'Voice of Disability <noreply@voiceofdisability.com>',
      to: 'fadila@voiceofdisability.com',
      replyTo: safeEmail,
      subject: safeSubject
        ? `Contact form: ${safeSubject}`
        : `Contact form message from ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #5B2A86;">New contact message — Voice of Disability</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          ${safeSubject ? `<p><strong>Subject:</strong> ${safeSubject}</p>` : ''}
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 4px solid #5B2A86; padding: 0.75rem 1rem; margin: 0; background: #f8f4ff; border-radius: 0 4px 4px 0;">
            ${safeMessage}
          </blockquote>
          <hr style="border: none; border-top: 1px solid #eee; margin: 1.5rem 0;">
          <p style="color: #666; font-size: 0.85rem;">Sent via the contact form on voiceofdisability.com</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('[contact route]', err);
    return Response.json(
      { error: 'Something went wrong. Please try again, or email us directly.' },
      { status: 500 }
    );
  }
}
