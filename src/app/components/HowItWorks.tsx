import { MessageCircle, Mic, BarChart3, type LucideIcon } from "lucide-react";
import { ScrollReveal } from "./motion/ScrollReveal";

const steps: { number: string; icon: LucideIcon; title: string; description: string; color: string }[] = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Abre el chat",
    description: "Entra a Bilio en la web o por WhatsApp. Tu cuenta se crea sola en tu primer mensaje. Sin formularios, sin configuración.",
    color: "#FECE00",
  },
  {
    number: "02",
    icon: Mic,
    title: "Dile tus gastos",
    description: "Escribe \"Gasté 50 en almuerzo\", manda una foto del recibo o una nota de voz. Bilio entiende todo y lo clasifica solo.",
    color: "#FEB601",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Bilio te muestra cómo vas",
    description: "Pregunta \"¿Cuánto gasté este mes?\" o \"¿Me alcanza para 200 en ropa?\" — y recibe una respuesta honesta al instante.",
    color: "#5E987D",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-bilio-bg py-[100px] px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(94,152,125,0.4), transparent)" }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(254,206,0,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-[72px]">
          <div className="inline-flex items-center gap-2 bg-bilio-success/10 border border-bilio-success/20 rounded-full px-3.5 py-[5px] mb-5">
            <span className="text-bilio-success font-body text-xs font-semibold tracking-[0.08em] uppercase">Cómo funciona</span>
          </div>
          <h2 className="text-bilio-text font-heading font-extrabold tracking-[-0.03em] leading-[1.1] mb-4 text-[clamp(32px,4vw,52px)]">
            Empieza en{" "}
            <span className="text-gradient-gold">30 segundos.</span>
          </h2>
          <p className="text-bilio-text-faint font-body text-lg max-w-[480px] mx-auto leading-[1.6]">
            Sin configuración. Sin tutoriales. Solo abre y habla.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connector line */}
            <div
              className="hidden md:block absolute top-11 left-[calc(16.6%+24px)] right-[calc(16.6%+24px)] h-px pointer-events-none z-0"
              style={{ background: "linear-gradient(90deg, rgba(254,206,0,0.3), rgba(254,182,1,0.2), rgba(94,152,125,0.3))" }}
            />

            {steps.map((step, i) => (
              <div
                key={step.number}
                className="group glass-card rounded-[20px] px-7 py-8 relative z-[1] transition-all duration-300 text-center overflow-hidden hover:bg-bilio-surface-hover hover:border-bilio-border-gold hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              >
                {/* Shimmer sweep on hover */}
                <div
                  className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none"
                  style={{ background: "linear-gradient(105deg, transparent 40%, rgba(254,206,0,0.06) 50%, transparent 60%)" }}
                  aria-hidden="true"
                />

                <div className="relative z-[1]">
                  {/* Step number circle */}
                  <div className="relative inline-flex mb-5">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ background: `${step.color}15`, border: `2px solid ${step.color}35` }}
                    >
                      <step.icon className="w-6 h-6" style={{ color: step.color }} strokeWidth={1.8} />
                    </div>
                    <div
                      className="absolute -top-1.5 -right-1.5 w-[22px] h-[22px] rounded-full flex items-center justify-center font-heading text-[10px] font-extrabold text-bilio-bg border-2 border-bilio-bg"
                      style={{ background: step.color }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <h3 className="text-bilio-text font-heading text-xl font-bold tracking-[-0.02em] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/40 font-body text-[15px] leading-[1.7] tracking-[0.01em]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
