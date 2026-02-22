export function ProblemSection() {
  return (
    <section
      style={{
        background: "#151515",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 400,
          background: "radial-gradient(ellipse, rgba(254,206,0,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: 100,
            padding: "5px 14px",
            marginBottom: 36,
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.38)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            ¿Te suena familiar?
          </span>
        </div>

        <h2
          style={{
            color: "#ffffff",
            fontFamily: "Archivo, sans-serif",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: 28,
          }}
        >
          Tu plata{" "}
          <span style={{ color: "rgba(255,255,255,0.25)", textDecoration: "line-through", textDecorationColor: "rgba(254,206,0,0.4)" }}>
            desaparece
          </span>{" "}
          y no sabes a dónde.
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.42)",
            fontFamily: "Hind Vadodara, sans-serif",
            fontSize: "clamp(16px, 2vw, 19px)",
            lineHeight: 1.75,
            maxWidth: 640,
            margin: "0 auto 56px",
          }}
        >
          Fin de mes, te preguntas: "¿A dónde fue todo?" Las planillas son un dolor,
          las apps son complicadas, y nadie te enseñó esto en el colegio.
          Bilio es diferente — solo habla.
        </p>

        {/* Pain points */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            textAlign: "left",
          }}
        >
          {[
            { emoji: "😩", pain: "Planillas que nunca llenas", fix: "Solo escribe en el chat" },
            { emoji: "🤷", pain: "No sabes en qué gastas", fix: "Bilio te lo dice al toque" },
            { emoji: "😰", pain: "Vergüenza con el dinero", fix: "Bilio no te juzga, nunca" },
            { emoji: "📱", pain: "Apps complicadas de aprender", fix: "Si usas WhatsApp, ya sabes" },
          ].map((item) => (
            <div
              key={item.pain}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16,
                padding: 20,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(254,206,0,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(254,206,0,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              <div style={{ fontSize: 24, marginBottom: 10 }}>{item.emoji}</div>
              <div
                style={{
                  color: "rgba(255,255,255,0.28)",
                  fontFamily: "Hind Vadodara, sans-serif",
                  fontSize: 13,
                  textDecoration: "line-through",
                  textDecorationColor: "rgba(255,255,255,0.15)",
                  marginBottom: 6,
                }}
              >
                {item.pain}
              </div>
              <div
                style={{
                  color: "#FECE00",
                  fontFamily: "Archivo, sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                }}
              >
                → {item.fix}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
