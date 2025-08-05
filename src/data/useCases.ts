// Use case data for SEO-optimized landing pages
export interface UseCaseData {
  slug: string;
  title: string;
  description: string;
  hero: {
    headline: string;
    subheadline: string;
    pain_point: string;
    solution: string;
  };
  benefits: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  howItWorks: Array<{
    step: number;
    title: string;
    description: string;
    example: string;
  }>;
  testimonials: Array<{
    name: string;
    role: string;
    quote: string;
    result: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  seoKeywords: string[];
  relatedPages: string[];
}

export const USE_CASES: Record<string, UseCaseData> = {
  'expense-tracking': {
    slug: 'expense-tracking',
    title: 'Control de Gastos Inteligente con IA | Bilio',
    description: 'Controla tus gastos automáticamente con inteligencia artificial. Registra, categoriza y analiza tus gastos desde WhatsApp sin complicaciones.',
    hero: {
      headline: 'Control de Gastos que Realmente Funciona',
      subheadline: 'Registra y categoriza tus gastos automáticamente con IA, sin formularios ni apps complicadas',
      pain_point: '80% de las personas abandonan las apps de gastos por ser muy complicadas',
      solution: 'Con Bilio, solo envías un mensaje: "Gasté S/25 en almuerzo" y listo'
    },
    benefits: [
      {
        icon: '🤖',
        title: 'Categorización Automática',
        description: 'La IA entiende y categoriza tus gastos automáticamente, sin que tengas que elegir entre 20 categorías diferentes'
      },
      {
        icon: '⚡',
        title: 'Registro Instantáneo',
        description: 'Registra gastos en 5 segundos mientras caminas. No más "lo registro después" que nunca llega'
      },
      {
        icon: '📊',
        title: 'Análisis Inteligente',
        description: 'Descubre patrones en tus gastos que nunca notaste. "Gastas 40% más los viernes"'
      },
      {
        icon: '🎯',
        title: 'Alertas Personalizadas',
        description: 'Recibe avisos cuando gastes más de lo usual: "Has gastado S/200 en restaurantes esta semana"'
      },
      {
        icon: '📱',
        title: 'Sin Apps Nuevas',
        description: 'Todo funciona en WhatsApp, la app que ya usas todos los días'
      },
      {
        icon: '🌍',
        title: 'Multi-moneda',
        description: 'Funciona con soles, dólares, euros y 50+ monedas más'
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Envía un mensaje',
        description: 'Escribe naturalmente sobre tu gasto',
        example: '"Gasté 45 soles en el mercado"'
      },
      {
        step: 2,
        title: 'IA procesa automáticamente',
        description: 'Bilio entiende el monto, categoría y contexto',
        example: 'Categoría: Alimentación | Monto: S/45'
      },
      {
        step: 3,
        title: 'Recibe confirmación',
        description: 'Te confirma que registró correctamente',
        example: '"✅ Registré S/45 en Alimentación"'
      },
      {
        step: 4,
        title: 'Analiza patrones',
        description: 'La IA identifica tendencias en tus gastos',
        example: '"Esta semana gastaste 20% menos en transporte"'
      }
    ],
    testimonials: [
      {
        name: 'María Gonzales',
        role: 'Estudiante universitaria',
        quote: 'Después de 3 apps fallidas, Bilio fue la única que realmente usé. Es tan fácil como enviar un mensaje.',
        result: 'Redujo gastos innecesarios en 30%'
      },
      {
        name: 'Carlos Mendoza',
        role: 'Freelancer',
        quote: 'Registro mis gastos mientras camino al trabajo. Sin interrupciones, sin abrir apps.',
        result: 'Ahorra 2 horas semanales en control'
      },
      {
        name: 'Ana Pérez',
        role: 'Emprendedora',
        quote: 'La categorización automática es perfecta. Ya no tengo que pensar si "taxi" va en transporte o trabajo.',
        result: 'Identificó S/400 en gastos optimizables'
      }
    ],
    faq: [
      {
        question: '¿Qué tan precisa es la categorización automática?',
        answer: 'Nuestra IA tiene 95% de precisión y mejora con el uso. Si alguna vez se equivoca, puedes corregirla con un mensaje: "Ese gasto era de trabajo, no personal"'
      },
      {
        question: '¿Puedo registrar gastos de hace varios días?',
        answer: 'Sí, puedes decir "Ayer gasté S/30 en farmacia" o "El lunes pasado pagué S/200 de luz" y Bilio lo registrará con la fecha correcta'
      },
      {
        question: '¿Funciona con gastos en efectivo y tarjeta?',
        answer: 'Funciona con cualquier tipo de gasto. Solo dices cómo pagaste: "Pagué S/50 en efectivo" o "Cargué S/100 a la tarjeta"'
      },
      {
        question: '¿Qué pasa si me olvido de registrar un gasto?',
        answer: 'Bilio puede enviarte recordatorios suaves al final del día: "¿Tuviste algún gasto hoy?" Pero sin presión ni spam'
      }
    ],
    seoKeywords: [
      'control de gastos',
      'app gastos peru',
      'control gastos whatsapp',
      'categorizar gastos automatico',
      'inteligencia artificial gastos',
      'registro gastos facil',
      'app finanzas peru',
      'control gastos simple'
    ],
    relatedPages: ['/financial-coaching', '/whatsapp-finance', '/bilio-vs-mint']
  },
  'financial-coaching': {
    slug: 'financial-coaching',
    title: 'Coaching Financiero Personalizado con IA | Bilio',
    description: 'Recibe coaching financiero personalizado basado en tu comportamiento real de gastos. Mejora tus finanzas con consejos específicos para ti.',
    hero: {
      headline: 'Tu Coach Financiero Personal con IA',
      subheadline: 'Consejos personalizados basados en tus gastos reales, no en teorías genéricas',
      pain_point: 'Los consejos financieros genéricos no funcionan porque no conocen tu situación real',
      solution: 'Bilio analiza tus gastos y te da consejos específicos para tu situación'
    },
    benefits: [
      {
        icon: '🎯',
        title: 'Consejos Personalizados',
        description: 'Basados en tus gastos reales, no en teorías. "Tus gastos en delivery aumentaron 40% este mes"'
      },
      {
        icon: '📈',
        title: 'Metas Alcanzables',
        description: 'Te ayuda a crear metas financieras realistas basadas en tu comportamiento actual'
      },
      {
        icon: '🔍',
        title: 'Análisis de Patrones',
        description: 'Identifica hábitos financieros que no sabías que tenías: "Gastas más cuando llueve"'
      },
      {
        icon: '💡',
        title: 'Consejos Accionables',
        description: 'Sugerencias concretas y fáciles de implementar: "Cambia ese café diario por café en casa = S/300/mes"'
      },
      {
        icon: '🏆',
        title: 'Celebra Logros',
        description: 'Reconoce y celebra tus mejoras: "¡Felicidades! Ahorraste S/150 esta semana"'
      },
      {
        icon: '⚠️',
        title: 'Alertas Inteligentes',
        description: 'Te avisa sobre patrones preocupantes antes de que se vuelvan problemas'
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Analiza tu comportamiento',
        description: 'Bilio estudia tus patrones de gasto durante una semana',
        example: 'Identifica que gastas más los fines de semana'
      },
      {
        step: 2,
        title: 'Identifica oportunidades',
        description: 'Encuentra áreas donde puedes optimizar sin sacrificar calidad de vida',
        example: '"Podrías ahorrar S/200/mes optimizando gastos en entretenimiento"'
      },
      {
        step: 3,
        title: 'Crea plan personalizado',
        description: 'Diseña estrategias específicas para tu situación',
        example: '"Intenta cocinar en casa 2 días más por semana"'
      },
      {
        step: 4,
        title: 'Acompaña el progreso',
        description: 'Te motiva y ajusta el plan según tus resultados',
        example: '"¡Excelente! Llevas 3 semanas cumpliendo tu meta"'
      }
    ],
    testimonials: [
      {
        name: 'Luis Ramírez',
        role: 'Ingeniero de software',
        quote: 'Bilio me mostró que gastaba 60% de mi sueldo en cosas que no me hacían feliz. Cambié 3 hábitos y ahora ahorro S/800 al mes.',
        result: 'Ahorra S/800 mensuales sin sacrificios'
      },
      {
        name: 'Patricia Silva',
        role: 'Doctora',
        quote: 'Los consejos son súper específicos. Me dijo exactamente qué cambiar y por qué. En 2 meses mejoraron mis finanzas.',
        result: 'Pagó S/5,000 de deudas en 2 meses'
      },
      {
        name: 'Roberto Vega',
        role: 'Comerciante',
        quote: 'Nunca pensé que un bot me daría mejores consejos que mi contador. Ahora entiendo mis gastos y sé qué hacer.',
        result: 'Aumentó ahorro mensual en 150%'
      }
    ],
    faq: [
      {
        question: '¿Cómo sabe Bilio qué consejos darme?',
        answer: 'Analiza tus patrones de gasto, compara con buenas prácticas financieras y personaliza consejos para tu situación específica. No son consejos genéricos, son para ti.'
      },
      {
        question: '¿Los consejos son solo para ahorrar dinero?',
        answer: 'No, también te ayuda a gastar mejor. Te muestra cómo redistribuir gastos para ser más feliz con el mismo presupuesto.'
      },
      {
        question: '¿Qué pasa si no sigo los consejos?',
        answer: 'No hay presión. Bilio adapta sus sugerencias a lo que realmente haces, no a lo que "deberías" hacer. Es tu coach, no tu jefe.'
      },
      {
        question: '¿Puede ayudarme con metas específicas como comprar auto?',
        answer: 'Sí, le dices tu meta y analiza tus gastos actuales para crear un plan realista. "Para tu auto de S/30,000, necesitas ahorrar S/650/mes"'
      }
    ],
    seoKeywords: [
      'coaching financiero peru',
      'asesor financiero ia',
      'consejos financieros personalizados',
      'coaching financiero whatsapp',
      'mejorar finanzas personales',
      'asesoría financiera personalizada',
      'coach finanzas ia peru'
    ],
    relatedPages: ['/expense-tracking', '/whatsapp-finance', '/bilio-vs-cleo']
  },
  'whatsapp-finance': {
    slug: 'whatsapp-finance',
    title: 'Finanzas Personales en WhatsApp | Gestión Financiera IA',
    description: 'Maneja todas tus finanzas desde WhatsApp con inteligencia artificial. Control de gastos, presupuestos y coaching financiero en la app que ya usas.',
    hero: {
      headline: 'Tus Finanzas en WhatsApp',
      subheadline: 'La primera plataforma financiera que vive en la app que ya usas todos los días',
      pain_point: 'Las apps financieras mueren en tu teléfono porque olvidas abrirlas',
      solution: 'WhatsApp lo abres 50+ veces al día. Ahí están tus finanzas, siempre disponibles'
    },
    benefits: [
      {
        icon: '📱',
        title: 'Cero Apps Nuevas',
        description: 'Todo funciona en WhatsApp. No necesitas descargar, aprender o recordar abrir otra app'
      },
      {
        icon: '⚡',
        title: 'Acceso Instantáneo',
        description: 'Tu información financiera está a un mensaje de distancia, 24/7'
      },
      {
        icon: '🗣️',
        title: 'Interfaz Natural',
        description: 'Habla con tu dinero como hablas con un amigo. "¿Cuánto gasté esta semana?"'
      },
      {
        icon: '🔐',
        title: 'Seguridad WhatsApp',
        description: 'Usa la encriptación end-to-end de WhatsApp. Tus datos financieros están seguros'
      },
      {
        icon: '🌐',
        title: 'Funciona Globalmente',
        description: 'Mientras tengas WhatsApp, tienes tu asistente financiero. Perfecto para viajeros'
      },
      {
        icon: '👥',
        title: 'Perfecto para Familias',
        description: 'Crea grupos familiares para gastos compartidos. "Papá gastó S/200 en mercado"'
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Agregar a contactos',
        description: 'Guarda el número de Bilio como un contacto más',
        example: 'Como agregas a cualquier amigo en WhatsApp'
      },
      {
        step: 2,
        title: 'Envía tu primer mensaje',
        description: 'Escribe naturalmente sobre cualquier gasto',
        example: '"Hola, gasté S/35 en almuerzo"'
      },
      {
        step: 3,
        title: 'Conversa normalmente',
        description: 'Haz preguntas como le harías a un amigo experto',
        example: '"¿En qué gasto más?" o "¿Puedo comprar esa laptop?"'
      },
      {
        step: 4,
        title: 'Recibe insights',
        description: 'Bilio te envía análisis y consejos proactivos',
        example: '"Llevas 5 días sin gastos innecesarios. ¡Excelente!"'
      }
    ],
    testimonials: [
      {
        name: 'Sofía Morales',
        role: 'Diseñadora',
        quote: 'Es genial tener mis finanzas donde ya estoy todo el día. No tengo que recordar abrir otra app.',
        result: 'Uso constante por 6+ meses'
      },
      {
        name: 'Diego Torres',
        role: 'Estudiante',
        quote: 'Mis padres también pueden ver los gastos familiares. Súper útil para presupuesto conjunto.',
        result: 'Familia ahorra S/500 mensuales'
      },
      {
        name: 'Carmen López',
        role: 'Emprendedora',
        quote: 'Viajo mucho y siempre tengo WhatsApp. Mis finanzas me siguen a donde vaya.',
        result: 'Control financiero en 15 países'
      }
    ],
    faq: [
      {
        question: '¿Es seguro manejar finanzas por WhatsApp?',
        answer: 'Sí, usamos la encriptación end-to-end de WhatsApp. Plus, solo manejas información de gastos, no datos bancarios sensibles como números de cuenta.'
      },
      {
        question: '¿Funciona sin internet?',
        answer: 'Necesitas internet para enviar mensajes, pero puedes escribir varios gastos juntos cuando recuperes conexión: "Ayer gasté S/20 desayuno, S/15 transporte"'
      },
      {
        question: '¿Puedo usar Bilio en un grupo familiar?',
        answer: 'Sí, puedes agregar a Bilio a un grupo familiar. Cada persona puede registrar gastos y todos ven el resumen conjunto.'
      },
      {
        question: '¿Qué pasa si cambio de número de WhatsApp?',
        answer: 'Tus datos están vinculados a tu perfil, no al número. Solo necesitas validar tu nueva identidad con el código que te enviamos.'
      },
      {
        question: '¿Bilio puede enviarme mensajes automáticos?',
        answer: 'Solo mensajes útiles que tú configures: recordatorios, alertas de presupuesto o insights semanales. Cero spam.'
      }
    ],
    seoKeywords: [
      'finanzas whatsapp',
      'control gastos whatsapp',
      'bot financiero whatsapp',
      'whatsapp finanzas personales',
      'asistente financiero whatsapp',
      'gestión financiera whatsapp',
      'presupuesto whatsapp bot'
    ],
    relatedPages: ['/expense-tracking', '/financial-coaching', '/bilio-vs-cleo']
  }
};

export const getUseCaseData = (slug: string): UseCaseData | undefined => {
  return USE_CASES[slug];
};

export const getAllUseCaseSlugs = (): string[] => {
  return Object.keys(USE_CASES);
};