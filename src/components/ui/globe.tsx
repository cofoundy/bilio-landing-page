'use client';

import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import createGlobe from 'cobe';
import { cn } from '@/lib/utils';

// Bilio Brand Colors - Official palette
const BILIO_BRAND_COLORS = {
  yellow: { main: '#FFC700', glow: '#FFD633', lighter: '#FFF2B3' },
  blue: { main: '#002F6C', glow: '#1A4A8A', lighter: '#4A6FA5' },
  green: { main: '#0AAD6E', glow: '#2BC085', lighter: '#7DD3A8' },
} as const;

// LATAM currencies with systematic Bilio brand color assignment
const LATAM_CURRENCIES = [
  // Tier 1: Major markets (Primary Yellow - #FFC700)
  { symbol: '$', name: 'USD', flag: '🇺🇸', weight: 4, colorScheme: 'yellow', tier: 1 },
  { symbol: 'MX$', name: 'MXN', flag: '🇲🇽', weight: 3, colorScheme: 'yellow', tier: 1 },
  { symbol: 'R$', name: 'BRL', flag: '🇧🇷', weight: 3, colorScheme: 'yellow', tier: 1 },
  { symbol: 'COL$', name: 'COP', flag: '🇨🇴', weight: 2, colorScheme: 'yellow', tier: 1 },
  { symbol: 'CLP$', name: 'CLP', flag: '🇨🇱', weight: 2, colorScheme: 'yellow', tier: 1 },
  
  // Tier 2: Regional markets (Primary Blue - #002F6C)
  { symbol: 'C$', name: 'CAD', flag: '🇨🇦', weight: 3, colorScheme: 'blue', tier: 2 },
  { symbol: 'S/', name: 'PEN', flag: '🇵🇪', weight: 2, colorScheme: 'blue', tier: 2 },
  { symbol: 'AR$', name: 'ARS', flag: '🇦🇷', weight: 2, colorScheme: 'blue', tier: 2 },
  { symbol: '₡', name: 'CRC', flag: '🇨🇷', weight: 1, colorScheme: 'blue', tier: 2 },
  { symbol: 'Bs', name: 'BOB', flag: '🇧🇴', weight: 1, colorScheme: 'blue', tier: 2 },
  { symbol: 'UY$', name: 'UYU', flag: '🇺🇾', weight: 1, colorScheme: 'blue', tier: 2 },
  
  // Tier 3: Emerging markets (Accent Green - #0AAD6E)
  { symbol: 'Q', name: 'GTQ', flag: '🇬🇹', weight: 1, colorScheme: 'green', tier: 3 },
  { symbol: 'B/.', name: 'PAB', flag: '🇵🇦', weight: 1, colorScheme: 'green', tier: 3 },
  { symbol: 'Bs', name: 'VES', flag: '🇻🇪', weight: 1, colorScheme: 'green', tier: 3 },
  { symbol: '₲', name: 'PYG', flag: '🇵🇾', weight: 1, colorScheme: 'green', tier: 3 },
] as const;

// 3D orbital configuration for realistic space distribution
const ORBITAL_RINGS = [
  { radius: 1.6, speed: 1.2, tilt: 15, elements: 6, opacity: 0.9 },  // Inner ring - fast
  { radius: 2.2, speed: 0.8, tilt: -25, elements: 8, opacity: 0.8 }, // Mid ring - medium
  { radius: 2.8, speed: 0.5, tilt: 35, elements: 6, opacity: 0.7 },  // Outer ring - slow
  { radius: 3.4, speed: 0.3, tilt: -10, elements: 4, opacity: 0.6 }, // Far ring - very slow
] as const;

interface OrbitingCurrency {
  id: string;
  currency: typeof LATAM_CURRENCIES[0];
  ring: typeof ORBITAL_RINGS[0];
  ringIndex: number;
  startAngle: number;
  size: number;
  opacity: number;
  phase: number; // For staggered animations
  color: string; // Main color from Bilio brand palette
  glowColor: string; // Glow effect color
}

interface EarthProps {
  className?: string;
  theta?: number;
  dark?: number;
  scale?: number;
  diffuse?: number;
  mapSamples?: number;
  mapBrightness?: number;
  baseColor?: [number, number, number];
  markerColor?: [number, number, number];
  glowColor?: [number, number, number];
  markers?: Array<{
    location: [number, number];
    size: number;
  }>;
  // New props for orbiting currencies
  orbitingCurrencies?: boolean;
  orbitSpeed?: number;
  currencyCount?: number;
  showCurrencyTrails?: boolean;
}

