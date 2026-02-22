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
    <div
      style={{
        background: "rgba(15,15,12,0.95)",
        border: "1px solid rgba(254,206,0,0.15)",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(254,206,0,0.08)",
        maxWidth: 360,
        width: "100%",
      }}
    >
      {/* Chat header */}
      <div
        style={{
          background: "rgba(254,206,0,0.07)",
          borderBottom: "1px solid rgba(254,206,0,0.1)",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #FECE00, #FEB601)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🐷</div>
        <div>
          <div style={{ color: "#ffffff", fontFamily: "Archivo, sans-serif", fontSize: 14, fontWeight: 700 }}>Bilio</div>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#5E987D", boxShadow: "0 0 6px #5E987D" }} />
            <span style={{ color: "#5E987D", fontFamily: "Hind Vadodara, sans-serif", fontSize: 11, fontWeight: 600 }}>en línea</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div style={{ padding: "18px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
            }}
          >
            <div
              style={{
                maxWidth: "78%",
                padding: "9px 14px",
                borderRadius: msg.from === "user"
                  ? "16px 16px 4px 16px"
                  : "16px 16px 16px 4px",
                background: msg.from === "user"
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(254,206,0,0.1)",
                border: msg.from === "user"
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(254,206,0,0.2)",
                color: msg.from === "user" ? "rgba(255,255,255,0.75)" : "#FECE00",
                fontFamily: "Hind Vadodara, sans-serif",
                fontSize: 13,
                fontWeight: msg.from === "bilio" ? 600 : 400,
                lineHeight: 1.4,
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        <div style={{ display: "flex", gap: 5, alignItems: "center", paddingLeft: 4 }}>
          {[0,1,2].map((d) => (
            <div key={d} style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(254,206,0,0.35)", animation: `bounce ${0.6 + d * 0.15}s infinite alternate` }} />
          ))}
        </div>
      </div>

      {/* Input bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "12px 14px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "8px 14px" }}>
          <span style={{ color: "rgba(255,255,255,0.2)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 13 }}>Escribe algo...</span>
        </div>
        <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg, #FECE00, #FEB601)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <style>{`
        @keyframes bounce { from { transform: translateY(0); } to { transform: translateY(-5px); opacity: 0.6; } }
      `}</style>
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
    <div
      style={{
        background: "rgba(15,15,12,0.95)",
        border: "1px solid rgba(94,152,125,0.2)",
        borderRadius: 24,
        padding: 24,
        maxWidth: 360,
        width: "100%",
        boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(94,152,125,0.07)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
        <div>
          <div style={{ color: "rgba(255,255,255,0.38)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Este mes</div>
          <div style={{ color: "#ffffff", fontFamily: "Archivo, sans-serif", fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em" }}>S/1,200</div>
        </div>
        <div style={{ background: "rgba(254,206,0,0.1)", border: "1px solid rgba(254,206,0,0.2)", borderRadius: 10, padding: "5px 10px", display: "flex", alignItems: "center", gap: 4 }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="#FECE00"><path d="M5 1L9 5H6V9H4V5H1L5 1Z"/></svg>
          <span style={{ color: "#FECE00", fontFamily: "Archivo, sans-serif", fontSize: 11, fontWeight: 700 }}>+8% vs anterior</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {cats.map((c) => (
          <div key={c.name}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 14 }}>{c.emoji}</span>
                <span style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 13, fontWeight: 500 }}>{c.name}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 12 }}>{c.pct}%</span>
                <span style={{ color: "#ffffff", fontFamily: "Archivo, sans-serif", fontSize: 13, fontWeight: 700 }}>{c.amount}</span>
              </div>
            </div>
            <div style={{ height: 5, background: "rgba(255,255,255,0.06)", borderRadius: 100, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${c.pct * 2.8}%`, background: "linear-gradient(90deg, #FECE00, #FEB601)", borderRadius: 100, opacity: 0.8 }} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 18, background: "rgba(94,152,125,0.08)", border: "1px solid rgba(94,152,125,0.15)", borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 14 }}>💡</span>
        <span style={{ color: "#5E987D", fontFamily: "Hind Vadodara, sans-serif", fontSize: 12, fontWeight: 600 }}>
          Comida subió 15% esta semana. ¿Todo bien?
        </span>
      </div>
    </div>
  );
}

/* ── WhatsApp mockup ── */
function WhatsAppMockup() {
  const msgs = [
    { from: "user", text: "Gaste 30 en taxi", time: "9:14" },
    { from: "bilio", text: "✓ S/30 en 🚕 Transporte", time: "9:14" },
    { from: "user", text: "🎤 [Nota de voz — 0:08]", time: "9:22", isAudio: true },
    { from: "bilio", text: "Entendido: S/85 en 🛒 Supermercado ✓", time: "9:22" },
    { from: "user", text: "📷 [Foto del recibo]", time: "9:45", isPhoto: true },
    { from: "bilio", text: "Leí tu recibo: S/47.50 en 🍕 Comida ✓", time: "9:45" },
  ];

  return (
    <div
      style={{
        background: "#0b1014",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 24,
        overflow: "hidden",
        maxWidth: 360,
        width: "100%",
        boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
      }}
    >
      {/* WA header */}
      <div style={{ background: "#1a2a22", padding: "14px 18px", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg, #25D366, #128C7E)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🐷</div>
        <div style={{ flex: 1 }}>
          <div style={{ color: "#ffffff", fontFamily: "Archivo, sans-serif", fontSize: 14, fontWeight: 700 }}>Bilio</div>
          <div style={{ color: "#25D366", fontFamily: "Hind Vadodara, sans-serif", fontSize: 11, fontWeight: 600 }}>en línea</div>
        </div>
        <div style={{ background: "#25D366", borderRadius: 6, padding: "3px 8px" }}>
          <span style={{ color: "#ffffff", fontFamily: "Archivo, sans-serif", fontSize: 10, fontWeight: 800 }}>WhatsApp</span>
        </div>
      </div>

      {/* WA messages */}
      <div style={{ background: "#0d1117", backgroundImage: "radial-gradient(rgba(37,211,102,0.025) 1px, transparent 1px)", backgroundSize: "20px 20px", padding: "14px", display: "flex", flexDirection: "column", gap: 8 }}>
        {msgs.map((msg, i) => (
          <div key={i} style={{ display: "flex", justifyContent: msg.from === "user" ? "flex-end" : "flex-start" }}>
            <div
              style={{
                maxWidth: "78%",
                padding: "8px 12px",
                borderRadius: msg.from === "user" ? "12px 12px 3px 12px" : "12px 12px 12px 3px",
                background: msg.from === "user" ? "#005c4b" : "#1f2c34",
                color: "#e9edef",
                fontFamily: "Hind Vadodara, sans-serif",
                fontSize: 13,
                lineHeight: 1.4,
              }}
            >
              {msg.isAudio && (
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#25D366" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 2v6M5 4v4M3 5v2M9 4v4M11 5v2"/></svg>
                  <span style={{ color: "#8696a0" }}>Nota de voz · 0:08</span>
                </div>
              )}
              {msg.isPhoto && (
                <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#8696a0" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="2" width="12" height="10" rx="2"/><circle cx="4.5" cy="5.5" r="1"/><path d="M1 9l3-3 2 2 2-3 4 4"/></svg>
                  Foto del recibo
                </div>
              )}
              {!msg.isAudio && !msg.isPhoto && msg.text}
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 3 }}>
                <span style={{ color: "#8696a0", fontSize: 10 }}>{msg.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* WA input */}
      <div style={{ background: "#1f2c34", padding: "10px 12px", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ flex: 1, background: "#2a3942", borderRadius: 20, padding: "8px 14px" }}>
          <span style={{ color: "#8696a0", fontFamily: "Hind Vadodara, sans-serif", fontSize: 13 }}>Mensaje</span>
        </div>
        <div style={{ width: 38, height: 38, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 72,
        alignItems: "center",
        maxWidth: 1100,
        margin: "0 auto",
        direction: reversed ? "rtl" : "ltr",
      }}
      className="feature-row"
    >
      <div style={{ direction: "ltr" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: `${tagColor}12`,
            border: `1px solid ${tagColor}28`,
            borderRadius: 100,
            padding: "5px 14px",
            marginBottom: 22,
          }}
        >
          <span style={{ color: tagColor, fontFamily: "Hind Vadodara, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{tag}</span>
        </div>

        <h2
          style={{
            color: "#ffffff",
            fontFamily: "Archivo, sans-serif",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            marginBottom: 18,
          }}
          dangerouslySetInnerHTML={{
            __html: headline.replace(
              highlightWord,
              `<span style="background: linear-gradient(90deg, #FECE00, #FEB601); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${highlightWord}</span>`
            ),
          }}
        />

        <p style={{ color: "rgba(255,255,255,0.43)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 17, lineHeight: 1.75, marginBottom: 28, letterSpacing: "0.01em" }}>
          {description}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 12,
            padding: "12px 16px",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
            <circle cx="8" cy="8" r="7" stroke={tagColor} strokeWidth="1.2"/>
            <path d="M5 8l2 2 4-4" stroke={tagColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ color: "rgba(255,255,255,0.38)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 13, lineHeight: 1.5 }}>{proof}</span>
        </div>
      </div>

      <div style={{ direction: "ltr", display: "flex", justifyContent: "center" }}>
        {mockup}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .feature-row { grid-template-columns: 1fr !important; direction: ltr !important; gap: 40px !important; }
        }
      `}</style>
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
      bg: "#151515",
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
      bg: "#1A1A1A",
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
      bg: "#151515",
    },
  ];

  return (
    <>
      {sections.map((s) => (
        <section
          key={s.tag}
          style={{ background: s.bg, padding: "100px 24px", position: "relative", overflow: "hidden" }}
        >
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 600, height: 1, background: `linear-gradient(90deg, transparent, ${s.tagColor}40, transparent)` }} />
          <FeatureRow {...s} />
        </section>
      ))}
    </>
  );
}
