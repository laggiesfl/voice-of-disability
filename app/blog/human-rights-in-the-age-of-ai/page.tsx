import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Human Rights in the Age of AI: Nothing About Us Without Us',
  description: 'Voice of Disability NPC calls for accessible standards development, disability rights and meaningful representation in South African AI governance.',
};

export default function HumanRightsInTheAgeOfAi() {
  return (
    <>
      <section className="page-hero" aria-labelledby="article-h">
        <div className="container">
          <p className="byline">Voices &amp; Views · Disability Rights</p>
          <h1 id="article-h">Human Rights in the Age of AI: Nothing About Us Without Us</h1>
          <p>Voice of Disability NPC · <time dateTime="2026-11-26">26 November 2026</time></p>
        </div>
      </section>
      <article className="prose" aria-labelledby="article-h">
        <Link href="/blog" className="back-link">Back to Voices &amp; Views</Link>
        <p>Who decides whether an artificial intelligence system is fair? Who determines whether it is accessible? And who is accountable when it excludes disabled people?</p>
        <p>These are not simply technology questions. They are disability rights questions.</p>
        <p>Voice of Disability NPC, working alongside BeAccessible, has submitted comments on eight proposed South African AI standards as part of the South African Bureau of Standards public enquiry process.</p>
        <p>We believe that disabled people must have a meaningful voice in shaping the standards that will increasingly influence our lives.</p>
        <h2>The risk of automated exclusion</h2>
        <p>For decades, disabled people have challenged barriers in employment, education, healthcare, transport and public services.</p>
        <p>Artificial intelligence presents an opportunity to remove many of these barriers. But without appropriate safeguards, it can also automate them.</p>
        <p>When a disabled person is unfairly rejected by an automated recruitment system, cannot complete a digital identity verification process or cannot access an AI-enabled public service, the consequences are experienced in real lives.</p>
        <p>Discrimination does not become acceptable simply because a machine makes the decision.</p>
        <h2>Disabled women must not be overlooked</h2>
        <p>Disabled women can experience overlapping discrimination based on disability, gender, race and socioeconomic circumstances. AI systems that fail to account for these intersecting experiences risk reinforcing existing inequalities.</p>
        <p>Meaningful representation must therefore include disabled women as contributors, researchers, testers, advocates and decision-makers.</p>
        <h2>The right to participate in developing standards</h2>
        <p>When requesting the eight draft AI standards from SABS, we specifically asked whether the documents could be provided in accessible digital formats, such as tagged PDFs or Word documents.</p>
        <p>This raises a fundamental question. How can disabled people contribute meaningfully to the development of national standards if the consultation materials themselves are inaccessible?</p>
        <p>Accessibility must begin before an AI system is designed, developed or deployed. It must begin in the processes through which its governing standards are established.</p>
        <p>Meaningful consultation requires accessible documentation, accessible meetings, reasonable accommodations and genuine opportunities to influence decisions.</p>
        <h2>Consultation must lead to influence</h2>
        <p>The United Nations Convention on the Rights of Persons with Disabilities provides an important foundation for meaningful consultation and participation by disabled people in decisions affecting their lives.</p>
        <p>This principle must extend to artificial intelligence. As Human Rights Day on 10 December approaches, we call for disabled people and their representative organisations to participate in the development, testing, implementation and oversight of AI standards.</p>
        <p>We are not asking for special treatment. We are demanding that equality, accessibility, dignity and accountability remain central as South Africa develops its AI future.</p>
        <p>The public enquiry is a step in this process. Our recommendations remain advocacy positions; the outcome of the consultation is not yet known.</p>
        <p><strong>Nothing About Us Without Us — including the algorithms that shape our lives.</strong></p>
      </article>
    </>
  );
}
