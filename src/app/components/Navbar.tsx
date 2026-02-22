import { useState, useEffect } from "react";
import { BilioLogoFull } from "./BilioLogo";
import { cn } from "./ui/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        scrolled
          ? "bg-bilio-bg/90 backdrop-blur-[20px] border-b border-bilio-border-gold-faint"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <BilioLogoFull size={38} />

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-9">
          {["Características", "Precios", "Seguridad", "Docs", "Blog"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-bilio-text-muted font-body text-sm font-medium no-underline tracking-[0.01em] transition-colors duration-200 hover:text-bilio-primary"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden md:block bg-transparent border-none text-white/55 font-body text-sm font-medium cursor-pointer px-4 py-2">
            Iniciar Sesión
          </button>
          <button className="bg-gradient-gold border-none text-bilio-bg font-heading text-sm font-bold cursor-pointer px-[22px] py-2.5 rounded-[10px] tracking-tight transition-all duration-200 btn-glow">
            Unirme a la lista
          </button>
        </div>
      </div>
    </nav>
  );
}
