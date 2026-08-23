import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The library index stays public so visitors can see what membership unlocks.
  // Individual resources require a successful membership sign-up on this browser.
  if (pathname === '/resources') {
    return NextResponse.next();
  }

  const hasMemberAccess = request.cookies.get('vod_member_access')?.value === '1';

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
