import { BilioLogoFull } from "./BilioLogo";

const columns = [
  {
    title: "Producto",
    links: ["Características", "Precios", "WhatsApp", "Gmail automático", "Hoja de ruta"],
  },
  {
    title: "Empresa",
    links: ["Nosotros", "Blog", "Carreras 🇵🇪", "Prensa", "Contacto"],
  },
  {
    title: "Comunidad",
    links: ["Twitter / X", "Instagram", "Discord", "WhatsApp Channel", "YouTube"],
  },
  {
    title: "Legal",
    links: ["Privacidad", "Términos de uso", "Cookies", "Seguridad", "Datos"],
  },
];

export function Footer() {
  return (
    <footer style={{ background: "#0d0d0d", borderTop: "1px solid rgba(254,206,0,0.07)", padding: "72px 24px 36px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 700, height: 180, background: "radial-gradient(ellipse at top center, rgba(254,206,0,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 56, flexWrap: "wrap", gap: 40 }}>
          {/* Brand */}
          <div style={{ maxWidth: 320 }}>
            <div style={{ marginBottom: 14 }}><BilioLogoFull size={40} /></div>
            <p style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 14, lineHeight: 1.7, letterSpacing: "0.01em", marginBottom: 18 }}>
              Tu coach de finanzas que habla tu idioma, entiende tu plata y no te juzga.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 18 }}>🇵🇪</span>
              <span style={{ color: "rgba(255,255,255,0.22)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 13 }}>Hecho con 💛 en Lima, Perú</span>
            </div>
          </div>

          {/* Waitlist mini form */}
          <div>
            <div style={{ color: "#ffffff", fontFamily: "Archivo, sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 8 }}>
              Únete a la lista de espera
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <input
                type="email"
                placeholder="tu@correo.com"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 10, padding: "10px 14px", color: "#ffffff", fontFamily: "Hind Vadodara, sans-serif", fontSize: 14, outline: "none", width: 210, transition: "border-color 0.2s" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(254,206,0,0.3)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)")}
              />
              <button
                style={{ background: "linear-gradient(135deg, #FECE00, #FEB601)", border: "none", borderRadius: 10, padding: "10px 16px", color: "#151515", fontFamily: "Archivo, sans-serif", fontSize: 14, fontWeight: 800, cursor: "pointer", whiteSpace: "nowrap", boxShadow: "0 4px 16px rgba(254,206,0,0.2)", transition: "all 0.2s ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(254,206,0,0.35)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(254,206,0,0.2)"; }}
              >
                Quiero entrar
              </button>
            </div>
            <p style={{ color: "rgba(255,255,255,0.18)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 12, marginTop: 7 }}>Sin spam. Sin tarjeta. Sin rodeos.</p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(254,206,0,0.1), rgba(94,152,125,0.08), transparent)", marginBottom: 48 }} />

        {/* Link columns */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 36, marginBottom: 52 }}>
          {columns.map((col) => (
            <div key={col.title}>
              <div style={{ color: "rgba(255,255,255,0.55)", fontFamily: "Archivo, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 18 }}>
                {col.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 14, textDecoration: "none", transition: "color 0.2s ease", letterSpacing: "0.01em" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FECE00")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.05)", marginBottom: 28 }} />

        {/* Bottom */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ color: "rgba(255,255,255,0.18)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 13 }}>
            © 2025 Bilio · Lima, Perú 🇵🇪 · Todos los derechos reservados
          </div>

          {/* Trust tags */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            {["🔒 Datos seguros", "🚫🏦 Sin acceso bancario", "🆓 Gratis para empezar"].map((badge) => (
              <div key={badge} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 100, padding: "4px 12px" }}>
                <span style={{ color: "rgba(255,255,255,0.25)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 11 }}>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
