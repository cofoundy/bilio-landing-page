
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-spendly-blue opacity-10 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-spendly-green opacity-10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side content */}
          <div className="lg:w-1/2 space-y-6 animate-slide-down">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Toma el control de tus finanzas. <span className="gradient-text">Rápido. Simple.</span> Desde WhatsApp.
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg">
              Registra tus gastos en segundos, recibe reportes automáticos y mejora tus finanzas día a día.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="gradient-bg text-white text-lg py-6 px-8" size="lg">
                Únete a la beta privada
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-spendly-blue text-spendly-blue hover:text-white hover:bg-spendly-blue py-6 px-8" size="lg">
                Ver demo
              </Button>
            </div>
          </div>
          
          {/* Right side mockup */}
          <div className="lg:w-1/2 animate-float">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-spendly-blue to-spendly-green rounded-3xl blur opacity-20 -rotate-6 scale-105"></div>
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
                {/* WhatsApp mockup header */}
                <div className="bg-[#128C7E] text-white p-3 flex items-center gap-3">
                  <MessageSquare size={24} />
                  <span className="font-medium">Spendly Bot</span>
                </div>
                
                {/* Chat conversation */}
                <div className="p-4 bg-[#E5DDD5] space-y-3 h-[400px]">
                  {/* Bot message */}
                  <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                    <p className="text-gray-800">¡Hola! Soy Spendly, tu asistente financiero. ¿En qué puedo ayudarte hoy?</p>
                  </div>
                  
                  {/* User message */}
                  <div className="bg-[#DCF8C6] rounded-lg p-3 ml-auto max-w-[80%] shadow-sm">
                    <p className="text-gray-800">Gasté S/35 en almuerzo</p>
                  </div>
                  
                  {/* Bot response */}
                  <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                    <p className="text-gray-800">¡Registrado! S/35 en categoría "Alimentación".</p>
                    <p className="text-gray-600 text-sm mt-1">Llevas S/320 gastados en comida este mes (80% de tu presupuesto).</p>
                  </div>
                  
                  {/* User message */}
                  <div className="bg-[#DCF8C6] rounded-lg p-3 ml-auto max-w-[80%] shadow-sm">
                    <p className="text-gray-800">Muéstrame mi reporte semanal</p>
                  </div>
                  
                  {/* Bot response with "image" */}
                  <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm space-y-2">
                    <p className="text-gray-800">Aquí tienes tu reporte semanal:</p>
                    <div className="bg-gradient-to-r from-spendly-blue to-spendly-green h-28 rounded-md flex items-center justify-center">
                      <span className="text-white font-medium">Gráfico del reporte semanal</span>
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
