
import React from "react";
import { MessageSquare, FileText, User, Calendar, Check, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: MessageSquare,
      title: "Registro de gastos fácil y rápido",
      description: "Registra gastos con un simple mensaje de WhatsApp, sin necesidad de abrir otra aplicación."
    },
    {
      icon: FileText,
      title: "Reportes diarios y mensuales claros",
      description: "Obtén reportes visuales y fáciles de entender sobre tus gastos, ingresos y hábitos financieros."
    },
    {
      icon: User,
      title: "Consejos personalizados de ahorro",
      description: "Recibe recomendaciones basadas en tu comportamiento financiero para mejorar tus hábitos."
    },
    {
      icon: Check,
      title: "Sin necesidad de instalar apps nuevas",
      description: "Utiliza WhatsApp, la app de mensajería que ya usas todos los días."
    },
    {
      icon: Calendar,
      title: "Plataforma web para análisis detallado",
      description: "Accede a una plataforma web para ver todos tus datos financieros en detalle."
    },
    {
      icon: Plus,
      title: "Integración con tus cuentas bancarias",
      description: "Conecta tus cuentas para un seguimiento automático y completo de tus finanzas (próximamente)."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-spendly-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Beneficios principales</span>
          </h2>
          <p className="text-xl text-gray-600">
            Controla tus finanzas de forma inteligente y disfruta de una experiencia sencilla y efectiva.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <Card key={i} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-spendly-blue to-spendly-green opacity-10 rounded-bl-full"></div>
              <CardContent className="p-8">
                <div className="mb-5 inline-flex p-3 rounded-full bg-spendly-blue bg-opacity-10">
                  <benefit.icon className="h-6 w-6 text-spendly-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
