import imgHeroBg from "@/assets/8d4d7d2a21d90b549fc4e0b21f5f2b2e452b0fa2.png";
import { ScrollReveal } from "./motion/ScrollReveal";
import { useWaitlist, useWaitlistDispatch } from "../waitlist/WaitlistContext";
import { submitWaitlist } from "../waitlist/submitWaitlist";

export function WaitlistCTA() {
  const state = useWaitlist();
  const dispatch = useWaitlistDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state.submitting) return;

    dispatch({ type: 'SET_SOURCE', source: 'waitlist-cta' });
    dispatch({ type: 'SUBMIT_START' });

    const result = await submitWaitlist({
      name: '',
      email: state.email,
      phone: '',
      countryCode: state.countryCode,
      plan: state.plan,
      lockPrice: state.lockPrice,
      source: 'waitlist-cta',
    });

    if (result.success) {
      dispatch({ type: 'SUBMIT_SUCCESS' });
    } else {
      dispatch({ type: 'SUBMIT_ERROR', error: result.error || 'Error al enviar.' });
    }
  };

  return (
    <section id="waitlist" className="bg-bilio-bg-deep py-[100px] px-6 relative overflow-hidden">
      {/* Arc bg image faint */}
      <img
        src={imgHeroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.18] pointer-events-none"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-bilio-bg-deep/[0.82] pointer-events-none" />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(254,206,0,0.1) 0%, transparent 65%)" }} />

      <ScrollReveal className="max-w-[520px] mx-auto text-center relative z-[1]">
        <div className="inline-flex items-center gap-2 bg-bilio-surface-gold border border-bilio-border-gold rounded-full px-4 py-1.5 mb-7">
          <div className="w-1.5 h-1.5 rounded-full bg-bilio-primary shadow-[0_0_8px_#FECE00]" />
          <span className="text-bilio-primary font-body text-[13px] font-semibold tracking-[0.02em]">
            Sé de los primeros — Hecho en Perú
          </span>
        </div>

        <h2 className="text-bilio-text font-heading font-extrabold tracking-[-0.03em] leading-[1.05] mb-5 text-[clamp(36px,5.5vw,72px)]">
          ¿Sabés a dónde va{" "}
          <span className="text-gradient-gold">cada sol?</span>
        </h2>

        <p className="text-white/[0.42] font-body leading-[1.7] max-w-[480px] mx-auto mb-10 text-[clamp(16px,2vw,18px)]">
          Únete a la lista de espera y sé el primero en saber cuándo Bilio abre sus puertas.
        </p>

        {!state.submitted ? (
          <div className="max-w-[420px] mx-auto">
            <form onSubmit={handleSubmit} className="flex gap-2.5 flex-wrap justify-center mb-4">
              <div className="flex-1 min-w-[220px] bg-white/[0.06] border border-white/[0.12] rounded-[14px] p-1 pl-[18px] flex items-center gap-2 backdrop-blur-[20px]">
                <input
                  type="email"
                  value={state.email}
                  onChange={(e) => dispatch({ type: 'SET_EMAIL', email: e.target.value })}
                  placeholder="tu@correo.com"
                  required
                  className="flex-1 bg-transparent border-none outline-none text-bilio-text font-body text-[15px] min-w-0"
                />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-gradient-gold border-none text-bilio-bg font-heading text-sm font-extrabold cursor-pointer px-6 py-3.5 rounded-[10px] tracking-tight whitespace-nowrap transition-all duration-200 btn-glow disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Enviando...' : 'Asegurar mi lugar →'}
                </button>
              </div>
            </form>

            {/* Error message */}
            {state.error && (
              <p className="text-bilio-danger font-body text-sm mb-3">{state.error}</p>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2.5 bg-bilio-success/10 border border-bilio-success/30 rounded-[14px] px-7 py-4 mb-5 max-w-[480px] mx-auto">
            <div className="w-[22px] h-[22px] rounded-full bg-bilio-success flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span className="text-bilio-success font-body text-[15px] font-semibold">
              ¡Listo! Te avisaremos cuando Bilio esté disponible.
            </span>
          </div>
        )}

        <p className="text-white/20 font-body text-[13px] mt-1">
          Unirse es 100% gratis · Datos seguros · Sin spam
        </p>
      </ScrollReveal>
    </section>
  );
}
