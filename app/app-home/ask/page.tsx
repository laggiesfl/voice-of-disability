import Link from 'next/link';
import styles from '../app-home.module.css';

const examples = [
  'I need reasonable accommodation at work.',
  'I think I have been discriminated against.',
  'My workplace or service is not accessible.',
  'What rights do I have when applying for a job?',
  'How do I make an accommodation request?',
];

export default function AskScreen() {
  return (
    <div className={styles.shell}>
      <Link href="/app-home" className={styles.back}>← Back to app home</Link>
      <section className={styles.hero} aria-labelledby="ask-title">
        <span className={styles.eyebrow}>Ask Voice of Disability</span>
        <h1 id="ask-title">Start with your question</h1>
        <p>The existing Voice of Disability Guide is available on this screen and can help direct you to relevant information.</p>
      </section>
      <section className={styles.section} aria-labelledby="examples-title">
        <h2 id="examples-title">You could ask about</h2>
        <ul className={styles.list}>
          {examples.map((text) => <li key={text} className={styles.item}>{text}</li>)}
        </ul>
      </section>
      <section className={styles.section} aria-labelledby="important-title">
        <h2 id="important-title">Important</h2>
        <div className={styles.status}>
          <p>Voice of Disability provides rights information, advocacy resources and navigation. Where specialist legal, medical or other professional help is required, the service should direct you to appropriate support rather than pretending to replace it.</p>
        </div>
        <div className={styles.actions}>
          <Link className={styles.buttonSecondary} href="/#contact">Contact Voice of Disability</Link>
          <Link className={styles.buttonSecondary} href="/app-home/rights">Browse rights topics</Link>
        </div>
      </section>
      <nav className={styles.bottomNav} aria-label="App navigation">
        <Link href="/app-home">Home</Link><Link href="/app-home/rights">My rights</Link><Link href="/app-home/resources">Resources</Link><Link href="/blog">Updates</Link><Link href="/#join">More</Link>
      </nav>
    </div>
  );
}
