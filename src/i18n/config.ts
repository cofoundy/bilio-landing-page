import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// We'll load resources dynamically to avoid build issues
const resources = {
  en: {
    common: {},
    hero: {},
    navigation: {},
    about: {},
    benefits: {},
    pricing: {},
    faq: {},
    cta: {},
    footer: {},
    seo: {},
  },
  es: {
    common: {},
    hero: {},
    navigation: {},
    about: {},
    benefits: {},
    pricing: {},
    faq: {},
    cta: {},
    footer: {},
    seo: {},
  },
};

// Load translation resources dynamically
const loadTranslations = async () => {
  try {
    const [
      commonES, commonEN,
      heroES, heroEN,
      navES, navEN,
      aboutES, aboutEN,
      benefitsES, benefitsEN,
      pricingES, pricingEN,
      faqES, faqEN,
      ctaES, ctaEN,
      footerES, footerEN,
      seoES, seoEN
    ] = await Promise.all([
      import('./locales/es/common.json'),
      import('./locales/en/common.json'),
      import('./locales/es/hero.json'),
      import('./locales/en/hero.json'),
      import('./locales/es/navigation.json'),
      import('./locales/en/navigation.json'),
      import('./locales/es/about.json'),
      import('./locales/en/about.json'),
      import('./locales/es/benefits.json'),
      import('./locales/en/benefits.json'),
      import('./locales/es/pricing.json'),
      import('./locales/en/pricing.json'),
      import('./locales/es/faq.json'),
      import('./locales/en/faq.json'),
      import('./locales/es/cta.json'),
      import('./locales/en/cta.json'),
      import('./locales/es/footer.json'),
      import('./locales/en/footer.json'),
      import('./locales/es/seo.json'),
      import('./locales/en/seo.json')
    ]);

    resources.es = {
      common: commonES.default,
      hero: heroES.default,
      navigation: navES.default,
      about: aboutES.default,
      benefits: benefitsES.default,
      pricing: pricingES.default,
      faq: faqES.default,
      cta: ctaES.default,
      footer: footerES.default,
      seo: seoES.default,
    };

    resources.en = {
      common: commonEN.default,
      hero: heroEN.default,
      navigation: navEN.default,
      about: aboutEN.default,
      benefits: benefitsEN.default,
      pricing: pricingEN.default,
      faq: faqEN.default,
      cta: ctaEN.default,
      footer: footerEN.default,
      seo: seoEN.default,
    };
  } catch (error) {
    console.warn('Failed to load translations:', error);
  }
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
    ns: ['common', 'hero', 'navigation', 'about', 'benefits', 'pricing', 'faq', 'cta', 'footer', 'seo'],

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

// Load translations after initialization
loadTranslations().then(() => {
  i18n.reloadResources();
});

export default i18n;