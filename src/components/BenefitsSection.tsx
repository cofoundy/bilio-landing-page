import React from "react";
import { useTranslation } from "react-i18next";
import { MessageSquare, FileText, User, Calendar, Check, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
    <section id="benefits" className="py-24 relative overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-white">
      {/* Beautiful diagonal gradient background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right_bottom,rgba(255,199,0,0.05),rgba(0,47,108,0.05),rgba(10,173,110,0.05))]"></div>
      
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-Bilio-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-Bilio-yellow/5 rounded-full blur-3xl"></div>

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className={cn(
                "h-full transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 bg-white/80 backdrop-blur-sm",
                "hover:bg-white hover:shadow-2xl",
                benefit.variant === "blue" && "hover:shadow-Bilio-blue/10",
                benefit.variant === "yellow" && "hover:shadow-Bilio-yellow/10", 
                benefit.variant === "green" && "hover:shadow-Bilio-green/10"
              )}>
                <CardContent className="p-8 text-center space-y-6">
                  {/* Icon */}
                  <div className="flex items-center justify-center">
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110",
                      benefit.variant === "yellow" && "bg-Bilio-yellow shadow-Bilio-yellow/20",
                      benefit.variant === "blue" && "bg-Bilio-blue shadow-Bilio-blue/20",
                      benefit.variant === "green" && "bg-Bilio-green shadow-Bilio-green/20"
                    )}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-Bilio-gray-900 leading-tight">
                    {benefit.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-Bilio-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  {/* Subtle accent line */}
                  <div className={cn(
                    "w-12 h-1 rounded-full mx-auto transition-all duration-300 group-hover:w-20",
                    benefit.variant === "yellow" && "bg-Bilio-yellow",
                    benefit.variant === "blue" && "bg-Bilio-blue",
                    benefit.variant === "green" && "bg-Bilio-green"
                  )}></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