const Earth: React.FC<EarthProps> = ({
  className,
  theta = 0.25,
  dark = 1,
  scale = 1.1,
  diffuse = 1.2,
  mapSamples = 40000,
  mapBrightness = 6,
  baseColor = [0.96, 0.945, 0.91], // Default to warm beige instead of blue
  markerColor = [1, 0.78, 0], // Default to Bilio yellow instead of red
  glowColor = [1, 0.973, 0.906], // Default to light cream instead of blue
  markers = [],
  orbitingCurrencies = false,
  orbitSpeed = 1.0,
  currencyCount = 24,
  showCurrencyTrails = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);
  const [globeState, setGlobeState] = useState({ phi: 0, width: 0 });

  // Generate orbiting currencies with weighted distribution
  const currencyElements = useMemo(() => {
    if (!orbitingCurrencies) return [];

    const currencies: OrbitingCurrency[] = [];
    
    // Create weighted currency pool
    const currencyPool = LATAM_CURRENCIES.flatMap(currency => 
      Array(currency.weight).fill(currency)
    );

    let currencyIndex = 0;
    
    ORBITAL_RINGS.forEach((ring, ringIndex) => {
      for (let i = 0; i < ring.elements && currencyIndex < currencyCount; i++) {
        const currency = currencyPool[Math.floor(Math.random() * currencyPool.length)];
        const startAngle = (i / ring.elements) * 360 + (Math.random() - 0.5) * 30; // Slight randomization
        
        // Get Bilio brand colors for this currency
        const colorScheme = BILIO_BRAND_COLORS[currency.colorScheme as keyof typeof BILIO_BRAND_COLORS];
        
        currencies.push({
          id: `currency-${ringIndex}-${i}`,
          currency,
          ring,
          ringIndex,
          startAngle,
          size: 12 + (3 - ringIndex) * 2 + Math.random() * 3, // Smaller currencies, closer = slightly larger
          opacity: ring.opacity * (0.8 + Math.random() * 0.4),
          phase: Math.random() * Math.PI * 2, // Random starting phase
          color: colorScheme.main, // Use exact Bilio brand color
          glowColor: colorScheme.glow, // Use coordinated glow color
        });
        
        currencyIndex++;
      }
    });
    
    return currencies;
  }, [orbitingCurrencies, currencyCount]);

  // 3D position calculation with proper sphere projection
  const calculate3DPosition = useCallback((
    angle: number,
    radius: number,
    tilt: number,
    globePhi: number,
    containerWidth: number
  ) => {
    const centerX = containerWidth / 2;
    const centerY = containerWidth / 2;
    const globeRadius = containerWidth * 0.4; // Globe visual radius
    
    // Convert angles to radians
    const angleRad = (angle * Math.PI) / 180;
    const tiltRad = (tilt * Math.PI) / 180;
    const phiRad = globePhi;
    
    // 3D orbital position calculation
    const x3d = radius * Math.cos(angleRad) * Math.cos(tiltRad);
    const y3d = radius * Math.sin(angleRad);
    const z3d = radius * Math.cos(angleRad) * Math.sin(tiltRad);
    
    // Apply globe rotation (phi)
    const rotatedX = x3d * Math.cos(phiRad) - z3d * Math.sin(phiRad);
    const rotatedZ = x3d * Math.sin(phiRad) + z3d * Math.cos(phiRad);
    
    // Project to 2D screen coordinates
    const screenX = centerX + (rotatedX * globeRadius);
    const screenY = centerY + (y3d * globeRadius * 0.7); // Slight vertical compression
    
    // Calculate depth for occlusion (negative z = behind globe)
    const depth = rotatedZ;
    const distanceFromCenter = Math.sqrt(
      Math.pow(rotatedX, 2) + Math.pow(y3d, 2)
    );
    
    // Determine if currency is behind globe
    const isBehindGlobe = depth < 0 && distanceFromCenter < 1.0;
    
    // Calculate opacity based on depth and occlusion
    let depthOpacity = 1.0;
    if (isBehindGlobe) {
      depthOpacity = 0.3; // Much dimmer when behind globe
    } else if (depth < 0.5) {
      depthOpacity = 0.4 + (depth + 1) * 0.3; // Gradual fade near edges
    }
    
    return {
      x: screenX,
      y: screenY,
      depth,
      opacity: depthOpacity,
      isBehindGlobe,
      scale: 0.8 + (depth + 2) * 0.1, // Closer currencies appear larger
    };
  }, []);

  useEffect(() => {
    let width = 0;
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
        setGlobeState(prev => ({ ...prev, width }));
      }
    };
    
    window.addEventListener('resize', onResize);
    onResize();
    
    let phi = 0;
    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: theta,
      dark: dark,
      scale: scale,
      diffuse: diffuse,
      mapSamples: mapSamples,
      mapBrightness: mapBrightness,
      baseColor: [1, 0.78, 0], // Bilio Yellow - land masses
      markerColor: markerColor,
      glowColor: glowColor,
      opacity: 1,
      offset: [0, 0],
      markers: markers.map(marker => ({
        location: marker.location,
        size: marker.size
      })),
      onRender: (state: Record<string, any>) => {
        state.phi = phi;
        phi += 0.003 * orbitSpeed;
        setGlobeState(prev => ({ ...prev, phi }));
      },
    });

    globeRef.current = globe;

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [dark, markers, baseColor, markerColor, glowColor, theta, scale, diffuse, mapSamples, mapBrightness, orbitSpeed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'z-[10] mx-auto flex w-full max-w-[350px] items-center justify-center relative',
        className,
      )}
    >
      {/* Globe Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          aspectRatio: '1',
        }}
      />
      
      {/* Orbiting Currencies Layer */}
      {orbitingCurrencies && (
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          <AnimatePresence>
            {currencyElements.map((item) => {
              const currentTime = Date.now() / 1000;
              const angle = item.startAngle + (currentTime * item.ring.speed * 30 * orbitSpeed);
              
              const position = calculate3DPosition(
                angle,
                item.ring.radius,
                item.ring.tilt,
                globeState.phi,
                globeState.width
              );
              
              return (
                <motion.div
                  key={item.id}
                  className="absolute select-none font-bold"
                  style={{
                    left: position.x,
                    top: position.y,
                    transform: 'translate(-50%, -50%)',
                    fontSize: `${item.size * position.scale}px`,
                    color: item.color, // Use Bilio brand color
                    textShadow: `0 0 ${4 + item.ringIndex * 1}px ${item.glowColor}, 0 0 ${2 + item.ringIndex * 1}px ${item.color}`,
                    zIndex: position.isBehindGlobe ? 5 : 15 + Math.floor(position.depth * 5),
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: position.opacity * item.opacity,
                    scale: position.scale,
                    rotateY: position.isBehindGlobe ? 180 : 0,
                  }}
                  transition={{
                    opacity: { duration: 0.5 },
                    scale: { duration: 0.3 },
                    rotateY: { duration: 0.8 },
                  }}
                >
                  <div
                    className="relative"
                    style={{
                      filter: position.isBehindGlobe 
                        ? `blur(1px) brightness(0.7)` 
                        : `drop-shadow(0 0 6px ${item.glowColor}) drop-shadow(0 0 3px ${item.color})`,
                    }}
                  >
                    {item.currency.symbol}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          {/* Orbital Ring Guides with Bilio brand colors */}
          {showCurrencyTrails && ORBITAL_RINGS.map((ring, index) => {
            // Cycle through Bilio brand colors for orbital rings
            const ringColors = [
              `rgba(255, 199, 0, ${0.12 - index * 0.02})`, // Bilio Yellow
              `rgba(0, 47, 108, ${0.10 - index * 0.02})`,  // Bilio Blue
              `rgba(10, 173, 110, ${0.08 - index * 0.02})`, // Bilio Green
            ];
            const ringColor = ringColors[index % 3];
            
            return (
              <motion.div
                key={`ring-${index}`}
                className="absolute border border-dashed rounded-full pointer-events-none"
                style={{
                  left: '50%',
                  top: '50%',
                  width: `${ring.radius * 80}px`,
                  height: `${ring.radius * 56}px`, // Elliptical for 3D effect
                  borderColor: ringColor,
                  borderWidth: '1px',
                  transform: `translate(-50%, -50%) rotateX(${ring.tilt}deg)`,
                  boxShadow: `inset 0 0 8px ${ringColor}, 0 0 4px ${ringColor}`,
                }}
                animate={{
                  rotateZ: [0, 360],
                }}
                transition={{
                  duration: 60 / ring.speed,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Earth;
