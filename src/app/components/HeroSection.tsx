import { m as motion } from "framer-motion";
import imgHeroBg from "@/assets/8d4d7d2a21d90b549fc4e0b21f5f2b2e452b0fa2.png";
import { duration, ease } from "./motion/tokens";
import { useReducedMotion } from "./motion/useReducedMotion";
import { useParallax } from "./motion/useParallax";
import { useWaitlist, useWaitlistDispatch } from "../waitlist/WaitlistContext";
import { submitWaitlist } from "../waitlist/submitWaitlist";

const fadeBlurUp = (delay: number) => ({
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: duration.entrance, ease: ease.outCubic, delay },
  },
});

const planLabels: Record<string, string> = {
  gratis: 'Gratis',
  plus: 'Plus',
  premium: 'Premium',
};

export function HeroSection() {
  const state = useWaitlist();
  const dispatch = useWaitlistDispatch();
  const reduced = useReducedMotion();
  const { ref: gridRef, y: gridY } = useParallax(30);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state.submitting) return;

    dispatch({ type: 'SET_SOURCE', source: 'hero' });
    dispatch({ type: 'SUBMIT_START' });

    const result = await submitWaitlist({
      name: state.name,
      email: state.email,
      phone: '',
      countryCode: state.countryCode,
      plan: state.plan,
      lockPrice: state.lockPrice,
      source: 'hero',
    });

    if (result.success) {
      dispatch({ type: 'SUBMIT_SUCCESS' });
    } else {
      dispatch({ type: 'SUBMIT_ERROR', error: result.error || 'Error al enviar.' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-bilio-bg-deep flex flex-col overflow-hidden">
      {/* ── TOP ZONE: background image only ── */}
      <div className="relative h-[58vh] min-h-[380px] shrink-0">
        <img
          src={imgHeroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(90deg, #0a0900 0%, transparent 18%, transparent 82%, #0a0900 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-[55%] pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 0%, #0a0900 100%)" }} />

        {/* Parallax grid overlay */}
        <motion.div
          ref={gridRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(254,206,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(254,206,0,0.025) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            y: gridY,
          }}
        />

        {/* Ambient glow orbs */}
        <div
          className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(254,206,0,0.05) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute top-[30%] right-[10%] w-[250px] h-[250px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(18,49,73,0.08) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
      </div>

      {/* ── BOTTOM ZONE: all content ── */}
      <motion.div
        className="flex-1 bg-bilio-bg-deep flex flex-col items-center px-6 pb-20 -mt-10"
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-bilio-surface-gold border border-bilio-border-gold rounded-full px-4 py-1.5 mb-7 backdrop-blur-[10px]"
          variants={reduced ? {} : fadeBlurUp(0)}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-bilio-primary shadow-[0_0_8px_#FECE00]" />
          <span className="text-bilio-primary font-body text-[13px] font-semibold tracking-[0.02em]">
            Lista de espera abierta — Hecho en Peru
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-heading font-extrabold text-bilio-text text-center leading-[1.02] tracking-[-0.03em] max-w-[860px] mx-auto mb-5 text-[clamp(44px,7vw,88px)]"
          variants={reduced ? {} : fadeBlurUp(0.1)}
        >
          Por fin, alguien que{" "}
          <span className="text-gradient-gold">entiende tu plata.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="font-body text-bilio-text-muted text-center max-w-[580px] mx-auto mb-10 leading-[1.7] tracking-[0.01em] text-[clamp(16px,2vw,19px)]"
          variants={reduced ? {} : fadeBlurUp(0.2)}
        >
          Registra gastos, controla presupuestos, maneja deudas y ahorra — todo
          hablando con Bilio por chat o WhatsApp.
        </motion.p>

        {/* Waitlist form */}
        <motion.div className="w-full max-w-[520px]" variants={reduced ? {} : fadeBlurUp(0.3)}>
          {!state.submitted ? (
            <>
              <form
                onSubmit={handleSubmit}
                className="flex gap-2.5 flex-wrap justify-center mb-3 w-full"
              >
                <div className="flex-1 min-w-[220px] bg-white/5 border border-white/[0.12] rounded-[14px] p-1 pl-[18px] flex items-center gap-2 backdrop-blur-[16px] transition-[border-color] duration-200">
                  <input
                    type="email"
                    value={state.email}
                    onChange={(e) => dispatch({ type: 'SET_EMAIL', email: e.target.value })}
                    placeholder="tu@correo.com"
                    required
                    className="flex-1 bg-transparent border-none outline-none text-bilio-text font-body text-[15px] min-w-0"
                  />
                  {/* CTA with continuous glow pulse */}
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    className="bg-gradient-gold border-none text-bilio-bg font-heading text-sm font-extrabold cursor-pointer px-[22px] py-3 rounded-[10px] tracking-tight whitespace-nowrap transition-all duration-200 btn-glow disabled:opacity-60 disabled:cursor-not-allowed"
                    animate={
                      reduced
                        ? {}
                        : {
                            boxShadow: [
                              "0 4px 20px rgba(254,206,0,0.2)",
                              "0 4px 30px rgba(254,206,0,0.45)",
                              "0 4px 20px rgba(254,206,0,0.2)",
                            ],
                          }
                    }
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {state.submitting ? 'Enviando...' : 'Quiero acceso anticipado'}
                  </motion.button>
                </div>
              </form>

              {/* Error message */}
              {state.error && (
                <p className="text-bilio-danger font-body text-sm mb-2 text-center">{state.error}</p>
              )}
            </>
          ) : (
            <div className="flex items-center gap-2.5 bg-bilio-success/10 border border-bilio-success/30 rounded-[14px] px-6 py-3.5 mb-4 justify-center">
              <div className="w-5 h-5 rounded-full bg-bilio-success flex items-center justify-center">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M2 5.5L4.5 8L9 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-bilio-success font-body text-[15px] font-semibold">
                ¡Listo! Te guardamos el plan {planLabels[state.plan]}
                {state.lockPrice ? ' a precio de lanzamiento' : ''}.
              </span>
            </div>
          )}
        </motion.div>

        <motion.p
          className="text-bilio-text-ghost font-body text-[13px] mb-13 mt-4"
          variants={reduced ? {} : fadeBlurUp(0.38)}
        >
          Unirse es 100% gratis. Te avisamos cuando esté listo.
        </motion.p>

        {/* Social proof */}
        <motion.div
          className="flex items-center gap-6 flex-wrap justify-center"
          variants={reduced ? {} : fadeBlurUp(0.45)}
        >
          <div className="flex">
            {[
              { bg: "#FECE00", emoji: "\ud83d\ude0a" },
              { bg: "#5E987D", emoji: "\ud83d\ude04" },
              { bg: "#123149", emoji: "\ud83d\ude0e" },
              { bg: "#FEB601", emoji: "\ud83e\udd29" },
              { bg: "#B86A00", emoji: "\ud83d\ude09" },
            ].map((avatar, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-bilio-bg-deep flex items-center justify-center text-[14px] leading-none"
                style={{ background: avatar.bg, marginLeft: i === 0 ? 0 : -9 }}
              >
                {avatar.emoji}
              </div>
            ))}
          </div>
          <div>
            <div className="flex gap-0.5 mb-0.5">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill="#FECE00">
                  <path d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z"/>
                </svg>
              ))}
            </div>
            <span className="text-white/35 font-body text-[13px]">
              <strong className="text-white/60">+2,000 personas</strong> ya en la lista
            </span>
          </div>
          <div className="flex gap-7 border-l border-white/[0.07] pl-6">
            {[{ val: "Web + WhatsApp", label: "Disponible en" }, { val: "Gratis", label: "Para empezar" }].map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-bilio-primary font-heading text-base font-extrabold tracking-[-0.02em]">{m.val}</div>
                <div className="text-white/[0.28] font-body text-[11px]">{m.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
