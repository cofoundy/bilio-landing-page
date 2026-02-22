import { useRef } from "react";
import { useInView } from "framer-motion";
import { Flame } from "lucide-react";
import { ScrollReveal } from "./motion/ScrollReveal";
import { useTilt3D } from "./motion/useTilt3D";
import { VirtualCreditCard } from "./motion/VirtualCreditCard";

/* ── Tilt wrapper for bento cards ── */
function TiltCard({ children, colClass }: { children: React.ReactNode; colClass: string }) {
  const { ref, style, lightStyle, handlers } = useTilt3D();

  return (
    <div
      ref={ref}
      className={`${colClass} glass-card rounded-[20px] p-6 transition-[background-color,border-color] duration-300 min-h-[220px] relative overflow-hidden`}
      style={style}
      {...handlers}
    >
      <div style={lightStyle} aria-hidden="true" />
      <div className="relative z-[1] h-full">{children}</div>
    </div>
  );
}

/* ── Budget card ── */
function BudgetCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  const items = [
    { emoji: "🍕", name: "Comida", used: 320, max: 500, pct: 64 },
    { emoji: "🎮", name: "Ocio", used: 195, max: 200, pct: 97 },
    { emoji: "🚕", name: "Transporte", used: 80, max: 250, pct: 32 },
  ];

  return (
    <div ref={ref} className="flex flex-col gap-4 h-full">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-bilio-text font-heading text-base font-bold tracking-tight">Te avisa antes de pasarte</div>
          <div className="text-white/30 font-body text-xs mt-[3px]">Presupuestos inteligentes</div>
        </div>
        <div className="bg-bilio-primary/10 border border-bilio-primary/20 rounded-lg px-2.5 py-[5px]">
          <span className="text-bilio-primary font-body text-[11px] font-bold">Este mes</span>
        </div>
      </div>

      {items.map((item, i) => {
        const color = item.pct >= 90 ? "#ef4444" : item.pct >= 75 ? "#FEB601" : "#5E987D";
        return (
          <div key={item.name}>
            <div className="flex justify-between items-center mb-1.5">
              <div className="flex items-center gap-[7px]">
                <span className="text-sm">{item.emoji}</span>
                <span className="text-white/65 font-body text-[13px]">{item.name}</span>
                {item.pct >= 90 && (
                  <span className="bg-bilio-danger/[0.12] border border-bilio-danger/25 rounded-full px-[7px] py-0.5 text-bilio-danger text-[10px] font-body font-bold">
                    Cuidado
                  </span>
                )}
              </div>
              <span className="text-white/45 font-heading text-xs font-semibold">S/{item.used} / S/{item.max}</span>
            </div>
            <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: inView ? `${item.pct}%` : "0%",
                  background: `linear-gradient(90deg, ${color}99, ${color})`,
                  transition: `width 0.8s cubic-bezier(0.33, 1, 0.68, 1) ${0.2 + i * 0.15}s`,
                }}
              />
            </div>
          </div>
        );
      })}

      <div className="mt-1 bg-bilio-primary/[0.06] border border-bilio-primary/[0.12] rounded-[10px] px-[13px] py-[9px] flex items-center gap-2">
        <span className="text-[13px]">💬</span>
        <span className="text-white/40 font-body text-xs">Pregunta: <span className="text-bilio-primary font-semibold">&ldquo;¿Me alcanza para 200 en ropa?&rdquo;</span></span>
      </div>
    </div>
  );
}

