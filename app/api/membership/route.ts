import { Resend } from 'resend';
import { NextResponse } from 'next/server';
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
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const table = process.env.AIRTABLE_MEMBERS_TABLE ?? 'Members';

  if (!apiKey || !baseId) return;

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
              'Member Name': name,
              Email: email,
              Phone: phone,
              Joined: new Date().toISOString().split('T')[0],
              Source: 'Website form',
            },
          },
        ],
      }),
    }
  );

  if (!res.ok) {
    const body = await res.text();
    console.error('[membership/airtable]', res.status, body);
  }
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Email service is not yet configured. Please email us at hello@voiceofdisability.com to join.' },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const body = await request.json();
    const { name, email, phone } = body as Record<string, string>;

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: 'Full name and email address are required.' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const safeName = name.trim();
    const safeEmail = email.trim();
    const safePhone = phone?.trim() ?? '';

    await saveToAirtable(safeName, safeEmail, safePhone);

    await resend.emails.send({
      from: 'Voice of Disability <hello@voiceofdisability.com>',
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

    await resend.emails.send({
      from: 'Fadila at Voice of Disability <hello@voiceofdisability.com>',
      to: safeEmail,
      replyTo: 'hello@voiceofdisability.com',
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
            You can now access the member resource library at
            <a href="https://www.voiceofdisability.com/resources">voiceofdisability.com/resources</a>.
          </p>
          <p>
            If you have any questions, just reply to this email or write to us at
            <a href="mailto:hello@voiceofdisability.com">hello@voiceofdisability.com</a>.
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

    const response = NextResponse.json({ success: true, memberAccess: true });
    response.cookies.set({
      name: 'vod_member_access',
      value: '1',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 180,
    });

    return response;
  } catch (err) {
    console.error('[membership route]', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
