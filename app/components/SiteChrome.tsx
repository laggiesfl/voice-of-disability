'use client';

import { usePathname } from 'next/navigation';
import Nav from './Nav';
import Footer from './Footer';
import AccessibleChatbot from './AccessibleChatbot';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isApp = pathname === '/app-home' || pathname.startsWith('/app-home/');

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      {!isApp && <Nav />}
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      {!isApp && <Footer />}
      {!isApp && <AccessibleChatbot />}
    </>
  );
}
