
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-spendly-blue to-spendly-green rounded-3xl overflow-hidden shadow-xl">
          <div className="relative p-12 md:p-16">
            {/* Background decoration */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-white opacity-10 rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white opacity-10 rounded-full"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  ¡Empieza a controlar tus finanzas hoy mismo!
                </h2>
                <p className="text-white/90 text-lg max-w-lg">
                  Únete a la beta privada de Spendly y sé de los primeros en experimentar una nueva forma de manejar tu dinero.
                </p>
              </div>
              
              <div>
                <Button className="bg-white text-spendly-blue hover:bg-white/90 hover:text-spendly-blue text-lg py-6 px-8 flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>Únete a la beta privada</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
