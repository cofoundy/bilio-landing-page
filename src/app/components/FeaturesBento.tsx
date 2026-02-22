/* ── Budget card ── */
function BudgetCard() {
  const items = [
    { emoji: "🍕", name: "Comida", used: 320, max: 500, pct: 64 },
    { emoji: "🎮", name: "Ocio", used: 195, max: 200, pct: 97 },
    { emoji: "🚕", name: "Transporte", used: 80, max: 250, pct: 32 },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, height: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ color: "#ffffff", fontFamily: "Archivo, sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: "-0.01em" }}>Te avisa antes de pasarte</div>
          <div style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 12, marginTop: 3 }}>Presupuestos inteligentes</div>
        </div>
        <div style={{ background: "rgba(254,206,0,0.1)", border: "1px solid rgba(254,206,0,0.2)", borderRadius: 8, padding: "5px 10px" }}>
          <span style={{ color: "#FECE00", fontFamily: "Hind Vadodara, sans-serif", fontSize: 11, fontWeight: 700 }}>Este mes</span>
        </div>
      </div>

      {items.map((item) => {
        const color = item.pct >= 90 ? "#ef4444" : item.pct >= 75 ? "#FEB601" : "#5E987D";
        return (
          <div key={item.name}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <span style={{ fontSize: 14 }}>{item.emoji}</span>
                <span style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 13 }}>{item.name}</span>
                {item.pct >= 90 && <span style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: 100, padding: "2px 7px", color: "#ef4444", fontSize: 10, fontFamily: "Hind Vadodara, sans-serif", fontWeight: 700 }}>⚠ Cuidado</span>}
              </div>
              <span style={{ color: "rgba(255,255,255,0.45)", fontFamily: "Archivo, sans-serif", fontSize: 12, fontWeight: 600 }}>S/{item.used} / S/{item.max}</span>
            </div>
            <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 100, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${item.pct}%`, background: `linear-gradient(90deg, ${color}99, ${color})`, borderRadius: 100, transition: "width 0.5s ease" }} />
            </div>
          </div>
        );
      })}

      <div style={{ marginTop: 4, background: "rgba(254,206,0,0.06)", border: "1px solid rgba(254,206,0,0.12)", borderRadius: 10, padding: "9px 13px", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 13 }}>💬</span>
        <span style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 12 }}>Pregunta: <span style={{ color: "#FECE00", fontWeight: 600 }}>"¿Me alcanza para 200 en ropa?"</span></span>
      </div>
    </div>
  );
}

/* ── Debts card ── */
function DebtsCard() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, height: "100%" }}>
      <div>
        <div style={{ color: "#ffffff", fontFamily: "Archivo, sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: "-0.01em" }}>Nunca más olvides quién te debe</div>
        <div style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 12, marginTop: 3 }}>Deudas entre amigos</div>
      </div>

      {[
        { name: "Juan", type: "te debe", amount: "+S/150", avatar: "#FECE00", text: "#151515", urgent: false },
        { name: "María", type: "le debes", amount: "-S/80", avatar: "#5E987D", text: "#fff", urgent: true },
        { name: "Carlos", type: "te debe", amount: "+S/220", avatar: "#FEB601", text: "#151515", urgent: false },
      ].map((d) => (
        <div
          key={d.name}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 12,
            padding: "10px 12px",
          }}
        >
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: d.avatar, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Archivo, sans-serif", fontSize: 13, fontWeight: 800, color: d.text, flexShrink: 0 }}>
            {d.name[0]}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ color: "#ffffff", fontFamily: "Archivo, sans-serif", fontSize: 13, fontWeight: 600 }}>{d.name}</div>
            <div style={{ color: "rgba(255,255,255,0.28)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 11 }}>{d.type}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {d.urgent && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FEB601" }} />}
            <span style={{ color: d.amount.startsWith("+") ? "#5E987D" : "#ef4444", fontFamily: "Archivo, sans-serif", fontSize: 14, fontWeight: 800 }}>{d.amount}</span>
          </div>
        </div>
      ))}

      <div style={{ marginTop: "auto", color: "rgba(255,255,255,0.25)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 12, textAlign: "center" }}>
        Balance neto: <span style={{ color: "#5E987D", fontWeight: 700 }}>te deben S/290 más</span>
      </div>
    </div>
  );
}

/* ── Savings card ── */
function SavingsCard() {
  const goals = [
    { name: "Vacaciones Japón 🗾", saved: 4000, target: 10000, emoji: "✈️", months: 6 },
    { name: "Laptop nueva 💻", saved: 1800, target: 2500, emoji: "💻", months: 2 },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, height: "100%" }}>
      <div>
        <div style={{ color: "#ffffff", fontFamily: "Archivo, sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: "-0.01em" }}>Ahorra para lo que importa</div>
        <div style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 12, marginTop: 3 }}>Metas de ahorro</div>
      </div>

      {goals.map((g) => {
        const pct = Math.round((g.saved / g.target) * 100);
        return (
          <div key={g.name} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "14px 16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <div style={{ color: "#ffffff", fontFamily: "Archivo, sans-serif", fontSize: 13, fontWeight: 700 }}>{g.name}</div>
              <div style={{ color: "#FECE00", fontFamily: "Archivo, sans-serif", fontSize: 13, fontWeight: 800 }}>{pct}%</div>
            </div>
            <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 100, marginBottom: 8, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${pct}%`, background: "linear-gradient(90deg, #FECE00, #FEB601)", borderRadius: 100 }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "rgba(255,255,255,0.35)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 11 }}>S/{g.saved.toLocaleString()} / S/{g.target.toLocaleString()}</span>
              <span style={{ color: "rgba(255,255,255,0.25)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 11 }}>~{g.months} meses</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ── Streak card ── */
function StreakCard() {
  const levels = ["❄️ Frío", "🌤 Tibio", "🔥 Caliente", "⚡ En Llamas", "🏆 Legendario"];
  const currentLevel = 2;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, height: "100%", textAlign: "center" }}>
      <div style={{ fontSize: 48, lineHeight: 1 }}>🔥</div>
      <div>
        <div style={{ color: "#FECE00", fontFamily: "Archivo, sans-serif", fontSize: 42, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }}>15</div>
        <div style={{ color: "rgba(255,255,255,0.35)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 13, marginTop: 4 }}>días seguidos</div>
      </div>

      <div style={{ background: "rgba(254,206,0,0.08)", border: "1px solid rgba(254,206,0,0.2)", borderRadius: 10, padding: "6px 14px" }}>
        <span style={{ color: "#FECE00", fontFamily: "Archivo, sans-serif", fontSize: 13, fontWeight: 700 }}>{levels[currentLevel]}</span>
      </div>

      <div style={{ display: "flex", gap: 4, width: "100%" }}>
        {levels.map((_, i) => (
          <div key={i} style={{ flex: 1, height: 4, borderRadius: 100, background: i <= currentLevel ? "linear-gradient(90deg, #FECE00, #FEB601)" : "rgba(255,255,255,0.07)" }} />
        ))}
      </div>

      <p style={{ color: "rgba(255,255,255,0.28)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 12, lineHeight: 1.5 }}>
        Usuarios con 7+ días registran <span style={{ color: "#FECE00", fontWeight: 700 }}>3x más</span>. El hábito se vuelve automático.
      </p>
    </div>
  );
}

/* ── Emotional card ── */
function EmotionalCard() {
  const exchanges = [
    { from: "user", text: "Gasté 200 en ropa, tenía un día horrible 😔" },
    { from: "bilio", text: "Días así pasan 💛 Registrado: S/200 en 🛍 Ropa. ¿Quieres ver cómo vas con tu presupuesto?" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, height: "100%" }}>
      <div>
        <div style={{ color: "#ffffff", fontFamily: "Archivo, sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: "-0.01em" }}>Te entiende. No te juzga.</div>
        <div style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 12, marginTop: 3 }}>Inteligencia emocional</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {exchanges.map((msg, i) => (
          <div key={i} style={{ display: "flex", justifyContent: msg.from === "user" ? "flex-end" : "flex-start" }}>
            <div
              style={{
                maxWidth: "85%",
                padding: "10px 14px",
                borderRadius: msg.from === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                background: msg.from === "user" ? "rgba(255,255,255,0.07)" : "rgba(254,206,0,0.09)",
                border: msg.from === "user" ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(254,206,0,0.18)",
                color: msg.from === "bilio" ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0.58)",
                fontFamily: "Hind Vadodara, sans-serif",
                fontSize: 13,
                lineHeight: 1.5,
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: 6 }}>
        {["Nunca dice 'deberías'", "Celebra tus logros", "Respuestas cortas"].map((tag) => (
          <div key={tag} style={{ background: "rgba(94,152,125,0.1)", border: "1px solid rgba(94,152,125,0.2)", borderRadius: 100, padding: "4px 10px" }}>
            <span style={{ color: "#5E987D", fontFamily: "Hind Vadodara, sans-serif", fontSize: 11, fontWeight: 600 }}>✓ {tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeaturesBento() {
  const cards = [
    { content: <BudgetCard />, span: 7, accent: "#FECE00" },
    { content: <DebtsCard />, span: 5, accent: "#FEB601" },
    { content: <SavingsCard />, span: 5, accent: "#FECE00" },
    { content: <StreakCard />, span: 3, accent: "#FECE00" },
    { content: <EmotionalCard />, span: 4, accent: "#5E987D" },
  ];

  return (
    <section style={{ background: "#1A1A1A", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 600, height: 1, background: "linear-gradient(90deg, transparent, rgba(254,206,0,0.4), transparent)" }} />
      <div style={{ position: "absolute", top: "30%", right: "-5%", width: 500, height: 500, background: "radial-gradient(circle, rgba(18,49,73,0.5) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(254,182,1,0.08)", border: "1px solid rgba(254,182,1,0.18)", borderRadius: 100, padding: "5px 14px", marginBottom: 20 }}>
            <span style={{ color: "#FEB601", fontFamily: "Hind Vadodara, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Todo lo demás</span>
          </div>
          <h2 style={{ color: "#ffffff", fontFamily: "Archivo, sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
            Bilio hace{" "}
            <span style={{ background: "linear-gradient(90deg, #FECE00, #FEB601)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>mucho más.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.38)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 18, maxWidth: 500, margin: "0 auto", lineHeight: 1.6 }}>
            Presupuestos, deudas, ahorro, rachas y coacheo emocional — todo en una sola conversación.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16 }} className="bento-features">
          {cards.map((card, i) => (
            <div
              key={i}
              style={{
                gridColumn: `span ${card.span}`,
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20,
                padding: 24,
                backdropFilter: "blur(20px)",
                transition: "all 0.3s ease",
                minHeight: 220,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = `${card.accent}09`;
                (e.currentTarget as HTMLElement).style.borderColor = `${card.accent}22`;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.025)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {card.content}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .bento-features > div { grid-column: span 6 !important; } }
        @media (max-width: 640px) { .bento-features > div { grid-column: span 12 !important; } }
      `}</style>
    </section>
  );
}
