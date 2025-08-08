import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic } from 'lucide-react';

interface AudioWaveformProps {
  isPlaying?: boolean;
  amplitude?: 'low' | 'medium' | 'high';
  color?: 'blue' | 'yellow' | 'green';
  showMicrophone?: boolean;
  transcribedText?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

// Amplitude configurations
const AMPLITUDE_CONFIGS = {
  low: {
    maxHeight: 20,
    minHeight: 4,
    variance: 0.3,
  },
  medium: {
    maxHeight: 35,
    minHeight: 8,
    variance: 0.6,
  },
  high: {
    maxHeight: 50,
    minHeight: 12,
    variance: 0.8,
  },
} as const;

// Size configurations
const SIZE_CONFIGS = {
  sm: {
    barWidth: 2,
    barGap: 1,
    barCount: 12,
    micSize: 16,
    fontSize: 'text-xs',
  },
  md: {
    barWidth: 3,
    barGap: 2,
    barCount: 16,
    micSize: 20,
    fontSize: 'text-sm',
  },
  lg: {
    barWidth: 4,
    barGap: 3,
    barCount: 20,
    micSize: 24,
    fontSize: 'text-base',
  },
} as const;

// Color configurations using Bilio brand colors
const COLOR_CONFIGS = {
  blue: {
    primary: '#002F6C',
    light: '#1A4A8A',
    glow: 'rgba(0, 47, 108, 0.3)',
    micBackground: 'rgba(0, 47, 108, 0.1)',
  },
  yellow: {
    primary: '#FFC700',
    light: '#FFD633',
    glow: 'rgba(255, 199, 0, 0.3)',
    micBackground: 'rgba(255, 199, 0, 0.1)',
  },
  green: {
    primary: '#0AAD6E',
    light: '#2BC085',
    glow: 'rgba(10, 173, 110, 0.3)',
    micBackground: 'rgba(10, 173, 110, 0.1)',
  },
} as const;

// Sample transcription text that appears character by character
const DEFAULT_TRANSCRIPTION = "Gasté 50 dólares en comida";

interface WaveBar {
  id: number;
  height: number;
  delay: number;
  duration: number;
}

const AudioWaveform: React.FC<AudioWaveformProps> = ({
  isPlaying = false,
  amplitude = 'medium',
  color = 'blue',
  showMicrophone = true,
  transcribedText = DEFAULT_TRANSCRIPTION,
  className = '',
  size = 'md',
}) => {
  // Defensive programming: ensure valid values with fallbacks
  const safeAmplitude = amplitude && AMPLITUDE_CONFIGS[amplitude] ? amplitude : 'medium';
  const safeSize = size && SIZE_CONFIGS[size] ? size : 'md';
  const safeColor = color && COLOR_CONFIGS[color] ? color : 'blue';
  
  const amplitudeConfig = AMPLITUDE_CONFIGS[safeAmplitude];
  const sizeConfig = SIZE_CONFIGS[safeSize];
  const colorConfig = COLOR_CONFIGS[safeColor];
  
  // Additional safety check - should never happen but prevents crashes
  if (!amplitudeConfig || !sizeConfig || !colorConfig) {
    console.warn('AudioWaveform: Invalid configuration detected, using defaults');
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <div className="text-gray-500 text-sm">Audio visualization error</div>
      </div>
    );
  }

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  // Generate waveform bars with realistic audio-like patterns
  const waveBars = useMemo(() => {
    const bars: WaveBar[] = [];
    
    for (let i = 0; i < sizeConfig.barCount; i++) {
      // Create a more realistic waveform pattern
      // Higher frequencies in the middle, lower on the edges
      const centerDistance = Math.abs(i - sizeConfig.barCount / 2);
      const centerWeight = 1 - (centerDistance / (sizeConfig.barCount / 2)) * 0.6;
      
      // Base height with some randomization
      const baseHeight = amplitudeConfig.minHeight + 
        (amplitudeConfig.maxHeight - amplitudeConfig.minHeight) * centerWeight;
      
      const randomFactor = 1 + (Math.random() - 0.5) * amplitudeConfig.variance;
      const height = Math.max(amplitudeConfig.minHeight, baseHeight * randomFactor);
      
      bars.push({
        id: i,
        height,
        delay: i * 0.05, // Slight stagger across bars
        duration: 0.8 + Math.random() * 0.6, // 0.8-1.4s variation
      });
    }
    
    return bars;
  }, [sizeConfig.barCount, amplitudeConfig.minHeight, amplitudeConfig.maxHeight, amplitudeConfig.variance]);

