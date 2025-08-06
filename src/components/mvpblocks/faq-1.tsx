import { PlusIcon, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { LocationData } from '@/data/locations';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.4,
    },
  }),
};

interface Faq1Props {
  locationData?: LocationData;
}

export default function Faq1({ locationData }: Faq1Props) {
  const { t } = useTranslation('faq');
  
  // Get FAQ questions from translations
  const faqQuestions = t('questions', { returnObjects: true }) as Array<{
    question: string;
    answer: string;
    category?: string;
  }>;

  // Generate enhanced FAQ structured data using translated content
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": t('title'),
    "description": t('subtitle'),
    "url": `${locationData?.domain || 'https://bilio.lat'}#faq`,
    "mainEntity": faqQuestions.map((item, index) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
        "dateCreated": "2024-12-20",
        "author": {
          "@type": "Organization",
          "name": "Bilio"
        }
      },
      "answerCount": 1,
      "upvoteCount": 0,
      "dateCreated": "2024-12-20"
    })),
    "about": {
      "@type": "SoftwareApplication",
      "name": "Bilio",
      "applicationCategory": "FinanceApplication"
    }
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData)
        }}
      />
      <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <motion.h2
            className="mb-4 text-4xl md:text-5xl font-bold tracking-tight text-Bilio-gray-900"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('title')}
          </motion.h2>
          <motion.p
            className="text-Bilio-gray-600 text-xl leading-relaxed font-medium max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <motion.div
          className="relative mx-auto max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Decorative gradient - using Bilio colors */}
          <div className="absolute -top-4 -left-4 -z-10 h-72 w-72 rounded-full bg-Bilio-yellow/10 blur-3xl" />
          <div className="absolute -right-4 -bottom-4 -z-10 h-72 w-72 rounded-full bg-Bilio-blue/10 blur-3xl" />

          <Accordion
            type="single"
            collapsible
            className="w-full rounded-xl border border-Bilio-gray-200/40 bg-white/80 p-2 backdrop-blur-sm shadow-lg"
            defaultValue="0"
          >
            {faqQuestions.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
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
                      'overflow-hidden pt-0 pb-6 text-Bilio-gray-600 leading-relaxed',
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

          {/* Contact Support Section */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="rounded-2xl bg-gradient-to-r from-Bilio-yellow/10 to-Bilio-blue/10 p-8 border border-Bilio-gray-200/40">
              <p className="text-lg font-medium text-Bilio-gray-900 mb-2">
                {t('contact.notFound')}
              </p>
              <p className="text-Bilio-gray-600 mb-6">
                {t('contact.supportMessage')}
              </p>
              <Button
                onClick={() => window.open('https://wa.me/51987654321', '_blank')}
                className="bg-Bilio-blue hover:bg-Bilio-blue/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageSquare size={18} className="mr-2" />
                {t('contact.contactButton')}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
