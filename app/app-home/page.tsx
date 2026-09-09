import Link from 'next/link';
import styles from './app-home.module.css';

const tasks = [
  { href: '/app-home/rights', title: 'Know my rights', text: 'Plain-language guidance on disability rights, access and reasonable accommodation.' },
  { href: '/#contact', title: 'Get help', text: 'Find the right Voice of Disability contact or support route.' },
  { href: '/app-home/ask', title: 'Ask Voice of Disability', text: 'Start with your question and get directed to relevant information.' },
  { href: '/app-home/resources', title: 'Find a resource', text: 'Guides, templates and rights resources in one place.' },
  { href: '/app-home/programmes', title: 'Join a programme', text: 'See rights clinics, Voices Circle, digital access training and advocacy activities.' },
  { href: '/app-home/accessibility', title: 'Accessibility settings', text: 'Choose display and interaction preferences for the app experience.' },
];

export default function AppHomePage() {
  return (
    <div className={styles.shell}>
      <section className={styles.hero} aria-labelledby="app-home-title">
        <span className={styles.eyebrow}>Voice of Disability app</span>
        <h1 id="app-home-title">What do you need today?</h1>
        <p>Your voice. Your rights. Your community.</p>
      </section>

      <section className={styles.section} aria-labelledby="quick-actions-title">
        <h2 id="quick-actions-title">Quick actions</h2>
        <p className={styles.lead}>Choose one task. You can always return here from the navigation at the bottom.</p>
        <div className={styles.grid}>
          {tasks.map((task, index) => (
            <Link key={task.href} href={task.href} className={`${styles.card} ${index === 0 ? styles.primary : ''}`}>
              <strong>{task.title}</strong>
              <span>{task.text}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="latest-title">
        <h2 id="latest-title">Latest from Voice of Disability</h2>
        <div className={styles.status}>
          <p><strong>Latest articles and programme notices will appear here from the shared Voice of Disability data source.</strong></p>
          <p className={styles.note}>This app dashboard is being connected to the same content used by the existing Vercel platform.</p>
          <div className={styles.actions}>
            <Link className={styles.buttonSecondary} href="/blog">Read latest articles</Link>
            <Link className={styles.buttonSecondary} href="/#programmes">View programmes</Link>
          </div>
        </div>
      </section>

      <nav className={styles.bottomNav} aria-label="App navigation">
        <Link href="/app-home" aria-current="page">Home</Link>
        <Link href="/app-home/rights">My rights</Link>
        <Link href="/app-home/resources">Resources</Link>
        <Link href="/blog">Updates</Link>
        <Link href="/#join">More</Link>
      </nav>
    </div>
  );
}
