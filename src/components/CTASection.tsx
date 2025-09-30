import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, PlusIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LocationData } from "@/data/locations";

interface CTASectionProps {
  locationData?: LocationData;
}

const CTASection = ({ locationData }: CTASectionProps) => {
  const { t } = useTranslation('cta');

  // Get FAQ questions from translations
  const faqQuestions = t('faq.questions', { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  const handleGetStarted = () => {
    window.location.href = 'https://app.bilio.lat';
  };

  return (
    <section id="cta-section" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Main CTA Section */}
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl mb-20">
          {/* Premium background with individual colors */}
          <div className="absolute inset-0 bg-Bilio-blue"></div>
          <div className="absolute inset-0 bg-Bilio-green/60 mix-blend-multiply"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-Bilio-yellow/30 rounded-full blur-3xl animate-float" style={{ boxShadow: '0 0 100px rgba(255, 199, 0, 0.3)' }}></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-Bilio-green/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s', boxShadow: '0 0 100px rgba(10, 173, 110, 0.2)' }}></div>
          
          <div className="relative p-12 md:p-16" style={{ background: 'linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.2))' }}>
            <div className="relative z-10 text-center">
              {/* Enhanced value proposition */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {t('title')}
                </h2>
                <p className="text-white/90 text-xl md:text-2xl mb-4 font-medium">
                  {t('value_proposition')}
                </p>
                <p className="text-white/80 text-lg max-w-2xl mx-auto">
                  {t('subtitle')}
                </p>
              </motion.div>
              
              {/* Prominent CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button
                  onClick={handleGetStarted}
                  className="bg-white text-Bilio-blue hover:bg-white/90 hover:text-Bilio-blue text-xl py-8 px-12 flex items-center space-x-3 font-bold shadow-2xl transition-all duration-300 hover:scale-105 mx-auto group"
                  style={{ boxShadow: '0 0 40px rgba(255, 255, 255, 0.4), 0 25px 50px rgba(0, 0, 0, 0.3)' }}
                >
                  <span>{t('button')}</span>
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Simplified FAQ Section */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-Bilio-gray-900 mb-4">
              {t('faq.title')}
            </h3>
            <div className="w-24 h-1 bg-Bilio-yellow mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 -z-10 h-72 w-72 rounded-full bg-Bilio-yellow/5 blur-3xl" />
            <div className="absolute -right-4 -bottom-4 -z-10 h-72 w-72 rounded-full bg-Bilio-blue/5 blur-3xl" />

            <Accordion
              type="single"
              collapsible
              className="w-full rounded-xl border border-Bilio-gray-200/40 bg-white/80 p-2 backdrop-blur-sm shadow-lg"
              defaultValue="0"
            >
              {faqQuestions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                >
                  <AccordionItem
                    value={index.toString()}
                    className={cn(
                      'my-1 overflow-hidden rounded-lg border-none px-2 shadow-sm transition-all bg-white/70',
                      'data-[state=open]:bg-Bilio-yellow/5 data-[state=open]:shadow-md',
                    )}
                  >
                    <AccordionTrigger
                      className={cn(
                        'group flex flex-1 items-center justify-between gap-4 py-6 text-left text-lg font-semibold text-Bilio-gray-900',
                        'hover:text-Bilio-blue transition-all duration-300 outline-none hover:no-underline',
                        'focus-visible:ring-2 focus-visible:ring-Bilio-blue/50',
                        'data-[state=open]:text-Bilio-blue',
                        '[&>svg]:hidden', // Hide the default chevron
                      )}
                    >
                      <span>{item.question}</span>
                      <PlusIcon
                        size={20}
                        className={cn(
                          'shrink-0 transition-transform duration-300 ease-out text-Bilio-blue/70',
                          'group-data-[state=open]:rotate-45 group-data-[state=open]:text-Bilio-blue',
                        )}
                        aria-hidden="true"
                      />
                    </AccordionTrigger>
                    <AccordionContent
                      className={cn(
                        'overflow-hidden pt-0 pb-6 text-Bilio-gray-600 leading-relaxed text-base',
                        'data-[state=open]:animate-accordion-down',
                        'data-[state=closed]:animate-accordion-up',
                      )}
                    >
                      <div className="border-t border-Bilio-yellow/30 pt-4">
                        {item.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
