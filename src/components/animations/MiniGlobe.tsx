import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Bilio Brand Colors for the mini globe
const BILIO_COLORS = {
  yellow: { main: '#FFC700', glow: '#FFD633' },
  blue: { main: '#002F6C', glow: '#1A4A8A' },
  green: { main: '#0AAD6E', glow: '#2BC085' },
} as const;

// LATAM currency symbols for orbiting
const CURRENCY_SYMBOLS = ['$', '€', '¥', '£', 'S/', 'R$', 'MX$', 'C$', 'COL$', '₡'] as const;

interface MiniGlobeProps {
  size?: 'small' | 'medium' | 'large';
  showMarkers?: boolean;
  orbitingElements?: boolean;
  className?: string;
  color?: 'yellow' | 'blue' | 'green';
  animationSpeed?: number;
}

const MiniGlobe: React.FC<MiniGlobeProps> = ({
  size = 'medium',
  showMarkers = true,
  orbitingElements = true,
  className,
  color = 'yellow',
  animationSpeed = 1,
}) => {
  const sizeConfig = {
    small: { globe: 80, currency: 12, orbit: 45 },
    medium: { globe: 120, currency: 16, orbit: 65 },
    large: { globe: 160, currency: 20, orbit: 85 },
  };

  const config = sizeConfig[size];
  const colorScheme = BILIO_COLORS[color];

  return (
    <div
      className={cn(
        'relative flex items-center justify-center',
        className
      )}
      style={{ width: config.orbit * 2, height: config.orbit * 2 }}
    >
      {/* Main Globe */}
      <motion.div
        className="relative rounded-full flex items-center justify-center overflow-hidden"
        style={{
          width: config.globe,
          height: config.globe,
          background: `linear-gradient(135deg, ${colorScheme.main} 0%, ${colorScheme.glow} 100%)`,
          boxShadow: `
            0 0 20px ${colorScheme.glow}40,
            inset 0 0 20px ${colorScheme.main}20,
            0 4px 15px rgba(0,0,0,0.1)
          `,
        }}
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20 / animationSpeed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* Globe surface pattern */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, ${colorScheme.glow}30 2px, transparent 2px),
              radial-gradient(circle at 70% 60%, ${colorScheme.glow}30 1.5px, transparent 1.5px),
              radial-gradient(circle at 20% 80%, ${colorScheme.glow}30 2.5px, transparent 2.5px)
            `,
            backgroundSize: '20px 20px, 30px 30px, 25px 25px',
          }}
        />

        {/* Central globe symbol */}
        <div
          className="relative z-10 text-white font-bold text-center"
          style={{ fontSize: config.globe * 0.3 }}
        >
          🌍
        </div>

        {/* Markers for major locations */}
        {showMarkers && (
          <>
            <div
              className="absolute w-2 h-2 rounded-full bg-white shadow-md"
              style={{
                top: '25%',
                left: '35%',
                boxShadow: `0 0 6px ${colorScheme.glow}`,
              }}
            />
            <div
              className="absolute w-2 h-2 rounded-full bg-white shadow-md"
              style={{
                top: '60%',
                right: '20%',
                boxShadow: `0 0 6px ${colorScheme.glow}`,
              }}
            />
            <div
              className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-md"
              style={{
                top: '40%',
                left: '15%',
                boxShadow: `0 0 4px ${colorScheme.glow}`,
              }}
            />
          </>
        )}
      </motion.div>

      {/* Orbiting Currency Symbols */}
      {orbitingElements && (
        <>
          {/* Inner orbit */}
          <div
            className="absolute border border-dashed rounded-full pointer-events-none"
            style={{
              width: config.orbit * 1.3,
              height: config.orbit * 1.3,
              borderColor: `${colorScheme.glow}30`,
              borderWidth: '1px',
            }}
          />
          
          {/* Outer orbit */}
          <div
            className="absolute border border-dashed rounded-full pointer-events-none"
            style={{
              width: config.orbit * 1.8,
              height: config.orbit * 1.8,
              borderColor: `${colorScheme.glow}20`,
              borderWidth: '1px',
            }}
          />

          {/* Inner ring currencies */}
          {CURRENCY_SYMBOLS.slice(0, 4).map((symbol, index) => (
            <motion.div
              key={`inner-${symbol}-${index}`}
              className="absolute font-bold select-none"
              style={{
                fontSize: config.currency,
                color: colorScheme.main,
                textShadow: `0 0 8px ${colorScheme.glow}`,
                width: config.orbit * 1.3,
                height: config.orbit * 1.3,
              }}
              animate={{
                rotate: [
                  (360 / 4) * index,
                  (360 / 4) * index + 360,
                ],
              }}
              transition={{
                duration: 12 / animationSpeed,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div
                className="absolute flex items-center justify-center"
                style={{
                  top: '0%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: config.currency * 1.5,
                  height: config.currency * 1.5,
                }}
              >
                <motion.span
                  animate={{
                    rotate: [
                      -(360 / 4) * index,
                      -(360 / 4) * index - 360,
                    ],
                  }}
                  transition={{
                    duration: 12 / animationSpeed,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {symbol}
                </motion.span>
              </div>
            </motion.div>
          ))}

          {/* Outer ring currencies */}
          {CURRENCY_SYMBOLS.slice(4, 8).map((symbol, index) => (
            <motion.div
              key={`outer-${symbol}-${index}`}
              className="absolute font-bold select-none"
              style={{
                fontSize: config.currency * 0.8,
                color: colorScheme.glow,
                textShadow: `0 0 6px ${colorScheme.main}`,
                width: config.orbit * 1.8,
                height: config.orbit * 1.8,
              }}
              animate={{
                rotate: [
                  (360 / 4) * index + 45,
                  (360 / 4) * index + 45 - 360,
                ],
              }}
              transition={{
                duration: 20 / animationSpeed,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div
                className="absolute flex items-center justify-center"
                style={{
                  top: '0%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: config.currency,
                  height: config.currency,
                }}
              >
                <motion.span
                  animate={{
                    rotate: [
                      -(360 / 4) * index - 45,
                      -(360 / 4) * index - 45 + 360,
                    ],
                  }}
                  transition={{
                    duration: 20 / animationSpeed,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {symbol}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </>
      )}

      {/* Central glow effect */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${colorScheme.glow}15 0%, transparent 70%)`,
          width: config.orbit * 2,
          height: config.orbit * 2,
        }}
      />
    </div>
  );
};

export default MiniGlobe;