/* ── Debts card ── */
function DebtsCard() {
  return (
    <div className="flex flex-col gap-3.5 h-full">
      <div>
        <div className="text-bilio-text font-heading text-base font-bold tracking-tight">Nunca más olvides quién te debe</div>
        <div className="text-white/30 font-body text-xs mt-[3px]">Deudas entre amigos</div>
      </div>

      {[
        { name: "Juan", type: "te debe", amount: "+S/150", avatar: "#FECE00", text: "#151515", urgent: false },
        { name: "María", type: "le debes", amount: "-S/80", avatar: "#5E987D", text: "#fff", urgent: true },
        { name: "Carlos", type: "te debe", amount: "+S/220", avatar: "#FEB601", text: "#151515", urgent: false },
      ].map((d) => (
        <div
          key={d.name}
          className="flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.06] rounded-xl px-3 py-2.5"
        >
          <div
            className="w-[34px] h-[34px] rounded-full flex items-center justify-center font-heading text-[13px] font-extrabold shrink-0"
            style={{ background: d.avatar, color: d.text }}
          >
            {d.name[0]}
          </div>
          <div className="flex-1">
            <div className="text-bilio-text font-heading text-[13px] font-semibold">{d.name}</div>
            <div className="text-white/[0.28] font-body text-[11px]">{d.type}</div>
          </div>
          <div className="flex items-center gap-1.5">
            {d.urgent && <div className="w-1.5 h-1.5 rounded-full bg-bilio-secondary" />}
            <span
              className="font-heading text-sm font-extrabold"
              style={{ color: d.amount.startsWith("+") ? "#5E987D" : "#ef4444" }}
            >
              {d.amount}
            </span>
          </div>
        </div>
      ))}

      <div className="mt-auto text-white/25 font-body text-xs text-center">
        Balance neto: <span className="text-bilio-success font-bold">te deben S/290 más</span>
      </div>
    </div>
  );
}

