import React, { ErrorInfo, ReactNode } from 'react';
import { Brain } from 'lucide-react';
import { motion } from 'framer-motion';

// Error Boundary for AnimatedBrain
class AnimatedBrainErrorBoundary extends React.Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback?: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('AnimatedBrain component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="w-24 h-24 flex items-center justify-center">
          <motion.div
            className="text-5xl text-Bilio-blue"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🧠
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Safe wrapper component with prop validation
interface SafeAnimatedBrainProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'medium' | 'large';
  state?: 'idle' | 'thinking' | 'success';
  particles?: boolean;
  pulseSpeed?: 'slow' | 'medium' | 'fast' | number;
  className?: string;
}

const SafeAnimatedBrain: React.FC<SafeAnimatedBrainProps> = ({
  size = 'md',
  state = 'thinking',
  particles = true,
  pulseSpeed = 'medium',
  className = '',
}) => {
  try {
    // Normalize size prop
    const normalizedSize = (() => {
      if (size === 'small') return 'sm';
      if (size === 'medium') return 'md';
      if (size === 'large') return 'lg';
      return size;
    })();

    // Normalize pulseSpeed prop
    const normalizedPulseSpeed = (() => {
      if (typeof pulseSpeed === 'number') {
        if (pulseSpeed <= 1) return 'slow';
        if (pulseSpeed <= 1.5) return 'medium';
        return 'fast';
      }
      return pulseSpeed;
    })();

    // Validate props
    const validSizes = ['sm', 'md', 'lg', 'xl'];
    const validStates = ['idle', 'thinking', 'success'];
    const validSpeeds = ['slow', 'medium', 'fast'];

    const safeSize = validSizes.includes(normalizedSize as string) ? normalizedSize : 'md';
    const safeState = validStates.includes(state) ? state : 'thinking';
    const safePulseSpeed = validSpeeds.includes(normalizedPulseSpeed) ? normalizedPulseSpeed : 'medium';

    // Lazy load the AnimatedBrain component
    const AnimatedBrain = React.lazy(() => 
      import('../animations/AnimatedBrain').then(module => ({ default: module.default }))
    );

    return (
      <AnimatedBrainErrorBoundary>
        <React.Suspense fallback={
          <div className="w-24 h-24 flex items-center justify-center">
            <motion.div
              className="text-5xl text-Bilio-blue animate-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              🧠
            </motion.div>
          </div>
        }>
          <AnimatedBrain
            size={safeSize as 'sm' | 'md' | 'lg' | 'xl'}
            state={safeState}
            particles={particles}
            pulseSpeed={safePulseSpeed}
            className={className}
          />
        </React.Suspense>
      </AnimatedBrainErrorBoundary>
    );
  } catch (error) {
    console.error('SafeAnimatedBrain error:', error);
    
    // Fallback UI
    return (
      <div className="w-24 h-24 flex items-center justify-center">
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-to-br from-Bilio-blue to-blue-600 flex items-center justify-center shadow-lg"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Brain className="w-8 h-8 text-white" />
        </motion.div>
      </div>
    );
  }
};

export default SafeAnimatedBrain;