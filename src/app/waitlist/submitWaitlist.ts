import type { WaitlistSubmission, SubmitResult } from './types';
import { getCountryByIso } from './countryCodes';

const STORAGE_KEY = 'bilio_waitlist_submissions';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\d{6,15}$/;

export async function submitWaitlist(data: WaitlistSubmission): Promise<SubmitResult> {
  // 1. Validate email
  if (!data.email.trim() || !EMAIL_RE.test(data.email)) {
    return { success: false, error: 'Ingresa un correo válido.' };
  }

  // 2. Validate phone (optional — only validate if provided)
  const rawPhone = data.phone.replace(/\s+/g, '');
  if (rawPhone && !PHONE_RE.test(rawPhone)) {
    return { success: false, error: 'Ingresa un número de teléfono válido (6-15 dígitos).' };
  }

  // 3. Build payload with formatted phone
  const country = getCountryByIso(data.countryCode);
  const dialCode = country?.dial ?? '+51';
  const phone = rawPhone ? `${dialCode}${rawPhone}` : '';

  const payload = {
    name: data.name.trim(),
    email: data.email.trim(),
    phone,
    countryCode: data.countryCode,
    plan: data.plan,
    lockPrice: data.lockPrice,
    source: data.source,
    timestamp: new Date().toISOString(),
  };
  console.log('[Bilio Waitlist]', payload);

  // 4. Store in localStorage
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    existing.push(payload);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch {
    // localStorage unavailable — continue anyway
  }

  // 5. Simulated delay for loading state UX
  await new Promise((r) => setTimeout(r, 400));

  // 6. Backend swap: uncomment below when API is ready
  // try {
  //   const res = await fetch('/api/waitlist', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(payload),
  //   });
  //   if (!res.ok) throw new Error('Server error');
  // } catch {
  //   return { success: false, error: 'Error al enviar. Intenta de nuevo.' };
  // }

  return { success: true };
}

export function getLastSubmission(): WaitlistSubmission | null {
  try {
    const submissions = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return submissions.length > 0 ? submissions[submissions.length - 1] : null;
  } catch {
    return null;
  }
}
