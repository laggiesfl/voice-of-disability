import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Position — The Door That Would Not Open',
  description:
    'Voice of Disability NPC\'s position on algorithmic bias, facial recognition, and South Africa\'s Digital ID system — by Fadila Lagadien.',
};

export default function OurPosition() {
  return (
    <>
      <section className="page-hero" aria-labelledby="pos-h">
        <div className="container">
          <p className="byline">Our Position</p>
          <h1 id="pos-h">The Door That Would Not Open —<br />Now It Is an Algorithm</h1>
          <p>By Fadila Lagadien | Founder, Voice of Disability NPC</p>
        </div>
      </section>

      <article className="prose" aria-label="Our position article">
        <Link href="/" className="back-link">← Back to homepage</Link>

        <p>Forty years ago, I was left in a corridor.</p>

        <p>
          I had been in a car accident. My partner at the time — white — was taken to immediate care.
          I was not. My spinal cord was severed. Through the night, on a trolley pushed against a wall,
          I lay without specialist treatment while a pressure sore the size of a dinner plate formed on
          the small of my back.
        </p>

        <p>
          There was a state-of-the-art spinal unit available. It had the staff and the equipment built
          for exactly the injury I had. It was not available to me. There was a seven-letter category on
          my identity document that the system had already read and decided: not this one. Not this body.
          Not this ward.
        </p>

        <p>
          Apartheid was not, in the end, mostly about the signs on the doors. The signs were the surface.
          What apartheid actually was — what it did, hour by hour, body by body — was a system that decided
          whose pain was urgent and whose could wait. A leg before a spine. A white man before a Black woman.
          An identity document category before a human being on a stretcher.
        </p>

        <p>I learned that, in detail, in the corridor.</p>

        <p>A doctor told my family I had seven years to live.</p>

        <p>
          I am sixty-seven. I have been a quadriplegic wheelchair user for forty years. I am still here —
          not because the system relented, but because I refused to let its verdict be final.
        </p>

        <p>
          I spent those forty years fighting structural discrimination. I contributed to South Africa&rsquo;s
          disability legislation. I founded Voice of Disability NPC, an organisation for disabled women,
          built on one principle: Nothing About Us Without Us. I wrote a memoir called
          <em> The Door That Would Not Open</em>.
        </p>

        <p>But the door has a new face now. And it has been built into the systems South Africa is
          deploying right now — at its borders, in its identity infrastructure, at the very point where
          the state decides who you are and whether you qualify.</p>

        <p>The door is now an algorithm.</p>

        <h2>Three faces of exclusion</h2>

        <p>
          The exclusion I have experienced across my life has had three faces. A building with a staircase
          designed for bodies that were not mine. A person who made a decision about my worth that no
          argument could reach. And an algorithm that makes the same decision faster, at scale, without
          a face to confront or a conscience to appeal to.
        </p>

        <p>
          I know the third face personally. I hold an MBA from the University of Liverpool. I have decades
          of senior experience in policy and consulting. I applied for roles I was, by every published
          criterion, more than qualified for. Systems declined me before any human reviewed my file.
        </p>

        <p>
          I went to a bank with real money in my account — a Road Accident Fund payout, functioning as
          collateral in the most literal financial sense. The algorithm declined me. No explanation.
          No face. No door to knock on. The discrimination had been laundered through a machine that
          its operators could, in good conscience, call objective.
        </p>

        <p>The machine is not objective. It reflects the assumptions of the people who built it.
          And the people who built it did not have bodies like mine in the room.</p>

        <h2>The algorithm at our borders</h2>

        <p>
          South Africa&rsquo;s Department of Home Affairs has deployed an Electronic Travel Authorisation
          system that uses machine learning and facial recognition technology to determine entry into this
          country. The Minister of Home Affairs has confirmed it has already denied entry to more than
          4,500 people.
        </p>

        <p>
          This same technology — facial recognition designated as the primary biometric method — is now
          being embedded into the national Digital ID system that will determine the identity of every
          South African citizen.
        </p>

        <p>
          I have searched for a published bias assessment of these systems. I have found none. I have
          looked for evidence that disabled women — or any disability organisation — were consulted in
          the design of these systems. I have found none.
        </p>

        <p>
          What I know, from documented international research, is this. Facial recognition systems perform
          significantly worse on three specific groups: women, darker-skinned people, and people with
          disabilities affecting facial appearance — including burn survivors, people with neurological
          conditions affecting facial movement, and those with visible differences from birth or injury.
        </p>

        <p>
          I am a Black, disabled woman. The constituency of Voice of Disability NPC — disabled women
          across South Africa, many of whom are Black — sits at the intersection of every documented
          bias in this technology simultaneously. We are precisely the people most likely to be
          misidentified. Most likely to be denied. Most likely to be left, again, waiting in a corridor
          of the state&rsquo;s making — while the system processes everyone else.
        </p>

        <p>
          This is not a metaphor. It is a documented technical reality, dressed in the language of
          digital modernisation and presented as progress.
        </p>

        <p>
          The principle my organisation was built on — Nothing About Us Without Us — is not a slogan.
          It is a minimum standard of democratic participation. And it has been violated by a system
          designed and deployed without us.
        </p>

        <h2>Our two demands</h2>

        <p>
          Voice of Disability NPC is making two demands of Minister Leon Schreiber and the Department
          of Home Affairs.
        </p>

        <blockquote>
          <p>
            FIRST: Commission and publish an independent algorithmic bias audit of the ETA facial
            recognition system and the proposed Digital ID biometric system — specifically testing
            accuracy across race, gender, age, and disability — before any further expansion.
          </p>
        </blockquote>

        <blockquote>
          <p>
            SECOND: Consult formally and meaningfully with organisations representing disabled women
            before the Digital ID regulations are finalised. Not after. Before.
          </p>
        </blockquote>

        <p>
          These are not extraordinary demands. They are the minimum standard of a system that claims
          to serve all South Africans.
        </p>

        <p>
          Forty years ago, a system decided that the specialist care built to treat my injury was not
          available to a body like mine. No one asked me. No one consulted the woman on the stretcher.
          The system simply acted, and I bore the consequences in my body for for the rest of my life.
        </p>

        <p>
          I will not allow an algorithm to do the same — to me, or or me, or to the next generation of
          disabled Black women in this country.
        </p>

        <p>
          The door that would not open is not a memory. It is being rebuilt.
          And this time, I am naming it before it closes.
        </p>

        <hr style={{margin: '2.5rem 0', border: 'none', borderTop: '2px solid var(--border)'}} />

        <h3>About the author</h3>
        <p>
          Fadila Lagadien is the founder of Voice of Disability NPC, an organisation for disabled
          women in South Africa. She is the founder of BeAccessible, an AI-enabled accessibility
          and disability inclusion consultancy, and the creator of BiasLens, an algorithmic bias
          testing and accountability platform. She is the author of the memoir
          <em> The Door That Would Not Open</em>. She has been a quadriplegic wheelchair
          user for forty years.
        </p>

        <h3>Media, partnerships and advocacy enquiries</h3>
        <p>
          We welcome journalists, policymakers and allied organisations who want to discuss this position.
        </p>
        <p>
          Email: <a href="mailto:fadila@voiceofdisability.com">fadila@voiceofdisability.com</a>
        </p>
        <Link href="/#contact" className="btn btn-primary" style={{display: 'inline-flex', marginTop: '0.5rem'}}>
          Visit our contact page →
        </Link>
      </article>
    </>
  );
}
