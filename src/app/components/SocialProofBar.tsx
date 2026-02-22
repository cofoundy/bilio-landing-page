const stats = [
  { icon: "🇵🇪", label: "Hecho en Perú" },
  { icon: "💬", label: "Chat + WhatsApp" },
  { icon: "🔒", label: "Datos encriptados" },
  { icon: "🆓", label: "Empieza gratis" },
  { icon: "🚫🏦", label: "Sin acceso bancario" },
  { icon: "⚡", label: "Responde al instante" },
];

export function SocialProofBar() {
  return (
    <div className="bg-bilio-bg-dark border-y border-bilio-border-gold-faint px-6 py-4 overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex items-center justify-center flex-wrap">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex items-center gap-2 px-7 py-1.5 ${
              i < stats.length - 1 ? "border-r border-white/[0.07]" : ""
            }`}
          >
            <span className="text-[15px]">{s.icon}</span>
            <span className="text-white/40 font-body text-[13px] font-medium whitespace-nowrap">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
