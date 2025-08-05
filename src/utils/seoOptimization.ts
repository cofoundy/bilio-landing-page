// SEO optimization utilities for better CTR and social sharing
import { LocationData } from "@/data/locations";

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  canonical: string;
}

// Optimized meta descriptions for better CTR
export const generateSEOMetadata = (
  pageType: 'home' | 'blog' | 'comparison' | 'use-case' | 'location',
  locationData: LocationData,
  customData?: {
    title?: string;
    description?: string;
    keywords?: string[];
    slug?: string;
  }
): SEOMetadata => {
  const isUS = locationData.code === 'us';
  const baseUrl = locationData.domain;
  
  // Base keywords for all pages
  const baseKeywords = isUS 
    ? ['expense tracking app', 'AI financial coach', 'WhatsApp finance', 'personal budgeting', 'smart money management']
    : ['control de gastos', 'asistente financiero IA', 'finanzas WhatsApp', 'presupuesto personal', 'gestión dinero inteligente'];

  const locationKeywords = [
    locationData.name.toLowerCase(),
    locationData.currency,
    `${locationData.country.toLowerCase()} finance`,
    `${locationData.name.toLowerCase()} budgeting`
  ];

  let metadata: SEOMetadata;

  switch (pageType) {
    case 'home':
    case 'location':
      metadata = {
        title: isUS 
          ? `Bilio | AI Financial Coach in WhatsApp - ${locationData.name} 🚀`
          : `Bilio | Tu Asistente Financiero IA en WhatsApp - ${locationData.name} 🚀`,
        description: isUS
          ? `🤖 Track expenses effortlessly with AI in WhatsApp. Get personalized financial coaching, automated budgeting & insights. Free for ${locationData.name} users!`
          : `🤖 Controla tus gastos sin esfuerzo con IA en WhatsApp. Coaching financiero personalizado, presupuestos automáticos e insights. ¡Gratis para usuarios en ${locationData.name}!`,
        ogTitle: isUS
          ? `Bilio - Smart Financial Assistant for ${locationData.name}`
          : `Bilio - Asistente Financiero Inteligente para ${locationData.name}`,
        ogDescription: isUS
          ? `The easiest way to manage your money through WhatsApp. AI-powered expense tracking, budgeting, and financial coaching. Join thousands of users in ${locationData.name}!`
          : `La forma más fácil de manejar tu dinero desde WhatsApp. Control de gastos con IA, presupuestos y coaching financiero. ¡Únete a miles de usuarios en ${locationData.name}!`,
        keywords: [...baseKeywords, ...locationKeywords],
        ogImage: `${baseUrl}/og-images/bilio-${locationData.code}-home.png`,
        canonical: baseUrl,
        twitterTitle: isUS ? `💰 Smart Money Management in WhatsApp` : `💰 Gestión Inteligente de Dinero en WhatsApp`,
        twitterDescription: isUS 
          ? `Join thousands using AI to improve their finances through simple WhatsApp conversations. Start free today!`
          : `Únete a miles usando IA para mejorar sus finanzas a través de conversaciones simples en WhatsApp. ¡Empieza gratis!`
      };
      break;

    case 'blog':
      metadata = {
        title: customData?.title || (isUS ? 'Financial Tips & AI Insights | Bilio Blog' : 'Consejos Financieros e Insights de IA | Blog Bilio'),
        description: customData?.description || (isUS 
          ? '💡 Expert financial advice, AI-powered insights, and smart money tips. Learn how to improve your finances with technology and proven strategies.'
          : '💡 Consejos financieros expertos, insights con IA y tips inteligentes de dinero. Aprende a mejorar tus finanzas con tecnología y estrategias probadas.'),
        ogTitle: isUS ? 'Financial Wisdom & AI Insights' : 'Sabiduría Financiera e Insights de IA',
        ogDescription: isUS
          ? 'Discover expert financial tips, AI-powered insights, and practical money management strategies that actually work.'
          : 'Descubre consejos financieros expertos, insights con IA y estrategias prácticas de gestión de dinero que realmente funcionan.',
        keywords: [...baseKeywords, 'financial blog', 'money tips', 'AI finance insights'],
        ogImage: `${baseUrl}/og-images/bilio-blog.png`,
        canonical: `${baseUrl}/blog`,
        twitterTitle: isUS ? '📚 Smart Money Tips & AI Insights' : '📚 Tips Inteligentes de Dinero e Insights IA',
        twitterDescription: isUS 
          ? 'Expert financial advice powered by AI. Learn, save, and grow your wealth smarter.'
          : 'Consejos financieros expertos potenciados por IA. Aprende, ahorra y haz crecer tu patrimonio de forma inteligente.'
      };
      break;

    case 'comparison':
      const competitorName = customData?.slug?.split('-vs-')[1]?.replace('-', ' ') || 'competitors';
      metadata = {
        title: customData?.title || `Bilio vs ${competitorName} 2025: Which is Better? 🥊`,
        description: customData?.description || `🔍 Honest comparison between Bilio and ${competitorName}. Features, pricing, pros & cons. Find the best expense tracking solution for you!`,
        ogTitle: `Bilio vs ${competitorName} - Detailed Comparison`,
        ogDescription: `Compare features, pricing, and user experience. See why users choose Bilio over ${competitorName} for expense tracking.`,
        keywords: [...baseKeywords, competitorName, 'comparison', 'vs', 'alternative'],
        ogImage: `${baseUrl}/og-images/bilio-vs-${customData?.slug?.split('-vs-')[1]}.png`,
        canonical: `${baseUrl}/${customData?.slug}`,
        twitterTitle: `⚡ Bilio vs ${competitorName} - The Ultimate Comparison`,
        twitterDescription: `See the honest comparison between Bilio and ${competitorName}. Which expense tracker wins in 2025?`
      };
      break;

    case 'use-case':
      const useCaseName = customData?.slug?.replace('-', ' ') || 'financial management';
      metadata = {
        title: customData?.title || `${useCaseName} with AI | Bilio 🎯`,
        description: customData?.description || `🚀 Master ${useCaseName} with AI-powered WhatsApp assistant. Simple, effective, and personalized for your lifestyle. Get started free!`,
        ogTitle: `Smart ${useCaseName} with Bilio`,
        ogDescription: `Discover how Bilio makes ${useCaseName} effortless through AI-powered conversations in WhatsApp.`,
        keywords: [...baseKeywords, useCaseName, 'AI powered', 'automation'],
        ogImage: `${baseUrl}/og-images/bilio-${customData?.slug}.png`,
        canonical: `${baseUrl}/${customData?.slug}`,
        twitterTitle: `🎯 ${useCaseName} Made Simple with AI`,
        twitterDescription: `See how AI makes ${useCaseName} effortless. Real users, real results, zero complexity.`
      };
      break;

    default:
      metadata = {
        title: 'Bilio | AI Financial Assistant',
        description: 'Smart financial management through WhatsApp with AI',
        ogTitle: 'Bilio - AI Financial Assistant',
        ogDescription: 'Manage your finances smarter with AI-powered WhatsApp assistant',
        keywords: baseKeywords,
        ogImage: `${baseUrl}/logoBilio.png`,
        canonical: baseUrl,
        twitterTitle: 'Bilio - AI Financial Assistant',
        twitterDescription: 'Smart financial management through WhatsApp'
      };
  }

  return metadata;
};

