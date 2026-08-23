import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources — Tools for Your Rights',
  description:
    'Accessible guides, templates and practical tools from Voice of Disability to support disability rights, Universal Design and self-advocacy.',
};

const resources = [
  {
    category: 'Rights',
    title: 'Your rights in the workplace',
    description:
      'A plain-language guide to reasonable accommodation, workplace inclusion and the Employment Equity Act.',
    format: 'Guide',
    href: '/resources/workplace-rights',
    action: 'Read guide',
  },
  {
    category: 'Universal Design',
    title: 'The 7 Principles of Universal Design',
    description:
      'A practical introduction to the seven principles and how to apply them to environments, services and digital experiences.',
    format: 'Guide',
    href: '/resources/universal-design-principles',
    action: 'Read guide',
  },
  {
    category: 'Advocacy',
    title: 'Reasonable accommodation request template',
    description:
      'A plain-language template you can adapt when requesting reasonable accommodation from a workplace or institution.',
    format: 'Template',
    href: '/resources/reasonable-accommodation-request',
    action: 'Use template',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="resources-h">
        <div className="container">
          <p className="section-label" style={{color: 'rgba(255,255,255,0.7)'}}>Resource library</p>
          <h1 id="resources-h">Tools for your rights</h1>
          <p>
            Accessible guides, templates and practical tools to help disabled women navigate systems,
            claim their rights and make their voices heard.
          </p>
        </div>
      </section>

      <section style={{padding: '4rem 0', background: 'var(--white)'}} aria-labelledby="library-h">
        <div className="container">
          <Link href="/" className="back-link" style={{marginBottom: '2rem', display: 'inline-flex'}}>
            ← Back to homepage
          </Link>

          <h2 id="library-h" style={{marginBottom: '0.75rem'}}>Resource library</h2>
          <p style={{maxWidth: 760, marginBottom: '2rem'}}>
            All resources are designed to be usable with keyboard and assistive technology, written in
            plain language, and structured so they can be read online before downloading or copying.
          </p>

          <div className="resource-grid">
            {resources.map((resource) => (
              <article className="resource-card" key={resource.href}>
                <span className="tag">{resource.category}</span>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <p style={{fontSize: '0.88rem', color: 'var(--text-muted)'}}>
                  Format: {resource.format}
                </p>
                <Link href={resource.href}>{resource.action} →</Link>
              </article>
            ))}
          </div>

          <aside className="belief-block" style={{marginTop: '3rem'}} aria-labelledby="resource-note-h">
            <h2 id="resource-note-h" style={{fontSize: '1.4rem'}}>Need a resource in another format?</h2>
            <p>
              If a resource is not usable for you in its current format, contact Voice of Disability and
              tell us what would work better. We will aim to provide an accessible alternative where possible.
            </p>
            <Link href="/#contact" className="btn btn-primary" style={{display: 'inline-flex', marginTop: '0.5rem'}}>
              Contact us →
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
