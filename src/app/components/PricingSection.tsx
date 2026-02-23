import { ScrollReveal } from "./motion/ScrollReveal";
import { useWaitlistDispatch } from "../waitlist/WaitlistContext";

export function PricingSection() {
  const dispatch = useWaitlistDispatch();

  const handleCTA = () => {
    dispatch({ type: 'SET_PLAN', plan: 'plus' });
    dispatch({ type: 'SET_LOCK_PRICE', lockPrice: true });
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="precios" className="bg-bilio-bg-card py-[100px] px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(254,206,0,0.4), transparent)" }} />
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(254,206,0,0.04) 0%, transparent 65%)" }} />

      <div className="max-w-[640px] mx-auto relative">
        <ScrollReveal className="text-center">
          <div className="inline-flex items-center gap-2 bg-bilio-surface-gold border border-bilio-border-gold rounded-full px-3.5 py-[5px] mb-5">
            <span className="text-bilio-primary font-body text-xs font-semibold tracking-[0.08em] uppercase">Precio de lanzamiento</span>
          </div>

          <h2 className="text-bilio-text font-heading font-extrabold tracking-[-0.03em] leading-[1.1] mb-5 text-[clamp(32px,4vw,52px)]">
            Empieza gratis.{" "}
            <span className="text-gradient-gold">Crece cuando quieras.</span>
          </h2>

          <p className="text-white/[0.42] font-body text-lg leading-[1.7] mb-10">
            Bilio es 100% gratis para empezar. Cuando quieras más, el plan Plus
            estará disponible a un precio especial de lanzamiento solo para quienes
            se inscriban a la lista de espera.
          </p>

          {/* Launch price card */}
          <div className="bg-gradient-to-br from-bilio-primary/10 to-bilio-secondary/[0.06] border border-bilio-primary/30 rounded-[22px] px-8 py-8 mb-8 shadow-[0_0_60px_rgba(254,206,0,0.08)]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <div className="text-bilio-primary font-heading text-xs font-bold tracking-[0.08em] uppercase mb-2">
                  Plan Plus
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-bilio-primary font-heading text-[42px] font-extrabold tracking-[-0.04em] leading-none">
                    S/14.90
                  </span>
                  <span className="text-white/30 font-body text-sm">/ mes</span>
                </div>
                <div className="text-white/35 font-body text-sm">
                  Menos de un café al día
                </div>
              </div>

              <div className="flex flex-col gap-2 text-left">
                {[
                  "Gastos ilimitados",
                  "WhatsApp + audio + fotos",
                  "Presupuestos y metas de ahorro",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" fill="rgba(254,206,0,0.15)"/>
                      <path d="M4.5 7L6.5 9L9.5 5" stroke="#FECE00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-white/60 font-body text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={handleCTA}
            className="bg-gradient-gold border-none text-bilio-bg font-heading text-sm font-extrabold cursor-pointer px-8 py-3.5 rounded-[14px] tracking-tight transition-all duration-200 btn-glow hover:shadow-[0_4px_24px_rgba(254,206,0,0.35)] mb-5"
          >
            Asegurar precio de lanzamiento →
          </button>

          <p className="text-white/20 font-body text-[13px]">
            Inscríbete gratis · El precio de lanzamiento es exclusivo para la lista de espera
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
