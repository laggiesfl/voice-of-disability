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
      <section aria-labelledby="not-ok-sitewide-title" style={{ background: '#17324D', color: '#FFFFFF', padding: '1.25rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem' }}>
          <a href="https://notokmovement.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit the NOT OK Movement website (opens in a new tab)" style={{ display: 'inline-block', borderRadius: '50%', outlineOffset: '5px' }}>
            <img src="/campaign/not-ok-protest.svg" width="104" height="104" alt="NOT OK with digital exclusion — campaign supporter badge" style={{ display: 'block', width: '104px', height: '104px' }} />
          </a>
          <div style={{ flex: '1 1 240px', maxWidth: '65ch' }}>
            <h2 id="not-ok-sitewide-title" style={{ margin: '0 0 0.35rem', color: '#FFFFFF', fontSize: 'clamp(1.15rem, 2vw, 1.45rem)' }}>Digital exclusion is NOT OK.</h2>
            <p style={{ margin: '0 0 .4rem', color: '#FFFFFF', lineHeight: 1.6 }}>Voice of Disability supports the NOT OK Movement. Disabled people must be able to access, use and shape digital spaces equally.</p>
            <a href="https://notokmovement.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Learn about the NOT OK Movement (opens in a new tab)</a>
          </div>
        </div>
      </section>


      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      {!isApp && <Footer />}
      {!isApp && <AccessibleChatbot />}
    </>
  );
}
