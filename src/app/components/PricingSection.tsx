import { useState } from "react";

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
      "Gmail automático 📧",
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
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{ background: "#1A1A1A", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 600, height: 1, background: "linear-gradient(90deg, transparent, rgba(254,206,0,0.4), transparent)" }} />
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)", width: 900, height: 500, background: "radial-gradient(ellipse, rgba(254,206,0,0.04) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(254,206,0,0.08)", border: "1px solid rgba(254,206,0,0.18)", borderRadius: 100, padding: "5px 14px", marginBottom: 20 }}>
            <span style={{ color: "#FECE00", fontFamily: "Hind Vadodara, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Precios</span>
          </div>
          <h2 style={{ color: "#ffffff", fontFamily: "Archivo, sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
            Empieza gratis.{" "}
            <span style={{ color: "rgba(255,255,255,0.3)" }}>Crece cuando quieras.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.38)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 18, lineHeight: 1.6 }}>
            Sin tarjeta para empezar. Cancela cuando quieras.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, alignItems: "start" }} className="pricing-grid">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              style={{
                background: plan.highlight
                  ? "linear-gradient(145deg, rgba(254,206,0,0.10) 0%, rgba(254,182,1,0.06) 100%)"
                  : "rgba(255,255,255,0.025)",
                border: plan.highlight
                  ? "1px solid rgba(254,206,0,0.3)"
                  : "1px solid rgba(255,255,255,0.07)",
                borderRadius: 22,
                padding: "32px 28px",
                position: "relative",
                transition: "all 0.3s ease",
                transform: plan.highlight ? "scale(1.03)" : "scale(1)",
                boxShadow: plan.highlight ? "0 0 60px rgba(254,206,0,0.1), 0 20px 40px rgba(0,0,0,0.4)" : "none",
              }}
              onMouseEnter={(e) => {
                if (!plan.highlight) {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(254,206,0,0.18)";
                }
                setHovered(i);
              }}
              onMouseLeave={(e) => {
                if (!plan.highlight) {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                }
                setHovered(null);
              }}
            >
              {/* Popular badge */}
              {plan.tag && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "linear-gradient(135deg, #FECE00, #FEB601)",
                    borderRadius: 100,
                    padding: "4px 16px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ color: "#151515", fontFamily: "Archivo, sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: "0.02em" }}>⭐ {plan.tag}</span>
                </div>
              )}

              {/* Plan name */}
              <div style={{ color: "rgba(255,255,255,0.5)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
                {plan.name}
              </div>

              {/* Price */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
                <span style={{ color: plan.highlight ? "#FECE00" : "#ffffff", fontFamily: "Archivo, sans-serif", fontSize: 40, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }}>
                  {plan.price}
                </span>
                <span style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 14 }}>{plan.period}</span>
              </div>

              {plan.price === "S/14.90" && (
                <div style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 12, marginBottom: 8 }}>
                  Menos de un café al día
                </div>
              )}

              <p style={{ color: "rgba(255,255,255,0.38)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 14, lineHeight: 1.5, marginBottom: 24 }}>
                {plan.description}
              </p>

              {/* CTA */}
              <button
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: 12,
                  border: plan.highlight ? "none" : "1px solid rgba(255,255,255,0.1)",
                  background: plan.highlight
                    ? "linear-gradient(135deg, #FECE00, #FEB601)"
                    : "rgba(255,255,255,0.04)",
                  color: plan.highlight ? "#151515" : "rgba(255,255,255,0.6)",
                  fontFamily: "Archivo, sans-serif",
                  fontSize: 14,
                  fontWeight: 800,
                  cursor: "pointer",
                  letterSpacing: "-0.01em",
                  transition: "all 0.2s ease",
                  boxShadow: plan.highlight ? "0 4px 20px rgba(254,206,0,0.3)" : "none",
                  marginBottom: 28,
                }}
                onMouseEnter={(e) => {
                  if (!plan.highlight) {
                    (e.currentTarget as HTMLElement).style.background = "rgba(254,206,0,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "#FECE00";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(254,206,0,0.2)";
                  } else {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(254,206,0,0.5)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.highlight) {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  } else {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(254,206,0,0.3)";
                  }
                }}
              >
                {plan.cta}
              </button>

              {/* Features list */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {plan.features.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 9 }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" fill={plan.highlight ? "rgba(254,206,0,0.15)" : "rgba(94,152,125,0.12)"}/>
                      <path d="M4.5 7L6.5 9L9.5 5" stroke={plan.highlight ? "#FECE00" : "#5E987D"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ color: "rgba(255,255,255,0.55)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 13, fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
                {plan.missing.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 9, opacity: 0.35 }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" fill="rgba(255,255,255,0.05)"/>
                      <path d="M5 5l4 4M9 5L5 9" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span style={{ color: "rgba(255,255,255,0.28)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 13, textDecoration: "line-through", textDecorationColor: "rgba(255,255,255,0.1)" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.2)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 13, marginTop: 36 }}>
          Todos los planes incluyen: datos encriptados · sin acceso bancario · cancela cuando quieras
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) { .pricing-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
