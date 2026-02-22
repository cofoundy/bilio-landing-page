import { createContext, useContext, useEffect, useReducer, type ReactNode } from 'react';
import type { WaitlistData, WaitlistAction } from './types';
import { getLastSubmission } from './submitWaitlist';

const initialState: WaitlistData = {
  name: '',
  email: '',
  phone: '',
  countryCode: 'PE',
  plan: 'plus',
  lockPrice: true,
  submitted: false,
  submitting: false,
  error: null,
  source: null,
};

function waitlistReducer(state: WaitlistData, action: WaitlistAction): WaitlistData {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.name, error: null };
    case 'SET_EMAIL':
      return { ...state, email: action.email, error: null };
    case 'SET_PHONE':
      return { ...state, phone: action.phone, error: null };
    case 'SET_COUNTRY_CODE':
      return { ...state, countryCode: action.countryCode };
    case 'SET_PLAN':
      return { ...state, plan: action.plan };
    case 'SET_LOCK_PRICE':
      return { ...state, lockPrice: action.lockPrice };
    case 'SET_SOURCE':
      return { ...state, source: action.source };
    case 'SUBMIT_START':
      return { ...state, submitting: true, error: null };
    case 'SUBMIT_SUCCESS':
      return { ...state, submitting: false, submitted: true, error: null };
    case 'SUBMIT_ERROR':
      return { ...state, submitting: false, error: action.error };
    case 'RESTORE':
      return {
        ...state,
        name: action.data.name ?? '',
        email: action.data.email,
        phone: action.data.phone ?? '',
        countryCode: action.data.countryCode ?? 'PE',
        plan: action.data.plan,
        lockPrice: action.data.lockPrice,
        source: action.data.source,
        submitted: true,
      };
    default:
      return state;
  }
}

// Split context: state and dispatch are separate so components that only
// dispatch (like PricingSection) never re-render on state changes.
const WaitlistStateContext = createContext<WaitlistData | null>(null);
const WaitlistDispatchContext = createContext<React.Dispatch<WaitlistAction> | null>(null);

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(waitlistReducer, initialState);

  // Rehydrate from localStorage on mount
  useEffect(() => {
    const last = getLastSubmission();
    if (last) {
      dispatch({ type: 'RESTORE', data: last });
    }
  }, []);

  return (
    <WaitlistStateContext.Provider value={state}>
      <WaitlistDispatchContext.Provider value={dispatch}>
        {children}
      </WaitlistDispatchContext.Provider>
    </WaitlistStateContext.Provider>
  );
}

export function useWaitlist(): WaitlistData {
  const ctx = useContext(WaitlistStateContext);
  if (!ctx) throw new Error('useWaitlist must be used within WaitlistProvider');
  return ctx;
}

export function useWaitlistDispatch(): React.Dispatch<WaitlistAction> {
  const ctx = useContext(WaitlistDispatchContext);
  if (!ctx) throw new Error('useWaitlistDispatch must be used within WaitlistProvider');
  return ctx;
}
