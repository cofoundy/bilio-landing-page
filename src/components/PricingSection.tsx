'use client';
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SafeNumberFlow } from '@/components/ui/safe-number-flow';
import { Badge } from '@/components/ui/badge';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Sparkles, ArrowRight, Check, Star, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollToSectionAndOpenModal } from "@/hooks/useBetaModal";
import { LocationData } from "@/data/locations";

// Icon mapping for different plan types
const iconMap = {
  Star,
  Zap,
  Shield,
};

interface PricingSectionProps {
  locationData?: LocationData;
}

const PricingSection: React.FC<PricingSectionProps> = ({ locationData }) => {
  const { t } = useTranslation('pricing');
  
  // Build plans from translation data
  const planKeys = ['basic', 'premium', 'enterprise'];
  const plans = planKeys.map(key => {
    const planData = t(`plans.${key}`, { returnObjects: true }) as any;
    const IconComponent = iconMap[planData.icon as keyof typeof iconMap] || Star;
    
    return {
      id: key,
      name: planData.name,
      icon: IconComponent,
      price: planData.price.monthly,
      description: planData.description,
      features: planData.features,
      cta: planData.button,
      popular: planData.popular || false,
    };
  });

  // SEO structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bilio",
    "description": t('subtitle'),
    "provider": {
      "@type": "Organization",
      "name": "Bilio"
    },
    "offers": plans.map(plan => ({
      "@type": "Offer",
      "name": plan.name,
      "description": plan.description,
      "price": typeof plan.price === 'number' ? plan.price : "0",
      "priceCurrency": locationData?.currency || "USD",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    }))
  };

  return (
    <section id="pricing" className="not-prose relative flex w-full flex-col gap-16 overflow-hidden px-4 py-24 text-center sm:px-8">
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-primary/10 absolute -top-[10%] left-[50%] h-[40%] w-[60%] -translate-x-1/2 rounded-full blur-3xl" />
        <div className="bg-primary/5 absolute -right-[10%] -bottom-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
        <div className="bg-primary/5 absolute -bottom-[10%] -left-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center space-y-2">
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/5 mb-4 rounded-full px-4 py-1 text-sm font-medium"
          >
            <Sparkles className="text-primary mr-1 h-3.5 w-3.5 animate-pulse" />
            {t('popularLabel')} Plans
          </Badge>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="from-foreground to-foreground/30 bg-gradient-to-b bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-md pt-2 text-lg"
          >
            {t('subtitle')}
          </motion.p>
        </div>


        <div className="mt-8 grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex"
            >
              <Card
                className={cn(
                  'relative h-full w-full text-left transition-all duration-300 hover:shadow-xl hover:scale-105',
                  // Different background colors for each plan
                  plan.id === 'basic' && 'bg-Bilio-blue-soft border-Bilio-blue/20',
                  plan.id === 'premium' && 'bg-Bilio-yellow-soft border-Bilio-yellow/30',
                  plan.id === 'enterprise' && 'bg-Bilio-green-soft border-Bilio-green/20',
                  // Popular plan styling
                  plan.popular
                    ? 'ring-Bilio-yellow/50 shadow-md ring-2 shadow-Bilio-yellow/10'
                    : 'hover:border-opacity-60',
                  plan.popular &&
                    'from-Bilio-yellow/[0.05] bg-gradient-to-b to-transparent',
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 right-0 left-0 mx-auto w-fit">
                    <Badge className="bg-primary text-primary-foreground rounded-full px-4 py-1 shadow-sm">
                      <Sparkles className="mr-1 h-3.5 w-3.5" />
                      {t('popularLabel')}
                    </Badge>
                  </div>
                )}
                <CardHeader className={cn('pb-6', plan.popular && 'pt-10')}>
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        'flex h-10 w-10 items-center justify-center rounded-full',
                        plan.id === 'basic' && 'bg-Bilio-blue/10 text-Bilio-blue',
                        plan.id === 'premium' && 'bg-Bilio-yellow/20 text-Bilio-blue',
                        plan.id === 'enterprise' && 'bg-Bilio-green/10 text-Bilio-green',
                      )}
                    >
                      <plan.icon className="h-5 w-5" />
                    </div>
                    <CardTitle
                      className={cn(
                        'text-2xl font-bold',
                        plan.id === 'basic' && 'text-Bilio-blue',
                        plan.id === 'premium' && 'text-Bilio-blue',
                        plan.id === 'enterprise' && 'text-Bilio-green',
                      )}
                    >
                      {plan.name}
                    </CardTitle>
                  </div>
                  <div className="mt-4 space-y-3">
                    <p className="text-base text-muted-foreground">{plan.description}</p>
                    <div className="pt-3">
                      {typeof plan.price === 'number' ? (
                        <div className="flex items-baseline">
                          <SafeNumberFlow
                            className={cn(
                              'text-4xl font-bold',
                              plan.id === 'basic' && 'text-Bilio-blue',
                              plan.id === 'premium' && 'text-Bilio-yellow-dark',
                              plan.id === 'enterprise' && 'text-Bilio-green',
                            )}
                            format={{
                              style: 'currency',
                              currency: locationData?.currency || 'USD',
                              maximumFractionDigits: 0,
                            }}
                            value={plan.price}
                          />
                          <span className="text-muted-foreground ml-2 text-base font-medium">
                            /month
                          </span>
                        </div>
                      ) : (
                        <span
                          className={cn(
                            'text-3xl font-bold',
                            plan.id === 'basic' && 'text-Bilio-blue',
                            plan.id === 'premium' && 'text-Bilio-yellow-dark',
                            plan.id === 'enterprise' && 'text-Bilio-green',
                          )}
                        >
                          {plan.price}
                        </span>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-4 pb-8">
                  {plan.features.map((feature: string, featureIndex: number) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + featureIndex * 0.05 }}
                      className="flex items-center gap-3 text-base"
                    >
                      <div
                        className={cn(
                          'flex h-6 w-6 items-center justify-center rounded-full',
                          plan.id === 'basic' && 'bg-Bilio-blue/10 text-Bilio-blue',
                          plan.id === 'premium' && 'bg-Bilio-yellow/20 text-Bilio-blue',
                          plan.id === 'enterprise' && 'bg-Bilio-green/10 text-Bilio-green',
                        )}
                      >
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-Bilio-gray-700">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button
                    variant={plan.popular ? 'default' : 'outline'}
                    className={cn(
                      'group w-full font-semibold text-lg transition-all duration-300 py-3',
                      plan.id === 'basic' && 'border-Bilio-blue text-Bilio-blue hover:bg-Bilio-blue hover:text-white',
                      plan.id === 'premium' && 'bg-Bilio-yellow text-Bilio-blue hover:bg-Bilio-yellow-dark hover:shadow-Bilio-yellow/20 hover:shadow-md',
                      plan.id === 'enterprise' && 'border-Bilio-green text-Bilio-green hover:bg-Bilio-green hover:text-white',
                    )}
                    onClick={scrollToSectionAndOpenModal}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardFooter>

                {/* Subtle gradient effects */}
                {plan.popular ? (
                  <>
                    <div className="from-primary/[0.05] pointer-events-none absolute right-0 bottom-0 left-0 h-1/2 rounded-b-lg bg-gradient-to-t to-transparent" />
                    <div className="border-primary/20 pointer-events-none absolute inset-0 rounded-lg border" />
                  </>
                ) : (
                  <div className="hover:border-primary/10 pointer-events-none absolute inset-0 rounded-lg border border-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer section */}
      <div className="mt-8 text-center">
        <p className="text-muted-foreground mb-2">{t('footer.customPlan')}</p>
        <p className="text-muted-foreground text-sm">{t('footer.trial')}</p>
      </div>
    </section>
  );
};

export default PricingSection;