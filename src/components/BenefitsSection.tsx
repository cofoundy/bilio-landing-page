import React from "react";
import { useTranslation } from "react-i18next";
import { MessageSquare, FileText, User, Calendar, Check, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Spotlight } from "@/components/ui/spotlight";

const BenefitsSection = () => {
  const { t } = useTranslation('benefits');
  
  const benefits = [
    {
      icon: MessageSquare,
      title: t('items.0.title'),
      description: t('items.0.description'),
      variant: "blue" as const,
    },
    {
      icon: Calendar,
      title: t('items.1.title'),
      description: t('items.1.description'),
      variant: "yellow" as const,
    },
    {
      icon: User,
      title: t('items.2.title'),
      description: t('items.2.description'),
      variant: "green" as const,
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-white relative overflow-hidden">
      {/* Spotlight background effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Spotlight
          className="top-40 left-0 md:left-60 md:-top-20"
          fill="#FFC700"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="#002F6C"
        />
        <Spotlight
          className="top-20 right-20 h-[70vh] w-[40vw]"
          fill="#0AAD6E"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-Bilio-gray-900">
            <span className="text-Bilio-blue">{t('title')}</span>
          </h2>
          <p className="text-xl text-Bilio-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <HoverEffect items={benefits} />
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
