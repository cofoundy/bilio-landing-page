
import React from "react";
import { ArrowRight, MessageSquare, CalendarDays, FileText } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: "Registra tu gasto enviando un mensaje",
      description: "Simplemente envía un mensaje a Spendly con el monto y descripción de tu gasto o ingreso.",
      icon: MessageSquare,
      color: "from-spendly-blue to-spendly-purple"
    },
    {
      id: 2,
      title: "Spendly lo categoriza automáticamente",
      description: "Nuestra IA detecta la categoría del gasto y lo registra en el lugar correcto.",
      icon: FileText,
      color: "from-spendly-purple to-spendly-pink"
    },
    {
      id: 3,
      title: "Recibe reportes diarios y recomendaciones",
      description: "Obtén análisis periódicos de tus finanzas y consejos personalizados para mejorar.",
      icon: CalendarDays,
      color: "from-spendly-pink to-spendly-blue"
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">¿Cómo funciona?</span>
          </h2>
          <p className="text-xl text-gray-600">
            Spendly es increíblemente sencillo de usar. Sigue estos tres simples pasos:
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-spendly-blue via-spendly-purple to-spendly-pink transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="step-card animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`bg-gradient-to-r ${step.color} mb-6 w-16 h-16 rounded-full flex items-center justify-center shadow-lg`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="bg-gradient-to-r from-spendly-blue to-spendly-purple opacity-10 absolute -right-4 -bottom-4 w-32 h-32 rounded-full blur-xl"></div>
                
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-spendly-blue bg-opacity-10 text-spendly-blue mr-3 text-sm font-bold">
                    {step.id}
                  </span>
                  {step.title}
                </h3>
                
                <p className="text-gray-600">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 z-20">
                    <ArrowRight className="h-8 w-8 text-spendly-blue" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
