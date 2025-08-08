import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// LATAM + North America currencies with geographic weighting
const CURRENCY_SYMBOLS = [
  // North America (higher weight for primary markets)
  { symbol: '$', flag: '🇺🇸', weight: 4, name: 'USD', country: 'United States' },
  { symbol: 'C$', flag: '🇨🇦', weight: 2, name: 'CAD', country: 'Canada' },
  
  // Mexico & Central America
  { symbol: 'MX$', flag: '🇲🇽', weight: 3, name: 'MXN', country: 'Mexico' },
  { symbol: 'Q', flag: '🇬🇹', weight: 1, name: 'GTQ', country: 'Guatemala' },
  { symbol: '₡', flag: '🇨🇷', weight: 1, name: 'CRC', country: 'Costa Rica' },
  { symbol: 'B/.', flag: '🇵🇦', weight: 1, name: 'PAB', country: 'Panama' },
  
  // South America - Northern
  { symbol: 'COL$', flag: '🇨🇴', weight: 2, name: 'COP', country: 'Colombia' },
  { symbol: 'Bs', flag: '🇻🇪', weight: 1, name: 'VES', country: 'Venezuela' },
  
  // South America - Brazil & Peru (major markets)
  { symbol: 'R$', flag: '🇧🇷', weight: 3, name: 'BRL', country: 'Brazil' },
  { symbol: 'S/', flag: '🇵🇪', weight: 2, name: 'PEN', country: 'Peru' },
  
  // South America - Central
  { symbol: 'Bs', flag: '🇧🇴', weight: 1, name: 'BOB', country: 'Bolivia' },
  { symbol: 'CLP$', flag: '🇨🇱', weight: 2, name: 'CLP', country: 'Chile' },
  
  // South America - Southern Cone
  { symbol: 'AR$', flag: '🇦🇷', weight: 2, name: 'ARS', country: 'Argentina' },
  { symbol: '₲', flag: '🇵🇾', weight: 1, name: 'PYG', country: 'Paraguay' },
  { symbol: 'UY$', flag: '🇺🇾', weight: 1, name: 'UYU', country: 'Uruguay' },
];

// Area configurations for different sections with increased density
const AREA_CONFIGS = {
  hero: {
    width: '100vw',
    height: '100vh',
    maxElements: 30, // Increased from 15
  },
  full: {
    width: '100vw',
    height: '200vh',
    maxElements: 45, // Increased from 25
  },
  section: {
    width: '100%',
    height: '100%',
    maxElements: 20, // Increased from 8
  },
} as const;

// Density configurations
const DENSITY_CONFIGS = {
  low: 0.6,   // Increased from 0.4
  medium: 0.8, // Increased from 0.7
  high: 1.0,
} as const;

// Speed configurations for orbital motion (seconds per orbit)
const SPEED_CONFIGS = {
  slow: 30,   // Slower for more hypnotic effect
  medium: 25,
  fast: 20,
} as const;

// Orbital layers - currencies orbit at different distances and speeds
const ORBITAL_LAYERS = [
  { distance: 200, speed: 1.0, elements: 8 },   // Inner orbit - fastest
  { distance: 300, speed: 0.8, elements: 10 },  // Middle orbit
  { distance: 450, speed: 0.6, elements: 8 },   // Outer orbit
  { distance: 600, speed: 0.4, elements: 6 },   // Distant orbit - slowest
] as const;

interface FloatingCurrencyProps {
  symbols?: string[];
  density?: keyof typeof DENSITY_CONFIGS;
  speed?: keyof typeof SPEED_CONFIGS;
  area?: keyof typeof AREA_CONFIGS;
  className?: string;
  globeCenter?: { x: number; y: number }; // Center point for orbital motion
  showFlags?: boolean; // Whether to show flag emojis alongside symbols
}

interface FloatingElement {
  id: string;
  symbol: string;
  flag?: string;
  country: string;
  orbitDistance: number;
  orbitSpeed: number;
  startAngle: number;
  size: number;
  opacity: number;
  color: string;
  glowColor: string;
  duration: number;
  delay: number;
  layer: number; // Which orbital layer this element belongs to
  elementType: 'symbol' | 'flag' | 'combo'; // What to display
}

