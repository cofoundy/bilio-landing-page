import { MapPin, MessageSquare, Lock, Gift, ShieldOff, Zap, type LucideIcon } from "lucide-react";
import { ScrollReveal } from "./motion/ScrollReveal";

const stats: { icon: LucideIcon; label: string }[] = [
  { icon: MapPin, label: "Hecho en Perú" },
  { icon: MessageSquare, label: "Chat + WhatsApp" },
  { icon: Lock, label: "Datos encriptados" },
  { icon: Gift, label: "Empieza gratis" },
  { icon: ShieldOff, label: "Sin acceso bancario" },
  { icon: Zap, label: "Responde al instante" },
];

export function SocialProofBar() {
  return (
    <ScrollReveal as="div" className="bg-bilio-bg-dark border-y border-bilio-border-gold-faint px-6 py-4 overflow-hidden" yOffset={10}>
      <div className="max-w-[1200px] mx-auto flex items-center justify-center flex-wrap">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex items-center gap-2 px-7 py-1.5 ${
              i < stats.length - 1 ? "border-r border-white/[0.07]" : ""
            }`}
          >
            <s.icon className="w-4 h-4 text-bilio-primary/70" strokeWidth={1.8} />
            <span className="text-white/40 font-body text-[13px] font-medium whitespace-nowrap">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
