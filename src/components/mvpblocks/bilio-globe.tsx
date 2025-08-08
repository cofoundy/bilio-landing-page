import React from 'react';
import { useTranslation } from 'react-i18next';
import Earth from '@/components/ui/globe';

// Convert Bilio colors to normalized RGB (divide by 255)
// Bilio Yellow: #FFC700 -> RGB(255, 199, 0) -> Normalized (1, 0.78, 0)
// Bilio Blue: #002F6C -> RGB(0, 47, 108) -> Normalized (0, 0.184, 0.424)  
// Bilio Green: #0AAD6E -> RGB(10, 173, 110) -> Normalized (0.039, 0.678, 0.431)
// Warm Beige: #F5F1E8 -> RGB(245, 241, 232) -> Normalized (0.96, 0.945, 0.91)
// Light Cream: #FFF8E7 -> RGB(255, 248, 231) -> Normalized (1, 0.973, 0.906)

interface BilioGlobeProps {
  className?: string;
  showTitle?: boolean;
}

export default function BilioGlobe({ className, showTitle = true }: BilioGlobeProps) {
  const { t } = useTranslation(['hero']);
  const markers = [
    // Major financial centers representing Bilio's global reach
    // Format: [latitude, longitude] 
    { location: [40.7128, -74.0060], size: 0.03 }, // New York
    { location: [51.5074, -0.1278], size: 0.03 },  // London  
    { location: [35.6762, 139.6503], size: 0.03 }, // Tokyo
    { location: [-33.8688, 151.2093], size: 0.02 }, // Sydney
    { location: [19.0760, 72.8777], size: 0.02 },  // Mumbai
    { location: [1.3521, 103.8198], size: 0.02 },  // Singapore
    { location: [49.2827, -123.1207], size: 0.02 }, // Vancouver
    { location: [-23.5505, -46.6333], size: 0.02 }, // São Paulo
    { location: [55.7558, 37.6176], size: 0.02 },  // Moscow
    { location: [31.2304, 121.4737], size: 0.02 }, // Shanghai
  ];

  return (
    <div className={`relative ${className}`}>
      {showTitle && (
        <div className="text-center mb-6 space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-Bilio-blue">
            {t('hero:globe.title')}
          </h2>
          <p className="text-Bilio-gray-600 text-sm md:text-base max-w-md mx-auto">
            {t('hero:globe.subtitle')}
          </p>
        </div>
      )}
      
      <div className="relative">
        {/* Enhanced ambient glow effect with warm Bilio brand colors */}
        <div className="absolute inset-0 bg-Bilio-yellow/15 rounded-full blur-3xl scale-130 animate-pulse-soft"></div>
        <div className="absolute inset-0 bg-amber-200/20 rounded-full blur-2xl scale-115 animate-pulse-soft" style={{animationDelay: '1s'}}></div>
        <div className="absolute inset-0 bg-Bilio-green/6 rounded-full blur-xl scale-105 animate-pulse-soft" style={{animationDelay: '2s'}}></div>
        
        <Earth
          className="relative z-10"
          baseColor={[0.96, 0.945, 0.91]} // Warm Beige - ocean/globe base
          markerColor={[1, 0.78, 0]} // Bilio Yellow - financial centers
          glowColor={[1, 0.973, 0.906]} // Light Cream - warm connectivity glow
          theta={0.3}
          scale={1.2}
          diffuse={1.8} // Increased diffuse for softer, warmer lighting
          mapSamples={45000}
          mapBrightness={4} // Standard brightness
          dark={0.7} // Higher dark value to make oceans beige while keeping land yellow
          markers={markers}
          orbitingCurrencies={true}
          orbitSpeed={1.0}
          currencyCount={24}
          showCurrencyTrails={true}
        />
        
        {/* 3D orbiting currencies are now handled by the globe component itself */}
      </div>
      
      {showTitle && (
        <div className="text-center mt-4">
          <div className="flex justify-center space-x-4 text-sm text-Bilio-gray-500">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-Bilio-yellow rounded-full"></div>
              {t('hero:globe.legend.centers')}
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-Bilio-green rounded-full"></div>
              {t('hero:globe.legend.markets')}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}