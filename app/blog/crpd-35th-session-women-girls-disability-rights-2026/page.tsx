import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UN Experts Set New Standard for Women and Girls With Disabilities',
  description:
    'The UN Committee on the Rights of Persons with Disabilities closed its 35th Session this August, adopting new guidelines on intersectional discrimination against women and girls with disabilities. Here is what it means for disabled women in South Africa and beyond.',
};

export default function Crpd35thSessionArticle() {
  return (
    <>
      <section className="page-hero" aria-labelledby="article-h">
        <div className="container">
          <p className="byline">Voices &amp; Views · Disability Rights</p>
          <h1 id="article-h">UN Experts Set New Standard for Women and Girls With Disabilities</h1>
          <p>Voice of Disability NPC · 31 August 2026</p>
        </div>
      </section>

      <article className="prose" aria-label="UN Experts Set New Standard for Women and Girls With Disabilities article">
        <Link href="/blog" className="back-link">← Back to Voices &amp; Views</Link>

        <aside className="editors-note" aria-labelledby="editors-note-h">
          <h2 id="editors-note-h">Editor&apos;s note</h2>

          <p>
            <strong><time dateTime="2026-09-02">2 September 2026</time></strong> — The CRPD
            Committee formally adopted these guidelines on 27 August 2026, at the close of the 35th
            session. The final published text is not yet available on the OHCHR general comments
            page — UN documents typically take several weeks to be processed into the official
            document system after adoption.
          </p>

          <p>
            The draft version that informed the session is available here:{' '}
            <a href="https://www.ohchr.org/en/calls-for-input/2026/call-inputs-draft-guidelines-identifying-and-addressing-intersectional">
              OHCHR call for inputs: draft guidelines on intersectional discrimination against women
              and girls with disabilities
            </a>.
          </p>

          <p>
            This post will be updated with a direct link to the final adopted text as soon as it is
            published.
          </p>
        </aside>

        <p>The United Nations Committee on the Rights of Persons with Disabilities concluded its 35th Session in Geneva in late August 2026, and the work it produced matters, especially for disabled women and girls everywhere, including here in South Africa.</p>

        <p>The session, which ran from 12 to 27 August, saw the Committee of 18 independent experts review five countries: Qatar, Sri Lanka, Lithuania, Chile, and Slovakia. The outcome that stands out is a new set of guidelines adopted by the Committee on identifying and addressing intersectional discrimination against girls, women, and older women with disabilities.</p>

        <h2>Why intersectionality matters</h2>

        <p>For many disabled women, the barriers they face are not simply about disability alone. They sit at the crossroads of being disabled and being women, and often also of race, class, age, and geography. The Committee&apos;s new guidelines are an explicit acknowledgement that those overlapping identities shape the discrimination people experience, and that states must respond to that complexity, not just to disability in isolation.</p>

        <p>This is not a new idea for our movement. Disabled women have been saying this for decades. What is significant is that it is now formalised in guidance that all 185 UNCRPD state parties, including South Africa, are expected to take seriously in their reporting and implementation.</p>

        <h2>What the country reviews revealed</h2>

        <p>The reviews of the five countries offered a window into the kinds of failures that persist even among states that have ratified the Convention. Experts raised concerns about the use of restraints in psychiatric institutions, barriers in public buildings, gaps in inclusive education, legal capacity laws that strip people of decision-making rights, and gender-based violence against women and girls with disabilities.</p>

        <p>None of these issues are foreign to the South African context. South Africa has ratified the UNCRPD and committed, on paper, to its full implementation. The obligation is not just to have policies, but to make them real in people&apos;s lives.</p>

        <h2>A moment that also demands honesty</h2>

        <p>
          The 35th Session closed with a commemoration of the 20th anniversary of the CRPD&apos;s adoption, a moment for reflection on how far the world has and has not come. At the same time, news from the United States in August 2026 reported that the federal Justice Department has{' '}
          <a href="https://www.disabilityscoop.com/2026/08/20/justice-department-backs-off-disability-rights-enforcement/32138/">
            backed away from disability rights enforcement
          </a>
          , a reminder that rights on paper depend on political will to defend them.
        </p>

        <p>That is precisely why international accountability frameworks like the CRPD matter. When domestic political will wavers, international standards and monitoring give disabled people and their organisations a place to stand.</p>

        <h2>What this means for us</h2>

        <p>At Voice of Disability, our mission is grounded in &ldquo;Nothing About Us Without Us.&rdquo; The CRPD Committee&apos;s new guidelines on intersectional discrimination are a direct echo of what disabled women have been saying in their own words for a long time. Our lives are not single-issue. Our advocacy cannot be either.</p>

        <p>We will be watching how South Africa engages with these guidelines and we will continue to speak up, both in national conversations and on the international stage, where our voices belong.</p>
      </article>
    </>
  );
}
