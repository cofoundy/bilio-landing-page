import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Animation states for the brain
type BrainState = 'idle' | 'thinking' | 'success';

// Particle systems for different states
interface Particle {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
}

interface AnimatedBrainProps {
  state?: BrainState;
  particles?: boolean;
  pulseSpeed?: 'slow' | 'medium' | 'fast';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const SIZE_CONFIGS = {
  sm: {
    containerSize: 'w-12 h-12',
    fontSize: 'text-2xl',
    particleCount: 6,
    glowRadius: 20,
  },
  md: {
    containerSize: 'w-16 h-16',
    fontSize: 'text-3xl',
    particleCount: 8,
    glowRadius: 30,
  },
  lg: {
    containerSize: 'w-24 h-24',
    fontSize: 'text-5xl',
    particleCount: 12,
    glowRadius: 40,
  },
  xl: {
    containerSize: 'w-32 h-32',
    fontSize: 'text-6xl',
    particleCount: 16,
    glowRadius: 60,
  },
} as const;

const PULSE_SPEEDS = {
  slow: 3,
  medium: 2,
  fast: 1.2,
} as const;

// Color configurations for different states
const STATE_COLORS = {
  idle: {
    brain: '#002F6C', // Bilio blue
    glow: 'rgba(0, 47, 108, 0.3)',
    particles: '#1A4A8A', // Light blue
  },
  thinking: {
    brain: '#FFC700', // Bilio yellow
    glow: 'rgba(255, 199, 0, 0.4)',
    particles: '#FFD633', // Light yellow
  },
  success: {
    brain: '#0AAD6E', // Bilio green
    glow: 'rgba(10, 173, 110, 0.4)',
    particles: '#2BC085', // Light green
  },
} as const;

const AnimatedBrain: React.FC<AnimatedBrainProps> = ({
  state = 'idle',
  particles = true,
  pulseSpeed = 'medium',
  size = 'md',
  className = '',
}) => {
  // Defensive programming - ensure props are valid
  const safeSize = size && SIZE_CONFIGS[size] ? size : 'md';
  const safeState = state && STATE_COLORS[state] ? state : 'idle';
  const safePulseSpeed = pulseSpeed && PULSE_SPEEDS[pulseSpeed] ? pulseSpeed : 'medium';
  
  const config = SIZE_CONFIGS[safeSize];
  const colors = STATE_COLORS[safeState];
  const speed = PULSE_SPEEDS[safePulseSpeed];

  // Additional safety check
  if (!config || !colors || !speed) {
    console.error('AnimatedBrain: Invalid configuration', { size: safeSize, state: safeState, pulseSpeed: safePulseSpeed });
    return (
      <div className={`relative flex items-center justify-center w-16 h-16 ${className}`}>
        <div className="text-3xl">🧠</div>
      </div>
    );
  }

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  // Generate particles for thinking and success states
  const particleElements = useMemo(() => {
    if (!particles || safeState === 'idle' || !config || !colors) return [];

    const particleCount = config.particleCount || 8;
    const glowRadius = config.glowRadius || 30;
    const particleColor = colors.particles || '#1A4A8A';
    const generatedParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      // Generate particles in a circle around the brain
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = glowRadius + Math.random() * 20;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      generatedParticles.push({
        id: `particle-${i}`,
        x,
        y,
        size: Math.random() * 4 + 2, // 2-6px
        color: particleColor,
        delay: (i / particleCount) * 0.8, // Staggered animation
        duration: 1 + Math.random() * 0.5, // 1-1.5s
      });
    }

    return generatedParticles;
  }, [particles, safeState, config, colors]);

  // Animation variants for the brain
  const brainVariants = useMemo(() => ({
    idle: {
      scale: [1, 1.05, 1],
      rotate: [0, 2, -2, 0],
      filter: `drop-shadow(0 0 ${config?.glowRadius || 30}px ${colors?.glow || 'rgba(0, 47, 108, 0.3)'})`,
      transition: {
        duration: (speed || 2) * 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    thinking: {
      scale: [1, 1.15, 0.95, 1.1, 1],
      rotate: [0, -5, 5, -3, 0],
      filter: `drop-shadow(0 0 ${(config?.glowRadius || 30) * 1.5}px ${colors?.glow || 'rgba(255, 199, 0, 0.4)'})`,
      transition: {
        duration: (speed || 2) * 0.8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    success: {
      scale: [1, 1.2, 1],
      rotate: [0, 10, 0],
      filter: `drop-shadow(0 0 ${(config?.glowRadius || 30) * 1.2}px ${colors?.glow || 'rgba(10, 173, 110, 0.4)'})`,
      transition: {
        duration: speed || 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }), [config, colors, speed]);

  // Particle animation variants
  const particleVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: (custom: Particle) => ({
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      x: [0, custom.x, custom.x * 1.5],
      y: [0, custom.y, custom.y * 1.5],
      transition: {
        duration: custom.duration,
        delay: custom.delay,
        repeat: Infinity,
        ease: 'easeOut',
      },
    }),
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Neural connection lines for thinking state
  const neuralConnections = useMemo(() => {
    if (safeState !== 'thinking' || !config) return [];
    
    const connections = [];
    const particleCount = config.particleCount || 8;
    const glowRadius = config.glowRadius || 30;
    const connectionCount = Math.floor(particleCount / 2);
    
    for (let i = 0; i < connectionCount; i++) {
      const angle1 = (i / connectionCount) * Math.PI * 2;
      const angle2 = ((i + 1) / connectionCount) * Math.PI * 2;
      const radius = glowRadius * 0.8;
      
      const x1 = Math.cos(angle1) * radius;
      const y1 = Math.sin(angle1) * radius;
      const x2 = Math.cos(angle2) * radius;
      const y2 = Math.sin(angle2) * radius;
      
      connections.push({
        id: `connection-${i}`,
        x1,
        y1,
        x2,
        y2,
        delay: i * 0.1,
      });
    }
    
    return connections;
  }, [safeState, config]);

  if (prefersReducedMotion) {
    // Static version for reduced motion users
    return (
      <div className={`relative flex items-center justify-center ${config?.containerSize || 'w-16 h-16'} ${className}`}>
        <div 
          className={`${config?.fontSize || 'text-3xl'} select-none`}
          style={{ 
            color: colors?.brain || '#002F6C',
            filter: `drop-shadow(0 0 10px ${colors?.glow || 'rgba(0, 47, 108, 0.3)'})`,
          }}
        >
          🧠
        </div>
        {safeState === 'success' && (
          <div className="absolute -top-2 -right-2 text-green-500 text-lg">
            ✓
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center ${config?.containerSize || 'w-16 h-16'} ${className}`}>
      {/* Neural connections for thinking state */}
      {safeState === 'thinking' && neuralConnections.length > 0 && config && (
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ filter: 'drop-shadow(0 0 2px rgba(255, 199, 0, 0.5))' }}
        >
          {neuralConnections.map((connection) => (
            <motion.line
              key={connection.id}
              x1={`${50 + (connection.x1 / (config.glowRadius || 30)) * 30}%`}
              y1={`${50 + (connection.y1 / (config.glowRadius || 30)) * 30}%`}
              x2={`${50 + (connection.x2 / (config.glowRadius || 30)) * 30}%`}
              y2={`${50 + (connection.y2 / (config.glowRadius || 30)) * 30}%`}
              stroke={colors?.particles || '#FFD633'}
              strokeWidth="1"
              opacity={0}
              animate={{
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 1,
                delay: connection.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </svg>
      )}

      {/* Main brain emoji */}
      <motion.div
        className={`${config?.fontSize || 'text-3xl'} select-none z-10`}
        style={{ color: colors?.brain || '#002F6C' }}
        variants={brainVariants}
        animate={safeState}
      >
        🧠
      </motion.div>

      {/* Success checkmark */}
      <AnimatePresence>
        {safeState === 'success' && (
          <motion.div
            className="absolute -top-2 -right-2 text-lg font-bold z-20"
            style={{ color: colors?.brain || '#0AAD6E' }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{ 
              type: 'spring', 
              stiffness: 200, 
              damping: 15,
              delay: 0.2 
            }}
          >
            ✓
          </motion.div>
        )}
      </AnimatePresence>

      {/* Particle system */}
      <AnimatePresence>
        {particles && safeState !== 'idle' && particleElements.length > 0 && (
          <>
            {particleElements.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full z-5"
                style={{
                  width: particle.size,
                  height: particle.size,
                  backgroundColor: particle.color,
                  left: '50%',
                  top: '50%',
                  marginLeft: -particle.size / 2,
                  marginTop: -particle.size / 2,
                }}
                custom={particle}
                variants={particleVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Pulsing glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-20"
        style={{ 
          backgroundColor: colors?.brain || '#002F6C',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: (speed || 2) * 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default AnimatedBrain;