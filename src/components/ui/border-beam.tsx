import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#FFC700",
  colorTo = "#002F6C",
  delay = 0,
}: BorderBeamProps) => {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": `${duration}s`,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        // Border with gradient
        "before:absolute before:inset-0 before:rounded-[inherit] before:p-[1px]",
        "before:bg-gradient-to-r before:from-transparent before:via-current before:to-transparent",
        "before:[background-image:linear-gradient(var(--color-from),var(--color-to))]",
        "before:animate-spin before:[animation-duration:var(--duration)]",
        "before:[animation-delay:var(--delay)]",
        // Mask to create border effect
        "before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
        "before:[mask-composite:xor]",
        className,
      )}
    />
  );
};