const FloatingCurrency: React.FC<FloatingCurrencyProps> = ({
  symbols,
  density = 'medium',
  speed = 'slow',
  area = 'hero',
  className = '',
  globeCenter = { x: 50, y: 50 }, // Default center of screen
  showFlags = true,
}) => {
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  const elements = useMemo(() => {
    const config = AREA_CONFIGS[area];
    const densityMultiplier = DENSITY_CONFIGS[density];
    const baseSpeed = SPEED_CONFIGS[speed];
    const elementCount = Math.floor(config.maxElements * densityMultiplier);

    // Create weighted currency pool
    const currencyPool = CURRENCY_SYMBOLS.flatMap(
      ({ symbol, flag, weight, name, country }) => 
        Array(weight).fill({ symbol, flag, name, country })
    );

    const generatedElements: FloatingElement[] = [];
    let layerIndex = 0;
    let elementsInCurrentLayer = 0;

    for (let i = 0; i < elementCount; i++) {
      // Assign to orbital layers
      if (elementsInCurrentLayer >= ORBITAL_LAYERS[layerIndex].elements) {
        layerIndex = (layerIndex + 1) % ORBITAL_LAYERS.length;
        elementsInCurrentLayer = 0;
      }
      
      const currentLayer = ORBITAL_LAYERS[layerIndex];
      const currency = currencyPool[Math.floor(Math.random() * currencyPool.length)];
      
      // Determine element type (symbol, flag, or combo)
      const elementTypes: ('symbol' | 'flag' | 'combo')[] = showFlags 
        ? ['symbol', 'flag', 'combo'] 
        : ['symbol'];
      const weights = showFlags 
        ? [3, 1, 2] // Favor symbols, some flags, moderate combos
        : [1];
      const elementType = elementTypes[
        weights.reduce((acc, weight, idx) => {
          return Math.random() < weight / weights.reduce((a, b) => a + b, 0) 
            ? idx : acc;
        }, 0)
      ];

      // Orbital parameters
      const orbitDistance = currentLayer.distance * (0.8 + Math.random() * 0.4); // ±20% variance
      const orbitSpeed = currentLayer.speed * (0.8 + Math.random() * 0.4); // Speed variance
      const startAngle = (Math.random() * 360) * (Math.PI / 180); // Random starting position
      
      // Size based on distance (closer = larger, farther = smaller)
      const baseSize = 40 - (layerIndex * 6); // 40px, 34px, 28px, 22px
      const size = baseSize + (Math.random() - 0.5) * 8; // ±4px variance
      
      // Opacity for depth (closer = more opaque, farther = more transparent)
      const baseOpacity = 0.9 - (layerIndex * 0.15); // 0.9, 0.75, 0.6, 0.45
      const opacity = Math.max(0.2, baseOpacity + (Math.random() - 0.5) * 0.2);
      
      // Enhanced color system with more variety
      const colorOptions = [
        { color: '#FFC700', glowColor: 'rgba(255, 199, 0, 0.4)', weight: 4 }, // Mikado Yellow
        { color: '#002F6C', glowColor: 'rgba(0, 47, 108, 0.4)', weight: 3 }, // Delft Blue
        { color: '#0AAD6E', glowColor: 'rgba(10, 173, 110, 0.4)', weight: 3 }, // Cambridge Blue-green
        { color: '#3d405b', glowColor: 'rgba(61, 64, 91, 0.3)', weight: 2 }, // Charcoal
        { color: '#fec600', glowColor: 'rgba(254, 198, 0, 0.4)', weight: 2 }, // Gold variant
        { color: '#1A4A8A', glowColor: 'rgba(26, 74, 138, 0.3)', weight: 1 }, // Light blue
        { color: '#2BC085', glowColor: 'rgba(43, 192, 133, 0.3)', weight: 1 }, // Light green
      ];
      
      const flatColorOptions = colorOptions.flatMap(
        ({ color, glowColor, weight }) => Array(weight).fill({ color, glowColor })
      );
      const selectedColor = flatColorOptions[Math.floor(Math.random() * flatColorOptions.length)];
      
      // Animation timing
      const duration = baseSpeed / orbitSpeed; // Faster orbits = shorter duration
      const delay = Math.random() * duration; // Staggered start times
      
      generatedElements.push({
        id: `currency-${i}`,
        symbol: currency.symbol,
        flag: currency.flag,
        country: currency.country,
        orbitDistance,
        orbitSpeed,
        startAngle,
        size,
        opacity,
        color: selectedColor.color,
        glowColor: selectedColor.glowColor,
        duration,
        delay,
        layer: layerIndex,
        elementType,
      });

      elementsInCurrentLayer++;
    }

    return generatedElements;
  }, [symbols, density, speed, area, globeCenter, showFlags]);

  // Utility function to calculate orbital position
  const calculateOrbitalPosition = (
    angle: number, 
    distance: number, 
    centerX: number, 
    centerY: number
  ) => {
    // Convert distance to reasonable viewport percentage (distance is in pixels, convert to vw equivalent)
    const radiusX = (distance / 10); // Convert pixel distance to percentage points
    const radiusY = radiusX * 0.7; // Slightly compressed ellipse for 3D effect
    
    // Calculate orbital position in percentage coordinates
    const x = centerX + Math.cos(angle) * (radiusX / 100) * 100; // Center + radius in percentage
    const y = centerY + Math.sin(angle) * (radiusY / 100) * 100; // Center + radius in percentage
    
    return { x, y };
  };

  // Render content based on element type
  const renderElement = (element: FloatingElement) => {
    switch (element.elementType) {
      case 'flag':
        return element.flag;
      case 'combo':
        return (
          <span className="flex items-center gap-1">
            <span style={{ fontSize: '0.7em' }}>{element.flag}</span>
            <span>{element.symbol}</span>
          </span>
        );
      default:
        return element.symbol;
    }
  };

  if (prefersReducedMotion) {
    // Static version with orbital positioning but no animation
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {elements.slice(0, Math.floor(elements.length * 0.4)).map((element) => {
          const position = calculateOrbitalPosition(
            element.startAngle,
            element.orbitDistance,
            globeCenter.x,
            globeCenter.y
          );
          
          return (
            <div
              key={`static-${element.id}`}
              className="absolute select-none font-semibold"
              style={{
                left: `${Math.max(5, Math.min(95, position.x))}%`,
                top: `${Math.max(5, Math.min(95, position.y))}%`,
                fontSize: `${element.size}px`,
                color: element.color,
                opacity: element.opacity * 0.7,
                filter: `drop-shadow(0 0 5px ${element.glowColor})`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {renderElement(element)}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((element) => {
        // Calculate orbital motion keyframes
        const orbitKeyframes = Array.from({ length: 36 }, (_, i) => {
          const angle = element.startAngle + (i / 36) * Math.PI * 2;
          return calculateOrbitalPosition(
            angle,
            element.orbitDistance,
            globeCenter.x,
            globeCenter.y
          );
        });

        return (
          <motion.div
            key={element.id}
            className="absolute select-none font-semibold"
            style={{
              fontSize: `${element.size}px`,
              color: element.color,
              filter: `drop-shadow(0 0 ${8 + (4 - element.layer) * 2}px ${element.glowColor})`,
              transform: 'translate(-50%, -50%)',
              zIndex: 10 + element.layer, // Layer ordering for depth
            }}
            initial={{
              x: `${orbitKeyframes[0].x}%`,
              y: `${orbitKeyframes[0].y}%`,
              opacity: 0,
              scale: 0.6,
              rotate: 0,
            }}
            animate={{
              x: orbitKeyframes.map(pos => `${Math.max(5, Math.min(95, pos.x))}%`),
              y: orbitKeyframes.map(pos => `${Math.max(5, Math.min(95, pos.y))}%`),
              opacity: [0, element.opacity * 0.3, element.opacity, element.opacity, element.opacity * 0.3, 0],
              scale: [
                0.6, 
                0.8, 
                1.0, 
                1.0 + Math.sin(element.startAngle) * 0.1, // Subtle size pulsing
                0.8, 
                0.6
              ],
              rotate: element.elementType === 'flag' 
                ? [0, 90, 180, 270, 360] // Flags spin slower
                : [0, 180, 360, 540, 720], // Symbols spin more
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: 'linear',
              times: [0, 0.1, 0.2, 0.8, 0.9, 1], // Smooth fade in/out with long visibility
            }}
          >
            <div
              className="relative"
              style={{
                // Add subtle particle trail effect for closer elements
                ...(element.layer < 2 && {
                  boxShadow: `0 0 20px ${element.glowColor}, 0 0 40px ${element.glowColor}40`,
                }),
              }}
            >
              {renderElement(element)}
            </div>
          </motion.div>
        );
      })}
      
      {/* Add subtle background orbital rings for visual depth */}
      <div className="absolute inset-0 pointer-events-none">
        {ORBITAL_LAYERS.map((layer, index) => (
          <motion.div
            key={`orbital-ring-${index}`}
            className="absolute rounded-full border-dashed"
            style={{
              left: `${globeCenter.x}%`,
              top: `${globeCenter.y}%`,
              width: `${(layer.distance / 1000) * 100}%`,
              height: `${(layer.distance / 1000) * 70}%`, // Elliptical
              borderColor: `rgba(255, 199, 0, ${0.1 - index * 0.02})`,
              borderWidth: '1px',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 60 + (index * 20), // Slower rings for outer orbits
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingCurrency;