import { cn } from "./ui/utils";
import { ScrollReveal } from "./motion/ScrollReveal";

const plans = [
  {
    name: "Gratis",
    price: "S/0",
    period: "para siempre",
    description: "Para empezar sin riesgo. Sin tarjeta.",
    highlight: false,
    cta: "Unirme a la lista",
    features: [
      "30 gastos por mes",
      "Categorías automáticas",
      "Presupuestos mensuales",
      "Chat en la web",
      "Resumen financiero básico",
      "1 cuenta personal",
    ],
    missing: ["Audio y fotos", "WhatsApp", "Gmail automático"],
  },
  {
    name: "Plus",
    price: "S/14.90",
    period: "/ mes",
    tag: "Más popular",
    description: "Para quienes registran todos los días.",
    highlight: true,
    cta: "Quiero el Plus",
    features: [
      "200 gastos por mes",
      "30 notas de voz / mes",
      "Fotos de recibos",
      "WhatsApp incluido",
      "Múltiples cuentas",
      "Metas de ahorro",
      "Racha diaria + niveles",
      "Recordatorios de deudas",
    ],
    missing: ["Gmail automático"],
  },
  {
    name: "Premium",
    price: "S/24.90",
    period: "/ mes",
    description: "Todo ilimitado. Tu asistente financiero completo.",
    highlight: false,
    cta: "Quiero el Premium",
    features: [
      "Gastos ilimitados",
      "Audios ilimitados",
      "Gmail automático",
      "Aprobación por lote",
      "Vendors de confianza",
      "Cuentas compartidas",
      "Análisis avanzados",
      "Soporte prioritario",
    ],
    missing: [],
  },
];

export function PricingSection() {
  return (
    <section id="precios" className="bg-bilio-bg-card py-[100px] px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(254,206,0,0.4), transparent)" }} />
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(254,206,0,0.04) 0%, transparent 65%)" }} />

      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-bilio-surface-gold border border-bilio-border-gold rounded-full px-3.5 py-[5px] mb-5">
            <span className="text-bilio-primary font-body text-xs font-semibold tracking-[0.08em] uppercase">Precios</span>
          </div>
          <h2 className="text-bilio-text font-heading font-extrabold tracking-[-0.03em] leading-[1.1] mb-4 text-[clamp(32px,4vw,52px)]">
            Empieza gratis.{" "}
            <span className="text-white/30">Crece cuando quieras.</span>
          </h2>
          <p className="text-bilio-text-faint font-body text-lg leading-[1.6]">
            Sin tarjeta para empezar. Cancela cuando quieras.
          </p>
        </ScrollReveal>

        {/* Cards */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "group rounded-[22px] px-7 py-8 relative transition-all duration-300 overflow-hidden",
                plan.highlight
                  ? "bg-gradient-to-br from-bilio-primary/10 to-bilio-secondary/[0.06] border border-bilio-primary/30 scale-[1.03] shadow-[0_0_60px_rgba(254,206,0,0.1),0_20px_40px_rgba(0,0,0,0.4)]"
                  : "bg-bilio-surface border border-bilio-border hover:-translate-y-2 hover:border-bilio-border-gold"
              )}
            >
              {/* Shimmer sweep on non-highlighted cards */}
              {!plan.highlight && (
                <div
                  className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none"
                  style={{ background: "linear-gradient(105deg, transparent 40%, rgba(254,206,0,0.06) 50%, transparent 60%)" }}
                  aria-hidden="true"
                />
              )}

              <div className="relative z-[1]">
                {/* Popular badge */}
                {plan.tag && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-gold rounded-full px-4 py-1 whitespace-nowrap">
                    <span className="text-bilio-bg font-heading text-[11px] font-extrabold tracking-[0.02em]">{plan.tag}</span>
                  </div>
                )}

                {/* Plan name */}
                <div className="text-bilio-text-muted font-body text-xs font-bold tracking-[0.08em] uppercase mb-3">
                  {plan.name}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={cn(
                    "font-heading text-[40px] font-extrabold tracking-[-0.04em] leading-none",
                    plan.highlight ? "text-bilio-primary" : "text-bilio-text"
                  )}>
                    {plan.price}
                  </span>
                  <span className="text-white/30 font-body text-sm">{plan.period}</span>
                </div>

                {plan.price === "S/14.90" && (
                  <div className="text-white/30 font-body text-xs mb-2">
                    Menos de un café al día
                  </div>
                )}

                <p className="text-bilio-text-faint font-body text-sm leading-[1.5] mb-6">
                  {plan.description}
                </p>

                {/* CTA */}
                <a
                  href="#waitlist"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={cn(
                    "block w-full py-3.5 rounded-xl font-heading text-sm font-extrabold cursor-pointer tracking-tight transition-all duration-200 mb-7 text-center no-underline",
                    plan.highlight
                      ? "bg-gradient-gold border-none text-bilio-bg btn-glow"
                      : "bg-bilio-surface-light border border-white/10 text-white/60 hover:bg-bilio-surface-gold hover:text-bilio-primary hover:border-bilio-primary/20"
                  )}
                >
                  {plan.cta}
                </a>

                {/* Features list */}
                <div className="flex flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-[9px]">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="6" fill={plan.highlight ? "rgba(254,206,0,0.15)" : "rgba(94,152,125,0.12)"}/>
                        <path d="M4.5 7L6.5 9L9.5 5" stroke={plan.highlight ? "#FECE00" : "#5E987D"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-white/55 font-body text-[13px] font-medium">{f}</span>
                    </div>
                  ))}
                  {plan.missing.map((f) => (
                    <div key={f} className="flex items-center gap-[9px] opacity-35">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="6" fill="rgba(255,255,255,0.05)"/>
                        <path d="M5 5l4 4M9 5L5 9" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <span className="text-white/[0.28] font-body text-[13px] line-through decoration-white/10">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          </div>
        </ScrollReveal>

        <p className="text-center text-white/20 font-body text-[13px] mt-9">
          Todos los planes incluyen: datos encriptados · sin acceso bancario · cancela cuando quieras
        </p>
      </div>
    </section>
  );
}
