
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Spendly ha cambiado mi forma de administrar mi dinero. Finalmente tengo control de mis finanzas sin tener que entrar a apps complicadas.",
    author: "Ana López",
    role: "Freelancer"
  },
  {
    quote: "Poder registrar mis gastos por WhatsApp es una maravilla. Las notificaciones diarias me ayudan a mantener mis finanzas bajo control.",
    author: "Carlos Mendoza",
    role: "Profesional"
  },
  {
    quote: "Al fin una app financiera que no me da pereza usar. Los reportes semanales son súper útiles para identificar en qué gasto de más.",
    author: "María Torres",
    role: "Emprendedora"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-spendly-blue/5 to-spendly-green/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Lo que dicen nuestros usuarios</span>
          </h2>
          <p className="text-xl text-gray-600">
            Testimonios de personas que ya están tomando control de sus finanzas con Spendly
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="border-none shadow-lg animate-slide-up" style={{ animationDelay: `${i * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="mb-6">
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-spendly-blue to-spendly-green flex items-center justify-center text-white font-bold">
                    {testimonial.author[0]}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
