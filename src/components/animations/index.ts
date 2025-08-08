// Animation System - Shared configurations and utilities

// Export all animation components
export { default as FloatingCurrency } from './FloatingCurrency';
export { default as AnimatedBrain } from './AnimatedBrain';
export { default as AudioWaveform } from './AudioWaveform';
export { default as MiniGlobe } from './MiniGlobe';
export { default as LiveDashboard } from './LiveDashboard';

// Shared animation variants
export const sharedVariants = {
  // Fade in animations
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
  },
  
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  },
  
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  },
  
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  },
  
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  },
  
  // Scale animations
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1],
        scale: { type: 'spring', stiffness: 200, damping: 20 }
      }
    },
  },
  
  // Stagger container
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },
  
  // Loading states
  pulse: {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },
  
  // Floating motion
  float: {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },
  
  // Rotation
  rotate: {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  },
} as const;

// Bilio brand colors for animations
export const bilioColors = {
  yellow: {
    primary: '#FFC700',
    light: '#FFD633',
    dark: '#E6B300',
    soft: '#FFF9E6',
    glow: 'rgba(255, 199, 0, 0.3)',
  },
  blue: {
    primary: '#002F6C',
    light: '#1A4A8A',
    dark: '#001F4A',
    soft: '#E6F0FF',
    glow: 'rgba(0, 47, 108, 0.3)',
  },
  green: {
    primary: '#0AAD6E',
    light: '#2BC085',
    dark: '#088A57',
    soft: '#E8F7F1',
    glow: 'rgba(10, 173, 110, 0.3)',
  },
} as const;

// Motion tokens for consistent timing
export const motionTokens = {
  duration: {
    instant: 0.1,
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    slower: 1.2,
  },
  ease: {
    standard: [0.4, 0.0, 0.2, 1] as const,
    decelerate: [0.0, 0.0, 0.2, 1] as const,
    accelerate: [0.4, 0.0, 1, 1] as const,
    sharp: [0.4, 0.0, 0.6, 1] as const,
    spring: { type: 'spring', stiffness: 200, damping: 20 } as const,
  },
} as const;

// Performance utilities
export const getReducedMotionConfig = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const getDevicePerformance = () => {
  if (typeof navigator === 'undefined') return 'high';
  
  // Check device memory (if available)
  const deviceMemory = (navigator as any).deviceMemory;
  const hardwareConcurrency = navigator.hardwareConcurrency;
  
  if (deviceMemory && deviceMemory < 4) return 'low';
  if (hardwareConcurrency && hardwareConcurrency < 4) return 'medium';
  return 'high';
};

export const getOptimizedParticleCount = (baseCount: number) => {
  const performance = getDevicePerformance();
  const multipliers = {
    low: 0.3,
    medium: 0.7,
    high: 1.0,
  };
  
  return Math.floor(baseCount * multipliers[performance]);
};

// Intersection Observer hook for scroll-triggered animations
export const useScrollAnimation = (threshold = 0.3) => {
  const [isInView, setIsInView] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Only trigger once for performance
          observer.disconnect();
        }
      },
      { 
        threshold,
        // Add root margin for earlier triggering
        rootMargin: '50px 0px',
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [threshold]);
  
  return { ref, isInView };
};

// Re-export React for the hook
import React from 'react';