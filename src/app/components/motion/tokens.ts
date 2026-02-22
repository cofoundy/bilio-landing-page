/** Bilio motion design tokens — single source of truth for all animations */

export const duration = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  entrance: 0.7,
} as const;

export const ease = {
  outCubic: [0.33, 1, 0.68, 1] as const,
  outQuart: [0.25, 1, 0.5, 1] as const,
  inOutCubic: [0.65, 0, 0.35, 1] as const,
};

export const spring = {
  gentle: { stiffness: 200, damping: 25 },
  snappy: { stiffness: 300, damping: 30 },
  bouncy: { stiffness: 400, damping: 20 },
} as const;

export const stagger = {
  fast: 0.05,
  normal: 0.08,
  slow: 0.12,
} as const;

/** Shared fade-up variant used by ScrollReveal and hero entrance */
export const fadeUpVariant = (yOffset = 20) => ({
  hidden: { opacity: 0, y: yOffset, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: duration.normal, ease: ease.outCubic },
  },
});
