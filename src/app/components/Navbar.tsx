import { useState, useEffect } from "react";
import { BilioLogoFull } from "./BilioLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(21,21,21,0.90)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(254,206,0,0.08)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <BilioLogoFull size={38} />

        {/* Nav Links */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 36 }}
          className="hidden md:flex"
        >
          {["Características", "Precios", "Seguridad", "Docs", "Blog"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                color: "rgba(255,255,255,0.5)",
                fontFamily: "Hind Vadodara, sans-serif",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.2s ease",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FECE00")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            style={{
              background: "transparent",
              border: "none",
              color: "rgba(255,255,255,0.55)",
              fontFamily: "Hind Vadodara, sans-serif",
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              padding: "8px 16px",
            }}
            className="hidden md:block"
          >
            Iniciar Sesión
          </button>
          <button
            style={{
              background: "linear-gradient(135deg, #FECE00 0%, #FEB601 100%)",
              border: "none",
              color: "#151515",
              fontFamily: "Archivo, sans-serif",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              padding: "10px 22px",
              borderRadius: 10,
              letterSpacing: "-0.01em",
              transition: "all 0.2s ease",
              boxShadow: "0 4px 20px rgba(254,206,0,0.2)",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.opacity = "0.9";
              (e.target as HTMLElement).style.transform = "translateY(-1px)";
              (e.target as HTMLElement).style.boxShadow = "0 6px 28px rgba(254,206,0,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.opacity = "1";
              (e.target as HTMLElement).style.transform = "translateY(0)";
              (e.target as HTMLElement).style.boxShadow = "0 4px 20px rgba(254,206,0,0.2)";
            }}
          >
            Unirme a la lista
          </button>
        </div>
      </div>
    </nav>
  );
}