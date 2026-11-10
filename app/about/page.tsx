import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Voice of Disability',
  description: 'Our history, vision, mission, disability-led advocacy, independent living and inclusive economic opportunities.',
};

export default function AboutPage() {
  return (
    <article className="container" style={{maxWidth: 980, paddingBlock: '3rem'}}>
      <p className="section-label">Our organisation</p>
      <h1>About Voice of Disability</h1>
      <p className="hero-desc">Disabled women’s voices, rights, independence and mainstream participation. Nothing About Us Without Us.</p>
      <nav aria-label="On this page" style={{display:'flex', flexWrap:'wrap', gap:'1rem', marginBlock:'2rem'}}>
        <a href="#who">Who we are</a><a href="#vision">Vision and mission</a><a href="#priorities">Priorities</a><a href="#history">History</a><a href="#inclusion">Inclusion</a>
      </nav>
      <section id="who" aria-labelledby="who-h" style={{paddingBlock:'1.5rem'}}>
        <h2 id="who-h">Who we are</h2>
        <p>Voice of Disability is a South African, disability-led nonprofit company founded to amplify disabled women’s voices about the socio-economic matters affecting their daily lives. We champion their rights and participation, and engage decision-makers to address disabling barriers.</p>
        <p>Our work brings together advocacy, independent living, Universal Design, accessible information and opportunities for skills development and economic inclusion.</p>
      </section>
      <section id="vision" aria-labelledby="vision-h" style={{paddingBlock:'1.5rem'}}>
        <h2 id="vision-h">Our vision and mission</h2>
        <h3>Vision</h3>
        <p>A society in which disabled women have the voice, access, independence and opportunities to participate equally in every aspect of life, influence decisions that affect them, and shape their own futures.</p>
        <h3>Mission</h3>
        <p>Voice of Disability amplifies disabled women’s voices, advances their rights and works to remove barriers to full participation in society. Through accessible digital platforms, advocacy, Universal Design, independent living initiatives and inclusive education and economic opportunity, we enable disabled women to speak up, speak out and participate meaningfully in mainstream society.</p>
      </section>
      <section id="priorities" aria-labelledby="priorities-h" style={{paddingBlock:'1.5rem'}}>
        <h2 id="priorities-h">Our strategic priorities</h2>
        <h3>Voice and advocacy</h3>
        <p>Support disabled women to express their experiences, engage decision-makers and advocate for changes to policies, services and society.</p>
        <h3>Access and independent living</h3>
        <p>Advance Personal Assistance Services, accessibility, Universal Design and the removal of barriers to community participation.</p>
        <h3>Digital skills and economic opportunity</h3>
        <p>Develop inclusive pathways to digital and AI literacy, employment and entrepreneurship, prioritising disabled women without creating segregated training or employment.</p>
        <p>These priorities describe our direction. Specific training programmes and partnerships depend on available resources and implementation arrangements; not every proposed service is currently available.</p>
      </section>
      <section id="history" aria-labelledby="history-h" style={{paddingBlock:'1.5rem'}}>
        <h2 id="history-h">Our history: founded in 2010</h2>
        <p>Fadila Lagadien began Voice of Disability independently in 2010, undertaking member mobilisation and building a platform where disabled women could speak up and speak out about matters affecting their lives.</p>
        <p>After six years of foundational work, Voice of Disability was formally incorporated with the South African Companies and Intellectual Property Commission on <strong>20 April 2016</strong> as <strong>Voice of Disability NPC</strong>.</p>
        <p><strong>CIPC registration:</strong> 2016/149549/08.</p>
      </section>
      <section id="inclusion" aria-labelledby="inclusion-h" style={{paddingBlock:'1.5rem'}}>
        <h2 id="inclusion-h">Mainstream inclusion, not segregation</h2>
        <p>We prioritise disabled women and welcome inclusive participation by the broader community. We do not seek to create sheltered workshops, segregated training or sheltered employment as substitutes for mainstream opportunities.</p>
        <p>Our approach is grounded in the UN Convention on the Rights of Persons with Disabilities, including the rights of disabled women, accessibility, independent living, freedom of expression and education.</p>
        <h2>Why awareness must lead to action</h2>
        <p>Our founder’s MBA research examined employment barriers and identified ignorance, perceptions of disability and commitment to change as critical issues. That research informs our thinking about inclusion and accountability.</p>
        <p><Link href="/research-foundations">Read our research foundations and proposed training framework</Link>.</p>
      </section>
    </article>
  );
}