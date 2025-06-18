import React from "react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-Bilio-gray-50 relative overflow-hidden">
      {/* Subtle background decoration with individual colors */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-Bilio-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-Bilio-green/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-Bilio-gray-900 mb-6">
            ¿Cómo funciona <span className="text-Bilio-blue">Bilio</span>?
          </h2>
          <p className="text-xl text-Bilio-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            Gestionar tus finanzas nunca fue tan simple. Con solo escribir a WhatsApp,
            tendrás el control total de tus gastos e ingresos.
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
                <h3 className="text-xl font-semibold text-Bilio-gray-900">Escribe tu gasto</h3>
                <p className="text-Bilio-gray-600 leading-relaxed">
                  Simplemente envía un mensaje: "Gasté S/50 en supermercado" y Bilio registrará automáticamente tu gasto.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-Bilio-yellow text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0 group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-Bilio-gray-900">Categorización automática</h3>
                <p className="text-Bilio-gray-600 leading-relaxed">
                  Bilio identifica la categoría de tu gasto automáticamente y te sugiere cómo optimizar tu presupuesto.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-Bilio-green text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0 group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-Bilio-gray-900">Recibe insights</h3>
                <p className="text-Bilio-gray-600 leading-relaxed">
                  Obtén reportes detallados, alertas de presupuesto y consejos personalizados para mejorar tu salud financiera.
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
