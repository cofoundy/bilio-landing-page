
import React from "react";
import { Button } from "@/components/ui/button";

const NavigationHeader = () => {
  return (
    <header className="fixed w-full z-50 py-4 bg-white bg-opacity-80 backdrop-blur-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-spendly-blue to-spendly-green flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-bold text-xl text-spendly-dark">Spendly</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#how-it-works" className="text-gray-600 hover:text-spendly-blue transition-colors">
            ¿Cómo funciona?
          </a>
          <a href="#benefits" className="text-gray-600 hover:text-spendly-blue transition-colors">
            Beneficios
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-spendly-blue transition-colors">
            Planes
          </a>
          <a href="#faq" className="text-gray-600 hover:text-spendly-blue transition-colors">
            FAQ
          </a>
        </nav>
        
        <Button className="gradient-bg text-white">
          Únete a la beta
        </Button>
      </div>
    </header>
  );
};

export default NavigationHeader;
