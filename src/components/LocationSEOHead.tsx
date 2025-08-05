import { useEffect } from 'react';
import { LocationData, LOCATIONS, getAllLocationCodes } from '@/data/locations';

interface LocationSEOHeadProps {
  locationData: LocationData;
  pageType?: 'home' | 'blog' | 'comparison' | 'use-case';
  customTitle?: string;
  customDescription?: string;
}

const LocationSEOHead = ({ 
  locationData,
  pageType = 'home',
  customTitle,
  customDescription
}: LocationSEOHeadProps) => {
  
  useEffect(() => {
    // Generate location-specific content
    const isUS = locationData.code === 'us';
    const baseTitle = customTitle || (isUS 
      ? `Bilio | AI Financial Coach in WhatsApp - ${locationData.name}`
      : `Bilio | Tu asistente financiero en WhatsApp - ${locationData.name}`);
    
    const baseDescription = customDescription || (isUS
      ? `Track expenses effortlessly with Bilio's AI financial coach in WhatsApp. Get automated insights, budgeting help, and improve your finances in ${locationData.name}.`
      : `Controla tus gastos con Bilio, tu asistente financiero en WhatsApp. Registra gastos automáticamente y mejora tus finanzas en ${locationData.name}.`);

    const keywords = isUS 
      ? `expense tracking, financial coach, WhatsApp bot, budgeting, AI finance, personal finance, ${locationData.name}, ${locationData.currency}`
      : `finanzas personales, control de gastos, WhatsApp bot, presupuesto, ahorro, gestión financiera, ${locationData.name}, ${locationData.currency}`;

    // Update document title
    document.title = baseTitle;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', baseDescription);
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Update html lang attribute
    document.documentElement.lang = locationData.language === 'English' ? 'en' : 'es';
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', locationData.domain);
    
    // Add hreflang tags for all locations
    // Remove existing hreflang tags first
    const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflang.forEach(link => link.remove());
    
    // Add hreflang for all locations
    getAllLocationCodes().forEach(locCode => {
      const locData = LOCATIONS[locCode];
      const hreflangLink = document.createElement('link');
      hreflangLink.setAttribute('rel', 'alternate');
      hreflangLink.setAttribute('hreflang', locData.hreflang);
      hreflangLink.setAttribute('href', locData.domain);
      document.head.appendChild(hreflangLink);
    });

    // Add x-default hreflang
    const defaultHreflang = document.createElement('link');
    defaultHreflang.setAttribute('rel', 'alternate');
    defaultHreflang.setAttribute('hreflang', 'x-default');
    defaultHreflang.setAttribute('href', 'https://bilio.lat/');
    document.head.appendChild(defaultHreflang);
    
    // Update Open Graph tags
    const updateOgTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOgTag('og:title', baseTitle);
    updateOgTag('og:description', baseDescription);
    updateOgTag('og:url', locationData.domain);
    updateOgTag('og:locale', locationData.ogLocale);
    updateOgTag('og:image', `${locationData.domain}/logoBilio.png`);
    updateOgTag('og:site_name', 'Bilio');
    updateOgTag('og:type', 'website');

    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', baseTitle);
    updateTwitterTag('twitter:description', baseDescription);
    updateTwitterTag('twitter:image', `${locationData.domain}/logoBilio.png`);
    updateTwitterTag('twitter:site', '@Bilio_app');
    updateTwitterTag('twitter:creator', '@Bilio_app');

    // Add location-specific structured data
    const existingLocationSchema = document.querySelector('#location-schema');
    if (existingLocationSchema) {
      existingLocationSchema.remove();
    }

    const locationSchema = {
      "@context": "https://schema.org",
      "@type": ["Organization", "SoftwareApplication"],
      "name": "Bilio",
      "url": locationData.domain,
      "logo": `${locationData.domain}/logoBilio.png`,
      "description": isUS 
        ? `AI-powered personal finance assistant for WhatsApp users in ${locationData.name}`
        : `Asistente financiero inteligente en WhatsApp para usuarios en ${locationData.name}`,
      "foundingDate": "2024",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "WhatsApp",
      "softwareVersion": "1.0",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "50"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": locationData.currency,
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2025-12-31"
      },
      "areaServed": {
        "@type": "Country",
        "name": locationData.country
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": locationData.phone,
        "contactType": "customer service",
        "availableLanguage": locationData.language,
        "areaServed": locationData.country
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": locationData.code.toUpperCase()
      },
      "sameAs": [
        "https://twitter.com/Bilio_app"
      ]
    };

    const schemaTag = document.createElement('script');
    schemaTag.id = 'location-schema';
    schemaTag.type = 'application/ld+json';
    schemaTag.textContent = JSON.stringify(locationSchema);
    document.head.appendChild(schemaTag);

    // Add MobileApplication schema
    const existingMobileSchema = document.querySelector('#mobile-app-schema');
    if (existingMobileSchema) {
      existingMobileSchema.remove();
    }

    const mobileAppSchema = {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      "name": "Bilio WhatsApp Bot",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "WhatsApp",
      "description": isUS 
        ? "AI financial coach that lives in your WhatsApp chat"
        : "Asistente financiero inteligente que vive en tu chat de WhatsApp",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": locationData.currency
      },
      "screenshot": `${locationData.domain}/logoBilio.png`,
      "softwareVersion": "1.0",
      "datePublished": "2024-12-01",
      "author": {
        "@type": "Organization",
        "name": "Bilio",
        "url": locationData.domain
      },
      "publisher": {
        "@type": "Organization", 
        "name": "Bilio",
        "logo": {
          "@type": "ImageObject",
          "url": `${locationData.domain}/logoBilio.png`
        }
      }
    };

    const mobileSchemaTag = document.createElement('script');
    mobileSchemaTag.id = 'mobile-app-schema';
    mobileSchemaTag.type = 'application/ld+json';
    mobileSchemaTag.textContent = JSON.stringify(mobileAppSchema);
    document.head.appendChild(mobileSchemaTag);

    // Add Service schema for financial coaching
    const existingServiceSchema = document.querySelector('#service-schema');
    if (existingServiceSchema) {
      existingServiceSchema.remove();
    }

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": isUS ? "AI Financial Coaching" : "Coaching Financiero con IA",
      "description": isUS 
        ? "Personalized financial coaching through AI-powered conversation in WhatsApp"
        : "Coaching financiero personalizado a través de conversación con IA en WhatsApp",
      "provider": {
        "@type": "Organization",
        "name": "Bilio",
        "url": locationData.domain
      },
      "areaServed": {
        "@type": "Country",
        "name": locationData.country
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": isUS ? "Financial Services" : "Servicios Financieros",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": isUS ? "Expense Tracking" : "Control de Gastos"
            },
            "price": "0",
            "priceCurrency": locationData.currency
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": isUS ? "Financial Coaching" : "Coaching Financiero"
            },
            "price": "4.99",
            "priceCurrency": locationData.currency
          }
        ]
      }
    };

    const serviceSchemaTag = document.createElement('script');
    serviceSchemaTag.id = 'service-schema';
    serviceSchemaTag.type = 'application/ld+json';
    serviceSchemaTag.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(serviceSchemaTag);
    
  }, [locationData, pageType, customTitle, customDescription]);

  return null; // This component doesn't render anything
};

export default LocationSEOHead;