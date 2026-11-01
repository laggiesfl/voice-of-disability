import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beyond the Walk: Disabled South Africans Need Careers, Not Compliance',
  description:
    'As Disability Rights Awareness Month begins, a Wits indaba heard that disabled South Africans are still stuck in internships and entry-level jobs. Voice of Disability says inclusion must now mean careers, leadership and real economic power.',
};

export default function BeyondTheWalkCareersNotComplianceArticle() {
  return (
    <>
      <section className="page-hero" aria-labelledby="article-h">
        <div className="container">
          <p className="byline">Voices &amp; Views · Disability Rights</p>
          <h1 id="article-h">Beyond the Walk: Disabled South Africans Need Careers, Not Compliance</h1>
          <p>Voice of Disability NPC · 02 November 2026</p>
        </div>
      </section>

      <article className="prose" aria-label="Beyond the Walk: Disabled South Africans Need Careers, Not Compliance article">
        <Link href="/blog" className="back-link">← Back to Voices &amp; Views</Link>

        <p>On 16 October 2026, persons with disabilities walked from Church Square to the Union Buildings in Pretoria to launch Disability Rights Awareness Month. The government&apos;s announcement described disabled people as "equal rights-holders" and called on government, business and communities to remove the barriers that keep us from full participation.</p>
<p>We welcome the walk. But a walk lasts a morning. Barriers last a lifetime unless someone moves them.</p>
<h2>Qualified, and still overlooked</h2>
<p>A few days later, a <a href="https://www.wits.ac.za/news/latest-news/general-news/2026/2026-10/qualified-but-overlooked.html">Disability Indaba at Wits University</a>, organised by the Wits Department of Social Work, Lead Change and Phila Sonke Wellness Initiative, asked a hard question: why are disabled South Africans still shut out of work, even with equality policies in place?</p>
<p>Speakers described disabled people who are unemployed, stuck in internships, or kept in entry-level roles, with few paths into management and leadership. Participants pointed to the gap between the 10% disability employment target in the National Development Plan&apos;s disability analysis and the 3% prescribed under Employment Equity regulations. Employers were criticised for treating disability employment as a box-ticking exercise.</p>
<p>City of Johannesburg councillor Yongama Zigebe put it plainly: <em>"To business: stop seeing inclusion merely as compliance. Recognise talent, create careers and open supply chains."</em> As he also said, government <em>"can construct a ramp. But society must also dismantle prejudice."</em></p>
<p>The Indaba raised a warning that matters deeply to us. Senzo Mbonambi of Lead Change Developments cautioned that AI-driven automation and some recruitment platforms could disadvantage disabled people. In our view, if hiring moves to systems built without us, old exclusion simply gets a faster engine.</p>
<h2>Across Africa, the conversation is moving</h2>
<p>In Kenya, Dr Isaac Mwaura, head of the Office of Diversity, Inclusion and Disability Rights in the Executive Office of the President, <a href="https://citizen.digital/article/government-to-launch-disability-rights-charter-to-strengthen-inclusion-agenda-n393014">announced plans for a national disability rights charter</a>, alongside a Diversity Index that lets institutions review their own practices and build action plans. "We will launch a disability charter and set the pace for disability rights," he said.</p>
<p>Charters and indexes matter because they make progress measurable. What gets measured gets done.</p>
<h2>Why this is a UNCRPD question</h2>
<p>South Africa has ratified the UN Convention on the Rights of Persons with Disabilities. Article 27 recognises our right to work on an equal basis with others, in a labour market that is open, inclusive and accessible. An internship that never becomes a job, or a career that stops at entry level, does not meet that standard. <strong>Nothing About Us Without Us</strong> must reach the boardroom, not stop at the front desk.</p>
<h2>What this means in South Africa</h2>
<ul>
<li><strong>Employers:</strong> track and report promotions and leadership roles for disabled staff, not just headcount.</li>
<li><strong>Government:</strong> close the gap between the 3% regulatory target and the ambition of the National Development Plan, and make grant rules clear, so disabled entrepreneurs are not afraid to start a business.</li>
<li><strong>Anyone using AI in hiring:</strong> test those tools with disabled people before they are used, not after harm is done.</li>
<li><strong>Schools and universities:</strong> make the classroom, in Councillor Zigebe&apos;s words, "the first place where barriers are broken."</li>
</ul>
      </article>
    </>
  );
}
