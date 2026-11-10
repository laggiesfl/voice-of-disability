import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'From Awareness to Action',
  description: 'The MBA research foundations of Voice of Disability’s approach to knowledge, commitment and accountability.',
};

export default function ResearchFoundationsPage() {
  return (
    <article className="container" style={{maxWidth: 980, paddingBlock:'3rem'}}>
      <p className="section-label">Our research foundations</p>
      <h1>From awareness to action</h1>
      <p className="hero-desc">Why the availability of disability-related information does not guarantee inclusion.</p>
      <section aria-labelledby="research-h" style={{paddingBlock:'1.5rem'}}>
        <h2 id="research-h">The research behind our approach</h2>
        <p>In her 2004 University of Liverpool MBA dissertation, <em>Barriers to Gainful Employment for Disabled People in South Africa</em>, Voice of Disability founder Fadila Lagadien examined employment barriers despite employment equity legislation.</p>
        <p>Her qualitative study used semi-structured interviews with 20 participants and documentary analysis. She initially expected reasonable accommodation to be the main barrier. Instead, <strong>ignorance</strong> emerged as the central analytical category, with <strong>perception of disability</strong> and <strong>commitment to change</strong> as subcategories.</p>
        <p>Reasonable accommodation remained central to equal opportunity. Inadequate understanding and commitment helped explain why it was poorly implemented.</p>
      </section>
      <section aria-labelledby="mother-h" style={{paddingBlock:'1.5rem'}}>
        <h2 id="mother-h">A lesson from her mother</h2>
        <p>In the dissertation, Fadila recalled a saying her mother used when someone claimed not to know something they could have learned. Her mother used historical metaphors about refusing to hear or see what is available.</p>
        <p>Those expressions involved blindness and deafness. We describe them in their family and historical context as a comment on <strong>wilful disregard for knowledge</strong>, rather than using disability as a metaphor for unwillingness.</p>
        <p><strong>The distinction:</strong> Information may be available, but inclusion depends on whether decision-makers are willing to use it and change their systems and practices.</p>
      </section>
      <section aria-labelledby="observations-h" style={{paddingBlock:'1.5rem'}}>
        <h2 id="observations-h">Later professional observations</h2>
        <p>Fadila has described encountering similar patterns in subsequent work at the SABC and on national structures and public- and private-sector boards. These are later professional observations, <strong>not additional findings from the 2004 research sample</strong>.</p>
      </section>
      <section aria-labelledby="learning-h" style={{paddingBlock:'1.5rem'}}>
        <h2 id="learning-h">A proposed framework for learning and change</h2>
        <h3>1. Knowledge</h3>
        <p>Do decision-makers understand barriers, rights and reasonable accommodation? Can they identify inaccessible practices?</p>
        <h3>2. Commitment</h3>
        <p>Will leaders question assumptions, consult disabled people and allocate responsibility and resources?</p>
        <h3>3. Accountability</h3>
        <p>What barriers were removed, and what evidence demonstrates improved access, participation or opportunity?</p>
        <p>Potential learning activities include scenario-based reflection, barrier-identification exercises, documented commitments and follow-up review with disabled people. This is a <strong>proposed framework</strong>, not a claim of an evaluated programme currently in operation.</p>
      </section>
      <section aria-labelledby="reference-h" style={{paddingBlock:'1.5rem'}}>
        <h2 id="reference-h">Research reference and scope</h2>
        <p>Fadila E. Lagadien (2004), <em>Barriers to Gainful Employment for Disabled People in South Africa</em>, MBA dissertation, University of Liverpool. These findings reflect the research period, sample and methods and should not be interpreted as current national statistics.</p>
        <p><Link href="/about">Return to About Voice of Disability</Link>.</p>
      </section>
    </article>
  );
}