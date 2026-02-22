import { motion } from "framer-motion";
import { useReducedMotion } from "./useReducedMotion";
import { useParallax } from "./useParallax";

export function VirtualCreditCard() {
  const reduced = useReducedMotion();
  const { ref, y } = useParallax(20);

  return (
    <div ref={ref} className="relative">
      <motion.div
        className="relative w-full max-w-[340px] aspect-[1.586/1] rounded-2xl overflow-hidden select-none"
        style={{
          y,
          background: "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
          border: "1px solid rgba(254,206,0,0.15)",
          boxShadow:
            "0 0 40px rgba(254,206,0,0.06), 0 20px 40px rgba(0,0,0,0.5)",
        }}
        animate={
          reduced
            ? {}
            : { rotateY: [0, 2.5, 0, -2.5, 0] }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Shimmer sweep */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(254,206,0,0.08) 50%, transparent 60%)",
          }}
          animate={reduced ? {} : { x: ["-100%", "200%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        />

        {/* Card content */}
        <div className="relative z-[1] p-6 flex flex-col justify-between h-full">
          {/* Top row: logo + contactless */}
          <div className="flex justify-between items-start">
            <div className="text-bilio-primary font-heading text-lg font-extrabold tracking-tight">
              bilio
            </div>
            {/* Contactless icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-40">
              <path d="M8 17a8.5 8.5 0 000-10" stroke="#FECE00" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M12 19a12 12 0 000-14" stroke="#FECE00" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M16 21a16 16 0 000-18" stroke="#FECE00" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Chip */}
          <div className="mt-4">
            <div
              className="w-[42px] h-[30px] rounded-md"
              style={{
                background: "linear-gradient(135deg, #FECE00 0%, #B86A00 100%)",
                boxShadow: "0 2px 8px rgba(254,206,0,0.2)",
              }}
            />
          </div>

          {/* Card number */}
          <div className="mt-auto">
            <div className="text-white/60 font-heading text-[15px] tracking-[0.18em] font-semibold mb-3">
              **** **** **** 4000
            </div>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-white/25 font-body text-[9px] uppercase tracking-[0.1em]">
                  Titular
                </div>
                <div className="text-white/50 font-heading text-[11px] font-bold tracking-wide">
                  USUARIO BILIO
                </div>
              </div>
              <div className="text-right">
                <div className="text-white/25 font-body text-[9px] uppercase tracking-[0.1em]">
                  Exp
                </div>
                <div className="text-white/50 font-heading text-[11px] font-bold">
                  12/28
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Edge glow */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            boxShadow: "inset 0 0 30px rgba(254,206,0,0.03)",
          }}
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}
