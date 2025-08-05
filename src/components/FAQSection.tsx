import React, { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { LocationData } from "@/data/locations";
import { useTranslation } from "react-i18next";

interface FAQSectionProps {
  locationData?: LocationData;
}

const FAQSection = ({ locationData }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t, i18n } = useTranslation('faq');
  
  const isUS = locationData?.code === 'us';
  const isEnglish = i18n.language === 'en';

  // Get translated FAQ content
  const faqs = t('questions', { returnObjects: true }) as any[];

  // Generate enhanced FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": isUS ? "Frequently Asked Questions about Bilio" : "Preguntas Frecuentes sobre Bilio",
    "description": isUS 
      ? "Find answers to common questions about Bilio, the AI financial assistant for WhatsApp"
      : "Encuentra respuestas a las preguntas más comunes sobre Bilio, el asistente financiero con IA para WhatsApp",
    "url": `${locationData?.domain || 'https://bilio.lat'}#faq`,
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
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
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-Bilio-gray-900">
              <span className="text-Bilio-blue">{t('title')}</span>
            </h2>
            <p className="text-xl text-Bilio-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card-premium transition-all duration-300 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className="w-full p-6 text-left focus:outline-none group"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-Bilio-gray-900 group-hover:text-Bilio-blue transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <div className="ml-4 flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronUp className="h-5 w-5 text-Bilio-blue" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-Bilio-gray-600 group-hover:text-Bilio-blue transition-colors duration-300" />
                      )}
                    </div>
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="w-full h-px bg-Bilio-yellow/30 mb-4"></div>
                    <p className="text-Bilio-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}

                {/* Subtle glow on hover */}
                <div className="absolute -inset-1 bg-Bilio-yellow/8 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-Bilio-gray-600 mb-4">
              {t('contact.notFound')}
            </p>
            <p className="text-Bilio-gray-500 text-sm mb-6">
              {t('contact.supportMessage')}
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-Bilio-blue text-white rounded-lg hover:bg-Bilio-blue/90 transition-colors">
              <MessageCircle size={20} className="mr-2" />
              {t('contact.contactButton')}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
