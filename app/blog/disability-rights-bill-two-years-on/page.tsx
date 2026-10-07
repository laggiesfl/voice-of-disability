import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Two Years On, South Africa Still Has No Disability Rights Act',
  description:
    'South Africa has signed the promises. What it still has not done is pass the law that makes those promises enforceable.',
};

export default function DisabilityRightsBillTwoYearsOnArticle() {
  return (
    <>
      <section className="page-hero" aria-labelledby="article-h">
        <div className="container">
          <p className="byline">Voices &amp; Views · Disability Rights</p>
          <h1 id="article-h">Two Years On, South Africa Still Has No Disability Rights Act</h1>
          <p>Voice of Disability NPC · 5 October 2026</p>
        </div>
      </section>

      <article className="prose" aria-label="Two Years On, South Africa Still Has No Disability Rights Act article">
        <Link href="/blog" className="back-link">← Back to Voices &amp; Views</Link>

<p>In October 2024, the South African Law Reform Commission released a draft disability bill for public comment. Two years later, disabled South Africans are still waiting for it to reach Parliament.</p>

<p>The draft was meant to bring the United Nations Convention on the Rights of Persons with Disabilities into South African law. That matters. A convention sets out what a country has agreed to. A law gives people a way to hold the country to it.</p>

<p>How the consultation was run also matters. When the draft was opened for comment, disability organisations asked for it in braille and in easy-to-read formats. Those versions were not provided. A law about disabled people&apos;s rights was put out for comment in a form many disabled people could not read. That is the problem in miniature: decisions are made about us, in formats that shut us out.</p>

<p>In May 2026, the Minister for Women, Youth and Persons with Disabilities told Parliament the Bill was still being consolidated, with a commitment to table it before the end of this administration. That is a promise with no date attached.</p>

<p>While we wait, the cost of delay is real. Government&apos;s own figures put disabled people at about 1.2% of the public service. A new directive aims for 7% by 2030. Targets like that are welcome, but without a single, enforceable disability rights law they rest on policy and goodwill. Policy can be changed quietly. Goodwill runs out.</p>

<h2>What Voice of Disability is asking for</h2>

<ul>
<li><strong>Set a date.</strong> Tell disabled South Africans when the Bill will be tabled in Parliament.</li>
<li><strong>Make every version accessible.</strong> Braille, easy-read, audio and South African Sign Language versions must be released at the same time as the standard text, not after complaints.</li>
<li><strong>Consult disabled women directly.</strong> Disability, gender and poverty combine. A law written without disabled women in the room will miss the barriers we face first.</li>
</ul>

<p>The right to be included should not depend on who is in office or how generous they feel. It should be written into law. Two years is long enough.</p>

<p><em>Nothing about us without us.</em></p>

      </article>
    </>
  );
}
