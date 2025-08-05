import React from "react";
import { ArrowRight, MessageSquare, CalendarDays, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

const HowItWorksSection = () => {
  const { t } = useTranslation('howItWorks');
  
  const steps = [
    {
      id: 1,
      title: t('steps.step1.title'),
      description: t('steps.step1.description'),
      icon: MessageSquare,
      color: "from-Bilio-purple to-Bilio-pink"
    },
    {
      id: 2,
      title: t('steps.step2.title'),
      description: t('steps.step2.description'),
      icon: FileText,
      color: "from-Bilio-blue to-Bilio-cyan"
    },
    {
      id: 3,
      title: t('steps.step3.title'),
      description: t('steps.step3.description'),
      icon: CalendarDays,
      color: "from-Bilio-gold to-Bilio-orange"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 section-premium">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-glow">
            <span className="text-premium">{t('title')}</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed font-medium max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="relative">
          {/* Enhanced connecting line with glow */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-Bilio-purple via-Bilio-pink to-Bilio-gold transform -translate-y-1/2 z-0 opacity-40 animate-gradient-shift shadow-lg shadow-Bilio-purple/20"></div>
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-y-1/2 z-0 opacity-80"></div>
          
          <div className="grid md:grid-cols-3 gap-10 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="card-premium p-8 animate-scale-in group" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`bg-gradient-to-r ${step.color} mb-8 w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`} style={{ boxShadow: '0 0 30px rgba(124, 58, 237, 0.3)' }}>
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                
                <div className="bg-gradient-to-r from-Bilio-purple/5 to-Bilio-pink/10 absolute -right-6 -bottom-6 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-Bilio-purple to-Bilio-blue text-white text-lg font-bold shadow-lg shadow-Bilio-purple/30">
                      {step.id}
                    </span>
                    <div className="w-12 h-1 bg-gradient-to-r from-Bilio-purple to-Bilio-blue rounded-full shadow-md shadow-Bilio-purple/30"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight text-glow">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
