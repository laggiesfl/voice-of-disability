import Link from 'next/link';
import styles from '../app-home.module.css';
import { rightsGuides } from './guides';

export default function RightsPage() {
  return (
    <div className={styles.shell}>
      <Link href="/app-home" className={styles.back}>← Back to app home</Link>
      <section className={styles.hero} aria-labelledby="rights-title">
        <span className={styles.eyebrow}>Know my rights</span>
        <h1 id="rights-title">What situation do you need help with?</h1>
        <p>Start with your situation, not legal terminology.</p>
      </section>

      <section className={styles.section} aria-labelledby="topics-title">
        <h2 id="topics-title">Rights topics</h2>
        <div className={styles.grid}>
          {rightsGuides.map((guide) => (
            <Link key={guide.slug} href={`/app-home/rights/${guide.slug}`} className={styles.card}>
              <strong>{guide.title}</strong>
              <span>{guide.summary}</span>
            </Link>
          ))}
        </div>
        <div className={styles.status} style={{ marginTop: '18px' }}>
          <p><strong>General information, not individual legal advice.</strong></p>
          <p>If your situation involves a deadline, formal dispute, safety issue or serious harm, consider getting advice from an appropriate professional or rights body.</p>
        </div>
        <div className={styles.actions}>
          <Link className={styles.button} href="/app-home/ask">Ask Voice of Disability</Link>
          <Link className={styles.buttonSecondary} href="/resources">Open member resources</Link>
        </div>
      </section>

      <nav className={styles.bottomNav} aria-label="App navigation">
        <Link href="/app-home">Home</Link><Link href="/app-home/rights" aria-current="page">My rights</Link><Link href="/app-home/resources">Resources</Link><Link href="/blog">Updates</Link><Link href="/#join">More</Link>
      </nav>
    </div>
  );
}
