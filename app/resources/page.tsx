import Link from 'next/link';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import MembershipForm from '../components/MembershipForm';

export const metadata: Metadata = {
  title: 'Resources — Tools for Your Rights',
  description:
    'Preview member-only guides, AI tools, templates and practical resources from Voice of Disability supporting disability rights, Universal Design and self-advocacy.',
};

const resources = [
  {
    category: 'AI assistant',
    title: 'Disability Equity Guide',
    description:
      'An interactive GPT that helps you explore disability equity, inclusion, access and rights-based practice through a practical conversational guide.',
    format: 'GPT',
    href: '/resources/disability-equity-guide',
    action: 'Open AI guide',
  },
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

export default async function ResourcesPage() {
  const cookieStore = await cookies();
  const hasMemberAccess = cookieStore.get('vod_member_access')?.value === '1';

  return (
    <>
      <section className="page-hero" aria-labelledby="resources-h">
        <div className="container">
          <p className="section-label" style={{color: 'rgba(255,255,255,0.7)'}}>Member resource library</p>
          <h1 id="resources-h">Tools for your rights</h1>
          <p>
            Accessible guides, AI tools, templates and practical resources for Voice of Disability members.
            Membership is free.
          </p>
        </div>
      </section>

      <section style={{padding: '4rem 0', background: 'var(--white)'}} aria-labelledby="library-h">
        <div className="container">
          <Link href="/" className="back-link" style={{marginBottom: '2rem', display: 'inline-flex'}}>
            ← Back to homepage
          </Link>

          <h2 id="library-h" style={{marginBottom: '0.75rem'}}>Resource library</h2>
          <p style={{maxWidth: 760, marginBottom: '1rem'}}>
            You can preview what is available below. The full resources are available only to
            Voice of Disability members.
          </p>

          {hasMemberAccess ? (
            <div
              role="status"
              style={{
                maxWidth: 760,
                padding: '1rem 1.25rem',
                marginBottom: '2rem',
                border: '2px solid var(--purple-deep)',
                borderRadius: '10px',
                background: 'var(--light-purple)',
              }}
            >
              <strong>Member access is active.</strong> You can open all resources below.
            </div>
          ) : (
            <div
              role="note"
              style={{
                maxWidth: 760,
                padding: '1rem 1.25rem',
                marginBottom: '2rem',
                border: '2px solid var(--gold)',
                borderRadius: '10px',
                background: '#fffaf0',
              }}
            >
              <strong>Members only.</strong> Join Voice of Disability for free to open these resources.
            </div>
          )}

          <div className="resource-grid">
            {resources.map((resource) => (
              <article className="resource-card" key={resource.href}>
                <span className="tag">{resource.category}</span>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <p style={{fontSize: '0.88rem', color: 'var(--text-muted)'}}>
                  Format: {resource.format} · {hasMemberAccess ? 'Member access active' : 'Members only'}
                </p>
                <Link href={resource.href}>
                  {hasMemberAccess ? resource.action : 'Join to access'} →
                </Link>
              </article>
            ))}
          </div>

          {!hasMemberAccess && (
            <section
              id="join-resources"
              aria-labelledby="join-resources-h"
              style={{
                marginTop: '3rem',
                padding: '2rem',
                borderRadius: '12px',
                background: 'var(--light-purple)',
              }}
            >
              <div style={{maxWidth: 680}}>
                <p className="section-label">Free membership</p>
                <h2 id="join-resources-h">Join to unlock the resource library</h2>
                <p>
                  Complete the membership form once. After successful sign-up, this browser will receive
                  member access and you can open all current and future member resources.
                </p>
                <div className="membership-form-wrap" style={{marginTop: '1.5rem'}}>
                  <MembershipForm
                    successHref="/resources"
                    successLabel="Open the member resource library"
                  />
                </div>
              </div>
            </section>
          )}

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
