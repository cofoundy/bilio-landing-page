import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { scrollToSectionAndOpenModal } from "@/hooks/useBetaModal";

const PricingSection = () => {
  const plans = [
    {
      name: "Básico",
      price: "Gratis",
      period: "por siempre",
      description: "Perfecto para comenzar a organizar tus finanzas",
      features: [
        "Registro de gastos ilimitado",
        "Categorización automática",
        "Reportes mensuales",
        "Análisis básico de gastos",
        "Soporte por WhatsApp"
      ],
      popular: false,
      glowColor: "Bilio-blue"
    },
    {
      name: "Premium",
      price: "S/19",
      period: "por mes",
      description: "Para usuarios que quieren el control total de sus finanzas",
      features: [
        "Todo lo del plan Básico",
        "Reportes diarios y personalizados",
        "Alertas de gastos inteligentes",
        "Integración con bancos (próximamente)",
        "Dashboard web completo",
        "Consejos de ahorro IA",
        "Soporte prioritario"
      ],
      popular: true,
      glowColor: "Bilio-purple"
    },
    {
      name: "Empresarial",
      price: "S/99",
      period: "por mes",
      description: "Ideal para equipos y pequeñas empresas",
      features: [
        "Todo lo del plan Premium",
        "Múltiples usuarios",
        "Control de gastos por equipo",
        "Reportes avanzados",
        "Integración con sistemas contables",
        "Gestor de cuenta dedicado",
        "Facturación empresarial"
      ],
      popular: false,
      glowColor: "Bilio-gold"
    }
  ];

  return (
    <section id="pricing" className="py-24 section-premium">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-glow">
            <span className="text-premium">Planes y precios</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed font-medium max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades. Puedes cambiar o cancelar en cualquier momento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card-premium p-8 relative group animate-scale-in ${
                plan.popular ? 'ring-2 ring-Bilio-purple ring-opacity-50 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-Bilio-purple to-Bilio-pink text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-Bilio-purple/30">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white text-glow mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white text-glow">{plan.price}</span>
                  <span className="text-gray-400 text-sm">{plan.period}</span>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-${plan.glowColor}/20 flex items-center justify-center border border-${plan.glowColor}/40`}>
                        <Check className={`w-3 h-3 text-${plan.glowColor}`} />
                      </div>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={scrollToSectionAndOpenModal}
                  className={`w-full py-3 font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'btn-premium text-white'
                      : 'bg-gray-800 text-white border border-gray-600 hover:bg-gray-700 hover:border-Bilio-purple/50'
                  }`}
                  style={plan.popular ? {} : { boxShadow: '0 0 20px rgba(124, 58, 237, 0.1)' }}
                >
                  {plan.price === "Gratis" ? "Comenzar Gratis" : "Elegir Plan"}
                </Button>
              </div>

              {/* Glow effect for popular plan */}
              {plan.popular && (
                <div className="absolute -inset-1 bg-gradient-to-r from-Bilio-purple/20 to-Bilio-pink/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm mb-4">
            ¿Necesitas algo diferente? Contáctanos para planes personalizados.
          </p>
          <p className="text-gray-500 text-xs">
            Todos los planes incluyen 30 días de prueba gratuita. Sin compromisos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
