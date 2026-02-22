import { Lock, MapPin, Gift } from "lucide-react";
import imgHeroBg from "@/assets/8d4d7d2a21d90b549fc4e0b21f5f2b2e452b0fa2.png";
import { ScrollReveal } from "./motion/ScrollReveal";
import { PlanSelector } from "./PlanSelector";
import { CountryCodeSelector } from "./CountryCodeSelector";
import { useWaitlist, useWaitlistDispatch } from "../waitlist/WaitlistContext";
import { submitWaitlist } from "../waitlist/submitWaitlist";

const trustSignals = [
  { icon: Lock, label: "Datos seguros" },
  { icon: MapPin, label: "Hecho en Perú" },
  { icon: Gift, label: "Gratis para empezar" },
];

const planLabels: Record<string, string> = {
  gratis: 'Gratis',
  plus: 'Plus',
  premium: 'Premium',
};

export function WaitlistCTA() {
  const state = useWaitlist();
  const dispatch = useWaitlistDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state.submitting) return;

    dispatch({ type: 'SET_SOURCE', source: 'waitlist-cta' });
    dispatch({ type: 'SUBMIT_START' });

    const result = await submitWaitlist({
      name: state.name,
      email: state.email,
      phone: state.phone,
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

      <ScrollReveal className="max-w-[680px] mx-auto text-center relative z-[1]">
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

        <p className="text-white/[0.42] font-body leading-[1.7] max-w-[520px] mx-auto mb-10 text-[clamp(16px,2vw,18px)]">
          Únete a la lista de espera y sé el primero en saber cuándo Bilio abre sus puertas. Sin spam. Solo novedades.
        </p>

        {!state.submitted ? (
          <div className="max-w-[520px] mx-auto">
            {/* Plan selector */}
            <div className="mb-5">
              <PlanSelector
                value={state.plan}
                onChange={(plan) => dispatch({ type: 'SET_PLAN', plan })}
                size="md"
              />
              <p className="text-white/30 font-body text-sm mt-2.5">
                Plan seleccionado: <span className="text-bilio-primary font-semibold">{planLabels[state.plan]}</span>
              </p>
            </div>

            {/* Full form */}
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="flex flex-col gap-2.5 mb-4">
                {/* Name */}
                <div className="bg-white/[0.06] border border-white/[0.12] rounded-[14px] px-[18px] py-3 backdrop-blur-[20px] transition-[border-color] duration-200">
                  <input
                    type="text"
                    value={state.name}
                    onChange={(e) => dispatch({ type: 'SET_NAME', name: e.target.value })}
                    placeholder="Tu nombre"
                    className="w-full bg-transparent border-none outline-none text-bilio-text font-body text-[15px]"
                  />
                </div>

                {/* Email */}
                <div className="bg-white/[0.06] border border-white/[0.12] rounded-[14px] px-[18px] py-3 backdrop-blur-[20px] transition-[border-color] duration-200">
                  <input
                    type="email"
                    value={state.email}
                    onChange={(e) => dispatch({ type: 'SET_EMAIL', email: e.target.value })}
                    placeholder="tu@correo.com"
                    required
                    className="w-full bg-transparent border-none outline-none text-bilio-text font-body text-[15px]"
                  />
                </div>

                {/* Phone with country code */}
                <div className="flex gap-2">
                  <CountryCodeSelector
                    value={state.countryCode}
                    onChange={(iso) => dispatch({ type: 'SET_COUNTRY_CODE', countryCode: iso })}
                  />
                  <div className="flex-1 bg-white/[0.06] border border-white/[0.12] rounded-[14px] px-[18px] py-3 backdrop-blur-[20px] transition-[border-color] duration-200">
                    <input
                      type="tel"
                      value={state.phone}
                      onChange={(e) => dispatch({ type: 'SET_PHONE', phone: e.target.value })}
                      placeholder="999 888 777"
                      className="w-full bg-transparent border-none outline-none text-bilio-text font-body text-[15px]"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-gradient-gold border-none text-bilio-bg font-heading text-sm font-extrabold cursor-pointer px-6 py-3.5 rounded-[14px] tracking-tight whitespace-nowrap transition-all duration-200 btn-glow disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Enviando...' : 'Asegurar mi lugar →'}
                </button>
              </div>

              {/* Error message */}
              {state.error && (
                <p className="text-bilio-danger font-body text-sm mb-3">{state.error}</p>
              )}

              {/* Lock price checkbox */}
              <label className="flex items-center gap-3 justify-center cursor-pointer group">
                <div className="relative flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={state.lockPrice}
                    onChange={(e) => dispatch({ type: 'SET_LOCK_PRICE', lockPrice: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-6 h-6 rounded-md border-2 border-white/20 bg-white/[0.04] transition-all duration-200 peer-checked:bg-bilio-primary peer-checked:border-bilio-primary peer-checked:shadow-[0_0_14px_rgba(254,206,0,0.4)] flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-bilio-bg opacity-0 peer-checked:opacity-100 transition-opacity"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path d="M3 7L6 10L11 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {/* Checkmark overlay — visible when checked */}
                  {state.lockPrice && (
                    <svg
                      className="absolute inset-0 w-6 h-6 p-[5px] text-bilio-bg pointer-events-none"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path d="M3 7L6 10L11 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <span className="text-white/50 font-body text-sm group-hover:text-white/70 transition-colors">
                  Quiero asegurar el precio de lanzamiento
                </span>
              </label>
            </form>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2.5 bg-bilio-success/10 border border-bilio-success/30 rounded-[14px] px-7 py-4 mb-5 max-w-[480px] mx-auto">
            <div className="w-[22px] h-[22px] rounded-full bg-bilio-success flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span className="text-bilio-success font-body text-[15px] font-semibold">
              ¡Listo! Te guardamos el plan {planLabels[state.plan]}
              {state.lockPrice ? ' a precio de lanzamiento' : ''}.
            </span>
          </div>
        )}

        <p className={`text-white/20 font-body text-[13px] ${state.submitted ? "mt-4" : ""}`}>
          Sin tarjeta · Sin spam · Cancela cuando quieras
        </p>

        {/* Trust micro signals */}
        <div className="flex justify-center gap-6 mt-10 flex-wrap">
          {trustSignals.map((t) => (
            <span key={t.label} className="flex items-center gap-1.5 text-bilio-text-ghost font-body text-[13px]">
              <t.icon className="w-3.5 h-3.5 text-white/25" strokeWidth={1.8} />
              {t.label}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
