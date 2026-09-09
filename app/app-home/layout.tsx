import Link from 'next/link';
import styles from './app-home.module.css';

export default function AppHomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.appCanvas}>
      <header className={styles.appHeader}>
        <div className={styles.appHeaderInner}>
          <Link href="/app-home" className={styles.appBrand} aria-label="Voice of Disability app home">
            <img src="/logo-mark.svg" alt="" width="42" height="42" aria-hidden="true" />
            <span>
              <strong>Voice of Disability</strong>
              <small>Accessible app</small>
            </span>
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
