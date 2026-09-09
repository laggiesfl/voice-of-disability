import Link from 'next/link';
import styles from '../app-home.module.css';
import { getPublishedResources } from '../../lib/vod-public-data';

export default async function ResourcesScreen() {
  const resources = await getPublishedResources();

  return (
    <div className={styles.shell}>
      <Link href="/app-home" className={styles.back}>← Back to app home</Link>
      <section className={styles.hero} aria-labelledby="resources-title">
        <span className={styles.eyebrow}>Resources</span>
        <h1 id="resources-title">Guides, templates and practical tools</h1>
        <p>Resources published once by Voice of Disability appear here automatically.</p>
      </section>

      <section className={styles.section} aria-labelledby="resource-list-title">
        <h2 id="resource-list-title">Available resources</h2>
        {resources.length > 0 ? (
          <ul className={styles.list}>
            {resources.map((resource) => {
              const href = resource.file_url || resource.external_url;
              return (
                <li className={styles.item} key={resource.id}>
                  <strong>{resource.title}</strong>
                  {resource.category && <p className={styles.note}>{resource.category}</p>}
                  {resource.description && <p>{resource.description}</p>}
                  {href && (
                    <div className={styles.actions}>
                      <a className={styles.buttonSecondary} href={href} target="_blank" rel="noreferrer">
                        Open resource<span className={styles.srOnly}>: {resource.title}</span>
                      </a>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <div className={styles.status}>
            <p><strong>No public resources have been published in the shared library yet.</strong></p>
            <p>Use the protected member library now, or browse rights guidance while the public resource collection is being populated.</p>
            <div className={styles.actions}>
              <Link className={styles.button} href="/resources">Open member resource library</Link>
              <Link className={styles.buttonSecondary} href="/app-home/rights">Browse rights guidance</Link>
            </div>
          </div>
        )}
      </section>

      <section className={styles.section} aria-labelledby="resource-options-title">
        <h2 id="resource-options-title">More resource areas</h2>
        <div className={styles.grid}>
          <Link href="/resources" className={styles.card}><strong>Member resource library</strong><span>Open the protected Voice of Disability resources area.</span></Link>
          <Link href="/app-home/rights" className={styles.card}><strong>Rights guidance</strong><span>Browse rights topics by real-life situation.</span></Link>
          <Link href="/app-home/programmes" className={styles.card}><strong>Programme resources</strong><span>Connect resources to Rights Clinics, training and advocacy work.</span></Link>
          <Link href="/blog" className={styles.card}><strong>Voices &amp; Views</strong><span>Read current articles, commentary and lived-experience perspectives.</span></Link>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="offline-title">
        <h2 id="offline-title">Offline access</h2>
        <div className={styles.status}><p>The app can already open an offline fallback. Saving individual resources for offline use will be enabled as resources are added to the shared library.</p></div>
      </section>

      <nav className={styles.bottomNav} aria-label="App navigation">
        <Link href="/app-home">Home</Link><Link href="/app-home/rights">My rights</Link><Link href="/app-home/resources" aria-current="page">Resources</Link><Link href="/blog">Updates</Link><Link href="/#join">More</Link>
      </nav>
    </div>
  );
}
