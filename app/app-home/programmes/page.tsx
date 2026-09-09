import Link from 'next/link';
import styles from '../app-home.module.css';

const programmes = [
  ['Rights Clinics', 'Practical rights information and navigation support.'],
  ['Voices Circle', 'A member space for connection, discussion and participation.'],
  ['Digital Access Training', 'Build practical confidence around accessible digital participation.'],
  ['Advocacy Workshops', 'Develop knowledge and tools for disability-rights advocacy.'],
];

export default function ProgrammesScreen() {
  return (
    <div className={styles.shell}>
      <Link href="/app-home" className={styles.back}>← Back to app home</Link>
      <section className={styles.hero} aria-labelledby="programmes-title">
        <span className={styles.eyebrow}>Programmes</span>
        <h1 id="programmes-title">Take part in Voice of Disability</h1>
        <p>Programme information stays connected to the existing web platform.</p>
      </section>
      <section className={styles.section} aria-labelledby="programme-list-title">
        <h2 id="programme-list-title">Current programme areas</h2>
        <ul className={styles.list}>
          {programmes.map(([name, text]) => <li className={styles.item} key={name}><strong>{name}</strong><p>{text}</p></li>)}
        </ul>
        <div className={styles.actions}>
          <Link className={styles.button} href="/#programmes">View programme details</Link>
          <Link className={styles.buttonSecondary} href="/#join">Join Voice of Disability</Link>
        </div>
      </section>
      <nav className={styles.bottomNav} aria-label="App navigation">
        <Link href="/app-home">Home</Link><Link href="/app-home/rights">My rights</Link><Link href="/app-home/resources">Resources</Link><Link href="/blog">Updates</Link><Link href="/#join">More</Link>
      </nav>
    </div>
  );
}
