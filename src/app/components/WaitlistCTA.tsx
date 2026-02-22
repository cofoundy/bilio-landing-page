import { useState } from "react";
import imgHeroBg from "figma:asset/8d4d7d2a21d90b549fc4e0b21f5f2b2e452b0fa2.png";

export function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setJoined(true);
  };

  return (
    <section style={{ background: "#0a0900", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      {/* Arc bg image faint */}
      <img
        src={imgHeroBg}
        alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", opacity: 0.18, pointerEvents: "none" }}
      />
      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(10,9,0,0.82)", pointerEvents: "none" }} />
      {/* Glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 800, height: 400, background: "radial-gradient(ellipse, rgba(254,206,0,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(254,206,0,0.08)", border: "1px solid rgba(254,206,0,0.22)", borderRadius: 100, padding: "6px 16px", marginBottom: 28 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FECE00", boxShadow: "0 0 8px #FECE00" }} />
          <span style={{ color: "#FECE00", fontFamily: "Hind Vadodara, sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.02em" }}>
            Sé de los primeros — Hecho en Perú 🇵🇪
          </span>
        </div>

        <h2
          style={{
            color: "#ffffff",
            fontFamily: "Archivo, sans-serif",
            fontSize: "clamp(36px, 5.5vw, 72px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: 20,
          }}
        >
          ¿Sabés a dónde va{" "}
          <span style={{ background: "linear-gradient(90deg, #FECE00, #FEB601)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            cada sol?
          </span>
        </h2>

        <p style={{ color: "rgba(255,255,255,0.42)", fontFamily: "Hind Vadodara, sans-serif", fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.7, maxWidth: 520, margin: "0 auto 40px" }}>
          Únete a la lista de espera y sé el primero en saber cuándo Bilio abre sus puertas. Sin spam. Solo novedades.
        </p>

        {!joined ? (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", marginBottom: 20 }}
          >
            <div
              style={{
                flex: 1,
                maxWidth: 360,
                minWidth: 220,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 14,
                padding: "4px 4px 4px 18px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                backdropFilter: "blur(20px)",
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                required
                style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#ffffff", fontFamily: "Hind Vadodara, sans-serif", fontSize: 15, minWidth: 0 }}
              />
              <button
                type="submit"
                style={{
                  background: "linear-gradient(135deg, #FECE00, #FEB601)",
                  border: "none",
                  color: "#151515",
                  fontFamily: "Archivo, sans-serif",
                  fontSize: 14,
                  fontWeight: 800,
                  cursor: "pointer",
                  padding: "14px 24px",
                  borderRadius: 10,
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 20px rgba(254,206,0,0.35)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 30px rgba(254,206,0,0.55)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(254,206,0,0.35)"; }}
              >
                Unirme a la lista →
              </button>
            </div>
          </form>
        ) : (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "rgba(94,152,125,0.1)", border: "1px solid rgba(94,152,125,0.3)", borderRadius: 14, padding: "16px 28px", marginBottom: 20, maxWidth: 420, margin: "0 auto 20px" }}>
            <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#5E987D", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span style={{ color: "#5E987D", fontFamily: "Hind Vadodara, sans-serif", fontSize: 15, fontWeight: 600 }}>
              ¡Genial! Te avisamos pronto. Prometido.
            </span>
          </div>
        )}

        <p style={{ color: "rgba(255,255,255,0.2)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 13, marginTop: joined ? 16 : 0 }}>
          Sin tarjeta · Sin spam · Cancela cuando quieras
        </p>

        {/* Trust micro signals */}
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 40, flexWrap: "wrap" }}>
          {["🔒 Datos seguros", "🇵🇪 Hecho en Perú", "🆓 Gratis para empezar"].map((t) => (
            <span key={t} style={{ color: "rgba(255,255,255,0.25)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 13 }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
