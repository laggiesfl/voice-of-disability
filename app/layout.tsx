import './globals.css';
import './brand-overrides.css';
import SiteChrome from './components/SiteChrome';
import PwaRegister from './components/PwaRegister';
import type { Metadata, Viewport } from 'next';

const description =
  'Voice of Disability is a South African movement led by disabled women, advocating for equality, accessibility and meaningful participation through rights advocacy, education and Universal Design.';

export const metadata: Metadata = {
  title: {
    default: 'Voice of Disability | Nothing About Us Without Us',
    template: '%s | Voice of Disability',
  },
  description,
  metadataBase: new URL('https://www.voiceofdisability.com'),
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'Voice of Disability',
    statusBarStyle: 'default',
  },
  icons: {
    icon: '/brand/vod-concept-a-mark.svg',
    shortcut: '/brand/vod-concept-a-mark.svg',
    apple: '/brand/vod-concept-a-mark.svg',
  },
  openGraph: {
    title: 'Voice of Disability | Nothing About Us Without Us',
    description,
    url: 'https://www.voiceofdisability.com/',
    siteName: 'Voice of Disability',
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voice of Disability | Nothing About Us Without Us',
    description,
  },
};

export const viewport: Viewport = {
  themeColor: '#17324D',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA">
      <body>
        <SiteChrome>{children}</SiteChrome>
        <PwaRegister />
      </body>
    </html>
  );
}
