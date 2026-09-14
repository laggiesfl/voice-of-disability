import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Deaf Awareness Month Spotlights the Gap Between Law and Lived Reality in South Africa",
  description:
    "South Africa's Deaf Awareness Month launch in September 2026 brought renewed government calls for sign language access across public services, but the distance between legal obligation and daily experience for Deaf South Africans remains wide.",
};

export default function DeafAwarenessMonth2026LawRealityGapArticle() {
  return (
    <>
      <section className="page-hero" aria-labelledby="article-h">
        <div className="container">
          <p className="byline">Voices &amp; Views · Disability Rights</p>
          <h1 id="article-h">Deaf Awareness Month Spotlights the Gap Between Law and Lived Reality in South Africa</h1>
          <p>Voice of Disability NPC · 08 September 2026</p>
        </div>
      </section>

      <article className="prose" aria-label="Deaf Awareness Month Spotlights the Gap Between Law and Lived Reality in South Africa article">
        <Link href="/blog" className="back-link">← Back to Voices &amp; Views</Link>

        <p>September is Deaf Awareness Month, and this year the South African government used its launch event to say something that needed saying out loud: when Deaf and hard-of-hearing people cannot access public services, that is a human rights violation, not an unfortunate oversight.</p>

        <p>Speaking at the virtual launch on 2 September, Phuthi Mabelebele, Chief Director for Advocacy and Mainstreaming, Rights of Persons with Disabilities, put it plainly. &quot;When Deaf and hard-of-hearing persons cannot access basic information that enables independent living, we directly violate their human rights and make it impossible for them to exercise those rights,&quot; she said.</p>

        <p>The call covered ground that advocates have raised for years. Emergency communications must be accessible. Healthcare facilities need real communication mechanisms, not afterthoughts. Courts, police stations and justice services must provide sign language interpretation as a matter of course, not only when someone with a disability is already in crisis and happens to ask. And public meetings, Mabelebele said, should build in communication accessibility from the planning stage, not scramble for a caption service at the last minute.</p>

        <p>&quot;We cannot claim that a participation process is inclusive when Deaf people cannot understand or contribute to it,&quot; she said.</p>

        <h2>A right already on the books</h2>

        <p>South Africa recognised South African Sign Language as its twelfth official language in 2023, a historic step that followed years of advocacy. South Africa also ratified the UN Convention on the Rights of Persons with Disabilities (UNCRPD), which explicitly protects the right of Deaf people to use sign language and to receive information in accessible formats. So the legal framework is there. What remains is the implementation.</p>

        <p>Mabelebele pointed to the White Paper on the Rights of Persons with Disabilities as the policy vehicle for this change, calling for it to include binding minimum service delivery standards for Deaf and hard-of-hearing persons. Without those standards, accessibility remains aspirational rather than enforceable.</p>

        <h2>The gap the CRPD Committee is watching</h2>

        <p>The challenge of turning treaty commitments into real-world access is not unique to South Africa. In March 2026, the UN&apos;s CRPD Committee concluded its 34th session having reviewed five States parties, including two African nations, Lesotho and Liberia. The Committee raised its own concerns about a UN liquidity crisis that had threatened to cut accessibility services, including sign language interpretation and captioning, at its own sessions. The Committee was direct: &quot;Accessibility was not optional, but a duty.&quot;</p>

        <p>That the body tasked with monitoring disability rights conventions had to fight to retain sign interpretation at its own meetings is a pointed reminder of how far even the most committed institutions still have to travel.</p>

        <p>With 193 States parties to the CRPD, ratification is no longer the challenge. Closing the gap between signature and substance is.</p>

        <h2>What &quot;Nothing About Us Without Us&quot; demands</h2>

        <p>At Voice of Disability NPC, we hold to the principle that runs through every disability rights framework worth its name: Nothing About Us Without Us. The calls from the Deaf Awareness Month launch are not new. Deaf and hard-of-hearing South Africans, and their organisations, have been naming these gaps for a long time. What we need now is for government procurement officers, healthcare planners, justice officials and communications teams to treat sign language access as a non-negotiable line item, not a nice-to-have added on when the budget allows.</p>

        <p>Mabelebele said it well: mainstreaming is not the responsibility of government alone. It belongs to every institution, every community, every space where decisions get made. That includes us.</p>
      </article>
    </>
  );
}