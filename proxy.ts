import { verifyMemberAccessToken } from './app/lib/form-security';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The library index stays public so visitors can see what membership unlocks.
  // Individual resources require a signed, unexpired membership access cookie.
  if (pathname === '/resources') {
    return NextResponse.next();
  }

  const hasMemberAccess = verifyMemberAccessToken(request.cookies.get('vod_member_access')?.value ?? '');

  if (!hasMemberAccess) {
    const url = request.nextUrl.clone();
    url.pathname = '/resources';
    url.searchParams.set('members', 'required');
    url.hash = 'join-resources';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/resources/:path*'],
};
