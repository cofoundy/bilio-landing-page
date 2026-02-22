import { useState } from "react";
import imgHeroBg from "@/assets/8d4d7d2a21d90b549fc4e0b21f5f2b2e452b0fa2.png";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setJoined(true);
  };

  return (
    <section className="min-h-screen bg-bilio-bg-deep flex flex-col overflow-hidden">
      {/* ── TOP ZONE: background image only ── */}
      <div className="relative h-[58vh] min-h-[380px] shrink-0">
        <img
          src={imgHeroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(90deg, #0a0900 0%, transparent 18%, transparent 82%, #0a0900 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-[55%] pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 0%, #0a0900 100%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(254,206,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(254,206,0,0.025) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      {/* ── BOTTOM ZONE: all content ── */}
      <div className="flex-1 bg-bilio-bg-deep flex flex-col items-center px-6 pb-20 -mt-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-bilio-surface-gold border border-bilio-border-gold rounded-full px-4 py-1.5 mb-7 backdrop-blur-[10px]">
          <div className="w-1.5 h-1.5 rounded-full bg-bilio-primary shadow-[0_0_8px_#FECE00]" />
          <span className="text-bilio-primary font-body text-[13px] font-semibold tracking-[0.02em]">
            Lista de espera abierta — Hecho en Perú 🇵🇪
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading font-extrabold text-bilio-text text-center leading-[1.02] tracking-[-0.03em] max-w-[860px] mx-auto mb-5 text-[clamp(44px,7vw,88px)]">
          Por fin, alguien que{" "}
          <span className="text-gradient-gold">entiende tu plata.</span>
        </h1>

        {/* Subheadline */}
        <p className="font-body text-bilio-text-muted text-center max-w-[580px] mx-auto mb-10 leading-[1.7] tracking-[0.01em] text-[clamp(16px,2vw,19px)]">
          Registra gastos, controla presupuestos, maneja deudas y ahorra — todo
          hablando con Bilio por chat o WhatsApp.
        </p>

        {/* Waitlist form */}
        {!joined ? (
          <form
            onSubmit={handleSubmit}
            className="flex gap-2.5 flex-wrap justify-center mb-4 w-full max-w-[480px]"
          >
            <div className="flex-1 min-w-[220px] bg-white/5 border border-white/[0.12] rounded-[14px] p-1 pl-[18px] flex items-center gap-2 backdrop-blur-[16px] transition-[border-color] duration-200">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                required
                className="flex-1 bg-transparent border-none outline-none text-bilio-text font-body text-[15px] min-w-0"
              />
              <button
                type="submit"
                className="bg-gradient-gold border-none text-bilio-bg font-heading text-sm font-extrabold cursor-pointer px-[22px] py-3 rounded-[10px] tracking-tight whitespace-nowrap transition-all duration-200 btn-glow"
              >
                Quiero ser el primero
              </button>
            </div>
          </form>
        ) : (
          <div className="flex items-center gap-2.5 bg-bilio-success/10 border border-bilio-success/30 rounded-[14px] px-6 py-3.5 mb-4">
            <div className="w-5 h-5 rounded-full bg-bilio-success flex items-center justify-center">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M2 5.5L4.5 8L9 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-bilio-success font-body text-[15px] font-semibold">
              ¡Listo! Te avisamos cuando Bilio esté disponible.
            </span>
          </div>
        )}

        <p className="text-bilio-text-ghost font-body text-[13px] mb-13">
          Sin tarjeta. Sin compromiso. Cancela cuando quieras.
        </p>

        {/* Social proof */}
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <div className="flex">
            {["#FECE00", "#5E987D", "#123149", "#FEB601", "#B86A00"].map((color, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-bilio-bg-deep flex items-center justify-center text-[10px] font-extrabold font-heading"
                style={{ background: color, marginLeft: i === 0 ? 0 : -9, color: i === 0 || i === 3 ? "#151515" : "#fff" }}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <div>
            <div className="flex gap-0.5 mb-0.5">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill="#FECE00">
                  <path d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z"/>
                </svg>
              ))}
            </div>
            <span className="text-white/35 font-body text-[13px]">
              <strong className="text-white/60">+2,000 personas</strong> ya en la lista
            </span>
          </div>
          <div className="flex gap-7 border-l border-white/[0.07] pl-6">
            {[{ val: "Web + WhatsApp", label: "Disponible en" }, { val: "Gratis", label: "Para empezar" }].map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-bilio-primary font-heading text-base font-extrabold tracking-[-0.02em]">{m.val}</div>
                <div className="text-white/[0.28] font-body text-[11px]">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
