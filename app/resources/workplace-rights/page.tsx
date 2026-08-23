import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Rights in the Workplace',
  description:
    'A plain-language Voice of Disability guide to reasonable accommodation and disability inclusion in South African workplaces.',
};

export default function WorkplaceRightsGuide() {
  return (
    <>
      <section className="page-hero" aria-labelledby="resource-h">
        <div className="container">
          <p className="byline">Resource · Rights · Guide</p>
          <h1 id="resource-h">Your rights in the workplace</h1>
          <p>A plain-language starting point for disabled employees and job applicants in South Africa.</p>
        </div>
      </section>

      <article className="prose" aria-label="Workplace rights guide">
        <Link href="/resources" className="back-link">← Back to Resources</Link>

        <p>
          Disabled people have the right to participate in work on an equal basis with others. In practice,
          this means employers should identify and remove unnecessary barriers and consider reasonable
          accommodation where a disability-related barrier affects recruitment, work or advancement.
        </p>

        <h2>What reasonable accommodation means</h2>
        <p>
          Reasonable accommodation is an adjustment that helps a disabled person participate equally without
          imposing an unjustifiable hardship on the organisation. The right solution depends on the person,
          the role and the barrier involved.
        </p>
        <p>Examples can include:</p>
        <ul>
          <li>changes to working hours or break arrangements;</li>
          <li>accessible software, documents or communication formats;</li>
          <li>changes to a workstation, route or physical environment;</li>
          <li>assistive technology or alternative ways to complete a task;</li>
          <li>remote or hybrid work where this is appropriate to the role;</li>
          <li>changes to recruitment, assessment or interview processes.</li>
        </ul>

        <h2>What to do when you encounter a barrier</h2>
        <ol>
          <li>Describe the barrier clearly and explain how it affects your ability to participate.</li>
          <li>Explain the adjustment that would help, if you already know what works for you.</li>
          <li>Keep a written record of the request and any response.</li>
          <li>Ask for a discussion if more than one possible adjustment could work.</li>
          <li>Escalate through the organisation’s HR, disability inclusion or grievance process if the barrier is not addressed.</li>
        </ol>

        <h2>Your privacy matters</h2>
        <p>
          Share only the information that is reasonably necessary to explain the barrier and accommodation need.
          A request for accommodation should not become an invitation for unnecessary disclosure about your
          private medical history.
        </p>

        <h2>If an accommodation request is refused</h2>
        <p>
          Ask for the reason in writing and whether alternative accommodations were considered. If you believe
          you have experienced unfair discrimination, you may need independent advice about the appropriate
          internal or legal process for your situation.
        </p>

        <aside className="belief-block" aria-labelledby="legal-note-h">
          <h2 id="legal-note-h" style={{fontSize: '1.25rem'}}>Important</h2>
          <p>
            This resource is general information, not legal advice. South African employment law and regulatory
            requirements can change. For a legal dispute or deadline, obtain advice from an appropriate legal,
            labour or disability-rights professional.
          </p>
        </aside>

        <p>
          <Link href="/resources/reasonable-accommodation-request" className="btn btn-primary" style={{display: 'inline-flex'}}>
            Use the accommodation request template →
          </Link>
        </p>
      </article>
    </>
  );
}
