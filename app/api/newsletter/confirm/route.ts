import { Resend } from 'resend';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { verifyConfirmationToken } from '../../../lib/form-security';

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token') ?? '';
  const data = verifyConfirmationToken(token);
  if (!data || data.purpose !== 'newsletter') {
    return new NextResponse('This newsletter confirmation link is invalid or has expired.', { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) {
    return new NextResponse('Newsletter subscriptions are temporarily unavailable. Please email fadila@voiceofdisability.com.', { status: 503 });
  }

  try {
    const resend = new Resend(apiKey);
    try {
      await resend.contacts.create({ email: data.email, audienceId, unsubscribed: false });
    } catch (error) {
      console.error('[newsletter/confirm/contact]', error);
    }
    return NextResponse.redirect(new URL('/?newsletter=confirmed#newsletter', request.url));
  } catch (error) {
    console.error('[newsletter/confirm]', error);
    return new NextResponse('We could not confirm your subscription right now. Please try again later.', { status: 503 });
  }
}
