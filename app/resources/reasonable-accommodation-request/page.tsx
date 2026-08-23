import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reasonable Accommodation Request Template',
  description:
    'A plain-language Voice of Disability template for requesting reasonable accommodation from a workplace or institution.',
};

export default function AccommodationRequestTemplate() {
  return (
    <>
      <section className="page-hero" aria-labelledby="resource-h">
        <div className="container">
          <p className="byline">Resource · Advocacy · Template</p>
          <h1 id="resource-h">Reasonable accommodation request template</h1>
          <p>A practical starting point you can copy, edit and adapt to your own situation.</p>
        </div>
      </section>

      <article className="prose" aria-label="Reasonable accommodation request template">
        <Link href="/resources" className="back-link">← Back to Resources</Link>

        <p>
          Use only the details that are relevant to your request. You do not need to include unnecessary
          medical information. Focus on the barrier, the adjustment you need and how it will support equal participation.
        </p>

        <h2>Template</h2>

        <div className="belief-block" aria-label="Copyable accommodation request template">
          <p><strong>Subject: Request for reasonable accommodation</strong></p>
          <p>Dear [name / HR / manager],</p>
          <p>
            I am requesting a reasonable accommodation because I am experiencing a disability-related barrier
            that affects my ability to [describe the relevant task, process or part of participation].
          </p>
          <p>
            The barrier I am experiencing is: [briefly describe the barrier in practical terms].
          </p>
          <p>
            The adjustment that would help me participate on an equal basis is: [describe the accommodation you are requesting].
          </p>
          <p>
            This adjustment would assist by: [briefly explain how it removes or reduces the barrier].
          </p>
          <p>
            I am available to discuss this request and, if necessary, other accommodation options that would
            achieve the same result. Please confirm receipt of this request and let me know the next step in the process.
          </p>
          <p>Kind regards,</p>
          <p>[Your name]</p>
        </div>

        <h2>Before you send it</h2>
        <ul>
          <li>Keep the request focused on the barrier and the solution.</li>
          <li>Save a copy of what you send and any response.</li>
          <li>If the organisation has a formal accommodation process, follow it where practical.</li>
          <li>If your preferred adjustment is not possible, ask what alternative options were considered.</li>
        </ul>

        <aside className="belief-block" aria-labelledby="template-note-h">
          <h2 id="template-note-h" style={{fontSize: '1.25rem'}}>Important</h2>
          <p>
            This is a general template, not legal advice. Adapt it to your circumstances. If your request is
            connected to a dispute, disciplinary process, dismissal, discrimination complaint or legal deadline,
            seek appropriate professional advice.
          </p>
        </aside>
      </article>
    </>
  );
}
