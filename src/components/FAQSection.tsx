import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Cómo funciona Bilio?",
      answer: "Bilio es un bot de WhatsApp que te ayuda a registrar y categorizar tus gastos automáticamente. Simplemente envías un mensaje con tu gasto (ej: 'Gasté S/50 en almuerzo') y Bilio lo registra, categoriza y te ayuda a hacer seguimiento de tus finanzas."
    },
    {
      question: "¿Es seguro compartir mi información financiera?",
      answer: "Absolutamente. Bilio utiliza encriptación de extremo a extremo y no almacena información sensible como números de cuentas bancarias. Solo procesamos los datos de gastos que tú decides compartir voluntariamente para darte mejores reportes."
    },
    {
      question: "¿Cuánto cuesta usar Bilio?",
      answer: "Bilio tiene un plan gratuito que incluye registro ilimitado de gastos, categorización automática y reportes básicos. También ofrecemos planes premium con funciones avanzadas como reportes detallados, análisis de IA y más."
    },
    {
      question: "¿Puedo usar Bilio en grupo familiar?",
      answer: "¡Sí! Los planes premium y empresarial permiten múltiples usuarios, perfecto para familias o equipos que quieren hacer seguimiento conjunto de sus gastos y presupuestos."
    },
    
    {
      question: "¿Qué pasa si me equivoco en un gasto?",
      answer: "Puedes corregir cualquier gasto fácilmente enviando un mensaje a Bilio. Por ejemplo: 'Corrige el gasto de ayer, fueron S/45 no S/50'. El bot actualizará automáticamente tu registro."
    },
    {
      question: "¿Puedo exportar mis datos?",
      answer: "Sí, en los planes premium puedes exportar todos tus datos en formatos Excel y PDF para tu uso personal o para compartir con tu contador."
    },
    {
      question: "¿Hay límite en la cantidad de gastos que puedo registrar?",
      answer: "No hay límites en ningún plan. Puedes registrar tantos gastos como necesites, sin restricciones."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-Bilio-gray-900">
            <span className="text-Bilio-blue">Preguntas frecuentes</span>
          </h2>
          <p className="text-xl text-Bilio-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre Bilio
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card-premium transition-all duration-300 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full p-6 text-left focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-Bilio-gray-900 group-hover:text-Bilio-blue transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-Bilio-blue" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-Bilio-gray-600 group-hover:text-Bilio-blue transition-colors duration-300" />
                    )}
                  </div>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="w-full h-px bg-Bilio-yellow/30 mb-4"></div>
                  <p className="text-Bilio-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}

              {/* Subtle glow on hover */}
              <div className="absolute -inset-1 bg-Bilio-yellow/8 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-Bilio-gray-600 mb-4">
            ¿No encuentras la respuesta que buscas?
          </p>
          <p className="text-Bilio-gray-500 text-sm">
            Escríbenos a nuestro WhatsApp y te ayudaremos personalmente
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
