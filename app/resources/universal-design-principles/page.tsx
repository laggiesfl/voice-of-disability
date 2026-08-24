import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The 7 Principles of Universal Design',
  description:
    'A practical Voice of Disability introduction to the seven principles of Universal Design and how to apply them.',
};

export default function UniversalDesignGuide() {
  return (
    <>
      <section className="page-hero" aria-labelledby="resource-h">
        <div className="container">
          <p className="byline">Resource · Universal Design · Guide</p>
          <h1 id="resource-h">The 7 Principles of Universal Design</h1>
          <p>Design environments, services and systems so more people can use them from the start.</p>
        </div>
      </section>

      <article className="prose" aria-label="Universal Design principles guide">
        <Link href="/resources" className="back-link">← Back to Resources</Link>

        <p>
          Universal Design is about designing for human diversity from the beginning, rather than adding
          accessibility afterwards. It reduces the need for individual workarounds and helps create places,
          products and services that work for more people.
        </p>

        <h2>1. Equitable use</h2>
        <p>Provide ways of using the design that are useful and dignified for people with different abilities.</p>

        <h2>2. Flexibility in use</h2>
        <p>Allow different ways to complete a task, interact or receive information.</p>

        <h2>3. Simple and intuitive use</h2>
        <p>Make the design easy to understand regardless of experience, language, literacy or concentration.</p>

        <h2>4. Perceptible information</h2>
        <p>Communicate essential information in more than one way, such as text, sound, symbols or tactile cues.</p>

        <h2>5. Tolerance for error</h2>
        <p>Reduce hazards and make it easier to recover from mistakes without serious consequences.</p>

        <h2>6. Low physical effort</h2>
        <p>Reduce unnecessary force, repetition and sustained physical effort.</p>

        <h2>7. Size and space for approach and use</h2>
        <p>Provide enough space for people to reach, see and use the design in different positions and with mobility devices.</p>

        <h2>How to apply the principles</h2>
        <ul>
          <li>Include disabled people in design decisions from the beginning.</li>
          <li>Test with different devices, input methods and assistive technologies.</li>
          <li>Offer more than one way to access information and complete important tasks.</li>
          <li>Remove unnecessary time pressure, fine motor demands and complex navigation.</li>
          <li>Check that the accessible option is not hidden, inferior or harder to use.</li>
        </ul>

        <aside
          aria-labelledby="ud-note-h"
          style={{
            margin: '2.5rem 0',
            padding: '1.5rem',
            border: '2px solid var(--border)',
            borderLeft: '5px solid var(--purple-mid)',
            borderRadius: '12px',
            background: 'var(--light-purple)',
          }}
        >
          <h2 id="ud-note-h" style={{fontSize: '1.25rem', margin: '0 0 0.75rem', color: 'var(--purple-deep)'}}>
            Universal Design does not remove every need for accommodation
          </h2>
          <p style={{margin: 0, color: 'var(--text)'}}>
            Good inclusive design reduces barriers for many people, but individual reasonable accommodation
            can still be necessary. Universal Design and accommodation work together rather than replacing one another.
          </p>
        </aside>
      </article>
    </>
  );
}
