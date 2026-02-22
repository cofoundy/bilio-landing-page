import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { duration, ease, stagger as staggerTokens } from "./tokens";
import { useReducedMotion } from "./useReducedMotion";

interface ScrollRevealProps {
  children: ReactNode;
  /** Vertical offset in px */
  yOffset?: number;
  /** Seconds between each child when staggering */
  stagger?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Fraction of element visible before triggering (0-1) */
  amount?: number;
  /** Fire only once */
  once?: boolean;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
}

export function ScrollReveal({
  children,
  yOffset = 20,
  stagger = staggerTokens.normal,
  duration: dur = duration.normal,
  amount = 0.2,
  once = true,
  className,
  as = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount, once });
  const reduced = useReducedMotion();

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduced ? 0 : stagger },
        },
      }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: reduced
                  ? { opacity: 1 }
                  : { opacity: 0, y: yOffset, filter: "blur(4px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: dur, ease: ease.outCubic },
                },
              }}
            >
              {child}
            </motion.div>
          ))
        : (
          <motion.div
            variants={{
              hidden: reduced
                ? { opacity: 1 }
                : { opacity: 0, y: yOffset, filter: "blur(4px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: dur, ease: ease.outCubic },
              },
            }}
          >
            {children}
          </motion.div>
        )}
    </MotionTag>
  );
}
