// Comparison data for SEO-optimized competitor comparison pages
export interface ComparisonData {
  slug: string;
  title: string;
  description: string;
  competitor: {
    name: string;
    logo?: string;
    description: string;
    pros: string[];
    cons: string[];
    price: string;
    targetAudience: string;
    platforms: string[];
  };
  bilio: {
    name: string;
    description: string;
    pros: string[];
    cons: string[];
    price: string;
    targetAudience: string;
    platforms: string[];
  };
  comparisonTable: Array<{
    feature: string;
    bilio: string | boolean;
    competitor: string | boolean;
    bilioAdvantage?: boolean;
  }>;
  verdict: {
    winner: 'bilio' | 'competitor' | 'tie';
    summary: string;
    recommendation: string;
  };
  seoKeywords: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export const COMPARISONS: Record<string, ComparisonData> = {
  'bilio-vs-mint': {
    slug: 'bilio-vs-mint',
    title: 'Bilio vs Mint: ¿Cuál es mejor para controlar gastos en 2025?',
    description: 'Comparación completa entre Bilio y Mint. Descubre cuál es la mejor app para controlar tus gastos personales y mejorar tus finanzas.',
    competitor: {
      name: 'Mint',
      description: 'Aplicación tradicional de finanzas personales con conexión bancaria',
      pros: [
        'Conexión directa con bancos',
        'Interfaz completa y detallada',
        'Gratis para uso básico',
        'Reportes históricos extensos'
      ],
      cons: [
        'Interfaz compleja y abrumadora',
        'Requiere configuración inicial extensa',
        'Solo disponible en inglés',
        'No funciona bien fuera de EE.UU.',
        'Muchos anuncios'
      ],
      price: 'Gratis (con anuncios)',
      targetAudience: 'Usuarios de EE.UU. con múltiples cuentas bancarias',
      platforms: ['Web', 'iOS', 'Android']
    },
    bilio: {
      name: 'Bilio',
      description: 'Asistente financiero conversacional en WhatsApp con IA',
      pros: [
        'Interfaz conversacional natural',
        'Disponible en español',
        'Configuración instantánea',
        'Funciona globalmente',
        'IA inteligente para categorización',
        'Acceso desde WhatsApp'
      ],
      cons: [
        'Sin conexión bancaria directa',
        'Registro manual de transacciones',
        'Funciones premium requieren suscripción'
      ],
      price: 'Gratis / S/16.99 premium',
      targetAudience: 'Usuarios de Latinoamérica que buscan simplicidad',
      platforms: ['WhatsApp', 'Web']
    },
    comparisonTable: [
      {
        feature: 'Facilidad de uso',
        bilio: 'Muy fácil - conversación natural',
        competitor: 'Complejo - muchos menús',
        bilioAdvantage: true
      },
      {
        feature: 'Idioma español',
        bilio: true,
        competitor: false,
        bilioAdvantage: true
      },
      {
        feature: 'Disponibilidad global',
        bilio: true,
        competitor: false,
        bilioAdvantage: true
      },
      {
        feature: 'Conexión bancaria',
        bilio: false,
        competitor: true
      },
      {
        feature: 'Inteligencia artificial',
        bilio: 'Avanzada',
        competitor: 'Básica'
      },
      {
        feature: 'Tiempo de configuración',
        bilio: '30 segundos',
        competitor: '15-30 minutos'
      },
      {
        feature: 'Coaching financiero',
        bilio: 'Personalizado con IA',
        competitor: 'Tips genéricos'
      }
    ],
    verdict: {
      winner: 'bilio',
      summary: 'Bilio gana por simplicidad, disponibilidad global y experiencia conversacional superior.',
      recommendation: 'Elige Bilio si buscas simplicidad y vives fuera de EE.UU. Elige Mint si necesitas conexión bancaria directa y vives en EE.UU.'
    },
    seoKeywords: [
      'bilio vs mint',
      'mint alternativa español',
      'mejor app control gastos',
      'mint vs bilio comparación',
      'app finanzas español',
      'mint alternativa latinoamerica'
    ],
    faq: [
      {
        question: '¿Es Bilio mejor que Mint?',
        answer: 'Depende de tus necesidades. Bilio es mejor si buscas simplicidad, vives fuera de EE.UU. y prefieres español. Mint es mejor si necesitas conexión bancaria directa y vives en EE.UU.'
      },
      {
        question: '¿Puedo usar Mint en Latinoamérica?',
        answer: 'Mint está diseñado principalmente para EE.UU. y no se conecta con bancos latinoamericanos. Bilio funciona globalmente.'
      },
      {
        question: '¿Cuál es más fácil de usar?',
        answer: 'Bilio es significativamente más fácil - solo necesitas enviar mensajes de WhatsApp. Mint requiere configuración compleja y navegación por múltiples menús.'
      }
    ]
  },
  'bilio-vs-cleo': {
    slug: 'bilio-vs-cleo',
    title: 'Bilio vs Cleo: Comparación de asistentes financieros con IA 2025',
    description: 'Análisis detallado entre Bilio y Cleo. Descubre cuál asistente financiero con IA se adapta mejor a tus necesidades financieras.',
    competitor: {
      name: 'Cleo',
      description: 'Asistente financiero con IA y personalidad divertida',
      pros: [
        'Personalidad divertida y casual',
        'IA conversacional',
        'Conexión bancaria en mercados seleccionados',
        'Funciones de ahorro automático'
      ],
      cons: [
        'Solo disponible en inglés',
        'Limitado geográficamente',
        'Personalidad puede ser polarizante',
        'Funciones principales requieren suscripción',
        'No disponible en Latinoamérica'
      ],
      price: '$5.99/mes premium',
      targetAudience: 'Millennials de EE.UU. y Reino Unido',
      platforms: ['iOS', 'Android', 'Facebook Messenger']
    },
    bilio: {
      name: 'Bilio',
      description: 'Asistente financiero profesional en WhatsApp',
      pros: [
        'Disponible en español',
        'Funciona globalmente',
        'Profesional pero amigable',
        'Integración nativa con WhatsApp',
        'Coaching financiero personalizado'
      ],
      cons: [
        'Sin conexión bancaria directa',
        'Personalidad menos "divertida"',
        'Registro manual requerido'
      ],
      price: 'Gratis / S/16.99 premium',
      targetAudience: 'Usuarios serios sobre finanzas en Latinoamérica',
      platforms: ['WhatsApp', 'Web']
    },
    comparisonTable: [
      {
        feature: 'Disponibilidad geográfica',
        bilio: 'Global',
        competitor: 'EE.UU., Reino Unido',
        bilioAdvantage: true
      },
      {
        feature: 'Idioma español',
        bilio: true,
        competitor: false,
        bilioAdvantage: true
      },
      {
        feature: 'Personalidad del bot',
        bilio: 'Profesional y amigable',
        competitor: 'Divertida y casual'
      },
      {
        feature: 'Plataforma principal',
        bilio: 'WhatsApp',
        competitor: 'App nativa'
      },
      {
        feature: 'Coaching financiero',
        bilio: 'Profesional y detallado',
        competitor: 'Casual y motivacional'
      },
      {
        feature: 'Precio mensual',
        bilio: '$4.99',
        competitor: '$5.99'
      }
    ],
    verdict: {
      winner: 'bilio',
      summary: 'Bilio gana por disponibilidad global, soporte en español y enfoque más profesional.',
      recommendation: 'Elige Bilio si vives en Latinoamérica o buscas un enfoque más profesional. Elige Cleo si vives en EE.UU./Reino Unido y prefieres personalidad casual.'
    },
    seoKeywords: [
      'bilio vs cleo',
      'cleo alternativa español',
      'asistente financiero ia español',
      'cleo vs bilio comparación',
      'mejor chatbot finanzas'
    ],
    faq: [
      {
        question: '¿Cuál tiene mejor IA, Bilio o Cleo?',
        answer: 'Ambos usan IA avanzada, pero Bilio se enfoca en coaching profesional mientras Cleo prioriza la personalidad divertida.'
      },
      {
        question: '¿Puedo usar Cleo en español?',
        answer: 'No, Cleo solo está disponible en inglés. Bilio está completamente en español.'
      },
      {
        question: '¿Cuál es mejor para principiantes?',
        answer: 'Bilio es mejor para principiantes por su enfoque educativo y disponibilidad en español.'
      }
    ]
  },
  'bilio-vs-ynab': {
    slug: 'bilio-vs-ynab',
    title: 'Bilio vs YNAB: ¿Cuál es mejor para presupuestar en 2025?',
    description: 'Comparación exhaustiva entre Bilio y YNAB (You Need A Budget). Encuentra la mejor herramienta para tu presupuesto personal.',
    competitor: {
      name: 'YNAB',
      description: 'Software de presupuesto basado en metodología de asignación',
      pros: [
        'Metodología de presupuesto probada',
        'Excelente para presupuestos detallados',
        'Comunidad activa',
        'Educación financiera incluida'
      ],
      cons: [
        'Curva de aprendizaje empinada',
        'Caro ($14/mes)',
        'Solo en inglés',
        'Requiere disciplina constante',
        'Interfaz compleja'
      ],
      price: '$109/año',
      targetAudience: 'Usuarios disciplinados que buscan control total',
      platforms: ['Web', 'iOS', 'Android']
    },
    bilio: {
      name: 'Bilio',
      description: 'Asistente financiero conversacional con enfoque simple',
      pros: [
        'Extremadamente fácil de usar',
        'Sin curva de aprendizaje',
        'Coaching personalizado',
        'Precio accesible',
        'Disponible en español'
      ],
      cons: [
        'Menos control granular',
        'Metodología menos estructurada',
        'Sin sincronización bancaria'
      ],
      price: 'S/204/año premium',
      targetAudience: 'Usuarios que buscan simplicidad y resultados',
      platforms: ['WhatsApp', 'Web']
    },
    comparisonTable: [
      {
        feature: 'Facilidad de uso',
        bilio: 'Muy fácil',
        competitor: 'Difícil',
        bilioAdvantage: true
      },
      {
        feature: 'Curva de aprendizaje',
        bilio: 'Instantánea',
        competitor: '2-3 meses',
        bilioAdvantage: true
      },
      {
        feature: 'Control del presupuesto',
        bilio: 'Moderado',
        competitor: 'Total'
      },
      {
        feature: 'Precio anual',
        bilio: '$60',
        competitor: '$109',
        bilioAdvantage: true
      },
      {
        feature: 'Idioma español',
        bilio: true,
        competitor: false,
        bilioAdvantage: true
      },
      {
        feature: 'Metodología',
        bilio: 'IA adaptativa',
        competitor: 'Asignación fija'
      }
    ],
    verdict: {
      winner: 'bilio',
      summary: 'Bilio gana por simplicidad y accesibilidad, YNAB por control detallado.',
      recommendation: 'Elige Bilio si quieres resultados sin complejidad. Elige YNAB si disfrutas el control granular y tienes tiempo para aprender.'
    },
    seoKeywords: [
      'bilio vs ynab',
      'ynab alternativa español',
      'presupuesto simple vs complejo',
      'ynab vs bilio comparación',
      'mejor app presupuesto'
    ],
    faq: [
      {
        question: '¿Es Bilio tan efectivo como YNAB?',
        answer: 'Ambos son efectivos de diferentes maneras. YNAB ofrece control total pero requiere disciplina. Bilio ofrece resultados con mínimo esfuerzo.'
      },
      {
        question: '¿Cuál es más barato?',
        answer: 'Bilio es significativamente más barato: $60/año vs $109/año de YNAB.'
      },
      {
        question: '¿Puedo migrar de YNAB a Bilio?',
        answer: 'Sí, aunque son enfoques diferentes. Bilio te ayudará a mantener control financiero con mucho menos esfuerzo.'
      }
    ]
  }
};

export const getComparisonData = (slug: string): ComparisonData | undefined => {
  return COMPARISONS[slug];
};

export const getAllComparisonSlugs = (): string[] => {
  return Object.keys(COMPARISONS);
};