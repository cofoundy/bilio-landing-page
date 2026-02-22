import { useState } from "react";
import { m as motion, AnimatePresence } from "framer-motion";
import { cn } from "./ui/utils";
import { spring } from "./motion/tokens";
import { useReducedMotion } from "./motion/useReducedMotion";
import { ScrollReveal } from "./motion/ScrollReveal";

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
  const reduced = useReducedMotion();

  return (
    <div
      className={cn(
        "rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer",
        isOpen
          ? "bg-bilio-primary/[0.04] border border-bilio-border-gold"
          : "bg-white/[0.02] border border-bilio-border"
      )}
      onClick={onToggle}
    >
      <div className="flex justify-between items-center px-[22px] py-5 gap-4">
        <div className={cn(
          "font-heading text-base font-semibold tracking-tight leading-[1.4] flex-1",
          isOpen ? "text-bilio-text" : "text-white/[0.72]"
        )}>
          {q}
        </div>
        <div className={cn(
          "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300",
          isOpen
            ? "bg-bilio-primary/[0.14] border border-bilio-primary/30"
            : "bg-white/5 border border-white/[0.08]"
        )}>
          <motion.svg
            width="14" height="14" viewBox="0 0 14 14" fill="none"
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={reduced ? { duration: 0 } : { type: "spring", ...spring.gentle }}
            style={{ color: isOpen ? "#FECE00" : "rgba(255,255,255,0.45)" }}
          >
            <path d="M7 2V12M2 7H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </motion.svg>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={reduced ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
            transition={reduced ? { duration: 0 } : { height: { type: "spring", ...spring.gentle }, opacity: { duration: 0.2 } }}
            className="overflow-hidden"
          >
            <motion.div
              initial={reduced ? {} : { y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduced ? {} : { y: -8, opacity: 0 }}
              transition={reduced ? { duration: 0 } : { duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
              className="px-[22px] pb-5 pt-4 text-white/[0.43] font-body text-[15px] leading-[1.75] tracking-[0.01em] border-t border-white/5"
            >
              {a}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-bilio-bg py-[100px] px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(254,206,0,0.4), transparent)" }} />

      <div className="max-w-[780px] mx-auto">
        <ScrollReveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-bilio-success/10 border border-bilio-success/20 rounded-full px-3.5 py-[5px] mb-5">
            <span className="text-bilio-success font-body text-xs font-semibold tracking-[0.08em] uppercase">Preguntas frecuentes</span>
          </div>
          <h2 className="text-bilio-text font-heading font-extrabold tracking-[-0.03em] leading-[1.1] mb-3.5 text-[clamp(32px,4vw,52px)]">
            Lo que todos preguntan
          </h2>
          <p className="text-white/35 font-body text-[17px] leading-[1.6]">
            Sin letra pequeña. Sin tecnicismos.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-2.5">
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

        <div className="mt-12 text-center p-7 bg-bilio-primary/[0.03] border border-bilio-border-gold-faint rounded-[18px]">
          <p className="text-bilio-text-faint font-body text-[15px] mb-3.5">
            ¿Tienes otra pregunta? Escríbenos directamente.
          </p>
          <button className="bg-transparent border border-bilio-border-gold text-bilio-primary font-heading text-sm font-bold cursor-pointer px-[22px] py-[11px] rounded-[10px] transition-all duration-200 tracking-tight hover:bg-bilio-surface-gold">
            Contactar al equipo →
          </button>
        </div>
      </div>
    </section>
  );
}
