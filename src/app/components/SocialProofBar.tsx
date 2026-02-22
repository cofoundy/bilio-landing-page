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
    <div
      style={{
        background: "#111111",
        borderTop: "1px solid rgba(254,206,0,0.08)",
        borderBottom: "1px solid rgba(254,206,0,0.08)",
        padding: "16px 24px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 0,
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 28px",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
            }}
          >
            <span style={{ fontSize: 15 }}>{s.icon}</span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Hind Vadodara, sans-serif", fontSize: 13, fontWeight: 500, whiteSpace: "nowrap" }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
