import type { CaseFrontmatter } from "@/lib/cases";
import { buildCeffySections } from "./build";

export const meta: CaseFrontmatter = {
  title: "Gomitas que se toman en serio",
  client: "CÈFFY",
  role: "Product Designer",
  tagline: "Una marca de suplementos que se ganó la confianza de quienes desconfiaban del formato.",
};

export const sections = buildCeffySections({
  about: {
    title: "Sobre",
    lead: "CÈFFY quería vender suplementos en gomitas como una categoría premium de longevidad, para mujeres que ya fueron engañadas por promesas milagrosas y asocian las gomitas con productos infantiles. Mi trabajo fue traducir esa desconfianza en decisiones de producto. La arquitectura se organiza por objetivo (energía, sueño, longevidad) y no por categoría. La página de producto pone la transparencia nutricional y la elección del kit en el mismo momento de decisión. Y la lógica de kits y descuentos se diseñó junto con ingeniería, para que el carrito nunca contradiga lo que promete la interfaz.",
    tags: ["Discovery", "Arquitectura de la información", "Conversión", "Design System", "E-commerce"],
    alt: "CÈFFY: página de producto de Creatina en un portátil",
  },
  problem: {
    title: "Problema",
    text: "El desafío era doble. Por un lado, convencer a un público maduro de que los suplementos en gomitas son algo serio, superando la asociación del formato con productos infantiles. Por otro, hacer viables kits flexibles, descuentos progresivos y emisión fiscal automatizada, recursos que el WooCommerce nativo no soporta.",
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
    lead: "La arquitectura de CÈFFY fue diseñada en torno a pilares de salud, no de categorías de producto. El flujo permite que la clienta llegue de la Home al checkout guiada por objetivo (Energía, Sueño o Longevidad), sin carga cognitiva innecesaria.",
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
  constraint: {
    title: "La restricción que dio forma al diseño",
    lead: "La Buy Box promete kit y descuento progresivo en un único gesto. En el WooCommerce nativo, son dos reglas de descuento que compiten por el mismo carrito, y sin resolver el conflicto la interfaz mostraría un precio que el carrito no entrega. Por eso, las reglas del carrito se diseñaron como parte de la experiencia, junto con ingeniería, y se convirtieron en una cadena de hooks a medida en PHP.",
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
    codeLabel: "Ver fragmento del código",
  },
  signals: {
    title: "Primeras señales de comportamiento",
    lead: "La tienda funciona con Hotjar. Antes de mirar los datos, definí qué señales confirman o descartan cada decisión de la PDP. Los hallazgos, y lo que cambie a partir de ellos, se sumarán aquí cuando haya volumen de sesiones suficiente para concluir.",
    decisionLabel: "Decisión en prueba",
    rows: [
      {
        label: "Buy Box",
        text: "Clics en el selector de kits y en el botón de compra, en relación con las sesiones en la PDP.",
        decision: "Concentrar kit y descuento progresivo en la Buy Box resuelve la elección en un único gesto.",
      },
      {
        label: "Tabla nutricional",
        text: "Scroll hasta la sección nutricional antes del clic en comprar.",
        decision: "La transparencia se consulta antes de la compra, como indicaba la persona.",
      },
      {
        label: "Carrito",
        text: "Abandono después de aplicar un kit o un descuento.",
        decision: "El carrito sostiene el precio que prometió la Buy Box, sin sorpresas en el checkout.",
      },
    ],
  },
  performance: {
    title: "Performance técnica",
    lead: "Auditoría PageSpeed en el sitio en producción, antes de la entrega. Es evidencia de calidad técnica, no de impacto en el negocio.",
    labels: ["Performance", "Accesibilidad", "Buenas prácticas", "SEO"],
    columns: { desktop: "Desktop", mobile: "Mobile" },
  },
  reflection: {
    title: "Reflexión Final",
    lead: "Si este proyecto tuviera una segunda fase, la mayor ganancia no estaría en la UI, sino en cerrar el ciclo entre la decisión de diseño y el comportamiento real. La validación de flujo hasta aquí fue una revisión heurística hecha por nosotros, complementada con feedback estructurado de los stakeholders sobre los wireframes, lo que es suficiente para reducir el riesgo técnico, pero no sustituye una prueba moderada con la persona real antes de la UI final. El próximo paso es leer las señales de arriba con volumen suficiente y volver a este case con datos reales de comportamiento y conversión, no solo rendimiento técnico.",
  },
});
