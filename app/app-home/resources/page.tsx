import Link from 'next/link';
import styles from '../app-home.module.css';

export default function ResourcesScreen() {
  return (
    <div className={styles.shell}>
      <Link href="/app-home" className={styles.back}>← Back to app home</Link>
      <section className={styles.hero} aria-labelledby="resources-title">
        <span className={styles.eyebrow}>Resources</span>
        <h1 id="resources-title">Guides, templates and practical tools</h1>
        <p>Use the existing Voice of Disability resource library without maintaining a second content system.</p>
      </section>
      <section className={styles.section} aria-labelledby="resource-options-title">
        <h2 id="resource-options-title">Resource areas</h2>
        <div className={styles.grid}>
          <Link href="/resources" className={styles.card}><strong>Member resource library</strong><span>Open the current protected Voice of Disability resources area.</span></Link>
          <Link href="/app-home/rights" className={styles.card}><strong>Rights guidance</strong><span>Browse rights topics by real-life situation.</span></Link>
          <Link href="/#programmes" className={styles.card}><strong>Programme resources</strong><span>Connect resources to Rights Clinics, training and advocacy work.</span></Link>
          <Link href="/blog" className={styles.card}><strong>Voices &amp; Views</strong><span>Read current articles, commentary and lived-experience perspectives.</span></Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="offline-title">
        <h2 id="offline-title">Offline access</h2>
        <div className={styles.status}><p>Selected resources can be made available offline in the next app phase. The PWA foundation already includes an offline fallback.</p></div>
      </section>
      <nav className={styles.bottomNav} aria-label="App navigation">
        <Link href="/app-home">Home</Link><Link href="/app-home/rights">My rights</Link><Link href="/app-home/resources" aria-current="page">Resources</Link><Link href="/blog">Updates</Link><Link href="/#join">More</Link>
      </nav>
    </div>
  );
}
