import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1.2% Is Not Inclusion: Can the Public Service Reach 7% by 2030?',
  description:
    'Government has set itself a target. Now it has to hire disabled people at a pace it has never managed before.',
};

export default function PublicServiceDisabilityEmploymentPercentArticle() {
  return (
    <>
      <section className="page-hero" aria-labelledby="article-h">
        <div className="container">
          <p className="byline">Voices &amp; Views · Employment Inclusion</p>
          <h1 id="article-h">1.2% Is Not Inclusion: Can the Public Service Reach 7% by 2030?</h1>
          <p>Voice of Disability NPC · 26 October 2026</p>
        </div>
      </section>

      <article className="prose" aria-label="1.2% Is Not Inclusion: Can the Public Service Reach 7% by 2030? article">
        <Link href="/blog" className="back-link">← Back to Voices &amp; Views</Link>

<p>By government&apos;s own count, disabled people make up about 1.2% of South Africa&apos;s public service. Earlier this year, the state set a new goal: 7% by 2030.</p>

<p>On paper, the new directive is stronger than what came before. Departments must build disability employment targets into their plans and budgets. Heads of Department are accountable for the results. Progress must be reported every quarter. Recruitment must be accessible, some entry-level posts must be set aside, and workplaces must provide reasonable accommodation.</p>

<p>These are the right tools. The question is whether they will be used.</p>

<p>Going from 1.2% to 7% in a few years means hiring disabled people at several times the current rate. That will not happen by advertising posts and hoping disabled applicants appear. It requires changing how jobs are designed, advertised, assessed and supported.</p>

<p>The barriers are well known. Application systems are not accessible to screen readers. Interviews do not offer sign language interpreters. Workplaces wait for a disabled person to arrive before thinking about access. Managers fear the cost of accommodation, when much of it costs little. And too many disabled employees who are already working never disclose, because they do not trust how that information will be used.</p>

<p>Disabled women face all of this, plus gender barriers, at the same time. Any plan that does not count disabled women separately will hide how far behind they are.</p>

<h2>What Voice of Disability is asking for</h2>

<ul>
<li><strong>Publish the quarterly figures</strong> by department, so progress can be tracked.</li>
<li><strong>Count disabled women separately</strong> in every report.</li>
<li><strong>Fund reasonable accommodation centrally,</strong> so no manager can use cost as an excuse.</li>
</ul>

<p>Private employers should be watching closely. If government cannot meet its own target, few others will.</p>

<p><em>Nothing about us without us.</em></p>

      </article>
    </>
  );
}
