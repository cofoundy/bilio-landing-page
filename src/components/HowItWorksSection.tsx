
import React from "react";
import { ArrowRight, MessageSquare, CalendarDays, FileText } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: "Registra tu gasto enviando un mensaje",
      description: "Simplemente envía un mensaje o audio a Spendly con el monto y descripción de tu gasto o ingreso.",
      icon: MessageSquare,
      color: "from-spendly-emerald to-spendly-teal"
    },
    {
      id: 2,
      title: "Spendly lo categoriza automáticamente",
      description: "Nuestra IA detecta la categoría del gasto y lo registra en el lugar correcto.",
      icon: FileText,
      color: "from-spendly-teal to-spendly-aqua"
    },
    {
      id: 3,
      title: "Recibe reportes diarios y recomendaciones",
      description: "Obtén análisis periódicos de tus finanzas y consejos personalizados para mejorar.",
      icon: CalendarDays,
      color: "from-spendly-aqua to-spendly-lime"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 section-premium">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            <span className="text-premium">¿Cómo funciona?</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
            Spendly es increíblemente sencillo de usar. Sigue estos tres simples pasos:
          </p>
        </div>
        
        <div className="relative">
          {/* Enhanced connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-spendly-emerald via-spendly-aqua to-spendly-lime transform -translate-y-1/2 z-0 opacity-30 animate-gradient-shift"></div>
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white to-transparent transform -translate-y-1/2 z-0 opacity-60"></div>
          
          <div className="grid md:grid-cols-3 gap-10 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="card-premium p-8 animate-scale-in group" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`bg-gradient-to-r ${step.color} mb-8 w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                
                <div className="bg-gradient-to-r from-spendly-emerald/5 to-spendly-aqua/10 absolute -right-6 -bottom-6 w-40 h-40 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300"></div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-spendly-emerald to-spendly-teal text-white text-lg font-bold shadow-lg">
                      {step.id}
                    </span>
                    <div className="w-12 h-1 bg-gradient-to-r from-spendly-emerald to-spendly-teal rounded-full"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-spendly-dark mb-3 leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
