export function ProblemSection() {
  return (
    <section className="bg-bilio-bg py-[100px] px-6 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(254,206,0,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1100px] mx-auto text-center relative">
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

        {/* Pain points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {[
            { emoji: "😩", pain: "Planillas que nunca llenas", fix: "Solo escribe en el chat" },
            { emoji: "🤷", pain: "No sabes en qué gastas", fix: "Bilio te lo dice al toque" },
            { emoji: "😰", pain: "Vergüenza con el dinero", fix: "Bilio no te juzga, nunca" },
            { emoji: "📱", pain: "Apps complicadas de aprender", fix: "Si usas WhatsApp, ya sabes" },
          ].map((item) => (
            <div
              key={item.pain}
              className="glass-card rounded-2xl p-5 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] hover:bg-bilio-surface-hover hover:border-bilio-border-gold hover:shadow-[0_8px_32px_rgba(254,206,0,0.08),inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
              <div className="text-2xl mb-2.5">{item.emoji}</div>
              <div className="text-white/[0.28] font-body text-[13px] line-through decoration-white/15 mb-1.5">
                {item.pain}
              </div>
              <div className="text-bilio-primary font-heading text-sm font-bold tracking-tight">
                → {item.fix}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
