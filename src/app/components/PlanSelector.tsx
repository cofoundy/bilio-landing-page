import type { PlanId } from '../waitlist/types';
import { cn } from './ui/utils';

interface PlanOption {
  id: PlanId;
  label: string;
  price: string;
}

const plans: PlanOption[] = [
  { id: 'gratis', label: 'Gratis', price: 'S/0' },
  { id: 'plus', label: 'Plus', price: 'S/14.90/mes' },
  { id: 'premium', label: 'Premium', price: 'S/24.90/mes' },
];

interface PlanSelectorProps {
  value: PlanId;
  onChange: (plan: PlanId) => void;
  size?: 'sm' | 'md';
}

export function PlanSelector({ value, onChange, size = 'md' }: PlanSelectorProps) {
  return (
    <div role="radiogroup" aria-label="Selecciona un plan" className="flex gap-2 flex-wrap justify-center">
      {plans.map((plan) => {
        const selected = value === plan.id;
        return (
          <button
            key={plan.id}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(plan.id)}
            className={cn(
              'rounded-full font-heading font-extrabold tracking-tight transition-all duration-200 cursor-pointer border',
              size === 'sm' ? 'text-xs px-3.5 py-1.5' : 'text-sm px-4 py-2',
              selected
                ? 'bg-gradient-gold text-bilio-bg border-transparent shadow-[0_2px_12px_rgba(254,206,0,0.3)]'
                : 'bg-white/[0.04] text-white/50 border-white/10 hover:border-bilio-primary/30 hover:text-white/70'
            )}
          >
            {size === 'sm' ? plan.label : `${plan.label} ${plan.price}`}
          </button>
        );
      })}
    </div>
  );
}
