import Link from 'next/link';
import styles from './app-home.module.css';

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
