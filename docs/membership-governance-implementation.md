# Voice of Disability — Membership and Policy Governance Implementation

**Status:** Implementation design for review. This document is not a Board-approved policy.
**Scope:** Existing Vercel website, GitHub repository and Airtable organisational platform.
**Principle:** The public website is not a confidential staff, safeguarding or case-management system.

## 1. Member registration and access

1. A visitor submits the accessible public membership form.
2. The website validates the information, verifies anti-bot protection and emails a time-limited confirmation link.
3. After the person confirms, the website saves the verified registration in the existing Airtable Members table.
4. The website issues a signed, expiring, HTTP-only cookie for access to public member resources.
5. Members who change devices or lose access can repeat email verification; a dedicated returning-member sign-in flow remains a future enhancement.
6. A membership application and email confirmation are **not** evidence of a separate human membership approval. If the NPC requires admission decisions under its constitution, introduce explicit `Pending / Approved / Declined / Suspended` states and a recorded decision before describing a person as approved.

**Data minimisation:** Name and email are needed for the existing process; phone and province are optional. Do not require disability/medical details. Province is used only for aggregated organisational reach and programme planning, with a "Prefer not to say" choice.

**Security note:** A signed cookie prevents the previous unsigned `vod_member_access=1` bypass, but it is not a full multi-device member identity system. Never rely on the member-resource cookie for staff access, sensitive files, individual cases or financial records. Existing unsigned cookies will cease to grant access when this change is deployed.

## 2. Public and internal policies

**Public website:** Publish the approved privacy notice, membership terms, accessibility statement, safeguarding reporting routes and a concise explanation of member rights and responsibilities. Include effective dates, version numbers and accessible HTML. Provide accessible Word/PDF alternatives where appropriate.

**Restricted administration:** Keep controlled master policies, Board resolutions, review history and signed acknowledgements in an access-controlled organisational document store. Do not put private staff records, personal details, or confidential case files into this public GitHub repository.

## 3. Policy approval workflow

1. Draft policy with named owner, version and review date.
2. Review for legal, safeguarding, accessibility and operational implications.
3. Submit to the authorised Board or delegated approver under the NPC's governing documents.
4. Record approval date, decision/resolution reference and effective date.
5. Publish the approved public version, and distribute internal versions only to the correct roles.
6. Request acknowledgements from applicable staff, volunteers and contractors.
7. Record the person's identity, role, policy ID/version, acknowledgement date and method, and a link to evidence where appropriate.
8. Send reminders for outstanding acknowledgements; re-acknowledge after material changes.
9. Retain superseded versions and apply the organisation's approved retention schedule.

**Important distinction:** An acknowledgement confirms receipt and understanding of a specified version; it does not constitute Board approval or proof that training was completed.

## 4. Recommended records

### Policy Register
- Policy ID and title
- Audience (public, members, staff, volunteers, contractors, Board)
- Owner and reviewer
- Version, status (draft, under review, approved, superseded)
- Approval authority, date and resolution reference
- Effective date, next review date and controlled file link
- Accessibility format and plain-language summary

### Policy Acknowledgements
- Acknowledgement ID
- Person's internal record ID and role (avoid duplicating unnecessary personal data)
- Policy ID and exact version
- Date/time, acknowledgement method and confirmation statement
- Evidence reference, optional accessible alternative, and withdrawal/correction notes where relevant

### Membership Decisions (only if the constitution requires approval)
- Member ID, application date, verification status
- Decision status, authorised decision maker, decision date
- Notification date and review/appeal notes

### WhatsApp participation
- Keep **separate, explicit opt-in** for joining WhatsApp groups. Membership does not automatically authorise group participation or sharing phone numbers with other group participants.
- Explain that group members may see each other's phone numbers and messages.
- Provide an equally effective email alternative.

## 5. Controls required before launch

- Confirm Vercel production and preview settings, without exposing credentials.
- Confirm Resend delivery and Airtable record creation in a controlled test.
- Verify the membership process from keyboard, screen reader and voice input.
- Verify cookie tampering and expiry are rejected.
- Test existing-member registration, duplicate prevention and loss of browser access.
- Verify accessible errors, visible focus, meaningful labels and a non-digital alternative.
- Review the POPIA privacy notice, retention rules and permissions.
- Establish a confidential safeguarding reporting channel separate from general membership.

**Accessibility target:** WCAG 2.2 AA baseline, with AAA improvements where feasible; Universal Design, plain language, logical headings, visible focus and alternatives to inaccessible forms.

## 6. Deployment gate

Do not merge into production until automated checks pass and the membership flow has been tested with a controlled account. A code review alone cannot prove that the live email, anti-bot and Airtable integrations work.