/* ── Savings card ── */
function SavingsCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  const goals = [
    { name: "Vacaciones Japon", saved: 4000, target: 10000, months: 6 },
    { name: "Laptop nueva", saved: 1800, target: 2500, months: 2 },
  ];

  return (
    <div ref={ref} className="flex flex-col gap-4 h-full">
      <div>
        <div className="text-bilio-text font-heading text-base font-bold tracking-tight">Ahorra para lo que importa</div>
        <div className="text-white/30 font-body text-xs mt-[3px]">Metas de ahorro</div>
      </div>

      {goals.map((g, i) => {
        const pct = Math.round((g.saved / g.target) * 100);
        return (
          <div key={g.name} className="bg-white/[0.03] border border-bilio-border rounded-[14px] px-4 py-3.5">
            <div className="flex justify-between items-center mb-2.5">
              <div className="text-bilio-text font-heading text-[13px] font-bold">{g.name}</div>
              <div className="text-bilio-primary font-heading text-[13px] font-extrabold">{pct}%</div>
            </div>
            <div className="h-1.5 bg-white/[0.06] rounded-full mb-2 overflow-hidden">
              <div
                className="h-full bg-gradient-gold rounded-full"
                style={{
                  width: inView ? `${pct}%` : "0%",
                  transition: `width 0.8s cubic-bezier(0.33, 1, 0.68, 1) ${0.2 + i * 0.15}s`,
                }}
              />
            </div>
            <div className="flex justify-between">
              <span className="text-white/35 font-body text-[11px]">S/{g.saved.toLocaleString()} / S/{g.target.toLocaleString()}</span>
              <span className="text-white/25 font-body text-[11px]">~{g.months} meses</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ── Streak card ── */
function StreakCard() {
  const levels = ["Frio", "Tibio", "Caliente", "En Llamas", "Legendario"];
  const currentLevel = 2;

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-full text-center">
      <div className="w-14 h-14 rounded-2xl bg-bilio-primary/10 border border-bilio-primary/20 flex items-center justify-center">
        <Flame className="w-7 h-7 text-bilio-primary" strokeWidth={1.8} />
      </div>
      <div>
        <div className="text-bilio-primary font-heading text-[42px] font-extrabold tracking-[-0.04em] leading-none">15</div>
        <div className="text-white/35 font-body text-[13px] mt-1">dias seguidos</div>
      </div>

      <div className="bg-bilio-surface-gold border border-bilio-primary/20 rounded-[10px] px-3.5 py-1.5">
        <span className="text-bilio-primary font-heading text-[13px] font-bold">{levels[currentLevel]}</span>
      </div>

      <div className="flex gap-1 w-full">
        {levels.map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-1 rounded-full ${i <= currentLevel ? "bg-gradient-gold" : "bg-white/[0.07]"}`}
          />
        ))}
      </div>

      <p className="text-white/[0.28] font-body text-xs leading-[1.5]">
        Usuarios con 7+ dias registran <span className="text-bilio-primary font-bold">3x más</span>. El hábito se vuelve automático.
      </p>
    </div>
  );
}

/* ── Emotional card ── */
function EmotionalCard() {
  const exchanges = [
    { from: "user", text: "Gasté 200 en ropa, tenía un día horrible" },
    { from: "bilio", text: "Días así pasan. Registrado: S/200 en Ropa. ¿Quieres ver cómo vas con tu presupuesto?" },
  ];

  return (
    <div className="flex flex-col gap-3.5 h-full">
      <div>
        <div className="text-bilio-text font-heading text-base font-bold tracking-tight">Te entiende. No te juzga.</div>
        <div className="text-white/30 font-body text-xs mt-[3px]">Inteligencia emocional</div>
      </div>

      <div className="flex flex-col gap-2">
        {exchanges.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] px-3.5 py-2.5 font-body text-[13px] leading-[1.5] ${
                msg.from === "user"
                  ? "rounded-[14px_14px_4px_14px] bg-white/[0.07] border border-white/[0.08] text-white/[0.58]"
                  : "rounded-[14px_14px_14px_4px] bg-bilio-primary/[0.09] border border-bilio-primary/[0.18] text-white/[0.78]"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-1.5">
        {["Nunca dice 'deberías'", "Celebra tus logros", "Respuestas cortas"].map((tag) => (
          <div key={tag} className="bg-bilio-success/10 border border-bilio-success/20 rounded-full px-2.5 py-1">
            <span className="text-bilio-success font-body text-[11px] font-semibold">{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeaturesBento() {
  const cards = [
    { content: <BudgetCard />, colClass: "col-span-12 lg:col-span-7" },
    { content: <DebtsCard />, colClass: "col-span-12 lg:col-span-5" },
    { content: <SavingsCard />, colClass: "col-span-12 lg:col-span-5" },
    { content: <StreakCard />, colClass: "col-span-12 sm:col-span-6 lg:col-span-3" },
    { content: <EmotionalCard />, colClass: "col-span-12 sm:col-span-6 lg:col-span-4" },
    {
      content: (
        <div className="flex items-center justify-center h-full">
          <VirtualCreditCard />
        </div>
      ),
      colClass: "col-span-12 lg:col-span-5",
    },
  ];

  return (
    <section id="bento" className="bg-bilio-bg-card py-[100px] px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(254,206,0,0.4), transparent)" }} />
      <div className="absolute top-[30%] right-[-5%] w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(18,49,73,0.5) 0%, transparent 70%)" }} />

      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-bilio-secondary/[0.08] border border-bilio-secondary/[0.18] rounded-full px-3.5 py-[5px] mb-5">
            <span className="text-bilio-secondary font-body text-xs font-semibold tracking-[0.08em] uppercase">Todo lo demás</span>
          </div>
          <h2 className="text-bilio-text font-heading font-extrabold tracking-[-0.03em] leading-[1.1] mb-4 text-[clamp(32px,4vw,52px)]">
            Bilio hace{" "}
            <span className="text-gradient-gold">mucho más.</span>
          </h2>
          <p className="text-bilio-text-faint font-body text-lg max-w-[500px] mx-auto leading-[1.6]">
            Presupuestos, deudas, ahorro, rachas y coacheo emocional — todo en una sola conversación.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <ScrollReveal>
          <div className="grid grid-cols-12 gap-4">
            {cards.map((card, i) => (
              <TiltCard key={i} colClass={card.colClass}>
                {card.content}
              </TiltCard>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
