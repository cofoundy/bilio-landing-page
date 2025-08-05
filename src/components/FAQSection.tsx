import React, { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { LocationData } from "@/data/locations";

interface FAQSectionProps {
  locationData?: LocationData;
}

const FAQSection = ({ locationData }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const isUS = locationData?.code === 'us';

  // Location-specific FAQ content
  const faqs = isUS ? [
    {
      question: "How does Bilio work?",
      answer: "Bilio is a WhatsApp bot that helps you track and categorize your expenses automatically. Simply send a message with your expense (e.g., 'Spent $20 on lunch') and Bilio will record it, categorize it, and help you track your finances.",
      category: "basics"
    },
    {
      question: "Is it safe to share my financial information?",
      answer: "Absolutely. Bilio uses end-to-end encryption and doesn't store sensitive information like bank account numbers. We only process expense data that you voluntarily choose to share to give you better reports.",
      category: "security"
    },
    {
      question: "How much does Bilio cost?",
      answer: "Bilio has a free plan that includes unlimited expense tracking, automatic categorization, and basic reports. We also offer premium plans with advanced features like detailed reports, AI analysis, and more.",
      category: "pricing"
    },
    {
      question: "Can I use Bilio for family budgeting?",
      answer: "Yes! Premium and business plans allow multiple users, perfect for families or teams who want to track their expenses and budgets together.",
      category: "features"
    },
    {
      question: "What if I make a mistake with an expense?",
      answer: "You can easily correct any expense by sending a message to Bilio. For example: 'Correct yesterday's expense, it was $45 not $50'. The bot will automatically update your record.",
      category: "usage"
    },
    {
      question: "Can I export my data?",
      answer: "Yes, with premium plans you can export all your data in Excel and PDF formats for personal use or to share with your accountant.",
      category: "features"
    },
    {
      question: "Is there a limit to how many expenses I can track?",
      answer: "No limits on any plan. You can track as many expenses as you need, without restrictions.",
      category: "usage"
    },
    {
      question: "Does Bilio work with US banks?",
      answer: "Currently, Bilio requires manual expense entry through WhatsApp. We're working on US bank integrations for future releases. The manual approach actually helps you stay more conscious of your spending.",
      category: "integration"
    }
  ] : [
    {
      question: "¿Cómo funciona Bilio?",
      answer: `Bilio es un bot de WhatsApp que te ayuda a registrar y categorizar tus gastos automáticamente. Simplemente envías un mensaje con tu gasto (ej: 'Gasté ${locationData?.marketSpecific.pricing.symbol || 'S/'}50 en almuerzo') y Bilio lo registra, categoriza y te ayuda a hacer seguimiento de tus finanzas.`,
      category: "basics"
    },
    {
      question: "¿Es seguro compartir mi información financiera?",
      answer: "Absolutamente. Bilio utiliza encriptación de extremo a extremo y no almacena información sensible como números de cuentas bancarias. Solo procesamos los datos de gastos que tú decides compartir voluntariamente para darte mejores reportes.",
      category: "security"
    },
    {
      question: "¿Cuánto cuesta usar Bilio?",
      answer: "Bilio tiene un plan gratuito que incluye registro ilimitado de gastos, categorización automática y reportes básicos. También ofrecemos planes premium con funciones avanzadas como reportes detallados, análisis de IA y más.",
      category: "pricing"
    },
    {
      question: "¿Puedo usar Bilio en grupo familiar?",
      answer: "¡Sí! Los planes premium y empresarial permiten múltiples usuarios, perfecto para familias o equipos que quieren hacer seguimiento conjunto de sus gastos y presupuestos.",
      category: "features"
    },
    {
      question: "¿Qué pasa si me equivoco en un gasto?",
      answer: `Puedes corregir cualquier gasto fácilmente enviando un mensaje a Bilio. Por ejemplo: 'Corrige el gasto de ayer, fueron ${locationData?.marketSpecific.pricing.symbol || 'S/'}45 no ${locationData?.marketSpecific.pricing.symbol || 'S/'}50'. El bot actualizará automáticamente tu registro.`,
      category: "usage"
    },
    {
      question: "¿Puedo exportar mis datos?",
      answer: "Sí, en los planes premium puedes exportar todos tus datos en formatos Excel y PDF para tu uso personal o para compartir con tu contador.",
      category: "features"
    },
    {
      question: "¿Hay límite en la cantidad de gastos que puedo registrar?",
      answer: "No hay límites en ningún plan. Puedes registrar tantos gastos como necesites, sin restricciones.",
      category: "usage"
    },
    {
      question: `¿Funciona Bilio en ${locationData?.name || 'mi país'}?`,
      answer: `¡Sí! Bilio funciona perfectamente en ${locationData?.name || 'tu país'} con soporte completo para ${locationData?.currency || 'tu moneda local'}. Nuestras categorías están adaptadas al mercado ${locationData?.name?.toLowerCase() || 'local'}.`,
      category: "location"
    }
  ];

  // Generate enhanced FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": isUS ? "Frequently Asked Questions about Bilio" : "Preguntas Frecuentes sobre Bilio",
    "description": isUS 
      ? "Find answers to common questions about Bilio, the AI financial assistant for WhatsApp"
      : "Encuentra respuestas a las preguntas más comunes sobre Bilio, el asistente financiero con IA para WhatsApp",
    "url": `${locationData?.domain || 'https://bilio.lat'}#faq`,
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "dateCreated": "2024-12-20",
        "author": {
          "@type": "Organization",
          "name": "Bilio"
        }
      },
      "answerCount": 1,
      "upvoteCount": 0,
      "dateCreated": "2024-12-20"
    })),
    "about": {
      "@type": "SoftwareApplication",
      "name": "Bilio",
      "applicationCategory": "FinanceApplication"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData)
        }}
      />
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
              {isUS ? "Can't find the answer you're looking for?" : "¿No encuentras la respuesta que buscas?"}
            </p>
            <p className="text-Bilio-gray-500 text-sm mb-6">
              {isUS 
                ? "Contact us on WhatsApp and we'll help you personally" 
                : "Escríbenos a nuestro WhatsApp y te ayudaremos personalmente"
              }
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-Bilio-blue text-white rounded-lg hover:bg-Bilio-blue/90 transition-colors">
              <MessageCircle size={20} className="mr-2" />
              {isUS ? "Contact Support" : "Contactar Soporte"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
