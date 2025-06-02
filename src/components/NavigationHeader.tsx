import React from "react";
import { Button } from "@/components/ui/button";
import { scrollToSectionAndOpenModal } from "@/hooks/useBetaModal";

const NavigationHeader = () => {
  return (
    <header className="fixed w-full z-50 py-6 transition-all duration-500">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="group">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src="/logo_spendly.png" 
                alt="Spendly Logo" 
                className="h-10 w-auto transition-all duration-500 group-hover:scale-105 filter brightness-0 invert"
              />
              <div className="absolute inset-0 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-1 bg-white/20"></div>
            </div>
            <span className="font-bold text-2xl transition-all duration-500 text-glow text-white hover:text-spendly-yellow drop-shadow-lg">
              Spendly
            </span>
          </div>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
          <a href="#how-it-works" className="transition-all duration-500 hover:scale-105 relative group text-white/90 hover:text-spendly-purple drop-shadow-lg text-glow">
            ¿Cómo funciona?
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-spendly-purple shadow-lg shadow-spendly-purple/50"></span>
          </a>
          <a href="#benefits" className="transition-all duration-500 hover:scale-105 relative group text-white/90 hover:text-spendly-pink drop-shadow-lg text-glow-pink">
            Beneficios
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-spendly-pink shadow-lg shadow-spendly-pink/50"></span>
          </a>
          <a href="#pricing" className="transition-all duration-500 hover:scale-105 relative group text-white/90 hover:text-spendly-blue drop-shadow-lg text-glow-blue">
            Planes
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-spendly-blue shadow-lg shadow-spendly-blue/50"></span>
          </a>
          <a href="#faq" className="transition-all duration-500 hover:scale-105 relative group text-white/90 hover:text-spendly-cyan drop-shadow-lg text-glow">
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-spendly-cyan shadow-lg shadow-spendly-cyan/50"></span>
          </a>
        </nav>
        
        <Button 
          onClick={scrollToSectionAndOpenModal}
          className="px-8 py-3 font-semibold group transition-all duration-500 hover:scale-105 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-spendly-purple"
        >
          Únete a la beta
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
        </Button>
      </div>
    </header>
  );
};

export default NavigationHeader;
