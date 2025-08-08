import React from "react";
import { ArrowRight, MessageSquare, Brain, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  const { t } = useTranslation('howItWorks');
  
  const steps = [
    {
      id: 1,
      title: t('steps.step1.title'),
      description: t('steps.step1.description'),
      icon: MessageSquare,
      bgColor: "bg-Bilio-yellow",
      glowColor: "shadow-Bilio-yellow/20"
    },
    {
      id: 2,
      title: t('steps.step2.title'),
      description: t('steps.step2.description'),
      icon: Brain,
      bgColor: "bg-Bilio-blue",
      glowColor: "shadow-Bilio-blue/20"
    },
    {
      id: 3,
      title: t('steps.step3.title'),
      description: t('steps.step3.description'),
      icon: BarChart3,
      bgColor: "bg-Bilio-green",
      glowColor: "shadow-Bilio-green/20"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-Bilio-gray-50 relative overflow-hidden">
      {/* Subtle background decoration with individual colors */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-Bilio-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-Bilio-green/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-Bilio-gray-900 mb-6">
            {t('title.main')} <span className="text-Bilio-blue">{t('title.highlight')}</span>{t('title.suffix')}
          </h2>
          <p className="text-xl text-Bilio-gray-600 leading-relaxed max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="relative">
          {/* Enhanced connecting arrows between steps */}
          <div className="hidden lg:flex absolute top-1/2 left-0 right-0 justify-between items-center transform -translate-y-1/2 z-0 px-[12%]">
            <ArrowRight className="text-Bilio-yellow h-8 w-8 animate-pulse" />
            <ArrowRight className="text-Bilio-blue h-8 w-8 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="group animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="hover:shadow-2xl transition-all duration-500 border-0 bg-white h-full">
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {/* Background glow effect */}
                    <div className={`absolute inset-0 ${step.bgColor} opacity-5 transition-opacity duration-300 group-hover:opacity-10`}></div>
                    
                    {/* Icon container */}
                    <div className={`${step.bgColor} mb-6 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center shadow-xl ${step.glowColor} group-hover:scale-110 transition-all duration-300`}>
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    
                    {/* Step number badge */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <span className={`flex items-center justify-center w-10 h-10 rounded-xl ${step.bgColor} text-white text-lg font-bold shadow-lg`}>
                        {step.id}
                      </span>
                      <div className={`w-16 h-1 ${step.bgColor} rounded-full opacity-30`}></div>
                    </div>
                    
                    {/* Title - Clean and prominent */}
                    <h3 className="text-xl font-semibold text-Bilio-gray-900 mb-4 leading-tight">
                      {step.title}
                    </h3>
                    
                    {/* Description - Single sentence, always visible */}
                    <p className="text-Bilio-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
