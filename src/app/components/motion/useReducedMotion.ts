import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

/**
 * Wraps Framer's `useReducedMotion` so every component imports from one place.
 * Returns `true` when the user has `prefers-reduced-motion: reduce` enabled.
 */
export function useReducedMotion(): boolean {
  return useFramerReducedMotion() ?? false;
}
