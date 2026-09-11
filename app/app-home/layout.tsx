import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './app-home.module.css';

const shareTitle = 'Voice of Disability App';
const shareDescription = 'Know your rights, find accessible resources, join programmes and ask Voice of Disability — in one accessible app.';
const shareUrl = 'https://www.voiceofdisability.com/app-home';

export const metadata: Metadata = {
  title: shareTitle,
  description: shareDescription,
  alternates: {
    canonical: shareUrl,
  },
  openGraph: {
    title: shareTitle,
    description: shareDescription,
    url: shareUrl,
    siteName: 'Voice of Disability',
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: shareTitle,
    description: shareDescription,
  },
};

export default function AppHomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.appCanvas}>
      <header className={styles.appHeader}>
        <div className={styles.appHeaderInner}>
          <Link href="/app-home" className={styles.appBrand} aria-label="Voice of Disability app home">
            <img
              src="/brand/vod-concept-a-logo-horizontal.svg"
              alt=""
              width="300"
              height="67"
              aria-hidden="true"
            />
          </Link>
          <div className={styles.appHeaderActions}>
            <Link href="/app-home/ask" className={styles.askLink}>Ask VOD</Link>
            <Link href="/" className={styles.websiteLink}>Back to website</Link>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
