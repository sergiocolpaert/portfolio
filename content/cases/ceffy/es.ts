import type { CaseFrontmatter } from "@/lib/cases";
import { buildCeffySections } from "./build";

export const meta: CaseFrontmatter = {
  title: "CÈFFY: E-commerce",
  client: "CÈFFY",
  role: "UI/UX Designer",
  tagline: "Tienda online para una marca de suplementos en gomitas.",
};

export const sections = buildCeffySections({
  about: {
    title: "Sobre",
    lead: "Cèffy es una plataforma de e-commerce a medida creada para reposicionar los suplementos en gomitas como una categoría premium de longevidad, uniendo un Design System sofisticado con un motor de ventas personalizado en PHP, con integración fiscal automatizada.",
    tags: ["UI/UX", "Design", "PHP Engineering"],
    alt: "CÈFFY: página de producto de Creatina en un portátil",
  },
  problem: {
    title: "El Problema",
    quote:
      "CÈFFY enfrentó un desafío doble. Por un lado, era necesario convencer a un público maduro de que los suplementos en gomitas son un producto serio, superando la asociación del formato con productos infantiles. Por otro, era necesario hacer viables operaciones comerciales como kits flexibles, descuentos progresivos y emisión fiscal automatizada, recursos que el WooCommerce nativo no soporta y que exigieron desarrollo a medida.",
    author: "Equipo Cèffy",
    role: "Suplementación Femenina",
  },
  process: {
    title: "Design Process",
    lead: "Comenzamos con discovery y mapeo de persona para alinear posicionamiento de marca, hábitos de consumo y requisitos fiscales. Con base en esos insights, estructuramos la arquitectura de información y revisamos los flujos en wireframes con heurísticas de usabilidad, validando las decisiones de estructura con feedback directo de los stakeholders antes de la UI final. El Design System, la UI final y la ingeniería PHP a medida garantizaron consistencia visual, precisión de cálculo y preparación para escalar, desde el primer clic hasta la factura emitida.",
    week: "Semana",
    steps: [
      {
        title: "Strategy & UX",
        tags: ["Briefing", "Persona", "Arquitectura de la Información"],
      },
      {
        title: "Wireframing",
        tags: ["UX Audit", "Flujos de Compra", "Wireframes"],
      },
      {
        title: "Design System & UI",
        tags: ["Moodboard", "UI Kit", "Pantallas Mobile-First"],
      },
      {
        title: "Development",
        tags: ["WooCommerce", "Integraciones", "Personalización PHP"],
      },
    ],
  },
  architecture: {
    title: "Arquitectura de la Información",
    lead: "La arquitectura de Cèffy fue diseñada en torno a pilares de salud, no de categorías de producto. El flujo permite que la clienta llegue de la Home al checkout guiada por objetivo (Energía, Sueño o Longevidad), sin carga cognitiva innecesaria.",
    columns: [
      {
        title: "Home",
        items: ["Hero / Carrusel", "Vitrina de Productos", "FAQ Rápido"],
      },
      {
        title: "Catálogo",
        items: ["Filtros por Beneficio", "Ordenación", "Grid de Productos"],
      },
      {
        title: "Producto (PDP)",
        items: [
          "Buy Box",
          "Para quién es ideal",
          "Información Nutricional",
          "Reseñas",
          "FAQ del Producto",
        ],
      },
      {
        title: "Nuestra Historia",
        items: ["Nuestra Motivación", "Nuestra Solución", "Nuestros Valores"],
      },
      {
        title: "Carrito",
        items: ["Barra de Progreso", "Ítems de la Bolsa", "Resumen del Pedido"],
      },
      {
        title: "Checkout",
        items: ["Tus Datos", "Entrega", "Pago"],
      },
    ],
  },
  persona: {
    title: "Persona Principal",
    lead: "Desarrollamos una persona en profundidad para orientar cada decisión de UX, desde la forma en que comunicamos beneficios hasta la jerarquía de información en las páginas de producto.",
    name: "Cristina Freitas",
    role: "Consultora de Marketing, 42 años",
    cards: [
      {
        label: "Dolor",
        text: 'Ya fue engañada por suplementos "milagrosos" sin comprobación, y desconfía de envases que parecen apelar al público infantil en lugar de transmitir seriedad clínica.',
      },
      {
        label: "Motivación",
        text: "Mantener energía y ánimo en la rutina sin renunciar a la practicidad, y sentir que está invirtiendo en algo serio para su salud a largo plazo.",
      },
      {
        label: "Expectativa",
        text: "Transparencia total, tabla nutricional clara, ingredientes rastreables e información de dosificación accesible incluso antes de abrir el envase.",
      },
      {
        label: "Alegría",
        text: "Sentir que finalmente encontró una rutina de suplementación que es a la vez práctica, sabrosa y alineada con sus valores de bienestar.",
      },
    ],
  },
  traceability: {
    title: "Trazabilidad de Decisiones",
    lead: "Cada decisión de UX de la PDP nace de un insight específico de Cristina, no de preferencia estética. A continuación, el mapeo directo entre dolor/motivación/expectativa/alegría y la decisión de diseño correspondiente.",
    decisionLabel: "Decisión de diseño",
    rows: [
      {
        label: "Dolor",
        text: 'Ya fue engañada por suplementos "milagrosos" y desconfía de envases llamativos.',
        decision:
          "La gomita tiene forma de pastilla redondeada, no de caramelo de fruta infantil. La fotografía de producto sigue una línea editorial seria, sin estética artificial de IA.",
      },
      {
        label: "Motivación",
        text: "Mantener energía en la rutina sin renunciar a la practicidad.",
        decision:
          "El selector de kits y el descuento progresivo se concentran en la Buy Box, resolviendo la elección de cantidad y la ventaja comercial en un único gesto.",
      },
      {
        label: "Expectativa",
        text: "Transparencia total, con ingredientes rastreables y dosificación accesible.",
        decision:
          "La tabla nutricional aparece ya en la primera imagen del carrusel y tiene una sección propia en la PDP, junto a destacados de los principales beneficios del producto.",
      },
      {
        label: "Alegría",
        text: "Encontrar una rutina práctica, sabrosa y alineada con sus valores.",
        decision:
          "La fotografía de producto y los sabores priorizan una estética sensorial y auténtica, con mujeres brasileñas reales, no un aspecto estéril de farmacia.",
      },
    ],
  },
  wireframes: {
    title: "Wireframes",
    lead: "Antes de la capa estética, probamos la estructura en wireframes de baja y media fidelidad en Figma, validando dónde deberían ubicarse la Buy Box, el selector de kits y las tablas nutricionales para captar la atención en el momento justo del recorrido.",
    altDesktop: "CÈFFY: wireframes desktop de home, producto y carrito",
    altMobile: "CÈFFY: wireframes mobile de home, producto, carrito y entrega",
  },
  styleGuide: {
    title: "Style Guide",
    lead: "Diseñado mobile-first, ya que la mayor parte del tráfico viene del celular: touch targets cómodos, un verde institucional que comunica salud sin parecer infantil, y tipografía pensada para la legibilidad de dosificaciones en pantallas pequeñas.",
    alt: "CÈFFY: tipografía (Plus Jakarta Sans en títulos, Inter en cuerpo y leyenda) y paleta de colores en verdes institucionales y neutros",
  },
  ui: {
    title: "UI Design",
    lead: "Desde la Home hasta la confirmación del pedido, cada pantalla guía a la usuaria con fluidez. En la PDP, la Buy Box concentra el descuento progresivo y el selector de kits en un único gesto de decisión.",
    altMockups:
      "CÈFFY: mockups de la página de producto, home mobile, resumen del pedido y carrito lateral",
    altHome: "CÈFFY: home del e-commerce en página completa",
    homeCaption: "Homepage",
  },
  engineering: {
    title: "Ingeniería PHP",
    lead: "Kits y descuento progresivo por cantidad son, técnicamente, dos lógicas de descuento que compiten por el mismo carrito. Resolver ese conflicto, sin depender de plugins genéricos, exigió una cadena de 12 hooks coordinados en el ciclo de vida de WooCommerce, no un shortcode aislado.",
    rows: [
      {
        title: "Fee condicional",
        text: "El descuento del kit solo se aplica cuando el número de piezas en el carrito coincide exactamente con lo esperado; un kit incompleto nunca genera un descuento indebido.",
      },
      {
        title: "Exención de conflicto",
        text: "Antes de calcular la fee, los ítems del kit se devuelven al precio completo para no chocar con el descuento progresivo por cantidad.",
      },
      {
        title: "Envío consolidado",
        text: "Los componentes sueltos del kit se unifican en un paquete virtual solo para el cálculo del envío, usando el peso y las dimensiones del producto padre.",
      },
      {
        title: "Desmembramiento inverso",
        text: "Si la clienta quita un componente, los hermanos sobrevivientes pasan a ser productos normales, elegibles para el descuento por Tiers.",
      },
      {
        title: "Split por cantidad",
        text: "Llevar 2 unidades de un ítem de kit fija la línea en 1 y envía el excedente como producto suelto, con descuento progresivo propio.",
      },
    ],
    facts: [
      "12 hooks coordinados",
      "Cero conflictos entre kit y descuento progresivo",
      "Carrito íntegro ante cualquier acción de la clienta",
    ],
  },
  performance: {
    title: "Performance",
    lead: "Sin historial de tráfico para citar impacto comercial, la prueba concreta está en el rendimiento de producción medido antes de la entrega: 95 de score promedio en PageSpeed, validado en Desktop y Mobile, sin depender de estimaciones.",
    score: "Score",
    columns: { desktop: "Desktop", mobile: "Mobile" },
    cards: [
      {
        title: "Diseño y Experiencia",
        text: "Sistema visual mobile-first completo, de la paleta institucional al checkout, probado en wireframe antes de la UI final, sin retrabajo de estructura.",
      },
      {
        title: "Ingeniería a medida",
        text: "12 hooks coordinados resolviendo kit, descuento progresivo, envío y fiscal en el mismo carrito, sin depender de un plugin genérico y sin conflicto entre reglas.",
      },
      {
        title: "Performance validada",
        text: "Auditoría PageSpeed posdeploy, no estimación: 92 de Performance en Desktop y Mobile, medidos en el sitio real, antes de la entrega.",
      },
    ],
    rows: [
      { label: "Performance", status: "Excelente" },
      { label: "Accessibility", status: "Excelente" },
      { label: "Best Practices", status: "Excelente" },
      { label: "SEO", status: "Excelente" },
    ],
  },
  reflection: {
    title: "Reflexión Final",
    lead: "Si este proyecto tuviera una segunda fase, la mayor ganancia no estaría en la UI, sino en cerrar el ciclo entre la decisión de diseño y el comportamiento real. La validación de flujo hasta aquí fue una revisión heurística hecha por nosotros, complementada con feedback estructurado de los stakeholders sobre los wireframes, lo que es suficiente para reducir el riesgo técnico, pero no sustituye una prueba moderada con la persona real antes de la UI final. El próximo paso natural es instrumentar analytics desde el día cero, para poder volver a este case dentro de unos meses con datos de conversión reales, no solo rendimiento técnico.",
  },
});
