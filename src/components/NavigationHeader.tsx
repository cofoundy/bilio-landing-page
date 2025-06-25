import React from "react";
import { Button } from "@/components/ui/button";
import { scrollToSectionAndOpenModal } from "@/hooks/useBetaModal";

const NavigationHeader = () => {
  return (
    <header className="fixed w-full z-50 py-6 transition-all duration-500 bg-white/80 backdrop-blur-md border-b border-Bilio-gray-200/50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="group">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src="/logoBilio.png" 
                alt="Bilio Logo" 
                className="h-10 w-auto transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-1 bg-Bilio-yellow/20"></div>
            </div>
            <span className="font-bold text-2xl transition-all duration-500 text-Bilio-gray-900 hover:text-Bilio-blue drop-shadow-lg">
              Bilio
            </span>
          </div>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold" role="navigation" aria-label="Navegación principal">
          <a href="#about" className="transition-all duration-500 hover:scale-105 relative group text-Bilio-gray-700 hover:text-Bilio-blue drop-shadow-sm" aria-label="Ir a la sección Acerca de Bilio">
            ¿Cómo funciona?
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-Bilio-blue shadow-lg shadow-Bilio-blue/50"></span>
          </a>
          <a href="#benefits" className="transition-all duration-500 hover:scale-105 relative group text-Bilio-gray-700 hover:text-Bilio-green drop-shadow-sm" aria-label="Ir a la sección Beneficios">
            Beneficios
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-Bilio-green shadow-lg shadow-Bilio-green/50"></span>
          </a>
          <a href="#pricing" className="transition-all duration-500 hover:scale-105 relative group text-Bilio-gray-700 hover:text-Bilio-yellow-dark drop-shadow-sm" aria-label="Ir a la sección Planes y precios">
            Planes
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-Bilio-yellow shadow-lg shadow-Bilio-yellow/50"></span>
          </a>
          <a href="#faq" className="transition-all duration-500 hover:scale-105 relative group text-Bilio-gray-700 hover:text-Bilio-blue-light drop-shadow-sm" aria-label="Ir a la sección Preguntas frecuentes">
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-Bilio-blue-light shadow-lg shadow-Bilio-blue-light/50"></span>
          </a>
        </nav>
        
        <Button 
          onClick={scrollToSectionAndOpenModal}
          className="px-8 py-3 font-semibold group transition-all duration-500 hover:scale-105 bg-Bilio-yellow/90 hover:bg-Bilio-yellow backdrop-blur-sm border border-Bilio-yellow/50 text-white hover:shadow-lg hover:shadow-Bilio-yellow/30"
        >
          Únete a la beta
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
        </Button>
      </div>
    </header>
  );
};

export default NavigationHeader;
