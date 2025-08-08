import React, { Component, useState, useEffect } from 'react';
import { Mic, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AudioWaveformProps {
  isPlaying?: boolean;
  amplitude?: 'low' | 'medium' | 'high';
  color?: 'blue' | 'yellow' | 'green';
  showMicrophone?: boolean;
  transcribedText?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

// Fallback component for when AudioWaveform fails
const FallbackAudioDisplay: React.FC<AudioWaveformProps> = ({ 
  isPlaying = false,
  color = 'blue',
  showMicrophone = true,
  className = '',
  size = 'md'
}) => {
  const colorMap = {
    blue: '#002F6C',
    yellow: '#FFC700', 
    green: '#0AAD6E'
  };
  
  const sizeMap = {
    sm: { mic: 16, bars: 2 },
    md: { mic: 20, bars: 3 },
    lg: { mic: 24, bars: 4 }
  };
  
  const currentColor = colorMap[color];
  const currentSize = sizeMap[size];

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {showMicrophone && (
        <div 
          className="rounded-full p-2 flex items-center justify-center"
          style={{ 
            backgroundColor: `${currentColor}15`,
            color: currentColor
          }}
        >
          <Mic size={currentSize.mic} />
        </div>
      )}
      
      {/* Simple static bars */}
      <div className="flex items-end gap-1">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "rounded-t-sm transition-all duration-300",
              isPlaying ? 'opacity-80' : 'opacity-30'
            )}
            style={{
              width: currentSize.bars,
              height: isPlaying ? Math.random() * 20 + 10 : 4,
              backgroundColor: currentColor,
            }}
          />
        ))}
      </div>

      {isPlaying && (
        <div 
          className="text-sm font-medium"
          style={{ color: currentColor }}
        >
          Audio processing...
        </div>
      )}
    </div>
  );
};

// Error boundary for AudioWaveform
class AudioWaveformErrorBoundary extends Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.warn('AudioWaveform component error - using fallback:', {
      error: error.message,
      componentStack: errorInfo.componentStack
    });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

// Safe AudioWaveform wrapper with error handling
export const SafeAudioWaveform: React.FC<AudioWaveformProps> = (props) => {
  const [AudioWaveformComponent, setAudioWaveformComponent] = useState<any>(null);
  const [shouldUseFallback, setShouldUseFallback] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const loadAudioWaveform = async () => {
      try {
        // Dynamic import with timeout
        const importPromise = import('@/components/animations/AudioWaveform');
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('AudioWaveform import timeout')), 1000)
        );
        
        const result = await Promise.race([importPromise, timeoutPromise]) as any;
        setAudioWaveformComponent(() => result.default);
      } catch (error) {
        console.warn('AudioWaveform not available, using fallback:', error);
        setShouldUseFallback(true);
      }
    };

    loadAudioWaveform();
  }, []);

  // Don't render until mounted to avoid hydration issues
  if (!mounted || shouldUseFallback || !AudioWaveformComponent) {
    return <FallbackAudioDisplay {...props} />;
  }

  return (
    <AudioWaveformErrorBoundary fallback={<FallbackAudioDisplay {...props} />}>
      <AudioWaveformComponent {...props} />
    </AudioWaveformErrorBoundary>
  );
};

export default SafeAudioWaveform;