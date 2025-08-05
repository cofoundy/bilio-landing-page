// Location-specific data for market expansion
export interface LocationData {
  code: string;
  name: string;
  country: string;
  language: string;
  currency: string;
  phone: string;
  ogLocale: string;
  hreflang: string;
  domain: string;
  timezone: string;
  marketSpecific: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    pricing: {
      free: string;
      premium: string;
      currency: string;
      symbol: string;
    };
    testimonials?: Array<{
      name: string;
      location: string;
      quote: string;
      role: string;
    }>;
    localFeatures?: string[];
  };
}

export const LOCATIONS: Record<string, LocationData> = {
  peru: {
    code: 'pe',
    name: 'Perú',
    country: 'Peru',
    language: 'Spanish',
    currency: 'PEN',
    phone: '+51-963394426',
    ogLocale: 'es_PE',
    hreflang: 'es-PE',
    domain: 'https://bilio.lat',
    timezone: 'America/Lima',
    marketSpecific: {
      hero: {
        title: 'Tu asistente financiero inteligente en WhatsApp',
        subtitle: 'Registra tus gastos en segundos, recibe reportes automáticos y mejora tus finanzas desde tu celular',
        cta: 'Comenzar gratis en WhatsApp'
      },
      pricing: {
        free: 'Gratis',
        premium: 'Premium',
        currency: 'PEN',
        symbol: 'S/'
      },
      testimonials: [
        {
          name: 'María González',
          location: 'Lima, Perú',
          quote: 'Bilio me ayudó a identificar en qué gastaba de más. Ahora ahorro S/300 al mes.',
          role: 'Estudiante universitaria'
        },
        {
          name: 'Carlos Mendoza',
          location: 'Arequipa, Perú',
          quote: 'Perfecto para freelancers como yo. Registro mis gastos mientras trabajo.',
          role: 'Freelancer'
        }
      ],
      localFeatures: [
        'Soporte en soles peruanos (PEN)',
        'Categorías adaptadas al mercado peruano',
        'Reportes en español'
      ]
    }
  },
  colombia: {
    code: 'co',
    name: 'Colombia',
    country: 'Colombia',
    language: 'Spanish',
    currency: 'COP',
    phone: '+57-1-000-0000',
    ogLocale: 'es_CO',
    hreflang: 'es-CO',
    domain: 'https://bilio.lat/colombia',
    timezone: 'America/Bogota',
    marketSpecific: {
      hero: {
        title: 'Tu asistente financiero inteligente en WhatsApp',
        subtitle: 'Controla tus gastos en pesos colombianos con inteligencia artificial',
        cta: 'Comenzar gratis en WhatsApp'
      },
      pricing: {
        free: 'Gratis',
        premium: 'Premium',
        currency: 'COP',
        symbol: '$'
      },
      localFeatures: [
        'Soporte en pesos colombianos (COP)',
        'Categorías adaptadas al mercado colombiano',
        'Reportes en español'
      ]
    }
  },
  mexico: {
    code: 'mx',
    name: 'México',
    country: 'Mexico',
    language: 'Spanish',
    currency: 'MXN',
    phone: '+52-55-0000-0000',
    ogLocale: 'es_MX',
    hreflang: 'es-MX',
    domain: 'https://bilio.lat/mexico',
    timezone: 'America/Mexico_City',
    marketSpecific: {
      hero: {
        title: 'Tu asistente financiero inteligente en WhatsApp',
        subtitle: 'Controla tus gastos en pesos mexicanos con inteligencia artificial',
        cta: 'Comenzar gratis en WhatsApp'
      },
      pricing: {
        free: 'Gratis',
        premium: 'Premium',
        currency: 'MXN',
        symbol: '$'
      },
      localFeatures: [
        'Soporte en pesos mexicanos (MXN)',
        'Categorías adaptadas al mercado mexicano',
        'Reportes en español'
      ]
    }
  },
  us: {
    code: 'us',
    name: 'United States',
    country: 'United States',
    language: 'English',
    currency: 'USD',
    phone: '+1-415-000-0000',
    ogLocale: 'en_US',
    hreflang: 'en-US',  
    domain: 'https://bilio.app',
    timezone: 'America/Los_Angeles',
    marketSpecific: {
      hero: {
        title: 'Your AI Financial Coach in WhatsApp',
        subtitle: 'Track expenses effortlessly, get automated insights, and improve your finances through natural conversation',
        cta: 'Start Free on WhatsApp'
      },
      pricing: {
        free: 'Free',
        premium: 'Premium',
        currency: 'USD',
        symbol: '$'
      },
      testimonials: [
        {
          name: 'Sarah Johnson',
          location: 'San Francisco, CA',
          quote: 'Finally, expense tracking that doesn\'t feel like work. I save $400 every month now.',
          role: 'Software Engineer'
        },
        {
          name: 'Mike Chen',
          location: 'New York, NY',
          quote: 'Perfect for busy professionals. I track expenses while commuting.',
          role: 'Marketing Director'
        }
      ],
      localFeatures: [
        'USD currency support',
        'Categories adapted for US market',
        'Reports in English',
        'Integration with US banking standards'
      ]
    }
  }
};

export const DEFAULT_LOCATION = 'peru';

export const getLocationData = (locationCode?: string): LocationData => {
  return LOCATIONS[locationCode || DEFAULT_LOCATION] || LOCATIONS[DEFAULT_LOCATION];
};

export const getAllLocationCodes = (): string[] => {
  return Object.keys(LOCATIONS);
};