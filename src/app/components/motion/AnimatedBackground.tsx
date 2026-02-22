import { motion } from "framer-motion";
import { useReducedMotion } from "./useReducedMotion";

const NOISE_SVG =
  "data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export function AnimatedBackground() {
  const reduced = useReducedMotion();

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("${NOISE_SVG}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Gradient orb 1 — warm gold, drifts slowly */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(254,206,0,0.05) 0%, transparent 70%)",
          top: "10%",
          left: "15%",
          willChange: "transform",
        }}
        animate={
          reduced
            ? {}
            : {
                x: [0, 80, -40, 0],
                y: [0, -60, 40, 0],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Gradient orb 2 — cool navy/teal, drifts opposite direction */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(18,49,73,0.08) 0%, transparent 70%)",
          bottom: "20%",
          right: "10%",
          willChange: "transform",
        }}
        animate={
          reduced
            ? {}
            : {
                x: [0, -60, 50, 0],
                y: [0, 50, -30, 0],
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Breathing light layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(254,206,0,0.02) 0%, transparent 60%)",
        }}
        animate={reduced ? {} : { opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