// CTR-optimized title patterns
export const CTR_OPTIMIZED_PATTERNS = {
  power_words: ['Ultimate', 'Complete', 'Essential', 'Proven', 'Secret', 'Instant', 'Smart', 'Simple'],
  numbers: ['5', '10', '7', '3', '2025', '2024'],
  emotional_triggers: ['🚀', '💰', '🎯', '⚡', '🔥', '💡', '🥊', '📚'],
  urgency: ['Today', 'Now', 'Instantly', 'Quick', 'Fast', 'Immediate'],
  benefits: ['Free', 'Easy', 'Simple', 'Automatic', 'Effortless', 'Smart']
};

// Generate multiple title variations for A/B testing
export const generateTitleVariations = (baseTopic: string, isUS: boolean = false): string[] => {
  const patterns = CTR_OPTIMIZED_PATTERNS;
  const language = isUS ? 'en' : 'es';
  
  if (language === 'es') {
    return [
      `${baseTopic} con IA 🚀 | Guía Completa 2025`,
      `Cómo Dominar ${baseTopic} en 5 Pasos Simples 💡`,
      `${baseTopic}: La Guía Definitiva que Necesitas 🎯`,
      `Secretos de ${baseTopic} que Nadie te Cuenta ⚡`,
      `${baseTopic} Automático: Ahorra Tiempo y Dinero 💰`
    ];
  } else {
    return [
      `${baseTopic} with AI 🚀 | Complete 2025 Guide`,
      `How to Master ${baseTopic} in 5 Simple Steps 💡`,
      `${baseTopic}: The Ultimate Guide You Need 🎯`,
      `${baseTopic} Secrets No One Tells You ⚡`,
      `Automatic ${baseTopic}: Save Time & Money 💰`
    ];
  }
};

// Meta description optimization
export const optimizeMetaDescription = (description: string, targetLength: number = 155): string => {
  if (description.length <= targetLength) return description;
  
  // Find the last complete sentence that fits
  const sentences = description.split('. ');
  let optimized = '';
  
  for (const sentence of sentences) {
    if ((optimized + sentence + '. ').length <= targetLength) {
      optimized += sentence + '. ';
    } else {
      break;
    }
  }
  
  // If no complete sentence fits, truncate at word boundary
  if (optimized.length === 0) {
    const words = description.split(' ');
    optimized = words.slice(0, -1).join(' ');
    while (optimized.length > targetLength - 3) {
      words.pop();
      optimized = words.join(' ');
    }
    optimized += '...';
  }
  
  return optimized.trim();
};

// Generate Open Graph image URLs based on content
export const generateOGImageUrl = (
  baseUrl: string,
  pageType: string,
  locationCode: string,
  customSlug?: string
): string => {
  // In a real implementation, these would be dynamically generated images
  // For now, we'll use a pattern that could be implemented with a service like Bannerbear or Canva API
  
  const imageMap: Record<string, string> = {
    'home': `${baseUrl}/og-images/bilio-${locationCode}-home.png`,
    'blog': `${baseUrl}/og-images/bilio-blog.png`,
    'expense-tracking': `${baseUrl}/og-images/bilio-expense-tracking.png`,
    'financial-coaching': `${baseUrl}/og-images/bilio-financial-coaching.png`,
    'whatsapp-finance': `${baseUrl}/og-images/bilio-whatsapp-finance.png`,
    'bilio-vs-mint': `${baseUrl}/og-images/bilio-vs-mint.png`,
    'bilio-vs-cleo': `${baseUrl}/og-images/bilio-vs-cleo.png`,
    'bilio-vs-ynab': `${baseUrl}/og-images/bilio-vs-ynab.png`
  };
  
  return imageMap[customSlug || pageType] || `${baseUrl}/logoBilio.png`;
};