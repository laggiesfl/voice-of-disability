import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from '../../app-home.module.css';
import { getRightsGuide, rightsGuides } from '../guides';

export function generateStaticParams() {
  return rightsGuides.map((guide) => ({ slug: guide.slug }));
}

export default async function RightsGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getRightsGuide(slug);
  if (!guide) notFound();

  return (
    <div className={styles.shell}>
      <Link href="/app-home/rights" className={styles.back}>← Back to rights topics</Link>
      <section className={styles.hero} aria-labelledby="guide-title">
        <span className={styles.eyebrow}>Know my rights</span>
        <h1 id="guide-title">{guide.title}</h1>
        <p>{guide.summary}</p>
      </section>

      <section className={styles.section} aria-labelledby="simple-title">
        <h2 id="simple-title">In simple terms</h2>
        <div className={styles.panel}><p>{guide.inSimpleTerms}</p></div>
      </section>

      <section className={styles.section} aria-labelledby="questions-title">
        <h2 id="questions-title">Questions to help you understand the barrier</h2>
        <ul className={styles.list}>
          {guide.questions.map((question) => <li className={styles.item} key={question}>{question}</li>)}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="steps-title">
        <h2 id="steps-title">Possible next steps</h2>
        <ol className={styles.list}>
          {guide.nextSteps.map((step) => <li className={styles.item} key={step}>{step}</li>)}
        </ol>
      </section>

      <section className={styles.section} aria-labelledby="important-title">
        <h2 id="important-title">Important</h2>
        <div className={styles.status}>
          <p>This is general rights-navigation information, not individual legal advice. The right route depends on the facts, the organisation involved and any applicable deadlines.</p>
        </div>
        <div className={styles.actions}>
          <Link className={styles.button} href="/app-home/ask">Ask Voice of Disability</Link>
          <Link className={styles.buttonSecondary} href="/#contact">Contact Voice of Disability</Link>
        </div>
      </section>

      <nav className={styles.bottomNav} aria-label="App navigation">
        <Link href="/app-home">Home</Link><Link href="/app-home/rights" aria-current="page">My rights</Link><Link href="/app-home/resources">Resources</Link><Link href="/blog">Updates</Link><Link href="/#join">More</Link>
      </nav>
    </div>
  );
}
