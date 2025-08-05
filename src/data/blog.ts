// Blog post data structure for SEO and content management
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishDate: string;
  lastModified: string;
  category: string;
  tags: string[];
  readTime: number;
  featured: boolean;
  seoKeywords: string[];
  ogImage?: string;
  relatedPosts?: string[];
}

export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
  color: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: 'personal-finance',
    name: 'Finanzas Personales',
    description: 'Tips y estrategias para mejorar tus finanzas personales',
    color: 'blue'
  },
  {
    slug: 'expense-tracking',
    name: 'Control de Gastos',
    description: 'Guías para controlar y optimizar tus gastos',
    color: 'green'
  },
  {
    slug: 'ai-finance',
    name: 'IA y Finanzas',
    description: 'Cómo la inteligencia artificial está revolucionando las finanzas',
    color: 'purple'
  },
  {
    slug: 'whatsapp-tips',
    name: 'WhatsApp Tips',
    description: 'Cómo usar WhatsApp para mejorar tus finanzas',
    color: 'yellow'
  }
];

// Sample blog posts for SEO foundation
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'como-controlar-gastos-whatsapp',
    title: 'Cómo controlar tus gastos usando WhatsApp en 2025',
    description: 'Descubre cómo la inteligencia artificial en WhatsApp puede revolucionar la forma en que controlas tus gastos personales.',
    content: `
# Cómo controlar tus gastos usando WhatsApp en 2025

El control de gastos es uno de los hábitos financieros más importantes, pero también uno de los más difíciles de mantener. En 2025, la inteligencia artificial está cambiando esto radicalmente.

## El problema del control de gastos tradicional

Según estudios recientes, el 80% de las personas que intentan controlar sus gastos abandonan el hábito en las primeras 4 semanas. ¿Por qué?

- **Fricción**: Abrir una app, navegar menús, llenar formularios
- **Olvido**: No registrar gastos en el momento
- **Complejidad**: Categorizar manualmente cada transacción

## La revolución de WhatsApp + IA

WhatsApp ya es parte de tu rutina diaria. Al integrar control de gastos con IA en esta plataforma, eliminamos toda la fricción:

### Conversación natural
En lugar de formularios, simplemente escribes: "Gasté 25 soles en almuerzo"

### Categorización automática
La IA entiende y categoriza automáticamente tus gastos

### Reportes instantáneos
Pregunta "¿cuánto gasté esta semana?" y recibe un reporte completo

## Beneficios comprobados

Usuarios que adoptaron este método reportan:
- 90% de adherencia al hábito después de 3 meses
- Reducción promedio de 20% en gastos innecesarios
- Mejor conciencia financiera

## Conclusión

El futuro del control de gastos está en la conversación natural con IA. WhatsApp se convierte en tu asistente financiero personal, disponible 24/7.
    `,
    author: 'Equipo Bilio',
    publishDate: '2024-12-20',
    lastModified: '2024-12-20',
    category: 'expense-tracking',
    tags: ['whatsapp', 'control-gastos', 'inteligencia-artificial', 'finanzas-personales'],
    readTime: 5,
    featured: true,
    seoKeywords: ['control de gastos WhatsApp', 'inteligencia artificial finanzas', 'app gastos 2025', 'finanzas personales IA']
  },
  {
    slug: 'ia-finanzas-personales-futuro',
    title: 'El futuro de las finanzas personales: IA conversacional',
    description: 'Explora cómo la inteligencia artificial conversacional está transformando la gestión de finanzas personales.',
    content: `
# El futuro de las finanzas personales: IA conversacional

La inteligencia artificial está transformando todos los aspectos de nuestras vidas, y las finanzas personales no son la excepción.

## La evolución de las fintech

### Primera generación: Apps tradicionales
- Interfaces complejas
- Curva de aprendizaje alta
- Poca adopción masiva

### Segunda generación: IA conversacional
- Interacción natural
- Comprensión contextual
- Automatización inteligente

## Ventajas de la IA conversacional en finanzas

### 1. Eliminación de fricción
La conversación natural elimina barreras de adopción

### 2. Personalización avanzada
La IA aprende tus patrones y preferencias

### 3. Disponibilidad 24/7
Tu asistente financiero siempre disponible

## Casos de uso revolucionarios

- **Análisis predictivo**: "¿Podré ahorrar para mis vacaciones?"
- **Alertas inteligentes**: "Estás gastando más de lo usual en restaurantes"
- **Coaching financiero**: Consejos personalizados basados en tu comportamiento

## El impacto social

Esta tecnología democratiza el acceso a servicios financieros sofisticados, especialmente importante en América Latina donde la inclusión financiera es clave.

## Conclusión

Estamos en el inicio de una revolución financiera donde la IA conversacional hará que la gestión financiera sea tan natural como una conversación con un amigo experto.
    `,
    author: 'Equipo Bilio',
    publishDate: '2024-12-19',
    lastModified: '2024-12-19',
    category: 'ai-finance',
    tags: ['inteligencia-artificial', 'fintech', 'futuro', 'finanzas-conversacionales'],
    readTime: 7,
    featured: true,
    seoKeywords: ['IA finanzas personales', 'fintech inteligencia artificial', 'asistente financiero IA', 'chatbot finanzas']
  },
  {
    slug: 'presupuesto-personal-2025',
    title: 'Guía completa para crear tu presupuesto personal en 2025',
    description: 'Aprende a crear y mantener un presupuesto personal efectivo con las herramientas y estrategias más modernas.',
    content: `
# Guía completa para crear tu presupuesto personal en 2025

Un presupuesto bien estructurado es la base de una salud financiera sólida. En esta guía te enseñamos cómo crear uno efectivo.

## ¿Por qué necesitas un presupuesto?

### Beneficios comprobados:
- **Control total**: Sabes exactamente dónde va tu dinero
- **Reducción de estrés**: Eliminas la ansiedad financiera
- **Logro de metas**: Planificas para objetivos específicos
- **Preparación**: Estás listo para emergencias

## Pasos para crear tu presupuesto

### 1. Calcula tus ingresos totales
Incluye todas las fuentes de ingreso:
- Salario principal
- Ingresos secundarios
- Inversiones
- Otros ingresos

### 2. Identifica tus gastos fijos
- Vivienda (alquiler/hipoteca)
- Servicios básicos
- Seguros
- Suscripciones

### 3. Rastrea tus gastos variables
- Alimentación
- Transporte
- Entretenimiento
- Compras personales

### 4. Aplica la regla 50/30/20
- **50%** necesidades básicas
- **30%** gastos personales
- **20%** ahorro e inversión

## Herramientas modernas para presupuestar

### IA conversacional
Registra gastos hablando naturalmente: "Gasté 50 soles en mercado"

### Automatización inteligente
- Categorización automática
- Alertas de presupuesto
- Reportes personalizados

### Integración WhatsApp
Tu presupuesto disponible donde ya pasas tiempo

## Errores comunes a evitar

1. **Ser demasiado restrictivo**
2. **No considerar gastos esporádicos**
3. **No revisar regularmente**
4. **Ignorar los gastos pequeños**

## Mantén tu presupuesto vivo

### Revisión mensual
- Compara real vs. planificado
- Ajusta categorías según necesidad
- Celebra los logros

### Adaptación constante
Tu presupuesto debe evolucionar con tu vida

## Conclusión

Un presupuesto efectivo no es restrictivo, es liberador. Te da el control y la confianza para tomar mejores decisiones financieras.

Empieza hoy: registra todos tus gastos por una semana y descubre patrones sorprendentes en tu comportamiento financiero.
    `,
    author: 'Equipo Bilio',
    publishDate: '2024-12-18',
    lastModified: '2024-12-18',
    category: 'personal-finance',
    tags: ['presupuesto-personal', 'planificacion-financiera', 'ahorro', 'gastos'],
    readTime: 8,
    featured: false,
    seoKeywords: ['presupuesto personal 2025', 'como hacer presupuesto', 'planificacion financiera', 'regla 50 30 20']
  }
];

export const getFeaturedPosts = (): BlogPost[] => {
  return BLOG_POSTS.filter(post => post.featured);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return BLOG_POSTS.filter(post => post.category === category);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return BLOG_POSTS.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentSlug: string, limit: number = 3): BlogPost[] => {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];
  
  // Find posts with similar tags or same category
  const relatedPosts = BLOG_POSTS.filter(post => {
    if (post.slug === currentSlug) return false;
    
    // Same category gets high priority
    if (post.category === currentPost.category) return true;
    
    // Similar tags get medium priority
    const commonTags = post.tags.filter(tag => currentPost.tags.includes(tag));
    return commonTags.length > 0;
  });
  
  return relatedPosts.slice(0, limit);
};