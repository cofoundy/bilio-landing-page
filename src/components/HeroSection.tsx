import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { scrollToSectionAndOpenModal } from "@/hooks/useBetaModal";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-black relative overflow-hidden">
      {/* Fondo base con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-spendly-purple/5 via-transparent to-spendly-blue/5"></div>
      
      {/* Elementos animados de fondo - Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbes principales flotantes */}
        <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-spendly-purple/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-[300px] h-[300px] bg-spendly-pink/8 rounded-full blur-3xl animate-float-reverse" style={{ animationDelay: "2s" }}></div>
        
        {/* Partículas pequeñas que se desplazan */}
        <div className="absolute top-32 left-1/4 w-3 h-3 bg-spendly-purple/40 rounded-full animate-drift-horizontal" style={{ animationDelay: "0s" }}></div>
        <div className="absolute top-40 left-1/3 w-2 h-2 bg-spendly-pink/50 rounded-full animate-drift-horizontal" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-48 left-1/2 w-4 h-4 bg-spendly-blue/30 rounded-full animate-drift-horizontal" style={{ animationDelay: "6s" }}></div>
        <div className="absolute top-56 left-2/3 w-2 h-2 bg-spendly-cyan/40 rounded-full animate-drift-horizontal" style={{ animationDelay: "9s" }}></div>
        
        {/* Partículas diagonales */}
        <div className="absolute top-64 left-0 w-3 h-3 bg-spendly-gold/30 rounded-full animate-drift-diagonal" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-80 left-0 w-2 h-2 bg-spendly-purple/40 rounded-full animate-drift-diagonal" style={{ animationDelay: "8s" }}></div>
        
        {/* Círculos pulsantes */}
        <div className="absolute top-1/3 left-1/6 w-20 h-20 border border-spendly-purple/20 rounded-full animate-pulse-glow" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-2/3 right-1/6 w-16 h-16 border border-spendly-pink/20 rounded-full animate-pulse-glow" style={{ animationDelay: "4s" }}></div>
        <div className="absolute top-1/2 left-3/4 w-12 h-12 border border-spendly-blue/20 rounded-full animate-pulse-glow" style={{ animationDelay: "6s" }}></div>
        
        {/* Elementos geométricos orbitales */}
        <div className="absolute top-1/4 left-1/2 w-2 h-2">
          <div className="w-2 h-2 bg-spendly-cyan/50 rounded-full animate-orbit" style={{ animationDelay: "0s" }}></div>
        </div>
        <div className="absolute top-3/4 left-1/3 w-3 h-3">
          <div className="w-3 h-3 bg-spendly-gold/40 rounded-full animate-orbit" style={{ animationDelay: "5s" }}></div>
        </div>
        
        {/* Líneas de movimiento */}
        <div className="absolute top-1/2 left-0 w-full h-px">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-spendly-purple/20 to-transparent animate-drift-horizontal" style={{ animationDelay: "4s" }}></div>
        </div>
        <div className="absolute top-3/5 left-0 w-full h-px">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-spendly-pink/15 to-transparent animate-drift-horizontal" style={{ animationDelay: "10s" }}></div>
        </div>
        
        {/* Formas geométricas flotantes */}
        <div className="absolute top-20 left-1/5 w-6 h-6 border-l-2 border-b-2 border-spendly-purple/30 rotate-45 animate-float-slow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-32 right-1/4 w-8 h-8 border-r-2 border-t-2 border-spendly-cyan/25 rotate-12 animate-float-reverse" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/3 right-1/6 w-4 h-4 border border-spendly-gold/30 rotate-45 animate-float-slow" style={{ animationDelay: "5s" }}></div>
        
        {/* Efectos de resplandor móviles */}
        <div className="absolute top-40 left-2/3 w-32 h-32 bg-spendly-purple/5 rounded-full blur-2xl animate-float-reverse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-spendly-blue/4 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: "4s" }}></div>
        
        {/* Múltiples partículas pequeñas adicionales */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-spendly-${['purple', 'pink', 'blue', 'cyan'][i % 4]}/30 rounded-full animate-drift-horizontal`}
            style={{
              top: `${20 + (i * 8)}%`,
              left: `${i * 12}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${20 + (i * 3)}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side content */}
          <div className="lg:w-1/2 space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white tracking-tight text-glow">
                Toma el control de tus finanzas.{" "}
                <span className="bg-gradient-to-r from-spendly-purple via-spendly-pink to-spendly-gold bg-clip-text text-transparent font-black animate-gradient-shift">
                  Rápido. Simple.
                </span>{" "}
                Desde WhatsApp.
              </h1>
              
              <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-medium">
                Registra tus gastos en segundos, recibe reportes automáticos y mejora tus finanzas día a día.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                onClick={scrollToSectionAndOpenModal}
                className="btn-premium text-lg py-6 px-8 font-bold group transition-all duration-300 hover:scale-105" 
                size="lg"
              >
                Únete a la beta privada
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-spendly-purple/30 text-gray-300 hover:text-white hover:bg-spendly-purple/20 py-6 px-8 font-semibold transition-all duration-300 hover:border-spendly-purple/50 backdrop-blur-sm bg-gray-900/20" 
                size="lg"
              >
                Ver demo
              </Button>
            </div>
          </div>
          
          {/* Right side mockup */}
          <div className="lg:w-1/2 animate-slide-in-right">
            <div className="relative mx-auto max-w-sm group">
              {/* Card con gradientes coloridos para iluminación */}
              <div className="absolute inset-0 bg-gradient-to-tr from-spendly-purple/30 via-spendly-pink/20 to-spendly-blue/30 rounded-3xl blur-xl opacity-60 -rotate-6 scale-105 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-spendly-cyan/20 to-spendly-gold/30 rounded-3xl blur-lg opacity-50 rotate-3 scale-110 group-hover:rotate-6 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-spendly-purple/10 via-spendly-pink/15 to-spendly-blue/10 rounded-3xl blur-2xl opacity-80 animate-pulse-soft"></div>
              
              <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-spendly-purple/30">
                {/* WhatsApp mockup header con gradiente */}
                <div className="bg-gradient-to-r from-spendly-purple via-spendly-blue to-spendly-cyan text-white p-3 flex items-center gap-3 shadow-lg shadow-spendly-purple/20">
                  <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center p-1">
                    <img 
                      src="/logo_spendly.png" 
                      alt="Spendly" 
                      className="h-full w-auto"
                    />
                  </div>
                  <span className="font-medium text-glow">Spendly Bot</span>
                </div>
                
                {/* Chat conversation con fondo dark */}
                <div className="p-4 bg-gradient-to-b from-gray-800 to-gray-900 space-y-4 h-[400px] overflow-hidden">
                  {/* Bot message */}
                  <div className="bg-gray-700/90 backdrop-blur-sm rounded-2xl rounded-tl-sm p-4 max-w-[85%] shadow-md border border-gray-600/50">
                    <p className="text-gray-200 text-sm font-medium">¡Hola! Soy Spendly, tu asistente financiero. ¿En qué puedo ayudarte hoy?</p>
                  </div>
                  
                  {/* User message con gradiente */}
                  <div className="bg-gradient-to-r from-spendly-purple/90 via-spendly-blue/90 to-spendly-cyan/80 rounded-2xl rounded-tr-sm p-4 ml-auto max-w-[75%] shadow-lg backdrop-blur-sm">
                    <p className="text-white font-medium text-sm text-glow">Gasté S/35 en almuerzo</p>
                  </div>
                  
                  {/* Bot response */}
                  <div className="bg-gray-700/90 backdrop-blur-sm rounded-2xl rounded-tl-sm p-4 max-w-[85%] shadow-md border border-gray-600/50">
                    <p className="text-gray-200 font-medium text-sm">¡Registrado! S/35 en categoría "Alimentación".</p>
                    <p className="text-gray-400 text-xs mt-2 bg-gray-600/50 rounded-lg p-2 border border-gray-500/30">Llevas S/320 gastados en comida este mes (80% de tu presupuesto).</p>
                  </div>
                  
                  {/* User message */}
                  <div className="bg-gradient-to-r from-spendly-purple/90 via-spendly-blue/90 to-spendly-cyan/80 rounded-2xl rounded-tr-sm p-4 ml-auto max-w-[75%] shadow-lg backdrop-blur-sm">
                    <p className="text-white font-medium text-sm text-glow">Muéstrame mi reporte semanal</p>
                  </div>
                  
                  {/* Bot response with chart con gradiente colorido */}
                  <div className="bg-gray-700/90 backdrop-blur-sm rounded-2xl rounded-tl-sm p-4 max-w-[85%] shadow-md space-y-3 border border-gray-600/50">
                    <p className="text-gray-200 font-medium text-sm">Aquí tienes tu reporte semanal:</p>
                    <div className="bg-gradient-to-r from-spendly-purple via-spendly-pink to-spendly-gold h-24 rounded-xl flex items-center justify-center shadow-inner relative overflow-hidden border border-spendly-purple/30">
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                      <span className="text-white font-semibold text-xs relative z-10 text-glow">📊 Gráfico del reporte semanal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Transición suave hacia las siguientes secciones */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black z-30"></div>
    </section>
  );
};

export default HeroSection;
