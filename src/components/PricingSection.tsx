
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Gratuito",
      price: "S/0",
      description: "Perfecto para comenzar a controlar tus finanzas",
      features: [
        "Registro de gastos e ingresos ilimitados",
        "Categorización automática",
        "Reportes diarios básicos",
        "Soporte por WhatsApp",
      ],
      cta: "Comenzar gratis",
      popular: false,
      disabled: false
    },
    {
      name: "Premium",
      price: "S/19.90",
      period: "/mes",
      description: "Para quienes desean un control financiero completo",
      features: [
        "Todo lo del plan Gratuito",
        "Reportes semanales y mensuales detallados",
        "Establecimiento de metas financieras",
        "Predicciones de gastos con IA",
        "Exportación de datos en Excel/PDF",
        "Acceso anticipado a nuevas funciones"
      ],
      cta: "Próximamente",
      popular: true,
      disabled: true
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Planes y precios</span>
          </h2>
          <p className="text-xl text-gray-600">
            Elige el plan que mejor se adapte a tus necesidades financieras
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`rounded-2xl overflow-hidden transition-all duration-300 animate-slide-up ${
                plan.popular 
                  ? 'border-2 border-spendly-blue shadow-xl relative' 
                  : 'border border-gray-200 shadow-lg'
              }`} 
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute top-5 right-5">
                  <span className="bg-spendly-blue text-white text-xs font-bold px-3 py-1 rounded-full">Popular</span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 ml-1">{plan.period}</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-spendly-emerald mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-6 ${
                    plan.popular 
                      ? 'gradient-bg text-white' 
                      : 'bg-spendly-blue bg-opacity-10 text-spendly-blue hover:bg-spendly-blue hover:text-white'
                  }`}
                  disabled={plan.disabled}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
