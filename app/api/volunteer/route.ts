import { Resend } from 'resend';
import type { NextRequest } from 'next/server';
import { guardPublicForm, validHumanName } from '../../lib/form-security';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TABLE_ID = 'tblndP82KQ8cxQcZH';
const FIELDS = {
  name: 'fldjfB9XZ7ynnjJyz',
  email: 'fldDXCJbYY2MGCRcJ',
  interest: 'fldxyWwK5pn1wHg1y',
  source: 'fld3mcKNmzLeBGeHx',
  status: 'fldxTlt2gUZYRFCUa',
  confirmed: 'fldtKnoB5msXapjlL',
  agreement: 'fldGLc4P9VmYLNihi',
  date: 'fldB8msk8pnCdpiF7',
};
const errorResponse = (error: string, status: number) => Response.json({ error }, { status });

export async function POST(request: NextRequest) {
  const airtableKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const resendKey = process.env.RESEND_API_KEY;
  // Never silently accept a submission without a persistent record.
  if (!airtableKey || !baseId || !resendKey) {
    return errorResponse('Volunteer applications are temporarily unavailable. Please email fadila@voiceofdisability.com.', 503);
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const guard = await guardPublicForm(request, 'volunteer', {
      website: String(body.website ?? ''),
      startedAt: Number(body.startedAt),
      turnstileToken: String(body.turnstileToken ?? ''),
    });
    if (!guard.ok) return errorResponse(guard.error, guard.status);

    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim().toLowerCase();
    const message = String(body.message ?? '').trim();
    if (!validHumanName(name) || !EMAIL_REGEX.test(email) || email.length > 254 ||
        !message || message.length > 5000) {
      return errorResponse('Please check your name, email address and volunteer interests.', 400);
    }

    const endpoint = `https://api.airtable.com/v0/${baseId}/${TABLE_ID}`;
    const existingFormula = `LOWER({Email})='${email.replace(/'/g, "\\'")}'`;
    const existing = await fetch(`${endpoint}?maxRecords=1&filterByFormula=${encodeURIComponent(existingFormula)}`, {
      headers: { Authorization: `Bearer ${airtableKey}` }, cache: 'no-store',
    });
    if (!existing.ok) throw new Error('Volunteer lookup unavailable');
    const found = (await existing.json()) as { records?: Array<{ id: string }> };
    if (found.records?.length) {
      // Privacy-preserving, idempotent response; do not overwrite earlier interests or create a duplicate.
      return Response.json({ success: true, emailSent: false, alreadyRecorded: true });
    }

    const saved = await fetch(endpoint, {
      method: 'POST',
      headers: { Authorization: `Bearer ${airtableKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ records: [{ fields: {
        [FIELDS.name]: name, [FIELDS.email]: email, [FIELDS.interest]: message,
        [FIELDS.source]: 'Website — volunteer interest', [FIELDS.status]: 'Interest received',
        [FIELDS.confirmed]: false, [FIELDS.agreement]: 'Not requested',
        [FIELDS.date]: new Date().toISOString().slice(0, 10),
      } }] }),
      cache: 'no-store',
    });
    if (!saved.ok) throw new Error('Volunteer storage failed');

    const resend = new Resend(resendKey);
    // Do not include interest details in operational notification emails.
    const ack = await resend.emails.send({
      from: 'Voice of Disability <fadila@voiceofdisability.com>', to: email,
      replyTo: 'fadila@voiceofdisability.com',
      subject: 'Your interest in contributing to Voice of Disability',
      text: `Dear ${name},\n\nThank you for offering to contribute to Voice of Disability. We received your expression of interest.\n\nWe are developing low-risk, independent contribution opportunities that volunteers can choose according to their expertise and availability. Sending an expression of interest does not guarantee an assignment. We will share suitable next steps when available.\n\nPlease do not send sensitive personal or medical information in reply. For accessible alternatives, corrections or withdrawal of your details, reply to this email.\n\nVoice of Disability NPC\nhttps://www.voiceofdisability.com/get-involved`,
    });
    if (ack.error) console.error('[volunteer] acknowledgment delivery failed');
    return Response.json({ success: true, emailSent: !ack.error });
  } catch (error) {
    console.error('[volunteer]', error instanceof Error ? error.message : 'Submission error');
    return errorResponse('We could not save your interest right now. Please email fadila@voiceofdisability.com.', 503);
  }
}
