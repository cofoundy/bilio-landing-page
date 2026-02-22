import { useState, useRef, useCallback, type CSSProperties, type MouseEvent } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface TiltResult {
  ref: React.RefObject<HTMLDivElement | null>;
  style: CSSProperties;
  lightStyle: CSSProperties;
  handlers: {
    onMouseMove: (e: MouseEvent) => void;
    onMouseLeave: () => void;
  };
}

/**
 * Cursor-following 3D tilt + light reflection for bento cards.
 * Mouse-only — graceful no-op on touch devices.
 * No Framer dependency (pure React state).
 */
export function useTilt3D(maxTilt = 8): TiltResult {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const [light, setLight] = useState({ x: 50, y: 50 });

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (reduced || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0-1
      const y = (e.clientY - rect.top) / rect.height; // 0-1
      setTilt({
        rotateX: (0.5 - y) * maxTilt,
        rotateY: (x - 0.5) * maxTilt,
        scale: 1.02,
      });
      setLight({ x: x * 100, y: y * 100 });
    },
    [reduced, maxTilt]
  );

  const onMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
    setLight({ x: 50, y: 50 });
  }, []);

  const style: CSSProperties = reduced
    ? {}
    : {
        transform: `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${tilt.scale},${tilt.scale},1)`,
        transition: "transform 0.15s ease-out",
        willChange: "transform",
      };

  const lightStyle: CSSProperties = reduced
    ? { display: "none" }
    : {
        position: "absolute" as const,
        inset: 0,
        borderRadius: "inherit",
        pointerEvents: "none" as const,
        background: `radial-gradient(circle at ${light.x}% ${light.y}%, rgba(255,255,255,0.06) 0%, transparent 60%)`,
        transition: "background 0.15s ease-out",
      };

  return { ref, style, lightStyle, handlers: { onMouseMove, onMouseLeave } };
}
