import Link from 'next/link';
import styles from '../app-home.module.css';

const topics = [
  ['At work', 'Reasonable accommodation, discrimination, disclosure and accessible recruitment.'],
  ['Looking for work', 'Accessible hiring, applications, interviews and employment rights.'],
  ['Education and training', 'Access, support and inclusive learning environments.'],
  ['Healthcare', 'Equal access, communication and reasonable adjustments.'],
  ['Public services', 'Access to services, information and participation.'],
  ['Transport and physical access', 'Barriers in transport and the built environment.'],
  ['Digital accessibility', 'Accessible websites, apps, documents and digital services.'],
  ['Making a complaint', 'Understand possible next steps when your rights are not respected.'],
];

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
        <ul className={styles.list}>
          {topics.map(([title, text]) => (
            <li className={styles.item} key={title}>
              <strong>{title}</strong>
              <p>{text}</p>
            </li>
          ))}
        </ul>
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
