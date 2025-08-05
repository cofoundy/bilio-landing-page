import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { scrollToSectionAndOpenModal } from "@/hooks/useBetaModal";

const PricingSection = () => {
  const { t } = useTranslation('pricing');
  
  const plans = [
    {
      name: t('plans.basic.name'),
      price: t('plans.basic.price'),
      period: t('plans.basic.period'),
      description: t('plans.basic.description'),
      features: t('plans.basic.features', { returnObjects: true }) as string[],
      popular: false,
      accentColor: "Bilio-green",
      glowColor: "Bilio-green",
      buttonText: t('plans.basic.button')
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
      accentColor: "Bilio-yellow",
      glowColor: "Bilio-yellow"
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
      accentColor: "Bilio-blue",
      glowColor: "Bilio-blue"
    }
  ];

  // Generate pricing structured data
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bilio - Asistente Financiero",
    "description": "Asistente financiero en WhatsApp para control de gastos y finanzas personales",
    "provider": {
      "@type": "Organization",
      "name": "Bilio",
      "url": "https://bilio.lat"
    },
    "offers": plans.map(plan => ({
      "@type": "Offer",
      "name": `Plan ${plan.name}`,
      "description": plan.description,
      "price": plan.price === "Gratis" ? "0" : plan.price.replace("S/", ""),
      "priceCurrency": "PEN",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01",
      "category": "FinancialService"
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData)
        }}
      />
      <section id="pricing" className="py-24 bg-Bilio-gray-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-Bilio-gray-900">
              <span className="text-Bilio-blue">{t('title')}</span>
            </h2>
            <p className="text-xl text-Bilio-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`card-premium p-8 relative group animate-scale-in ${
                  plan.popular ? 'ring-2 ring-Bilio-yellow ring-opacity-50 scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className={`bg-${plan.accentColor} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-${plan.glowColor}/30`}>
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-Bilio-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-Bilio-gray-600 text-sm">{plan.description}</p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-Bilio-gray-900">{plan.price}</span>
                    <span className="text-Bilio-gray-600 text-sm">{plan.period}</span>
                  </div>

                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-${plan.accentColor}/20 flex items-center justify-center border border-${plan.accentColor}/40`}>
                          <Check className={`w-3 h-3 text-${plan.accentColor}`} />
                        </div>
                        <span className="text-Bilio-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={scrollToSectionAndOpenModal}
                    className={`w-full py-3 font-semibold transition-all duration-300 hover:scale-105 ${
                      plan.popular
                        ? 'btn-premium text-white'
                        : 'bg-white text-Bilio-gray-700 border border-Bilio-gray-300 hover:bg-Bilio-gray-50 hover:border-Bilio-blue/50'
                    }`}
                    style={plan.popular ? {} : { boxShadow: '0 0 20px rgba(255, 199, 0, 0.1)' }}
                  >
                    {plan.price === "Gratis" ? "Comenzar Gratis" : "Elegir Plan"}
                  </Button>
                </div>

                {/* Glow effect for popular plan */}
                {plan.popular && (
                  <div className={`absolute -inset-1 bg-${plan.accentColor}/15 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-Bilio-gray-600 text-sm mb-4">
              ¿Necesitas algo diferente? Contáctanos para planes personalizados.
            </p>
            <p className="text-Bilio-gray-500 text-xs">
              Todos los planes incluyen 30 días de prueba gratuita. Sin compromisos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
