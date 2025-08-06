import React, { Component, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NumberFlowProps {
  value: number;
  className?: string;
  format?: {
    style: string;
    currency: string;
    maximumFractionDigits: number;
  };
}

// Enhanced fallback component with smooth transitions
const FallbackNumberDisplay: React.FC<NumberFlowProps> = ({ 
  value, 
  className, 
  format 
}) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (displayValue !== value) {
      setIsAnimating(true);
      // Smooth transition effect
      const timer = setTimeout(() => {
        setDisplayValue(value);
        setIsAnimating(false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [value, displayValue]);

  const formatNumber = (num: number) => {
    if (format?.style === 'currency') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: format.currency,
        maximumFractionDigits: format.maximumFractionDigits || 0,
      }).format(num);
    }
    return num.toString();
  };

  return (
    <span 
      className={cn(
        className, 
        'transition-all duration-300',
        isAnimating && 'transform scale-105'
      )}
    >
      {formatNumber(displayValue)}
    </span>
  );
};

// Error boundary for NumberFlow
class NumberFlowErrorBoundary extends Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.warn('NumberFlow failed, using fallback - this is normal for some browsers:', error.message);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

// Detect browser compatibility
const isNumberFlowSupported = () => {
  try {
    // Check for specific features that NumberFlow needs
    if (typeof window === 'undefined') return false;
    
    // Basic React hooks availability
    if (!('requestAnimationFrame' in window)) return false;
    
    // Check if React hooks are properly available
    if (typeof React.useImperativeHandle !== 'function') return false;
    
    // Browser compatibility check - avoid known problematic browsers
    const userAgent = navigator.userAgent;
    const isVivaldi = userAgent.includes('Vivaldi');
    const isOldSafari = userAgent.includes('Safari') && !userAgent.includes('Chrome') && 
                       userAgent.match(/Version\/(\d+)/)?.[1] && 
                       parseInt(userAgent.match(/Version\/(\d+)/)?.[1] || '0') < 15;
    
    // Use fallback for known problematic browsers
    if (isVivaldi || isOldSafari) return false;
    
    return true;
  } catch {
    return false;
  }
};

// Safe NumberFlow wrapper with browser detection
export const SafeNumberFlow: React.FC<NumberFlowProps> = (props) => {
  const [NumberFlowComponent, setNumberFlowComponent] = useState<any>(null);
  const [shouldUseFallback, setShouldUseFallback] = useState(!isNumberFlowSupported());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // If browser doesn't support NumberFlow well, use fallback immediately
    if (!isNumberFlowSupported()) {
      setShouldUseFallback(true);
      return;
    }

    const loadNumberFlow = async () => {
      try {
        // Use dynamic import with timeout
        const importPromise = import('@number-flow/react');
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Import timeout')), 2000)
        );
        
        const result = await Promise.race([importPromise, timeoutPromise]) as any;
        setNumberFlowComponent(() => result.default);
      } catch (error) {
        console.warn('NumberFlow not available, using fallback (this is normal for some browsers)');
        setShouldUseFallback(true);
      }
    };

    loadNumberFlow();
  }, []);

  // Don't render until mounted to avoid hydration issues
  if (!mounted || shouldUseFallback || !NumberFlowComponent) {
    return <FallbackNumberDisplay {...props} />;
  }

  return (
    <NumberFlowErrorBoundary fallback={<FallbackNumberDisplay {...props} />}>
      <NumberFlowComponent {...props} />
    </NumberFlowErrorBoundary>
  );
};