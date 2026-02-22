export type PlanId = 'gratis' | 'plus' | 'premium';

export type WaitlistSource = 'hero' | 'pricing' | 'waitlist-cta' | 'footer';

export interface WaitlistData {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  plan: PlanId;
  lockPrice: boolean;
  submitted: boolean;
  submitting: boolean;
  error: string | null;
  source: WaitlistSource | null;
}

export interface WaitlistSubmission {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  plan: PlanId;
  lockPrice: boolean;
  source: WaitlistSource;
}

export interface SubmitResult {
  success: boolean;
  error?: string;
}

export type WaitlistAction =
  | { type: 'SET_NAME'; name: string }
  | { type: 'SET_EMAIL'; email: string }
  | { type: 'SET_PHONE'; phone: string }
  | { type: 'SET_COUNTRY_CODE'; countryCode: string }
  | { type: 'SET_PLAN'; plan: PlanId }
  | { type: 'SET_LOCK_PRICE'; lockPrice: boolean }
  | { type: 'SET_SOURCE'; source: WaitlistSource }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_SUCCESS' }
  | { type: 'SUBMIT_ERROR'; error: string }
  | { type: 'RESTORE'; data: Pick<WaitlistData, 'name' | 'email' | 'phone' | 'countryCode' | 'plan' | 'lockPrice' | 'source'> };
