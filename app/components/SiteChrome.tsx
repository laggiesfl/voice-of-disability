'use client';

import { usePathname } from 'next/navigation';
import Nav from './Nav';
import Footer from './Footer';
import AccessibleChatbot from './AccessibleChatbot';

export default function SiteChrome() {
  const pathname = usePathname();
  const isApp = pathname === '/app-home' || pathname.startsWith('/app-home/');

  if (isApp) return null;

  return (
    <>
      <Nav />
      <Footer />
      <AccessibleChatbot />
    </>
  );
}
