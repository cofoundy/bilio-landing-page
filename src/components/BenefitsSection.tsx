import React from "react";
import { useTranslation } from "react-i18next";
import { 
  MessageSquare, 
  Brain, 
  Globe, 
  RefreshCw, 
  Shield, 
  Clock,
  Smartphone,
  Zap
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { 
  MiniGlobe, 
  LiveDashboard, 
  AudioWaveform, 
  AnimatedBrain, 
  sharedVariants 
} from "@/components/animations";
import { SafeAudioWaveform } from "@/components/ui/safe-audio-waveform";
import SafeAnimatedBrain from "@/components/ui/safe-animated-brain";
import { useRef } from "react";

const BenefitsSection = () => {
  const { t } = useTranslation('benefits');
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  // Map icon strings to components and 3D elements
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'whatsapp': return { icon: MessageSquare, animation: AudioWaveform };
      case 'brain': return { icon: Brain, animation: AnimatedBrain };
      case 'globe': return { icon: Globe, animation: MiniGlobe };
      case 'sync': return { icon: RefreshCw, animation: LiveDashboard };
      case 'shield': return { icon: Shield, animation: null };
      case 'clock': return { icon: Clock, animation: null };
      default: return { icon: Zap, animation: null };
    }
  };
  
  const benefits = Array.from({ length: 6 }, (_, index) => {
    const item = t(`items.${index}`, { returnObjects: true }) as any;
    const iconData = getIconComponent(item.icon || 'whatsapp');
    
    return {
      icon: iconData.icon,
      animation: iconData.animation,
      title: item.title,
      description: item.description,
      variant: (item.color || 'yellow') as 'yellow' | 'blue' | 'green',
      iconName: item.icon || 'whatsapp',
    };
  });

  return (
    <section 
      id="benefits" 
      ref={containerRef}
      className="py-32 section-premium relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-Bilio-yellow/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-Bilio-blue/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-Bilio-green/6 rounded-full blur-3xl"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-Bilio-yellow/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              x: [-10, 10],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Enhanced Animation */}
        <motion.div 
          className="text-center max-w-5xl mx-auto mb-24"
          variants={sharedVariants.fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-Bilio-yellow/10 border border-Bilio-yellow/20 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4 text-Bilio-yellow" />
            <span className="text-sm font-semibold text-Bilio-blue uppercase tracking-wide">
              Next-Gen Finance
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-Bilio-blue via-Bilio-green to-Bilio-yellow bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>
        
        {/* Benefits Grid with 3D Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const delay = index * 0.15;
            const isSpecial = benefit.animation !== null;
            
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0 
                } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ 
                  y: -8,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                style={{ perspective: '1000px' }}
              >
                <Card className={cn(
                  "h-full relative overflow-hidden border-0 transition-all duration-500",
                  "bg-white/90 backdrop-blur-lg shadow-xl hover:shadow-2xl",
                  "before:absolute before:inset-0 before:bg-gradient-to-br before:opacity-0 before:transition-opacity before:duration-300",
                  "hover:before:opacity-10",
                  benefit.variant === "yellow" && "hover:shadow-Bilio-yellow/20 before:from-Bilio-yellow before:to-Bilio-yellow/50",
                  benefit.variant === "blue" && "hover:shadow-Bilio-blue/20 before:from-Bilio-blue before:to-Bilio-blue/50",
                  benefit.variant === "green" && "hover:shadow-Bilio-green/20 before:from-Bilio-green before:to-Bilio-green/50"
                )}>
                  <CardContent className="p-8 relative z-10">
                    {/* 3D Animation Section */}
                    {isSpecial && (
                      <div className="flex justify-center mb-8 h-24">
                        {benefit.iconName === 'globe' && (
                          <MiniGlobe 
                            size="medium" 
                            color={benefit.variant}
                            orbitingElements={true}
                            showMarkers={true}
                            animationSpeed={0.8}
                          />
                        )}
                        {benefit.iconName === 'brain' && (
                          <div className="relative">
                            <SafeAnimatedBrain 
                              size="large"
                              state="thinking"
                              particles={true}
                              pulseSpeed="fast"
                            />
                          </div>
                        )}
                        {benefit.iconName === 'whatsapp' && (
                          <div className="flex items-center justify-center">
                            <SafeAudioWaveform 
                              isPlaying={true}
                              amplitude="high"
                              color={benefit.variant}
                              showMicrophone={true}
                              size="md"
                            />
                            <Smartphone className="ml-2 text-green-500" size={24} />
                          </div>
                        )}
                        {benefit.iconName === 'sync' && (
                          <LiveDashboard 
                            size="small"
                            animateOnScroll={false}
                            updateInterval={2500}
                          />
                        )}
                      </div>
                    )}
                    
                    {/* Traditional Icon for non-animated benefits */}
                    {!isSpecial && (
                      <div className="flex items-center justify-center mb-8">
                        <motion.div 
                          className={cn(
                            "w-20 h-20 rounded-3xl flex items-center justify-center shadow-lg",
                            "transition-all duration-300 group-hover:scale-110 group-hover:rotate-6",
                            benefit.variant === "yellow" && "bg-gradient-to-br from-Bilio-yellow to-yellow-400 shadow-Bilio-yellow/30",
                            benefit.variant === "blue" && "bg-gradient-to-br from-Bilio-blue to-blue-600 shadow-Bilio-blue/30",
                            benefit.variant === "green" && "bg-gradient-to-br from-Bilio-green to-green-500 shadow-Bilio-green/30"
                          )}
                          whileHover={{ 
                            scale: 1.1, 
                            rotateZ: 6,
                            boxShadow: benefit.variant === 'yellow' ? '0 20px 40px rgba(255, 199, 0, 0.4)' :
                                      benefit.variant === 'blue' ? '0 20px 40px rgba(0, 47, 108, 0.4)' :
                                      '0 20px 40px rgba(10, 173, 110, 0.4)'
                          }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <benefit.icon className="w-10 h-10 text-white" />
                        </motion.div>
                      </div>
                    )}
                    
                    {/* Content - Visual First Approach */}
                    <div className="text-center space-y-4">
                      {/* Title - Always visible but smaller on mobile */}
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight group-hover:text-Bilio-blue transition-colors">
                        {benefit.title}
                      </h3>
                      
                      {/* Description - Hidden on mobile to emphasize visuals */}
                      <p className="hidden sm:block text-gray-600 leading-relaxed text-sm md:text-base">
                        {benefit.description}
                      </p>
                      
                      {/* Mobile-only visual indicator */}
                      <div className="sm:hidden flex items-center justify-center">
                        <motion.div 
                          className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center",
                            benefit.variant === "yellow" && "bg-Bilio-yellow/20 text-Bilio-yellow",
                            benefit.variant === "blue" && "bg-Bilio-blue/20 text-Bilio-blue",
                            benefit.variant === "green" && "bg-Bilio-green/20 text-Bilio-green"
                          )}
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          ✨
                        </motion.div>
                      </div>
                      
                      {/* Enhanced accent line */}
                      <motion.div 
                        className={cn(
                          "h-1 rounded-full mx-auto transition-all duration-300 group-hover:w-24",
                          "w-16",
                          benefit.variant === "yellow" && "bg-gradient-to-r from-Bilio-yellow to-yellow-400",
                          benefit.variant === "blue" && "bg-gradient-to-r from-Bilio-blue to-blue-500",
                          benefit.variant === "green" && "bg-gradient-to-r from-Bilio-green to-green-500"
                        )}
                        whileHover={{ width: '96px' }}
                      />
                    </div>
                  </CardContent>
                  
                  {/* Hover glow effect */}
                  <div className={cn(
                    "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                    "bg-gradient-to-br from-transparent via-transparent to-transparent",
                    benefit.variant === "yellow" && "shadow-[inset_0_0_60px_rgba(255,199,0,0.1)]",
                    benefit.variant === "blue" && "shadow-[inset_0_0_60px_rgba(0,47,108,0.1)]",
                    benefit.variant === "green" && "shadow-[inset_0_0_60px_rgba(10,173,110,0.1)]"
                  )} />
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-Bilio-blue to-Bilio-green text-white font-bold rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(0,47,108,0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Experience Bilio Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;