import { Lock, ShieldOff, Gift, Heart, MapPin, type LucideIcon } from "lucide-react";
import { BilioLogoFull } from "./BilioLogo";
import { ScrollReveal } from "./motion/ScrollReveal";
import { useWaitlist, useWaitlistDispatch } from "../waitlist/WaitlistContext";
import { submitWaitlist } from "../waitlist/submitWaitlist";

type FooterLink = { label: string; href: string };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Producto",
    links: [
      { label: "Características", href: "#caracteristicas" },
      { label: "Precios", href: "#precios" },
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Contacto", href: "mailto:hola@bilio.app" },
    ],
  },
  {
    title: "Comunidad",
    links: [
      { label: "Twitter / X", href: "https://x.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "WhatsApp Channel", href: "https://whatsapp.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacidad", href: "#" },
      { label: "Términos de uso", href: "#" },
    ],
  },
];

const trustBadges: { icon: LucideIcon; label: string }[] = [
  { icon: Lock, label: "Datos seguros" },
  { icon: ShieldOff, label: "Sin acceso bancario" },
  { icon: Gift, label: "Gratis para empezar" },
];

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return; // let external links work normally
  e.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Footer() {
  const state = useWaitlist();
  const dispatch = useWaitlistDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state.submitting) return;

    dispatch({ type: 'SUBMIT_START' });

    const result = await submitWaitlist({
      name: state.name,
      email: state.email,
      phone: '',
      countryCode: state.countryCode,
      plan: state.plan,
      lockPrice: false,
      source: 'footer',
    });

    if (result.success) {
      dispatch({ type: 'SUBMIT_SUCCESS' });
    } else {
      dispatch({ type: 'SUBMIT_ERROR', error: result.error || 'Error al enviar.' });
    }
  };

  return (
    <footer className="bg-bilio-bg-footer border-t border-bilio-primary/[0.07] pt-[72px] pb-9 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[180px] pointer-events-none" style={{ background: "radial-gradient(ellipse at top center, rgba(254,206,0,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-[1200px] mx-auto">
        {/* Top row */}
        <div className="flex justify-between items-start mb-14 flex-wrap gap-10">
          {/* Brand */}
          <div className="max-w-[320px]">
            <div className="mb-3.5">
              <a href="#hero" onClick={(e) => scrollTo(e, "#hero")}>
                <BilioLogoFull size={40} />
              </a>
            </div>
            <p className="text-white/30 font-body text-sm leading-[1.7] tracking-[0.01em] mb-[18px]">
              Tu coach de finanzas que habla tu idioma, entiende tu plata y no te juzga.
            </p>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-bilio-primary/50" strokeWidth={1.8} />
              <span className="text-white/[0.22] font-body text-[13px]">
                Hecho con <Heart className="inline w-3 h-3 text-bilio-primary/60 fill-bilio-primary/60" /> en Lima, Perú
              </span>
            </div>
          </div>

          {/* Waitlist mini form */}
          <div>
            <div className="text-bilio-text font-heading text-sm font-bold tracking-tight mb-2">
              Únete a la lista de espera
            </div>
            {!state.submitted ? (
              <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap">
                <input
                  type="email"
                  value={state.email}
                  onChange={(e) => dispatch({ type: 'SET_EMAIL', email: e.target.value })}
                  placeholder="tu@correo.com"
                  required
                  className="bg-bilio-surface-light border border-white/[0.09] rounded-[10px] px-3.5 py-2.5 text-bilio-text font-body text-sm outline-none w-[210px] transition-[border-color] duration-200 focus:border-bilio-primary/30"
                />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-gradient-gold border-none rounded-[10px] px-4 py-2.5 text-bilio-bg font-heading text-sm font-extrabold cursor-pointer whitespace-nowrap transition-all duration-200 btn-glow disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Enviando...' : 'Quiero entrar'}
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 bg-bilio-success/10 border border-bilio-success/30 rounded-[10px] px-4 py-2.5">
                <div className="w-[18px] h-[18px] rounded-full bg-bilio-success flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="text-bilio-success font-body text-sm font-semibold">¡Listo! Te avisamos pronto.</span>
              </div>
            )}
            <p className="text-bilio-text-whisper font-body text-xs mt-[7px]">Sin spam. Sin tarjeta. Sin rodeos.</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-12" style={{ background: "linear-gradient(90deg, transparent, rgba(254,206,0,0.1), rgba(94,152,125,0.08), transparent)" }} />

        {/* Link columns */}
        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-9 mb-13">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="text-white/55 font-heading text-[11px] font-bold tracking-[0.07em] uppercase mb-[18px]">
                  {col.title}
                </div>
                <div className="flex flex-col gap-[11px]">
                  {col.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-white/30 font-body text-sm no-underline tracking-[0.01em] transition-colors duration-200 hover:text-bilio-primary"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-7" />

        {/* Bottom */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="text-bilio-text-whisper font-body text-[13px]">
            © 2025 Bilio · Lima, Perú · Todos los derechos reservados
          </div>

          {/* Trust tags */}
          <div className="flex items-center gap-2 flex-wrap">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="bg-white/[0.03] border border-bilio-border rounded-full px-3 py-1 flex items-center gap-1.5">
                <badge.icon className="w-3 h-3 text-white/25" strokeWidth={1.8} />
                <span className="text-bilio-text-ghost font-body text-[11px]">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