  // Animation variants for waveform bars
  const barVariants = {
    idle: (custom: WaveBar) => ({
      height: amplitudeConfig.minHeight,
      opacity: 0.3,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
    playing: (custom: WaveBar) => ({
      height: [
        amplitudeConfig.minHeight,
        custom.height,
        amplitudeConfig.minHeight + (custom.height - amplitudeConfig.minHeight) * 0.3,
        custom.height * 0.8,
        amplitudeConfig.minHeight,
      ],
      opacity: [0.3, 1, 0.8, 0.9, 0.3],
      transition: {
        duration: custom.duration,
        delay: custom.delay,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  };

  // Microphone pulse animation
  const microphoneVariants = {
    idle: {
      scale: 1,
      opacity: 0.6,
    },
    recording: {
      scale: [1, 1.1, 1],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // Ripple effect around microphone
  const rippleVariants = {
    idle: {
      scale: 1,
      opacity: 0,
    },
    recording: {
      scale: [1, 1.8, 2.5],
      opacity: [0.3, 0.1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeOut',
      },
    },
  };

  // Text typing animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const characterVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  if (prefersReducedMotion) {
    // Static version for reduced motion users
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        {showMicrophone && (
          <div 
            className="rounded-full p-2 flex items-center justify-center"
            style={{ 
              backgroundColor: colorConfig.micBackground,
              color: colorConfig.primary,
            }}
          >
            <Mic size={sizeConfig.micSize} />
          </div>
        )}
        
        <div className="flex items-end gap-1">
          {waveBars.slice(0, Math.floor(waveBars.length * 0.6)).map((bar) => (
            <div
              key={`static-bar-${bar.id}`}
              className="rounded-t-sm"
              style={{
                width: sizeConfig.barWidth,
                height: isPlaying ? bar.height : amplitudeConfig.minHeight,
                backgroundColor: colorConfig.primary,
                opacity: isPlaying ? 0.8 : 0.3,
              }}
            />
          ))}
        </div>

        {isPlaying && (
          <div 
            className={`${sizeConfig.fontSize} font-medium`}
            style={{ color: colorConfig.primary }}
          >
            {transcribedText}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Microphone with ripple effect */}
      {showMicrophone && (
        <div className="relative">
          {/* Ripple effects */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: colorConfig.glow }}
            variants={rippleVariants}
            animate={isPlaying ? 'recording' : 'idle'}
          />
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: colorConfig.glow }}
            variants={rippleVariants}
            animate={isPlaying ? 'recording' : 'idle'}
            transition={{ delay: 0.5 }}
          />
          
          {/* Microphone icon */}
          <motion.div
            className="relative rounded-full p-2 flex items-center justify-center"
            style={{ 
              backgroundColor: colorConfig.micBackground,
              color: colorConfig.primary,
            }}
            variants={microphoneVariants}
            animate={isPlaying ? 'recording' : 'idle'}
          >
            <Mic size={sizeConfig.micSize} />
          </motion.div>
        </div>
      )}

      {/* Waveform bars */}
      <div 
        className="flex items-end"
        style={{ gap: sizeConfig.barGap }}
      >
        {waveBars.map((bar) => (
          <motion.div
            key={`bar-${bar.id}`}
            className="rounded-t-sm"
            style={{
              width: sizeConfig.barWidth,
              backgroundColor: colorConfig.primary,
              filter: `drop-shadow(0 0 4px ${colorConfig.glow})`,
            }}
            custom={bar}
            variants={barVariants}
            animate={isPlaying ? 'playing' : 'idle'}
          />
        ))}
      </div>

      {/* Transcribed text with typewriter effect */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            className={`${sizeConfig.fontSize} font-medium flex`}
            style={{ color: colorConfig.primary }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {transcribedText.split('').map((char, index) => (
              <motion.span
                key={`char-${index}`}
                variants={characterVariants}
                className={char === ' ' ? 'w-2' : ''}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Arrow indicating flow direction */}
      {isPlaying && (
        <motion.div
          className="text-gray-400"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          →
        </motion.div>
      )}
    </div>
  );
};

export default AudioWaveform;