import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Locked Out Online: Why Government Digital Services Still Fail Disabled South Africans',
  description:
    'Government services are moving online fast. For many disabled people, the door is closing just as quickly.',
};

export default function LockedOutOnlineGovernmentDigitalServicesArticle() {
  return (
    <>
      <section className="page-hero" aria-labelledby="article-h">
        <div className="container">
          <p className="byline">Voices &amp; Views · Digital Access</p>
          <h1 id="article-h">Locked Out Online: Why Government Digital Services Still Fail Disabled South Africans</h1>
          <p>Voice of Disability NPC · 21 October 2026</p>
        </div>
      </section>

      <article className="prose" aria-label="Locked Out Online: Why Government Digital Services Still Fail Disabled South Africans article">
        <Link href="/blog" className="back-link">← Back to Voices &amp; Views</Link>

<p>South Africa is putting more of its public services online: identity checks, applications, payments, travel authorisations. Done well, this could remove barriers that disabled people have faced for decades, such as long queues, inaccessible buildings and long trips to government offices.</p>

<p>Done badly, it rebuilds those same barriers in code.</p>

<p>Consider facial verification. Many digital government systems now ask people to prove who they are by looking into a camera. For a blind person who cannot see how to frame the image, a person with a facial difference, or someone whose body does not hold still on command, that step can become a locked door. And unlike a staffed counter, a failing system rarely explains why it has rejected you or offers another way in.</p>

<p>This is why Voice of Disability wrote to the Minister of Home Affairs about the facial recognition used in the Electronic Travel Authorisation system. We received an acknowledgement. We are still waiting for a full answer to our questions: was the system tested with disabled people, and what happens when it fails them?</p>

<p>The problem is wider than one system. Too many government websites and apps are hard or impossible to use with a screen reader, keyboard navigation or voice control. Forms time out before people who type slowly can finish. Instructions are written in complex language with no plain-language or sign language versions.</p>

<p>International standards already show how to fix this. The Web Content Accessibility Guidelines set out clear, testable requirements, and South Africa&apos;s own commitments under the UN Convention require equal access to information and services.</p>

<h2>What Voice of Disability is asking for</h2>

<ul>
<li><strong>Test with disabled people before launch,</strong> not after complaints.</li>
<li><strong>Always offer an alternative route</strong> when an automated check fails, with a human who can help.</li>
<li><strong>Publish accessibility results</strong> for every public digital service, so citizens can see how each one performs.</li>
</ul>

<p>A digital state that excludes disabled people is not a modern state. It is an old barrier with a new face.</p>

<p><em>Nothing about us without us.</em></p>

      </article>
    </>
  );
}
