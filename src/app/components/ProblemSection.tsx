import { TableProperties, CircleHelp, ShieldAlert, Smartphone } from "lucide-react";
import { ScrollReveal } from "./motion/ScrollReveal";

const painPoints = [
  { icon: TableProperties, pain: "Planillas que nunca llenas", fix: "Solo escribe en el chat" },
  { icon: CircleHelp, pain: "No sabes en qué gastas", fix: "Bilio te lo dice al toque" },
  { icon: ShieldAlert, pain: "Vergüenza con el dinero", fix: "Bilio no te juzga, nunca" },
  { icon: Smartphone, pain: "Apps complicadas de aprender", fix: "Si usas WhatsApp, ya sabes" },
];

export function ProblemSection() {
  return (
    <section className="bg-bilio-bg py-[100px] px-6 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(254,206,0,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1100px] mx-auto text-center relative">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.09] rounded-full px-3.5 py-[5px] mb-9">
            <span className="text-white/[0.38] font-body text-xs font-semibold tracking-[0.08em] uppercase">
              ¿Te suena familiar?
            </span>
          </div>

          <h2 className="text-bilio-text font-heading font-extrabold tracking-[-0.03em] leading-[1.05] mb-7 text-[clamp(36px,5vw,64px)]">
            Tu plata{" "}
            <span className="text-white/25 line-through decoration-bilio-primary/40">
              desaparece
            </span>{" "}
            y no sabes a dónde.
          </h2>

          <p className="text-white/[0.42] font-body leading-[1.75] max-w-[640px] mx-auto mb-14 text-[clamp(16px,2vw,19px)]">
            Fin de mes, te preguntas: &ldquo;¿A dónde fue todo?&rdquo; Las planillas son un dolor,
            las apps son complicadas, y nadie te enseñó esto en el colegio.
            Bilio es diferente — solo habla.
          </p>
        </ScrollReveal>

        {/* Pain points */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {painPoints.map((item) => (
            <div
              key={item.pain}
              className="group glass-card rounded-2xl p-5 relative overflow-hidden transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] hover:bg-bilio-surface-hover hover:border-bilio-border-gold hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(254,206,0,0.08),inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
              {/* Shimmer sweep on hover */}
              <div
                className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none"
                style={{ background: "linear-gradient(105deg, transparent 40%, rgba(254,206,0,0.06) 50%, transparent 60%)" }}
                aria-hidden="true"
              />
              <div className="relative z-[1]">
                <div className="mb-3 w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center transition-transform duration-300 group-hover:rotate-[3deg]">
                  <item.icon className="w-5 h-5 text-white/40 group-hover:text-bilio-primary transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <div className="text-white/[0.28] font-body text-[13px] line-through decoration-white/15 mb-1.5">
                  {item.pain}
                </div>
                <div className="text-bilio-primary font-heading text-sm font-bold tracking-tight">
                  → {item.fix}
                </div>
              </div>
            </div>
          ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
