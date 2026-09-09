import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AccessibleChatbot from './components/AccessibleChatbot';
import PwaRegister from './components/PwaRegister';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Voice of Disability | Nothing About Us Without Us',
    template: '%s | Voice of Disability',
  },
  description:
    'Voice of Disability is a movement of disabled women making their own voices heard. We remove the barriers that disable people — through advocacy, Universal Design, and knowing our rights.',
  metadataBase: new URL('https://www.voiceofdisability.com'),
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'Voice of Disability',
    statusBarStyle: 'default',
  },
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

export const viewport: Viewport = {
  themeColor: '#3D1A5B',
  colorScheme: 'light',
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
        <PwaRegister />
      </body>
    </html>
  );
}
