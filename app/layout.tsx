import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AccessibleChatbot from './components/AccessibleChatbot';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Voice of Disability | Nothing About Us Without Us',
    template: '%s | Voice of Disability',
  },
  description:
    'Voice of Disability is a movement of disabled women making their own voices heard. We remove the barriers that disable people — through advocacy, Universal Design, and knowing our rights.',
  metadataBase: new URL('https://www.voiceofdisability.com'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo-mark.svg',
  },
  openGraph: {
    siteName: 'Voice of Disability',
    locale: 'en_ZA',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA">
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Nav />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <AccessibleChatbot />
      </body>
    </html>
  );
}
