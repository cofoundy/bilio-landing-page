import { useState } from "react";

const faqs = [
  {
    q: "¿Bilio tiene acceso a mis cuentas bancarias?",
    a: "No. Nunca. Bilio no se conecta a ningún banco. Tú registras tus gastos hablando con Bilio — escribiendo, mandando una foto o una nota de voz. Tus datos bancarios son tuyos. Nosotros solo vemos lo que tú nos cuentas.",
  },
  {
    q: "¿Tengo que aprender comandos o menús especiales?",
    a: "Para nada. Bilio entiende español natural. Escribe \"Gasté 50 en almuerzo\" o \"Me pagaron 3000 de freelance\" y Bilio lo registra automáticamente. Si algo no queda claro, te pregunta. Es como escribirle a un amigo.",
  },
  {
    q: "¿Funciona realmente por WhatsApp?",
    a: "Sí. Puedes usar Bilio directamente desde WhatsApp — texto, fotos de recibos, notas de voz. Todas las funciones de la web están disponibles por WhatsApp. No tienes que descargar ninguna app extra.",
  },
  {
    q: "¿Qué pasa si me equivoco al registrar un gasto?",
    a: "No pasa nada. Solo dile a Bilio: \"El almuerzo fue 45, no 50\" y lo corrige. O \"borra el último gasto que registré\". Bilio entiende lenguaje natural para editar, corregir o eliminar lo que quieras.",
  },
  {
    q: "¿El plan gratis tiene límites?",
    a: "El plan gratis te da 30 gastos por mes — suficiente para empezar y entender si Bilio te sirve. Sin tarjeta. Sin compromiso. Si quieres más, el plan Plus (S/14.90/mes) da 200 gastos, WhatsApp y fotos de recibos. El Premium (S/24.90/mes) es ilimitado y añade Gmail automático.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Sí. Todos tus datos están encriptados y almacenados de forma segura. Tu información nunca se comparte con terceros. Somos transparentes: no vendemos datos, no tenemos publicidad. Bilio gana dinero con las suscripciones, no con tu información.",
  },
];

function AccordionItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      style={{
        background: isOpen ? "rgba(254,206,0,0.04)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${isOpen ? "rgba(254,206,0,0.22)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 16,
        overflow: "hidden",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onClick={onToggle}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 22px", gap: 16 }}>
        <div style={{ color: isOpen ? "#ffffff" : "rgba(255,255,255,0.72)", fontFamily: "Archivo, sans-serif", fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.4, flex: 1 }}>
          {q}
        </div>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            background: isOpen ? "rgba(254,206,0,0.14)" : "rgba(255,255,255,0.05)",
            border: `1px solid ${isOpen ? "rgba(254,206,0,0.3)" : "rgba(255,255,255,0.08)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.3s ease",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transition: "transform 0.3s ease", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", color: isOpen ? "#FECE00" : "rgba(255,255,255,0.45)" }}>
            <path d="M7 2V12M2 7H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      <div style={{ maxHeight: isOpen ? 300 : 0, overflow: "hidden", transition: "max-height 0.35s ease" }}>
        <div style={{ padding: "0 22px 20px", color: "rgba(255,255,255,0.43)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 15, lineHeight: 1.75, letterSpacing: "0.01em", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 16 }}>
          {a}
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section style={{ background: "#151515", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 600, height: 1, background: "linear-gradient(90deg, transparent, rgba(254,206,0,0.4), transparent)" }} />

      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(94,152,125,0.1)", border: "1px solid rgba(94,152,125,0.2)", borderRadius: 100, padding: "5px 14px", marginBottom: 20 }}>
            <span style={{ color: "#5E987D", fontFamily: "Hind Vadodara, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Preguntas frecuentes</span>
          </div>
          <h2 style={{ color: "#ffffff", fontFamily: "Archivo, sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 14 }}>
            Lo que todos preguntan
          </h2>
          <p style={{ color: "rgba(255,255,255,0.35)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 17, lineHeight: 1.6 }}>
            Sin letra pequeña. Sin tecnicismos.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: "center", padding: "28px", background: "rgba(254,206,0,0.03)", border: "1px solid rgba(254,206,0,0.08)", borderRadius: 18 }}>
          <p style={{ color: "rgba(255,255,255,0.38)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 15, marginBottom: 14 }}>
            ¿Tienes otra pregunta? Escríbenos directamente.
          </p>
          <button
            style={{ background: "transparent", border: "1px solid rgba(254,206,0,0.22)", color: "#FECE00", fontFamily: "Archivo, sans-serif", fontSize: 14, fontWeight: 700, cursor: "pointer", padding: "11px 22px", borderRadius: 10, transition: "all 0.2s ease", letterSpacing: "-0.01em" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(254,206,0,0.08)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
          >
            Contactar al equipo →
          </button>
        </div>
      </div>
    </section>
  );
}
