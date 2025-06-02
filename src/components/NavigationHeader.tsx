
import React from "react";
import { Button } from "@/components/ui/button";
import { scrollToSectionAndOpenModal } from "@/hooks/useBetaModal";

const NavigationHeader = () => {
  return (
    <header className="fixed w-full z-50 py-6 bg-white/95 backdrop-blur-xl border-b border-white/20 shadow-xl transition-all duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="group">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src="/logo_spendly.png" 
                alt="Spendly Logo" 
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-spendly-emerald/10 to-spendly-lime/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-1"></div>
            </div>
            <span className="font-bold text-2xl text-spendly-dark group-hover:text-premium transition-colors duration-300">Spendly</span>
          </div>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
          <a href="#how-it-works" className="text-gray-600 hover:text-spendly-emerald transition-all duration-300 hover:scale-105 relative group">
            ¿Cómo funciona?
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-spendly-emerald to-spendly-teal group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#benefits" className="text-gray-600 hover:text-spendly-emerald transition-all duration-300 hover:scale-105 relative group">
            Beneficios
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-spendly-emerald to-spendly-teal group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-spendly-emerald transition-all duration-300 hover:scale-105 relative group">
            Planes
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-spendly-emerald to-spendly-teal group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#faq" className="text-gray-600 hover:text-spendly-emerald transition-all duration-300 hover:scale-105 relative group">
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-spendly-emerald to-spendly-teal group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>
        
        <Button 
          onClick={scrollToSectionAndOpenModal}
          className="btn-premium text-white px-8 py-3 font-semibold group"
        >
          Únete a la beta
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
        </Button>
      </div>
    </header>
  );
};

export default NavigationHeader;
