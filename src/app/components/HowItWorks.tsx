const steps = [
  {
    number: "01",
    emoji: "💬",
    title: "Abre el chat",
    description: "Entra a Bilio en la web o por WhatsApp. Tu cuenta se crea sola en tu primer mensaje. Sin formularios, sin configuración.",
    color: "#FECE00",
  },
  {
    number: "02",
    emoji: "🗣️",
    title: "Dile tus gastos",
    description: "Escribe \"Gasté 50 en almuerzo\", manda una foto del recibo o una nota de voz. Bilio entiende todo y lo clasifica solo.",
    color: "#FEB601",
  },
  {
    number: "03",
    emoji: "📊",
    title: "Bilio te muestra cómo vas",
    description: "Pregunta \"¿Cuánto gasté este mes?\" o \"¿Me alcanza para 200 en ropa?\" — y recibe una respuesta honesta al instante.",
    color: "#5E987D",
  },
];

export function HowItWorks() {
  return (
    <section style={{ background: "#151515", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 600, height: 1, background: "linear-gradient(90deg, transparent, rgba(94,152,125,0.4), transparent)" }} />
      <div style={{ position: "absolute", bottom: "0", left: "50%", transform: "translateX(-50%)", width: 800, height: 300, background: "radial-gradient(ellipse, rgba(254,206,0,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(94,152,125,0.1)", border: "1px solid rgba(94,152,125,0.2)", borderRadius: 100, padding: "5px 14px", marginBottom: 20 }}>
            <span style={{ color: "#5E987D", fontFamily: "Hind Vadodara, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Cómo funciona</span>
          </div>
          <h2 style={{ color: "#ffffff", fontFamily: "Archivo, sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
            Empieza en{" "}
            <span style={{ background: "linear-gradient(90deg, #FECE00, #FEB601)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              30 segundos.
            </span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.38)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 18, maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
            Sin configuración. Sin tutoriales. Solo abre y habla.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, position: "relative" }} className="steps-grid">
          {/* Connector line */}
          <div style={{ position: "absolute", top: 44, left: "calc(16.6% + 24px)", right: "calc(16.6% + 24px)", height: 1, background: "linear-gradient(90deg, rgba(254,206,0,0.3), rgba(254,182,1,0.2), rgba(94,152,125,0.3))", pointerEvents: "none", zIndex: 0 }} className="connector-line" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20,
                padding: "32px 28px",
                position: "relative",
                zIndex: 1,
                transition: "all 0.3s ease",
                textAlign: "center",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = `${step.color}09`;
                (e.currentTarget as HTMLElement).style.borderColor = `${step.color}25`;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px rgba(0,0,0,0.35), 0 0 40px ${step.color}10`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.025)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Step number circle */}
              <div style={{ position: "relative", display: "inline-flex", marginBottom: 20 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: `${step.color}15`,
                    border: `2px solid ${step.color}35`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                  }}
                >
                  {step.emoji}
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: -6,
                    right: -6,
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: step.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Archivo, sans-serif",
                    fontSize: 10,
                    fontWeight: 800,
                    color: "#151515",
                    border: "2px solid #151515",
                  }}
                >
                  {i + 1}
                </div>
              </div>

              <h3 style={{ color: "#ffffff", fontFamily: "Archivo, sans-serif", fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>
                {step.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 15, lineHeight: 1.7, letterSpacing: "0.01em" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .connector-line { display: none; }
        }
      `}</style>
    </section>
  );
}
