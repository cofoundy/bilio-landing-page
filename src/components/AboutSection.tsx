
import React from "react";
import { MessageSquare } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-spendly-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">¿Qué es Spendly?</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Spendly es tu asistente financiero en WhatsApp: registra tus gastos, categorízalos automáticamente y recibe reportes y consejos personalizados.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-spendly-purple to-spendly-pink rounded-full blur-xl opacity-20 animate-pulse-soft"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-spendly-blue to-spendly-green flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">WhatsApp</h3>
                    <p className="text-gray-600">Conversación con Spendly</p>
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none">
                    <p className="text-gray-800">Hola, ¿cómo puedo ayudarte a administrar tus finanzas hoy?</p>
                  </div>
                  
                  <div className="bg-spendly-blue bg-opacity-10 p-3 rounded-lg rounded-tr-none ml-auto">
                    <p className="text-gray-800">Quiero registrar un gasto de $50 en restaurante</p>
                  </div>
                  
                  <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none">
                    <p className="text-gray-800">¡Listo! He registrado $50 en la categoría "Restaurantes".</p>
                    <p className="text-gray-600 text-sm mt-1">Este mes llevas $180 gastados en restaurantes.</p>
                  </div>
                  
                  <div className="bg-spendly-blue bg-opacity-10 p-3 rounded-lg rounded-tr-none ml-auto">
                    <p className="text-gray-800">¿Cuál es mi categoría con más gastos?</p>
                  </div>
                  
                  <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none">
                    <p className="text-gray-800">Tu categoría con más gastos es "Transporte" con $250 este mes, seguido de "Restaurantes" con $180.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 max-w-lg">
            <h3 className="text-2xl font-bold mb-4">
              La forma más <span className="gradient-text">simple</span> de controlar tus finanzas
            </h3>
            <p className="text-gray-600 mb-6">
              Olvidate de descargar aplicaciones complicadas o recordar contraseñas. Con Spendly, usar la aplicación que ya usas todos los días: WhatsApp.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-spendly-green bg-opacity-20 flex items-center justify-center mt-1">
                  <span className="text-spendly-green text-sm">✓</span>
                </div>
                <span className="ml-3 text-gray-600">Registra gastos e ingresos con mensajes simples</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-spendly-green bg-opacity-20 flex items-center justify-center mt-1">
                  <span className="text-spendly-green text-sm">✓</span>
                </div>
                <span className="ml-3 text-gray-600">Recibe alertas cuando te acerques a tus límites de gasto</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-spendly-green bg-opacity-20 flex items-center justify-center mt-1">
                  <span className="text-spendly-green text-sm">✓</span>
                </div>
                <span className="ml-3 text-gray-600">Categorización automática con inteligencia artificial</span>
              </li>
              {/* <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-spendly-green bg-opacity-20 flex items-center justify-center mt-1">
                  <span className="text-spendly-green text-sm">✓</span>
                </div>
                <span className="ml-3 text-gray-600">Integración opcional con tu banco para mejor seguimiento</span>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
