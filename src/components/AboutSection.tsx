import React from "react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation('about');
  
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-Bilio-gray-50 relative overflow-hidden">
      {/* Subtle background decoration with individual colors */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-Bilio-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-Bilio-green/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-Bilio-gray-900 mb-6">
            {t('title')} <span className="text-Bilio-blue">{t('titleHighlight')}</span>{t('titleSuffix') ? ` ${t('titleSuffix')}` : '?'}
          </h2>
          <p className="text-xl text-Bilio-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center justify-center max-w-6xl mx-auto">
          {/* Left side - Step-by-step guide */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="flex items-start gap-4 group">
              <div className="bg-Bilio-blue text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0 group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-Bilio-gray-900">{t('steps.step1.title')}</h3>
                <p className="text-Bilio-gray-600 leading-relaxed">
                  {t('steps.step1.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-Bilio-yellow text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0 group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-Bilio-gray-900">{t('steps.step2.title')}</h3>
                <p className="text-Bilio-gray-600 leading-relaxed">
                  {t('steps.step2.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-Bilio-green text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0 group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-Bilio-gray-900">{t('steps.step3.title')}</h3>
                <p className="text-Bilio-gray-600 leading-relaxed">
                  {t('steps.step3.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Enhanced WhatsApp Chat Mockup */}
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
