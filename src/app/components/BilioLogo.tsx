import svgPaths from "../../imports/svg-1t8a4r6dcd";

interface BilioLogoProps {
  size?: number;
  showText?: boolean;
  textColor?: string;
}

export function BilioLogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * (268.796 / 417.544)}
      viewBox="0 0 417.544 268.796"
      fill="none"
      className="block"
    >
      <path d={svgPaths.p17e88b60} fill="#FECE00" />
      <path d={svgPaths.p1caed900} fill="#FEB601" />
      <path d={svgPaths.p2431bc00} fill="#B86A00" />
    </svg>
  );
}

export function BilioLogoFull({ size = 36, showText = true, textColor = "#ffffff" }: BilioLogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <BilioLogoMark size={size} />
      {showText && (
        <span
          className="font-heading font-bold leading-none tracking-tight"
          style={{ fontSize: size * 0.55, color: textColor }}
        >
          Bilio
        </span>
      )}
    </div>
  );
}
