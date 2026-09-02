import { createHmac, timingSafeEqual } from 'crypto';
import type { NextRequest } from 'next/server';

const RATE_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const MIN_FILL_MS = 2500;
const MAX_FILL_MS = 2 * 60 * 60 * 1000;

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

export type GuardPayload = {
  website?: string;
  startedAt?: number;
  turnstileToken?: string;
};

export type ConfirmationPayload = {
  purpose: 'membership' | 'newsletter';
  email: string;
  name?: string;
  phone?: string;
};

function clientIp(request: NextRequest): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown';
}

function rateLimited(key: string): boolean {
  const now = Date.now();
  const current = buckets.get(key);
  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  current.count += 1;
  return current.count > MAX_REQUESTS;
}

export function validHumanName(name: string): boolean {
  return /^[\p{L}\p{M} .'-]{2,100}$/u.test(name.trim());
}

export async function guardPublicForm(request: NextRequest, formName: string, payload: GuardPayload) {
  const origin = request.headers.get('origin');
  const allowedOrigins = new Set(['https://www.voiceofdisability.com', 'https://voiceofdisability.com']);

  if (process.env.NODE_ENV === 'production' && origin && !allowedOrigins.has(origin)) {
    return { ok: false as const, status: 403, error: 'This submission could not be verified.' };
  }
  if ((payload.website ?? '').trim() !== '') {
    return { ok: false as const, status: 400, error: 'This submission could not be verified.' };
  }

  const startedAt = Number(payload.startedAt);
  const elapsed = Date.now() - startedAt;
  if (!Number.isFinite(startedAt) || elapsed < MIN_FILL_MS || elapsed > MAX_FILL_MS) {
    return { ok: false as const, status: 400, error: 'Please reload the form and try again.' };
  }
  if (rateLimited(`${formName}:${clientIp(request)}`)) {
    return { ok: false as const, status: 429, error: 'Too many submissions. Please try again later.' };
  }

  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return { ok: false as const, status: 503, error: 'Online forms are temporarily unavailable. Please email fadila@voiceofdisability.com.' };
  }

  const token = (payload.turnstileToken ?? '').trim();
  if (!token) {
    return { ok: false as const, status: 400, error: 'Please complete the security check and try again.' };
  }

  try {
    const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token, remoteip: clientIp(request) }),
      cache: 'no-store',
    });
    const result = (await verify.json()) as { success?: boolean };
    if (!result.success) {
      return { ok: false as const, status: 400, error: 'The security check could not be verified. Please try again.' };
    }
  } catch {
    return { ok: false as const, status: 503, error: 'The security check is temporarily unavailable. Please try again later.' };
  }

  return { ok: true as const };
}

function confirmationSecret(): string | null {
  return process.env.FORM_CONFIRMATION_SECRET || process.env.TURNSTILE_SECRET_KEY || null;
}

export function createConfirmationToken(data: ConfirmationPayload): string | null {
  const secret = confirmationSecret();
  if (!secret) return null;
  const payload = Buffer.from(JSON.stringify({ ...data, email: data.email.toLowerCase(), exp: Date.now() + 24 * 60 * 60 * 1000 })).toString('base64url');
  const signature = createHmac('sha256', secret).update(payload).digest('base64url');
  return `${payload}.${signature}`;
}

export function verifyConfirmationToken(token: string): (ConfirmationPayload & { exp: number }) | null {
  const secret = confirmationSecret();
  if (!secret) return null;
  const [payload, provided] = token.split('.');
  if (!payload || !provided) return null;
  const expected = createHmac('sha256', secret).update(payload).digest('base64url');
  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  try {
    const parsed = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as ConfirmationPayload & { exp?: number };
    if (!parsed.email || !parsed.purpose || !parsed.exp || parsed.exp < Date.now()) return null;
    return parsed as ConfirmationPayload & { exp: number };
  } catch {
    return null;
  }
}
