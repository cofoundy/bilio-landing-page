
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { scrollToSectionAndOpenModal } from "@/hooks/useBetaModal";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-white via-spendly-lime/10 to-spendly-gold/20">
      {/* Enhanced background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-spendly-lime/20 to-spendly-gold/30 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-spendly-emerald/10 to-spendly-aqua/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-spendly-emerald/5 via-spendly-lime/10 to-spendly-gold/15 rounded-full blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side content */}
          <div className="lg:w-1/2 space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-spendly-dark tracking-tight">
                Toma el control de tus finanzas.{" "}
                <span className="text-premium">Rápido. Simple.</span>{" "}
                Desde WhatsApp.
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed font-medium">
                Registra tus gastos en segundos, recibe reportes automáticos y mejora tus finanzas día a día.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                onClick={scrollToSectionAndOpenModal}
                className="btn-premium text-white text-lg py-6 px-8 font-semibold group" 
                size="lg"
              >
                Únete a la beta privada
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-spendly-teal text-spendly-teal hover:text-white hover:bg-spendly-teal py-6 px-8 font-semibold transition-all duration-300 hover:border-spendly-emerald hover:shadow-lg" 
                size="lg"
              >
                Ver demo
              </Button>
            </div>
          </div>
          
          {/* Right side mockup */}
          <div className="lg:w-1/2 animate-slide-in-right">
            <div className="relative mx-auto max-w-sm group">
              {/* Enhanced background effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-spendly-emerald/30 to-spendly-aqua/40 rounded-3xl blur-xl opacity-60 -rotate-6 scale-105 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-spendly-lime/20 to-spendly-gold/30 rounded-3xl blur-lg opacity-50 rotate-3 scale-110 group-hover:rotate-6 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-spendly-emerald/10 to-spendly-gold/20 rounded-3xl blur-2xl opacity-40 animate-pulse-soft"></div>
              
              <div className="relative card-premium rounded-3xl overflow-hidden glow-effect">
                {/* WhatsApp mockup header */}
                <div className="bg-gradient-to-r from-spendly-emerald to-spendly-teal text-white p-3 flex items-center gap-3">
                  <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center p-1">
                    <img 
                      src="/logo_spendly.png" 
                      alt="Spendly" 
                      className="h-full w-auto"
                    />
                  </div>
                  <span className="font-medium">Spendly Bot</span>
                </div>
                
                {/* Chat conversation */}
                <div className="p-4 bg-gradient-to-b from-[#E5DDD5] to-[#D6CDC4] space-y-4 h-[400px] overflow-hidden">
                  {/* Bot message */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl rounded-tl-sm p-4 max-w-[85%] shadow-md border border-white/20">
                    <p className="text-gray-800 text-sm font-medium">¡Hola! Soy Spendly, tu asistente financiero. ¿En qué puedo ayudarte hoy?</p>
                  </div>
                  
                  {/* User message */}
                  <div className="bg-gradient-to-r from-spendly-emerald/90 to-spendly-teal/90 rounded-2xl rounded-tr-sm p-4 ml-auto max-w-[75%] shadow-md backdrop-blur-sm">
                    <p className="text-white font-medium text-sm">Gasté S/35 en almuerzo</p>
                  </div>
                  
                  {/* Bot response */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl rounded-tl-sm p-4 max-w-[85%] shadow-md border border-white/20">
                    <p className="text-gray-800 font-medium text-sm">¡Registrado! S/35 en categoría "Alimentación".</p>
                    <p className="text-gray-600 text-xs mt-2 bg-gray-50 rounded-lg p-2">Llevas S/320 gastados en comida este mes (80% de tu presupuesto).</p>
                  </div>
                  
                  {/* User message */}
                  <div className="bg-gradient-to-r from-spendly-emerald/90 to-spendly-teal/90 rounded-2xl rounded-tr-sm p-4 ml-auto max-w-[75%] shadow-md backdrop-blur-sm">
                    <p className="text-white font-medium text-sm">Muéstrame mi reporte semanal</p>
                  </div>
                  
                  {/* Bot response with chart */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl rounded-tl-sm p-4 max-w-[85%] shadow-md space-y-3 border border-white/20">
                    <p className="text-gray-800 font-medium text-sm">Aquí tienes tu reporte semanal:</p>
                    <div className="bg-gradient-to-r from-spendly-emerald via-spendly-aqua to-spendly-lime h-24 rounded-xl flex items-center justify-center shadow-inner relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
                      <span className="text-white font-semibold text-xs relative z-10">📊 Gráfico del reporte semanal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
