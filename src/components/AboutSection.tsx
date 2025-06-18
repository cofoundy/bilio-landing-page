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

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
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
          <div className="animate-slide-in-right">
            <div className="relative mx-auto max-w-sm group">
              {/* Glowing effects with individual colors */}
              <div className="absolute inset-0 bg-Bilio-blue/10 rounded-3xl blur-xl opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-Bilio-yellow/5 rounded-3xl blur-2xl opacity-60 scale-110"></div>
              
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-Bilio-gray-200">
                {/* WhatsApp header with authentic green */}
                <div className="bg-[#25D366] text-white p-3 flex items-center gap-3 shadow-lg">
                  <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center p-1">
                    <img 
                      src="/logoBilio.png" 
                      alt="Bilio" 
                      className="h-full w-auto"
                    />
                  </div>
                  <span className="font-medium text-white">Bilio Bot</span>
                </div>
                
                {/* Chat conversation with authentic WhatsApp styling */}
                <div className="p-4 bg-[#E5DDD5] space-y-4 h-96 overflow-hidden"
                     style={{ backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"><rect width=\"40\" height=\"40\" fill=\"%23E5DDD5\"/><circle cx=\"20\" cy=\"20\" r=\"0.5\" fill=\"%23D1C7BD\" opacity=\"0.3\"/></svg>')" }}>
                  {/* User message */}
                  <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm p-4 ml-auto max-w-[75%] shadow-sm">
                    <p className="text-gray-800 font-normal text-sm">Gasté S/280 en supermercado</p>
                    <p className="text-xs text-gray-600 mt-1 text-right">15:20 ✓✓</p>
                  </div>
                  
                  {/* Bot response */}
                  <div className="bg-white rounded-2xl rounded-tl-sm p-4 max-w-[85%] shadow-sm">
                    <p className="text-gray-800 font-normal text-sm">¡Perfecto! He registrado S/280 en "Alimentación".</p>
                    <div className="bg-gray-100 rounded-lg p-3 mt-2 space-y-2">
                      <p className="text-gray-700 text-xs font-medium">💡 Insight:</p>
                      <p className="text-gray-600 text-xs">Has gastado S/850 en alimentación este mes. Te quedan S/350 del presupuesto mensual.</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 text-right">15:21</p>
                  </div>
                  
                  {/* User question */}
                  <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm p-4 ml-auto max-w-[75%] shadow-sm">
                    <p className="text-gray-800 font-normal text-sm">¿Cómo voy con mis ahorros?</p>
                    <p className="text-xs text-gray-600 mt-1 text-right">15:22 ✓✓</p>
                  </div>
                  
                  {/* Bot detailed response */}
                  <div className="bg-white rounded-2xl rounded-tl-sm p-4 max-w-[85%] shadow-sm">
                    <p className="text-gray-800 font-normal text-sm">¡Excelente progreso! 🎉</p>
                    <div className="bg-gray-100 rounded-lg p-3 mt-2 space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Meta mensual:</span>
                        <span className="text-gray-800 font-medium">S/500</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Ahorrado:</span>
                        <span className="text-green-600 font-medium">S/380</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '76%' }}></div>
                      </div>
                      <p className="text-gray-600 text-xs">¡Vas al 76% de tu meta!</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 text-right">15:22</p>
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

export default AboutSection;
