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

async function saveToAirtable(
  name: string,
  email: string,
  phone: string
): Promise<void> {
  const apiKey   = process.env.AIRTABLE_API_KEY;
  const baseId   = process.env.AIRTABLE_BASE_ID;
  const table    = process.env.AIRTABLE_MEMBERS_TABLE ?? 'Members';

  if (!apiKey || !baseId) {
    // Airtable not yet configured — skip silently; Fadila is notified via email
    return;
  }

  const res = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Name:   name,
              Email:  email,
              Phone:  phone,
              Joined: new Date().toISOString().split('T')[0],
              Source: 'Website form',
            },
          },
        ],
      }),
    }
  );

  if (!res.ok) {
    // Log but don't throw — the membership email still goes out
    const body = await res.text();
    console.error('[membership/airtable]', res.status, body);
  }
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: 'Email service is not yet configured. Please email us at fadila@voiceofdisability.com to join.' },
      { status: 503 }
    );
  }
  const resend = new Resend(apiKey);

  try {
    const body = await request.json();
    const { name, email, phone } = body as Record<string, string>;

    if (!name?.trim() || !email?.trim()) {
      return Response.json(
        { error: 'Full name and email address are required.' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      return Response.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const safeName  = name.trim();
    const safeEmail = email.trim();
    const safePhone = phone?.trim() ?? '';

    // 1. Save to Airtable (best-effort, won't block email)
    await saveToAirtable(safeName, safeEmail, safePhone);

    // 2. Notify Fadila
    await resend.emails.send({
      from: 'Voice of Disability <noreply@voiceofdisability.com>',
      to: 'fadila@voiceofdisability.com',
      subject: `New member: ${escapeHtml(safeName)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #5B2A86;">New membership sign-up</h2>
          <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(safeEmail)}">${escapeHtml(safeEmail)}</a></p>
          ${safePhone ? `<p><strong>Phone:</strong> ${escapeHtml(safePhone)}</p>` : ''}
          <p style="color:#666; font-size:0.85rem;">
            Submitted ${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })} (SAST)
          </p>
        </div>
      `,
    });

    // 3. Welcome email to new member
    await resend.emails.send({
      from: 'Fadila at Voice of Disability <noreply@voiceofdisability.com>',
      to: safeEmail,
      subject: 'Welcome to Voice of Disability',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #5B2A86;">Welcome, ${escapeHtml(safeName)}!</h2>
          <p>Thank you for joining Voice of Disability. Your voice matters — and now it has a home.</p>
          <p>As a member you'll receive:</p>
          <ul>
            <li>Priority invitations to our programmes and the Voices Circle</li>
            <li>Members-only updates and resources</li>
            <li>The latest from our disability rights advocacy work</li>
          </ul>
          <p>
            If you have any questions, just reply to this email or write to us at
            <a href="mailto:fadila@voiceofdisability.com">fadila@voiceofdisability.com</a>.
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
    console.error('[membership route]', err);
    return Response.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
