import React from "react";
import { useTranslation } from "react-i18next";
import { MessageSquare, FileText, User, Calendar, Check, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  const { t } = useTranslation('benefits');
  
  const benefits = [
    {
      icon: MessageSquare,
      title: t('items.0.title'),
      description: t('items.0.description'),
      bgColor: "Bilio-blue",
      glowColor: "Bilio-blue"
    },
    {
      icon: Calendar,
      title: t('items.1.title'),
      description: t('items.1.description'),
      bgColor: "Bilio-yellow",
      glowColor: "Bilio-yellow"
    },
    {
      icon: User,
      title: t('items.2.title'),
      description: t('items.2.description'),
      bgColor: "Bilio-green",
      glowColor: "Bilio-green"
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-Bilio-gray-900">
            <span className="text-Bilio-blue">{t('title')}</span>
          </h2>
          <p className="text-xl text-Bilio-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, i) => (
            <div key={i} className="card-premium p-8 group animate-scale-in" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="text-center space-y-6 relative">
                {/* Background glow effect */}
                <div className={`absolute -inset-4 bg-${benefit.glowColor}/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <div className={`mx-auto w-20 h-20 rounded-2xl bg-${benefit.bgColor} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-${benefit.glowColor}/30`}>
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <div className="space-y-4 relative">
                  <h3 className="text-xl font-bold text-Bilio-gray-900 leading-tight">{benefit.title}</h3>
                  <p className="text-Bilio-gray-600 leading-relaxed text-sm">{benefit.description}</p>
                </div>
                
                {/* Premium accent line with individual color */}
                <div className={`w-12 h-1 bg-${benefit.bgColor} rounded-full mx-auto group-hover:w-20 transition-all duration-300 relative shadow-md shadow-${benefit.glowColor}/30`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
