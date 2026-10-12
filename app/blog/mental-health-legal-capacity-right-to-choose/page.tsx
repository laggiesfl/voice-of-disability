import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '“I Decide”: Mental Health, Legal Capacity and the Right to Choose',
  description:
    'World Mental Health Day asks us to talk about mental health. Disabled people with psychosocial disabilities are asking for something more: the right to decide.',
};

export default function MentalHealthLegalCapacityRightToChooseArticle() {
  return (
    <>
      <section className="page-hero" aria-labelledby="article-h">
        <div className="container">
          <p className="byline">Voices &amp; Views · Mental Health &amp; Disability Rights</p>
          <h1 id="article-h">&ldquo;I Decide&rdquo;: Mental Health, Legal Capacity and the Right to Choose</h1>
          <p>Voice of Disability NPC · 12 October 2026</p>
        </div>
      </section>

      <article className="prose" aria-label="&ldquo;I Decide&rdquo;: Mental Health, Legal Capacity and the Right to Choose article">
        <Link href="/blog" className="back-link">← Back to Voices &amp; Views</Link>

<p>Every year on 10 October, the world marks World Mental Health Day. The messages are usually about awareness, reducing stigma and seeking help. These matter. But for people with psychosocial disabilities, the deeper question is about power: who gets to make decisions about our lives?</p>

<p>South Africa already knows what happens when that power is taken away. In 2016, the Gauteng health department ended its contract with Life Esidimeni to cut costs. About 1,500 mental health care users were moved to NGOs, many of them unprepared or operating unlawfully. At least 144 people died. Families were not properly consulted. The people being moved were not asked at all.</p>

<p>In 2018, retired Deputy Chief Justice Dikgang Moseneke found that those who were moved had suffered severe ill-treatment and torture. Compensation followed. But no amount of money answers the central failure: decisions were made about people, without them.</p>

<p>The UN Convention on the Rights of Persons with Disabilities speaks directly to this. Article 12 recognises that disabled people have legal capacity on an equal basis with others. That includes people with psychosocial and intellectual disabilities. It means support to make our own decisions, not systems that make decisions for us.</p>

<p>South African law and practice still lean towards substitution. Too often, a diagnosis is treated as proof that a person cannot choose where to live, what treatment to accept or how to manage their own affairs.</p>

<h2>What Voice of Disability is asking for</h2>

<ul>
<li><strong>Supported decision-making.</strong> Build services that help people make their own choices, rather than handing those choices to someone else.</li>
<li><strong>Consultation before any move.</strong> No closure, transfer or change of care should happen without the people affected having a real say.</li>
<li><strong>Lived experience in leadership.</strong> People with psychosocial disabilities must help design and oversee mental health services.</li>
</ul>

<p>This World Mental Health Day, let&apos;s go further than awareness. Let&apos;s talk about rights.</p>

<p><em>Nothing about us without us.</em></p>

      </article>
    </>
  );
}
