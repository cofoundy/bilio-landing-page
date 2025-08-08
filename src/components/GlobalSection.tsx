import React from "react";
import { useTranslation } from "react-i18next";
import BilioGlobe from "@/components/mvpblocks/bilio-globe";
import { Badge } from "@/components/ui/badge";

const GlobalSection = () => {
  const { t } = useTranslation('global');
  
  const stats = [
    {
      number: "195",
      label: t('stats.countries'),
      icon: "🌍"
    },
    {
      number: "150+",
      label: t('stats.currencies'), 
      icon: "💱"
    },
    {
      number: t('stats.instantValue'),
      label: t('stats.sync'),
      icon: "⚡"
    }
  ];

  return (
    <section id="global" className="py-24 bg-gradient-to-b from-Bilio-gray-50 to-white relative overflow-hidden">
      {/* Subtle ambient background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-Bilio-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-Bilio-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Globe as the centerpiece */}
        <div className="max-w-3xl mx-auto mb-16 animate-fade-in">
          <BilioGlobe 
            className="w-full" 
            showTitle={false}
          />
        </div>
        
        {/* Clean stats below the globe */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="flex flex-col items-center group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Badge 
                variant="secondary" 
                className="px-6 py-3 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{stat.icon}</span>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-Bilio-blue">
                      {stat.number}
                    </div>
                    <div className="text-sm text-Bilio-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalSection;