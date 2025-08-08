import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { scrollToSectionAndOpenModal } from "@/hooks/useBetaModal";

const HeroSection = () => {
  const { t } = useTranslation(['hero', 'common']);
  
  return (
    <section className="pt-32 pb-20 bg-white relative overflow-hidden">
      {/* Light background with subtle gradients */}
      <div className="absolute inset-0 bg-Bilio-yellow-soft/30"></div>
      
      {/* Subtle gradient orbs for additional depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-Bilio-yellow/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-[300px] h-[300px] bg-Bilio-green/5 rounded-full blur-3xl animate-float-reverse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-40 left-2/3 w-32 h-32 bg-Bilio-blue/3 rounded-full blur-2xl animate-float-reverse" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side content */}
          <div className="lg:w-1/2 space-y-8 animate-slide-in-left">
            <header className="space-y-6">
              {/* Main headline - Larger text, less words on mobile */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-Bilio-gray-900 tracking-tight">
                {t('hero:headline.main')}{" "}
                <span className="text-Bilio-blue font-black">
                  {t('hero:headline.highlight')}
                </span>{" "}
                <span className="block sm:inline">{t('hero:headline.suffix')}</span>
              </h1>
              
              {/* Subtitle - Hidden on mobile, shown on tablet+ */}
              <p className="hidden md:block text-xl text-Bilio-gray-600 max-w-lg leading-relaxed font-medium">
                {t('hero:subtitle')}
              </p>
              
              {/* Mobile visual indicator instead of text */}
              <div className="md:hidden flex items-center justify-center gap-4 py-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-Bilio-yellow rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-Bilio-blue">AI</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-Bilio-green rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-sm font-semibold text-Bilio-blue">WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-Bilio-blue rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="text-sm font-semibold text-Bilio-blue">Instant</span>
                </div>
              </div>
            </header>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                onClick={scrollToSectionAndOpenModal}
                className="btn-premium text-lg py-6 px-8 font-bold group transition-all duration-300 hover:scale-105" 
                size="lg"
              >
                {t('common:buttons.joinBeta')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-Bilio-blue/30 text-Bilio-gray-700 hover:text-Bilio-blue hover:bg-Bilio-blue-soft/50 py-6 px-8 font-semibold transition-all duration-300 hover:border-Bilio-blue/60 backdrop-blur-sm bg-white/80" 
                size="lg"
              >
                {t('common:buttons.watchDemo')}
              </Button>
            </div>
          </div>
          
          {/* Right side content */}
          <div className="lg:w-1/2 animate-slide-in-right">
            {/* WhatsApp mockup container */}
            <div className="relative mx-auto max-w-sm group">
              {/* Light mode card illumination - using individual colors */}
              <div className="absolute inset-0 bg-Bilio-yellow/10 rounded-3xl blur-xl opacity-60 -rotate-6 scale-105 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-Bilio-blue/8 rounded-3xl blur-lg opacity-50 rotate-3 scale-110 group-hover:rotate-6 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-Bilio-green/5 rounded-3xl blur-2xl opacity-80 animate-pulse-soft"></div>
            
              {/* WhatsApp mockup */}
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-Bilio-gray-200">
                {/* WhatsApp mockup header - Authentic WhatsApp green */}
                <div className="bg-[#005c4b] text-white p-3 flex items-center gap-3 shadow-lg">
                  <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center p-1">
                    <img 
                      src="/logoBilio.png" 
                      alt="Bilio" 
                      className="h-full w-auto"
                    />
                  </div>
                  <span className="font-medium text-white">{t('hero:whatsapp.botName')}</span>
                </div>
                
                {/* Chat conversation with authentic WhatsApp styling */}
                <div className="p-4 bg-[#E5DDD5] space-y-4 h-[400px] overflow-hidden" 
                     style={{ backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"><rect width=\"40\" height=\"40\" fill=\"%23E5DDD5\"/><circle cx=\"20\" cy=\"20\" r=\"0.5\" fill=\"%23D1C7BD\" opacity=\"0.3\"/></svg>')" }}>
                  {/* Bot message - WhatsApp received message style */}
                  <div className="bg-white rounded-2xl rounded-tl-sm p-4 max-w-[85%] shadow-sm">
                    <p className="text-gray-800 text-sm font-normal">{t('hero:whatsapp.greeting')}</p>
                    <p className="text-xs text-gray-500 mt-1 text-right">{t('hero:whatsapp.timestamps.greeting')}</p>
                  </div>
                  
                  {/* User message - WhatsApp sent message style */}
                  <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm p-4 ml-auto max-w-[75%] shadow-sm">
                    <p className="text-gray-800 font-normal text-sm">{t('hero:whatsapp.userExpenseMessage')}</p>
                    <p className="text-xs text-gray-600 mt-1 text-right">{t('hero:whatsapp.timestamps.expense')} ✓✓</p>
                  </div>
                  
                  {/* Bot response */}
                  <div className="bg-white rounded-2xl rounded-tl-sm p-4 max-w-[85%] shadow-sm">
                    <p className="text-gray-800 font-normal text-sm">{t('hero:whatsapp.botConfirmation')}</p>
                    
                    <p className="text-xs text-gray-500 mt-1 text-right">{t('hero:whatsapp.timestamps.confirmation')}</p>
                  </div>
                  
                  {/* User message */}
                  <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm p-4 ml-auto max-w-[75%] shadow-sm">
                    <p className="text-gray-800 font-normal text-sm">{t('hero:whatsapp.userReportRequest')}</p>
                    <p className="text-xs text-gray-600 mt-1 text-right">{t('hero:whatsapp.timestamps.report')} ✓✓</p>
                  </div>
                  
                  {/* Bot response with chart */}
                  <div className="bg-white rounded-2xl rounded-tl-sm p-4 max-w-[85%] shadow-sm space-y-3">
                    <p className="text-gray-800 font-normal text-sm">{t('hero:whatsapp.botReportResponse')}</p>
                    <div className="bg-Bilio-blue h-24 rounded-xl flex items-center justify-center shadow-inner relative overflow-hidden border border-gray-200">
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"></div>
                      <span className="text-white font-semibold text-xs relative z-10">{t('hero:whatsapp.chartLabel')}</span>
                    </div>
                    <p className="text-xs text-gray-500 text-right">{t('hero:whatsapp.timestamps.chart')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Smooth transition to next sections */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white z-30"></div>
    </section>
  );
};

export default HeroSection;
