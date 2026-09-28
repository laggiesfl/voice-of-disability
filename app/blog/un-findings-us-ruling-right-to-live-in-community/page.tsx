import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UN Findings and a US Court Ruling Expose a Global Fight Over the Right to Live in Community',
  description:
    'New UN Committee findings on five countries and a US court ruling stripping community integration protections show how fragile the right to live in community still is, and why South Africa cannot take its own UNCRPD commitments for granted.',
};

export default function UnFindingsUsRulingRightToLiveInCommunityArticle() {
  return (
    <>
      <section className="page-hero" aria-labelledby="article-h">
        <div className="container">
          <p className="byline">Voices &amp; Views · Disability Rights</p>
          <h1 id="article-h">UN Findings and a US Court Ruling Expose a Global Fight Over the Right to Live in Community</h1>
          <p>Voice of Disability NPC · 28 September 2026</p>
        </div>
      </section>

      <article className="prose" aria-label="UN Findings and a US Court Ruling Expose a Global Fight Over the Right to Live in Community article">
        <Link href="/blog" className="back-link">← Back to Voices &amp; Views</Link>

<p>Two stories broke in the last few weeks, thousands of kilometres apart, and together they tell us something important about where the world stands on disability rights right now.</p>

<p>On 7 September 2026, the UN Committee on the Rights of Persons with Disabilities published its findings on five countries: Chile, Lithuania, Qatar, Slovakia, and Sri Lanka. Read together, the findings paint a troubling picture. In Chile, people with disabilities can still be declared legally incapable and placed under interdiction, and the Committee flagged budget cuts that favour institutional care over community-based services. Its response to the austerity argument was blunt: "austerity or resource scarcity does not in itself justify retrogressive measures." In Lithuania, between 5,500 and 6,000 people with disabilities are still living in institutions, some simply relabelled as "smaller groups" while the same restrictive practices continue inside the same buildings. Slovakia&apos;s deinstitutionalisation process has stalled, with the Committee warning of a real risk of reinstitutionalisation. In Sri Lanka, the Committee&apos;s concerns followed a horrifying event: a fire at the Anguruwathota residential facility in June 2026 that killed residents, a stark reminder of what happens when people are warehoused rather than supported to live in their communities.</p>

<p>Then, a very different kind of blow landed on the other side of the world. On 23 September 2026, a federal judge in Texas ruled that the US Department of Health and Human Services must strip all references to community integration from a landmark regulation under Section 504 of the Rehabilitation Act, the law that has protected disabled people from discrimination by any programme receiving federal funding since 1973. The case, Texas v. Kennedy, began as a challenge to something else entirely and ended up unravelling the principle that disabled people have a right to live and receive support in their own communities rather than in institutions.</p>

<h2>What this means for South Africa</h2>

<p>Here I want to be upfront that what follows is my own reading of events, not a neutral report. South Africa ratified the UN Convention on the Rights of Persons with Disabilities in 2007, and Article 19 of that Convention, the right to live independently and be included in the community, is not a nice-to-have. It is a binding commitment. Watching institutional models get quietly re-entrenched in parts of Europe, and watching community integration language get stripped out of US federal policy, should worry every one of us who has fought for deinstitutionalisation and community-based support here at home. South Africa has its own history of institutionalising disabled people, and its own ongoing struggles to fund personal assistance, home-based care, and accessible housing at the scale Article 19 actually requires.</p>

<p>The lesson from Geneva and from Texas is one Voice of Disability has always argued: rights that depend on budgets staying generous will not survive when budgets get tight, unless disabled people themselves are in the room deciding how those budgets are spent. Nothing About Us Without Us is not a slogan for good times only. It matters most precisely in moments of austerity and political reversal.</p>

<h3>What we&apos;re watching</h3>

<ul>
<li>Whether South Africa&apos;s own deinstitutionalisation commitments hold up under budget pressure in the years ahead.</li>
<li>Whether the CRPD Committee&apos;s language on austerity gets cited by advocates here and across the continent.</li>
<li>Whether the US rollback becomes a precedent other governments feel emboldened to follow.</li>
</ul>

<p>We will keep watching, and we will keep saying it plainly: community, not confinement, is a right, not a reward for good economic times.</p>

      </article>
    </>
  );
}
