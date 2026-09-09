export type RightsGuide = {
  slug: string;
  title: string;
  summary: string;
  inSimpleTerms: string;
  questions: string[];
  nextSteps: string[];
};

export const rightsGuides: RightsGuide[] = [
  {
    slug: 'at-work',
    title: 'At work',
    summary: 'Reasonable accommodation, discrimination, disclosure and accessible workplaces.',
    inSimpleTerms: 'Disabled people should be able to participate in work without avoidable barriers. A workplace may need to consider reasonable changes to how work, communication, equipment or the environment is arranged.',
    questions: ['What barrier is stopping you from doing your work or taking part equally?', 'What change would remove or reduce that barrier?', 'Have you explained the barrier and requested a practical adjustment in writing?'],
    nextSteps: ['Write down the barrier and the adjustment you are asking for.', 'Keep copies of emails, policies and decisions that relate to your request.', 'If the issue is not resolved, ask what internal grievance, HR or formal complaint process is available.'],
  },
  {
    slug: 'looking-for-work',
    title: 'Looking for work',
    summary: 'Accessible recruitment, applications, interviews and employment opportunities.',
    inSimpleTerms: 'Recruitment should give disabled applicants a fair opportunity to apply, communicate and demonstrate their ability to do the job. Barriers in application systems, interviews or assessments can exclude people before their skills are considered.',
    questions: ['Is the application or interview process accessible to you?', 'Do you need an adjustment for an interview or assessment?', 'Is a requirement genuinely necessary for the job, or is it creating an avoidable barrier?'],
    nextSteps: ['Request an accessible format or interview adjustment as early as possible.', 'Describe the adjustment you need rather than giving more personal information than necessary.', 'Keep a record of the request and the response.'],
  },
  {
    slug: 'education-training',
    title: 'Education and training',
    summary: 'Access, support and inclusive learning environments.',
    inSimpleTerms: 'Learning environments should be designed so disabled learners can participate, receive information and demonstrate learning without unnecessary barriers.',
    questions: ['Can you access the learning materials, platform and venue?', 'Do you need materials in another format or more flexible ways to participate?', 'Are assessments creating a barrier unrelated to what is actually being assessed?'],
    nextSteps: ['Ask the institution for its disability support or reasonable accommodation process.', 'List the specific barriers and practical changes that would help.', 'Request decisions and agreed support in writing.'],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    summary: 'Equal access, communication and reasonable adjustments in healthcare.',
    inSimpleTerms: 'Disabled people should be able to access healthcare information, communication, facilities and services in ways that are usable and respectful.',
    questions: ['Can you physically access the service and equipment?', 'Can you receive and understand information in an accessible format?', 'Do you need more time, communication support or another adjustment?'],
    nextSteps: ['Tell the service what access barrier you are experiencing.', 'Ask for the specific adjustment or communication format you need.', 'If the barrier continues, ask how to make a formal service complaint.'],
  },
  {
    slug: 'public-services',
    title: 'Public services',
    summary: 'Access to services, information and participation.',
    inSimpleTerms: 'Public services should be usable by disabled people. Accessibility includes buildings, communication, forms, digital services and the way staff provide assistance.',
    questions: ['Which part of the service is inaccessible?', 'Is there an accessible alternative that gives you equivalent access?', 'Have you been offered a practical adjustment?'],
    nextSteps: ['Describe the barrier and the result it is causing.', 'Request an accessible alternative or reasonable adjustment.', 'Ask for the service provider’s complaints or accessibility contact if the problem is not fixed.'],
  },
  {
    slug: 'transport-access',
    title: 'Transport and physical access',
    summary: 'Barriers in transport and the built environment.',
    inSimpleTerms: 'Physical and transport barriers can prevent disabled people from reaching work, education, healthcare and community life. Access should be considered as part of the service, not as an optional extra.',
    questions: ['Can you enter, move through and use the space or service safely?', 'Is information such as signage, announcements or booking information accessible?', 'Is an alternative offered when the main route is inaccessible?'],
    nextSteps: ['Record the location, date and specific barrier.', 'Request the accessible route, service or alternative you need.', 'Report recurring barriers to the responsible operator or authority.'],
  },
  {
    slug: 'digital-accessibility',
    title: 'Digital accessibility',
    summary: 'Accessible websites, apps, documents and digital services.',
    inSimpleTerms: 'Digital services should work with different ways of seeing, hearing, understanding and interacting. Common barriers include inaccessible forms, poor keyboard support, missing labels, low contrast and documents that assistive technology cannot read.',
    questions: ['What task can you not complete?', 'Which browser, device or assistive technology are you using?', 'Is there an accessible alternative that provides the same service?'],
    nextSteps: ['Describe the exact task and barrier, not only that the site is “inaccessible”.', 'Include the page or feature where the problem occurs.', 'Ask the organisation for an accessible alternative and a timeline for fixing the barrier.'],
  },
  {
    slug: 'making-a-complaint',
    title: 'Making a complaint',
    summary: 'Organise the facts and understand possible next steps when a barrier is not resolved.',
    inSimpleTerms: 'A useful complaint explains what happened, what barrier or unequal treatment occurred, what you already tried, and what outcome you are asking for.',
    questions: ['What happened, when and where?', 'Who did you contact and what response did you receive?', 'What practical outcome would resolve the problem?'],
    nextSteps: ['Write a short timeline and keep copies of supporting documents.', 'Use the organisation’s internal complaint or grievance process where appropriate.', 'If the matter is serious or unresolved, consider advice from an appropriate legal, regulatory or rights body.'],
  },
];

export function getRightsGuide(slug: string) {
  return rightsGuides.find((guide) => guide.slug === slug);
}
