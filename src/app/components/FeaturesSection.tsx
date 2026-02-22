/* ── Chat mockup ── */
function ChatMockup() {
  const messages = [
    { from: "user", text: "Gaste 50 en almuerzo con Juan" },
    { from: "bilio", text: "✓ Registrado → 🍕 Comida · S/50.00" },
    { from: "user", text: "La cuenta fue 180, éramos 3" },
    { from: "bilio", text: "✓ Tu parte: S/60.00 → 🍕 Comida" },
    { from: "user", text: "¿Cuánto gasté en comida este mes?" },
    { from: "bilio", text: "🍕 Comida este mes: S/320 · ↑15% vs anterior" },
  ];

  return (
    <div className="bg-[rgba(15,15,12,0.95)] border border-bilio-primary/15 rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(254,206,0,0.08)] max-w-[360px] w-full">
      {/* Chat header */}
      <div className="bg-bilio-primary/[0.07] border-b border-bilio-primary/10 px-[18px] py-3.5 flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center text-base">🐷</div>
        <div>
          <div className="text-bilio-text font-heading text-sm font-bold">Bilio</div>
          <div className="flex items-center gap-[5px]">
            <div className="w-1.5 h-1.5 rounded-full bg-bilio-success shadow-[0_0_6px_#5E987D]" />
            <span className="text-bilio-success font-body text-[11px] font-semibold">en línea</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="px-3.5 py-[18px] flex flex-col gap-2.5">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[78%] px-3.5 py-[9px] font-body text-[13px] leading-[1.4] ${
                msg.from === "user"
                  ? "rounded-[16px_16px_4px_16px] bg-white/[0.08] border border-white/[0.08] text-white/75"
                  : "rounded-[16px_16px_16px_4px] bg-bilio-primary/10 border border-bilio-primary/20 text-bilio-primary font-semibold"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        <div className="flex gap-[5px] items-center pl-1">
          {[0,1,2].map((d) => (
            <div
              key={d}
              className="w-1.5 h-1.5 rounded-full bg-bilio-primary/35 animate-bounce-dot"
              style={{ animationDuration: `${0.6 + d * 0.15}s` }}
            />
          ))}
        </div>
      </div>

      {/* Input bar */}
      <div className="border-t border-white/5 px-3.5 py-3 flex items-center gap-2.5">
        <div className="flex-1 bg-white/5 border border-white/[0.08] rounded-[20px] px-3.5 py-2">
          <span className="text-white/20 font-body text-[13px]">Escribe algo...</span>
        </div>
        <div className="w-[34px] h-[34px] rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ── Expense breakdown mockup ── */
function ExpenseMockup() {
  const cats = [
    { emoji: "🍕", name: "Comida", pct: 35, amount: "S/420" },
    { emoji: "🚕", name: "Transporte", pct: 20, amount: "S/240" },
    { emoji: "🏠", name: "Vivienda", pct: 22, amount: "S/264" },
    { emoji: "🎮", name: "Ocio", pct: 12, amount: "S/144" },
    { emoji: "💊", name: "Salud", pct: 11, amount: "S/132" },
  ];

  return (
    <div className="bg-[rgba(15,15,12,0.95)] border border-bilio-success/20 rounded-3xl p-6 max-w-[360px] w-full shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_60px_rgba(94,152,125,0.07)]">
      <div className="flex justify-between items-start mb-5">
        <div>
          <div className="text-white/[0.38] font-body text-[11px] font-semibold tracking-[0.08em] uppercase mb-1">Este mes</div>
          <div className="text-bilio-text font-heading text-[28px] font-extrabold tracking-[-0.03em]">S/1,200</div>
        </div>
        <div className="bg-bilio-primary/10 border border-bilio-primary/20 rounded-[10px] px-2.5 py-[5px] flex items-center gap-1">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="#FECE00"><path d="M5 1L9 5H6V9H4V5H1L5 1Z"/></svg>
          <span className="text-bilio-primary font-heading text-[11px] font-bold">+8% vs anterior</span>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        {cats.map((c) => (
          <div key={c.name}>
            <div className="flex justify-between items-center mb-[5px]">
              <div className="flex items-center gap-2">
                <span className="text-sm">{c.emoji}</span>
                <span className="text-white/65 font-body text-[13px] font-medium">{c.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/30 font-body text-xs">{c.pct}%</span>
                <span className="text-bilio-text font-heading text-[13px] font-bold">{c.amount}</span>
              </div>
            </div>
            <div className="h-[5px] bg-white/[0.06] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-gold rounded-full opacity-80"
                style={{ width: `${c.pct * 2.8}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[18px] bg-bilio-success/[0.08] border border-bilio-success/15 rounded-xl px-3.5 py-2.5 flex items-center gap-2">
        <span className="text-sm">💡</span>
        <span className="text-bilio-success font-body text-xs font-semibold">
          Comida subió 15% esta semana. ¿Todo bien?
        </span>
      </div>
    </div>
  );
}

/* ── WhatsApp mockup ── */
function WhatsAppMockup() {
  const msgs: { from: string; text: string; time: string; isAudio?: boolean; isPhoto?: boolean }[] = [
    { from: "user", text: "Gaste 30 en taxi", time: "9:14" },
    { from: "bilio", text: "✓ S/30 en 🚕 Transporte", time: "9:14" },
    { from: "user", text: "🎤 [Nota de voz — 0:08]", time: "9:22", isAudio: true },
    { from: "bilio", text: "Entendido: S/85 en 🛒 Supermercado ✓", time: "9:22" },
    { from: "user", text: "📷 [Foto del recibo]", time: "9:45", isPhoto: true },
    { from: "bilio", text: "Leí tu recibo: S/47.50 en 🍕 Comida ✓", time: "9:45" },
  ];

  return (
    <div className="bg-[#0b1014] border border-white/[0.08] rounded-3xl overflow-hidden max-w-[360px] w-full shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
      {/* WA header */}
      <div className="bg-[#1a2a22] px-[18px] py-3.5 flex items-center gap-2.5">
        <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-bilio-whatsapp to-bilio-whatsapp-dark flex items-center justify-center text-lg">🐷</div>
        <div className="flex-1">
          <div className="text-bilio-text font-heading text-sm font-bold">Bilio</div>
          <div className="text-bilio-whatsapp font-body text-[11px] font-semibold">en línea</div>
        </div>
        <div className="bg-bilio-whatsapp rounded-md px-2 py-[3px]">
          <span className="text-bilio-text font-heading text-[10px] font-extrabold">WhatsApp</span>
        </div>
      </div>

      {/* WA messages */}
      <div
        className="bg-[#0d1117] p-3.5 flex flex-col gap-2"
        style={{ backgroundImage: "radial-gradient(rgba(37,211,102,0.025) 1px, transparent 1px)", backgroundSize: "20px 20px" }}
      >
        {msgs.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[78%] px-3 py-2 font-body text-[13px] leading-[1.4] text-[#e9edef] ${
                msg.from === "user"
                  ? "rounded-[12px_12px_3px_12px] bg-[#005c4b]"
                  : "rounded-[12px_12px_12px_3px] bg-[#1f2c34]"
              }`}
            >
              {msg.isAudio && (
                <div className="flex items-center gap-2 text-bilio-whatsapp">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 2v6M5 4v4M3 5v2M9 4v4M11 5v2"/></svg>
                  <span className="text-[#8696a0]">Nota de voz · 0:08</span>
                </div>
              )}
              {msg.isPhoto && (
                <div className="flex items-center gap-1.5 text-[#8696a0]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="2" width="12" height="10" rx="2"/><circle cx="4.5" cy="5.5" r="1"/><path d="M1 9l3-3 2 2 2-3 4 4"/></svg>
                  Foto del recibo
                </div>
              )}
              {!msg.isAudio && !msg.isPhoto && msg.text}
              <div className="flex justify-end mt-[3px]">
                <span className="text-[#8696a0] text-[10px]">{msg.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* WA input */}
      <div className="bg-[#1f2c34] px-3 py-2.5 flex items-center gap-2.5">
        <div className="flex-1 bg-[#2a3942] rounded-[20px] px-3.5 py-2">
          <span className="text-[#8696a0] font-body text-[13px]">Mensaje</span>
        </div>
        <div className="w-[38px] h-[38px] rounded-full bg-bilio-whatsapp flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M7 9H2L1 14L15 8L1 2L2 7H7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </div>
    </div>
  );
}

/* ── Section wrapper ── */
function FeatureRow({
  tag, tagColor, headline, highlightWord, description, proof, mockup, reversed = false,
}: {
  tag: string; tagColor: string; headline: string; highlightWord: string;
  description: string; proof: string; mockup: React.ReactNode; reversed?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[72px] items-center max-w-[1100px] mx-auto ${reversed ? "md:[direction:rtl]" : ""}`}
    >
      <div className={reversed ? "md:[direction:ltr]" : ""}>
        <div
          className="inline-flex items-center gap-2 rounded-full px-3.5 py-[5px] mb-[22px]"
          style={{ background: `${tagColor}12`, border: `1px solid ${tagColor}28` }}
        >
          <span className="font-body text-xs font-semibold tracking-[0.08em] uppercase" style={{ color: tagColor }}>{tag}</span>
        </div>

        <h2 className="text-bilio-text font-heading font-extrabold tracking-[-0.03em] leading-[1.08] mb-[18px] text-[clamp(32px,4vw,52px)]">
          {headline.split(highlightWord).map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && <span className="text-gradient-gold">{highlightWord}</span>}
            </span>
          ))}
        </h2>

        <p className="text-white/[0.43] font-body text-[17px] leading-[1.75] mb-7 tracking-[0.01em]">
          {description}
        </p>

        <div className="flex items-start gap-2.5 bg-white/[0.025] border border-bilio-border rounded-xl px-4 py-3">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
            <circle cx="8" cy="8" r="7" stroke={tagColor} strokeWidth="1.2"/>
            <path d="M5 8l2 2 4-4" stroke={tagColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-white/[0.38] font-body text-[13px] leading-[1.5]">{proof}</span>
        </div>
      </div>

      <div className={`flex justify-center ${reversed ? "md:[direction:ltr]" : ""}`}>
        {mockup}
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const sections = [
    {
      tag: "Chat primero",
      tagColor: "#FECE00",
      headline: "Solo dile cuánto gastaste.",
      highlightWord: "cuánto gastaste.",
      description: "Sin menús, sin formularios, sin categorías que llenar. Escribe como le escribirías a un amigo. Bilio entiende, clasifica y registra — todo en segundos.",
      proof: "Texto, fotos o audio — como quieras. Bilio entiende lenguaje natural en español.",
      mockup: <ChatMockup />,
      reversed: false,
      bg: "bg-bilio-bg",
    },
    {
      tag: "Gastos inteligentes",
      tagColor: "#5E987D",
      headline: "Sabe exactamente a dónde va tu plata.",
      highlightWord: "a dónde va tu plata.",
      description: "Bilio organiza tus gastos automáticamente en 18 categorías con emojis. Cada mes te dice: 35% Comida, 20% Transporte — para que sepas, por fin, la verdad.",
      proof: "18 categorías en español. Bilio clasifica tus gastos solo — sin que hagas nada.",
      mockup: <ExpenseMockup />,
      reversed: true,
      bg: "bg-bilio-bg-card",
    },
    {
      tag: "También por WhatsApp",
      tagColor: "#25D366",
      headline: "Funciona por WhatsApp. Sin descargar nada.",
      highlightWord: "Sin descargar nada.",
      description: "Manda un mensaje, una nota de voz o una foto del recibo por WhatsApp. Bilio lee todo. Si ya usas WhatsApp, ya sabes usar Bilio.",
      proof: "Mismas funciones que la web. Texto, fotos y audio — todo por WhatsApp.",
      mockup: <WhatsAppMockup />,
      reversed: false,
      bg: "bg-bilio-bg",
    },
  ];

  return (
    <>
      {sections.map((s) => (
        <section
          key={s.tag}
          className={`${s.bg} py-[100px] px-6 relative overflow-hidden`}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${s.tagColor}40, transparent)` }}
          />
          <FeatureRow {...s} />
        </section>
      ))}
    </>
  );
}
