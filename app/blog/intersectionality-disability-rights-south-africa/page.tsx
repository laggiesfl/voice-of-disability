import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Lives Are Not Single-Issue: What Intersectional Disability Rights Actually Looks Like in South Africa',
  description:
    'Voice of Disability examines how disability, gender, race, age and place compound exclusion for disabled women in South Africa — and why single-axis policy responses are not enough.',
};

export default function IntersectionalityDisabilityRightsArticle() {
  return (
    <>
      <section className="page-hero" aria-labelledby="article-h">
        <div className="container">
          <p className="byline">Voices &amp; Views · Intersectionality &amp; Disability Rights</p>
          <h1 id="article-h">Our Lives Are Not Single-Issue: What Intersectional Disability Rights Actually Looks Like in South Africa</h1>
          <p>Voice of Disability NPC · 5 September 2026</p>
        </div>
      </section>

      <article className="prose" aria-label="Intersectionality and disability rights in South Africa article">
        <Link href="/blog" className="back-link">← Back to Voices &amp; Views</Link>

        <p>
          There is a persistent myth in South African policy circles that disability can be addressed in isolation.
          That if we get the ramp right, if we tick the employment equity box, if we include a disability clause in a
          policy document — we have done enough.
        </p>

        <p><strong>We have not.</strong></p>

        <p>
          For disabled women in South Africa — particularly Black disabled women, older disabled women, and disabled
          women in rural areas — the barriers we face do not arrive one at a time. They arrive together. Disability and
          gender and race and age compound each other in ways that no single-axis policy framework can adequately address.
        </p>

        <p>
          This is what intersectionality means in practice. Not an academic theory. A lived reality.
        </p>

        <h2>What It Looks Like Here</h2>

        <p>
          A disabled woman reporting gender-based violence may find that the justice system is physically inaccessible
          to her. A blind woman seeking employment equity protection under the EEA may find that her application process
          was never designed to be navigated without sight. An older disabled woman accessing public healthcare may
          encounter ageism, ableism, and gender bias from a single consultation.
        </p>

        <p>
          These are not separate problems requiring separate solutions. They are one problem with many faces.
        </p>

        <h2>The Numbers Behind the Barriers</h2>

        <h3>Gender-based violence</h3>

        <p>
          According to the Human Sciences Research Council&apos;s First South African National Gender-Based Violence
          Prevalence Study, the prevalence of sexual violence by a lifetime partner is exactly twice as high for women
          with disabilities (14.6%) as for women without disabilities (7.2%). Physical abuse tells the same story: 29.3%
          of women with disabilities have experienced lifetime physical abuse, compared to 21.7% of women without
          disabilities. Financial abuse (16.3%) and emotional abuse (31.9%) are also disproportionately experienced by
          disabled women.
        </p>

        <p>
          These are not international figures. These are South African figures, measured in South Africa, describing the
          lives of South African women.
        </p>

        <h3>Employment and economic exclusion</h3>

        <p>
          People with disabilities account for only approximately 1.3% of the South African workforce across all skill
          levels — a figure that signals severe systemic exclusion, not individual failing. Households headed by women
          with at least one member with a severe functional limitation experience the lowest average monthly income per
          capita of any demographic group in South Africa. In rural municipalities, only 11% of disabled youth are
          employed and earning a salary — making rural disabled women among the most economically marginalised people in
          the country.
        </p>

        <h3>Access to justice</h3>

        <p>
          The South African Police Service and the National Prosecuting Authority have historically lacked structural
          disability sensitisation, frequently omitting specific accommodations for disabled survivors in their
          multi-year strategic plans. Survivors with intellectual and developmental disabilities face rigid statutory
          barriers: courts typically only appoint an intermediary if a survivor&apos;s mental age is deemed below 18 and a
          magistrate specifically requests it. And disabled women frequently encounter prejudiced credibility assessments
          within the criminal justice system, where their testimonies are dismissed due to stigma or perceived
          communication barriers.
        </p>

        <p>
          This is not a reporting problem. It is a systems problem.
        </p>

        <h2>What the International Community Has Now Acknowledged</h2>

        <p>
          When the UN Committee on the Rights of Persons with Disabilities closed its 35th Session in Geneva on 27
          August 2026, it adopted new guidelines specifically addressing intersectional discrimination against girls,
          women, and older women with disabilities. For the first time, the international accountability framework
          governing disability rights has formally recognised that our experiences cannot be disaggregated.
        </p>

        <p>
          That is significant. Because what gets named in international law eventually shapes what gets measured,
          funded, and enforced at national level.
        </p>

        <h2>What This Means for South Africa</h2>

        <p>
          South Africa ratified the UNCRPD in 2007. That is nearly two decades of binding obligation. The statistics
          above are not a description of a system that has not had time to respond — they are a description of a system
          that has not chosen to respond.
        </p>

        <p>
          The CRPD session raised concerns across reviewed countries about gender-based violence against women with
          disabilities, barriers in public buildings, and gaps in inclusive education. South Africa faces all of these —
          and the HSRC data now makes the scale undeniable.
        </p>

        <p>
          We cannot review disability policy without reviewing it through a gender lens. We cannot address GBV without
          addressing the specific compounded vulnerabilities of disabled women. We cannot talk about employment equity
          without acknowledging that disabled women are disproportionately excluded from the workforce — and that in
          rural South Africa, the exclusion is near-total.
        </p>

        <h2>Where Voice of Disability Stands</h2>

        <p>
          At Voice of Disability NPC, <strong>“Nothing About Us Without Us”</strong> is not a slogan. It is a methodology.
        </p>

        <p>
          We will be tracking how South Africa responds to the CRPD&apos;s new intersectionality guidelines. We will be using
          the HSRC data in our advocacy. We will be asking which disabled women were in the room when disability policy
          was written. And we will keep saying it plainly:
        </p>

        <p><strong>Our lives are not single-issue. Our rights should not be either.</strong></p>

        <hr style={{margin: '2.5rem 0', border: 'none', borderTop: '2px solid var(--border)'}} />

        <p>
          <strong>Fadila Lagadien</strong> is the founder of Voice of Disability NPC and BeAccessible, an AI-Enabled
          Accessibility &amp; Disability Inclusion Specialist based in Cape Town, South Africa.
        </p>

        <p>
          <Link href="/#membership" className="btn btn-primary" style={{display: 'inline-flex', marginTop: '0.5rem'}}>
            Become a member →
          </Link>
        </p>
      </article>
    </>
  );
}
