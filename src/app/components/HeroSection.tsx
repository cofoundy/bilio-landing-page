import { useState } from "react";
import imgHeroBg from "figma:asset/8d4d7d2a21d90b549fc4e0b21f5f2b2e452b0fa2.png";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setJoined(true);
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#0a0900",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* ── TOP ZONE: background image only ── */}
      <div style={{ position: "relative", height: "58vh", minHeight: 380, flexShrink: 0 }}>
        <img
          src={imgHeroBg}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #0a0900 0%, transparent 18%, transparent 82%, #0a0900 100%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "55%", background: "linear-gradient(to bottom, transparent 0%, #0a0900 100%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(254,206,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(254,206,0,0.025) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
      </div>

      {/* ── BOTTOM ZONE: all content ── */}
      <div
        style={{
          flex: 1,
          background: "#0a0900",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 24px 80px",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(254,206,0,0.08)",
            border: "1px solid rgba(254,206,0,0.22)",
            borderRadius: 100,
            padding: "6px 16px",
            marginBottom: 28,
            backdropFilter: "blur(10px)",
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FECE00", boxShadow: "0 0 8px #FECE00" }} />
          <span style={{ color: "#FECE00", fontFamily: "Hind Vadodara, sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.02em" }}>
            Lista de espera abierta — Hecho en Perú 🇵🇪
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "Archivo, sans-serif",
            fontSize: "clamp(44px, 7vw, 88px)",
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            maxWidth: 860,
            margin: "0 auto 20px",
          }}
        >
          Por fin, alguien que{" "}
          <span style={{ background: "linear-gradient(90deg, #FECE00, #FEB601)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            entiende tu plata.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: "Hind Vadodara, sans-serif",
            fontSize: "clamp(16px, 2vw, 19px)",
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
            maxWidth: 580,
            margin: "0 auto 40px",
            lineHeight: 1.7,
            letterSpacing: "0.01em",
          }}
        >
          Registra gastos, controla presupuestos, maneja deudas y ahorra — todo
          hablando con Bilio por chat o WhatsApp.
        </p>

        {/* Waitlist form */}
        {!joined ? (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: 16,
              width: "100%",
              maxWidth: 480,
            }}
          >
            <div
              style={{
                flex: 1,
                minWidth: 220,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 14,
                padding: "4px 4px 4px 18px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                backdropFilter: "blur(16px)",
                transition: "border-color 0.2s",
              }}
              onFocus={() => {}}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                required
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#ffffff",
                  fontFamily: "Hind Vadodara, sans-serif",
                  fontSize: 15,
                  minWidth: 0,
                }}
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
                  padding: "12px 22px",
                  borderRadius: 10,
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 20px rgba(254,206,0,0.3)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(254,206,0,0.5)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(254,206,0,0.3)"; }}
              >
                Quiero ser el primero
              </button>
            </div>
          </form>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(94,152,125,0.1)",
              border: "1px solid rgba(94,152,125,0.3)",
              borderRadius: 14,
              padding: "14px 24px",
              marginBottom: 16,
            }}
          >
            <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#5E987D", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M2 5.5L4.5 8L9 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ color: "#5E987D", fontFamily: "Hind Vadodara, sans-serif", fontSize: 15, fontWeight: 600 }}>
              ¡Listo! Te avisamos cuando Bilio esté disponible.
            </span>
          </div>
        )}

        <p style={{ color: "rgba(255,255,255,0.25)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 13, marginBottom: 52 }}>
          Sin tarjeta. Sin compromiso. Cancela cuando quieras.
        </p>

        {/* Social proof */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ display: "flex" }}>
            {["#FECE00", "#5E987D", "#123149", "#FEB601", "#B86A00"].map((color, i) => (
              <div key={i} style={{ width: 32, height: 32, borderRadius: "50%", background: color, border: "2px solid #0a0900", marginLeft: i === 0 ? 0 : -9, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800, color: i === 0 || i === 3 ? "#151515" : "#fff", fontFamily: "Archivo, sans-serif" }}>
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <div>
            <div style={{ display: "flex", gap: 2, marginBottom: 2 }}>
              {[1,2,3,4,5].map((s) => (
                <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill="#FECE00">
                  <path d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z"/>
                </svg>
              ))}
            </div>
            <span style={{ color: "rgba(255,255,255,0.35)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 13 }}>
              <strong style={{ color: "rgba(255,255,255,0.6)" }}>+2,000 personas</strong> ya en la lista
            </span>
          </div>
          <div style={{ display: "flex", gap: 28, borderLeft: "1px solid rgba(255,255,255,0.07)", paddingLeft: 24 }}>
            {[{ val: "Web + WhatsApp", label: "Disponible en" }, { val: "Gratis", label: "Para empezar" }].map((m) => (
              <div key={m.label} style={{ textAlign: "center" }}>
                <div style={{ color: "#FECE00", fontFamily: "Archivo, sans-serif", fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em" }}>{m.val}</div>
                <div style={{ color: "rgba(255,255,255,0.28)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 11 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
