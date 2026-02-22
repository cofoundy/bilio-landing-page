import { useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Simple scroll-based parallax offset.
 * Returns a ref to attach and a `y` MotionValue for the parallax offset.
 */
export function useParallax(offset = 40): {
  ref: React.RefObject<HTMLDivElement | null>;
  y: MotionValue<number>;
} {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [offset, -offset]
  );

  return { ref, y };
}
