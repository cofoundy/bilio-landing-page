import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all translations directly
import commonES from './locales/es/common.json';
import commonEN from './locales/en/common.json';
import heroES from './locales/es/hero.json';
import heroEN from './locales/en/hero.json';
import navES from './locales/es/navigation.json';
import navEN from './locales/en/navigation.json';
import aboutES from './locales/es/about.json';
import aboutEN from './locales/en/about.json';
import benefitsES from './locales/es/benefits.json';
import benefitsEN from './locales/en/benefits.json';
import pricingES from './locales/es/pricing.json';
import pricingEN from './locales/en/pricing.json';
import faqES from './locales/es/faq.json';
import faqEN from './locales/en/faq.json';
import ctaES from './locales/es/cta.json';
import ctaEN from './locales/en/cta.json';
import footerES from './locales/es/footer.json';
import footerEN from './locales/en/footer.json';
import seoES from './locales/es/seo.json';
import seoEN from './locales/en/seo.json';
import howItWorksES from './locales/es/howItWorks.json';
import howItWorksEN from './locales/en/howItWorks.json';
import testimonialsES from './locales/es/testimonials.json';
import testimonialsEN from './locales/en/testimonials.json';
import notFoundES from './locales/es/notFound.json';
import notFoundEN from './locales/en/notFound.json';
import useCasesES from './locales/es/useCases.json';
import useCasesEN from './locales/en/useCases.json';
import comparisonES from './locales/es/comparison.json';
import comparisonEN from './locales/en/comparison.json';
import blogES from './locales/es/blog.json';
import blogEN from './locales/en/blog.json';
import globalES from './locales/es/global.json';
import globalEN from './locales/en/global.json';
import socialProofES from './locales/es/socialProof.json';
import socialProofEN from './locales/en/socialProof.json';

// Initialize resources synchronously
const resources = {
  en: {
    common: commonEN,
    hero: heroEN,
    navigation: navEN,
    about: aboutEN,
    benefits: benefitsEN,
    pricing: pricingEN,
    faq: faqEN,
    cta: ctaEN,
    footer: footerEN,
    seo: seoEN,
    howItWorks: howItWorksEN,
    testimonials: testimonialsEN,
    notFound: notFoundEN,
    useCases: useCasesEN,
    comparison: comparisonEN,
    blog: blogEN,
    global: globalEN,
    socialProof: socialProofEN,
  },
  es: {
    common: commonES,
    hero: heroES,
    navigation: navES,
    about: aboutES,
    benefits: benefitsES,
    pricing: pricingES,
    faq: faqES,
    cta: ctaES,
    footer: footerES,
    seo: seoES,
    howItWorks: howItWorksES,
    testimonials: testimonialsES,
    notFound: notFoundES,
    useCases: useCasesES,
    comparison: comparisonES,
    blog: blogES,
    global: globalES,
    socialProof: socialProofES,
  },
};


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es', // Default to Spanish as original language
    debug: process.env.NODE_ENV === 'development',

    // Language detection configuration
    detection: {
      order: ['localStorage', 'htmlTag', 'navigator'],
      lookupLocalStorage: 'bilio-language',
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    // Namespace configuration
    defaultNS: 'common',
    ns: ['common', 'hero', 'navigation', 'about', 'benefits', 'pricing', 'faq', 'cta', 'footer', 'seo', 'howItWorks', 'testimonials', 'notFound', 'useCases', 'comparison', 'blog', 'global', 'socialProof'],

    // Missing key handling
    saveMissing: process.env.NODE_ENV === 'development',
    missingKeyHandler: (lng, ns, key) => {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Missing translation key: ${lng}:${ns}:${key}`);
      }
    },

    // Return key if translation is missing
    returnKeyIfNotFound: true,
    returnEmptyString: false,

    // React configuration
    react: {
      useSuspense: false, // Disable suspense to avoid loading issues
    },
  });

export default i18n;