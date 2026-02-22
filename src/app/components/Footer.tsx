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
    <footer className="bg-bilio-bg-footer border-t border-bilio-primary/[0.07] pt-[72px] pb-9 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[180px] pointer-events-none" style={{ background: "radial-gradient(ellipse at top center, rgba(254,206,0,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-[1200px] mx-auto">
        {/* Top row */}
        <div className="flex justify-between items-start mb-14 flex-wrap gap-10">
          {/* Brand */}
          <div className="max-w-[320px]">
            <div className="mb-3.5"><BilioLogoFull size={40} /></div>
            <p className="text-white/30 font-body text-sm leading-[1.7] tracking-[0.01em] mb-[18px]">
              Tu coach de finanzas que habla tu idioma, entiende tu plata y no te juzga.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-lg">🇵🇪</span>
              <span className="text-white/[0.22] font-body text-[13px]">Hecho con 💛 en Lima, Perú</span>
            </div>
          </div>

          {/* Waitlist mini form */}
          <div>
            <div className="text-bilio-text font-heading text-sm font-bold tracking-tight mb-2">
              Únete a la lista de espera
            </div>
            <div className="flex gap-2 flex-wrap">
              <input
                type="email"
                placeholder="tu@correo.com"
                className="bg-bilio-surface-light border border-white/[0.09] rounded-[10px] px-3.5 py-2.5 text-bilio-text font-body text-sm outline-none w-[210px] transition-[border-color] duration-200 focus:border-bilio-primary/30"
              />
              <button className="bg-gradient-gold border-none rounded-[10px] px-4 py-2.5 text-bilio-bg font-heading text-sm font-extrabold cursor-pointer whitespace-nowrap transition-all duration-200 btn-glow">
                Quiero entrar
              </button>
            </div>
            <p className="text-bilio-text-whisper font-body text-xs mt-[7px]">Sin spam. Sin tarjeta. Sin rodeos.</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-12" style={{ background: "linear-gradient(90deg, transparent, rgba(254,206,0,0.1), rgba(94,152,125,0.08), transparent)" }} />

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-9 mb-13">
          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-white/55 font-heading text-[11px] font-bold tracking-[0.07em] uppercase mb-[18px]">
                {col.title}
              </div>
              <div className="flex flex-col gap-[11px]">
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-white/30 font-body text-sm no-underline tracking-[0.01em] transition-colors duration-200 hover:text-bilio-primary"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-7" />

        {/* Bottom */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="text-bilio-text-whisper font-body text-[13px]">
            © 2025 Bilio · Lima, Perú 🇵🇪 · Todos los derechos reservados
          </div>

          {/* Trust tags */}
          <div className="flex items-center gap-2 flex-wrap">
            {["🔒 Datos seguros", "🚫🏦 Sin acceso bancario", "🆓 Gratis para empezar"].map((badge) => (
              <div key={badge} className="bg-white/[0.03] border border-bilio-border rounded-full px-3 py-1">
                <span className="text-bilio-text-ghost font-body text-[11px]">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
