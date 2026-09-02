import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyConfirmationToken } from '../../../lib/form-security';

async function saveVerifiedMember(name: string, email: string, phone: string) {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const table = process.env.AIRTABLE_MEMBERS_TABLE ?? 'Members';
  if (!apiKey || !baseId) throw new Error('Airtable is not configured');

  const baseUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`;
  const formula = encodeURIComponent(`LOWER({Email})='${email.toLowerCase().replace(/'/g, "\\'")}'`);
  const existing = await fetch(`${baseUrl}?maxRecords=1&filterByFormula=${formula}`, {
    headers: { Authorization: `Bearer ${apiKey}` },
    cache: 'no-store',
  });
  if (!existing.ok) throw new Error('Could not check existing member');
  const existingJson = (await existing.json()) as { records?: unknown[] };

  if (!existingJson.records?.length) {
    const created = await fetch(baseUrl, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        records: [{ fields: {
          'Member Name': name,
          Email: email,
          Phone: phone,
          Joined: new Date().toISOString().split('T')[0],
          Source: 'Website — email verified',
        } }],
      }),
    });
    if (!created.ok) throw new Error('Could not save verified member');
  }
}

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token') ?? '';
  const data = verifyConfirmationToken(token);
  if (!data || data.purpose !== 'membership' || !data.name) {
    return new NextResponse('This membership confirmation link is invalid or has expired.', { status: 400 });
  }

  try {
    await saveVerifiedMember(data.name, data.email, data.phone ?? '');
    const response = NextResponse.redirect(new URL('/resources?membership=confirmed', request.url));
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
  } catch (error) {
    console.error('[membership/confirm]', error);
    return new NextResponse('We could not activate membership right now. Please email fadila@voiceofdisability.com for assistance.', { status: 503 });
  }
}
