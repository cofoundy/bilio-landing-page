
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Spendly es seguro?",
      answer: "Sí, en Spendly nos tomamos la seguridad muy en serio. Ciframos toda tu información financiera y no almacenamos datos sensibles como contraseñas bancarias. Además, nunca compartimos tus datos con terceros sin tu consentimiento explícito."
    },
    {
      question: "¿Tiene costo usar Spendly?",
      answer: "Actualmente, Spendly se encuentra en fase beta gratuita. En el futuro, ofreceremos un plan gratuito con funciones básicas y un plan premium con características avanzadas, pero siempre mantendremos opciones accesibles para todos nuestros usuarios."
    },
    {
      question: "¿Cómo puedo empezar a usar Spendly?",
      answer: "Para comenzar a usar Spendly, simplemente regístrate en nuestra beta privada y te enviaremos un link para que puedas chatear con nuestro bot de WhatsApp. No necesitas descargar ninguna aplicación adicional."
    },
    {
      question: "¿Funciona solo en ciertos países?",
      answer: "Actualmente estamos enfocados en Perú y países de Latinoamérica, pero planeamos expandirnos a más regiones pronto. El servicio funciona con cualquier número de WhatsApp sin importar el país."
    },
    {
      question: "¿Puedo conectar Spendly con mi banco?",
      answer: "Estamos trabajando en integraciones con los principales bancos. Esta función estará disponible en nuestro plan Premium próximamente."
    },
    {
      question: "¿Qué hago si tengo problemas o sugerencias?",
      answer: "Puedes contactarnos directamente a través del chat de Spendly escribiendo 'Ayuda' o 'Soporte'. También puedes enviarnos un correo electrónico a soporte@spendly.com y responderemos a la brevedad."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Preguntas frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Respuestas a las dudas más comunes sobre Spendly
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
