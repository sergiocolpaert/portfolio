import type { FacTexts } from "./build";

export const pt: FacTexts = {
  meta: {
    title: "Do boca a boca à busca ativa",
    client: "Fac Infoserver",
    role: "UX Designer",
    tagline: "Presença digital para uma empresa de TI com mais de 500 clientes e nenhum site.",
  },
  about: {
    title: "Sobre o projeto",
    lead: "Um projeto enxuto: discovery rápido, decisões rápidas e um one-page entregue em 10 dias. A Fac Infoserver tinha 12 anos de reputação construída por indicação e nenhuma forma de ser encontrada ou validada por quem ainda não a conhecia. O trabalho foi transformar essa reputação em prova visível para o lead que pesquisa fornecedores sozinho, antes de pedir orçamento.",
    stats: [
      { label: "Problema", value: "Negócio dependente de indicação, invisível na busca" },
      { label: "Meu papel", value: "UX Designer, do discovery à UI final" },
      { label: "Restrição", value: "Um one-page, entregue em 10 dias" },
      { label: "Resultado esperado", value: "Ser encontrada e validada online por leads em pesquisa ativa" },
    ],
    tags: ["Geração de leads", "Prova de credibilidade", "Presença digital", "Design System"],
  },
  challenge: {
    eyebrow: "Fac Infoserver",
    title: "Desafio",
    lead: "A Fac Infoserver possui mais de 12 anos de experiência em infraestrutura de TI e mais de 500 empresas atendidas. Apesar da sólida reputação, não tinha presença digital.\n\nSem um site institucional, a empresa enfrentava invisibilidade digital, com clientes incapazes de encontrar ou validar a empresa online. A geração de negócios dependia totalmente de indicações e plataformas de terceiros, resultando em perda constante de oportunidades com leads em fase de pesquisa ativa. Além disso, havia dificuldade em se posicionar como referência no mercado B2B de TI.",
    alt: "Fac Infoserver: logo, foto de um profissional em um data center e a home em um laptop",
  },
  process: {
    title: "Design Process",
    lead: "Com um prazo curto, o discovery serviu para fechar cedo uma única pergunta: o que um lead que nunca ouviu falar da Fac precisa ver para pedir orçamento. As decisões de estrutura saíram dessa resposta.",
    steps: [
      { title: "Pesquisa", caption: "8 horas", tags: ["Briefing", "Onboarding"] },
      {
        title: "UX/UI Design",
        caption: "20 horas",
        tags: ["Wireframe", "Layout Design", "Design System"],
      },
      {
        title: "Desenvolvimento",
        caption: "10 horas",
        tags: ["WordPress", "Elementor Pro Builder"],
      },
      {
        title: "Otimização",
        caption: "2 horas",
        tags: ["SEO", "Segurança", "Performance"],
      },
    ],
    note: "Contexto do projeto: 10 dias, 40 horas e uma equipe de 2 pessoas.",
  },
  decisions: {
    eyebrow: "Wireframe e UI",
    title: "Decisões",
    lead: "Cada bloco do one-page responde a uma pergunta que o lead faz antes de pedir orçamento. Três decisões guiaram a estrutura, do wireframe à UI final.",
    decisionLabel: "O que fiz",
    rows: [
      {
        label: "Prova",
        text: "O lead em pesquisa ativa não conhece a Fac e precisa validar a empresa em segundos.",
        decision: "Os números que antes só circulavam por indicação (mais de 500 empresas atendidas, 12 anos de mercado, 100% de garantia) ficam ancorados no hero, antes de qualquer descrição de serviço.",
      },
      {
        label: "Oferta",
        text: "Quem compara fornecedores precisa saber rápido se a Fac tem o equipamento que procura.",
        decision: "As soluções se organizam por categoria de equipamento (servidores, storages, switches e peças), com as marcas citadas e uma chamada própria em cada card.",
      },
      {
        label: "Contato",
        text: "Sem indicação, falta a voz de quem já comprou, e o primeiro contato precisa ter pouco atrito.",
        decision: "Depoimentos com nome e cargo levam a indicação para o site. O fechamento combina formulário e WhatsApp, com endereço e mapa como prova de operação física.",
      },
    ],
    altWireframes: "Fac Infoserver: wireframes da landing page em perspectiva",
    altFinal: "Fac Infoserver: design final da landing page em um laptop",
  },
  mobile: {
    eyebrow: "Detalhe de entrega",
    title: "Mobile",
    lead: "Construído em WordPress com Elementor a partir do Figma, com testes de responsividade em desktop, tablet e celular antes do lançamento.",
    altScreens: "Fac Infoserver: telas da versão mobile",
    altPhoto: "Fac Infoserver: landing page em um celular sobre uma mesa",
  },
  system: { eyebrow: "Design System", title: "Cor e Tipografia" },
};

export const en: FacTexts = {
  meta: {
    title: "From word of mouth to active search",
    client: "Fac Infoserver",
    role: "UX Designer",
    tagline: "Digital presence for an IT company with over 500 clients and no website.",
  },
  about: {
    title: "About the project",
    lead: "A lean project: fast discovery, fast decisions and a one-page site delivered in 10 days. Fac Infoserver had 12 years of reputation built on referrals and no way to be found or validated by anyone who didn't already know it. The work was to turn that reputation into visible proof for the lead who researches suppliers on their own, before asking for a quote.",
    stats: [
      { label: "Problem", value: "A referral-dependent business, invisible in search" },
      { label: "My role", value: "UX Designer, from discovery to final UI" },
      { label: "Constraint", value: "A one-page site, delivered in 10 days" },
      { label: "Expected outcome", value: "Being found and validated online by leads in active search" },
    ],
    tags: ["Lead generation", "Proof of credibility", "Digital presence", "Design System"],
  },
  challenge: {
    eyebrow: "Fac Infoserver",
    title: "Challenge",
    lead: "Fac Infoserver has more than 12 years of experience in IT infrastructure and has served over 500 companies. Despite its solid reputation, it had no digital presence.\n\nWithout an institutional website, the company faced digital invisibility, with clients unable to find or validate it online. Business generation depended entirely on referrals and third-party platforms, resulting in a constant loss of opportunities with leads in active search. On top of that, it struggled to position itself as a reference in the B2B IT market.",
    alt: "Fac Infoserver: logo, photo of a professional in a data center and the home on a laptop",
  },
  process: {
    title: "Design Process",
    lead: "With a short deadline, discovery was used to settle one question early: what does a lead who has never heard of Fac need to see before asking for a quote. The structural decisions came from that answer.",
    steps: [
      { title: "Research", caption: "8 hours", tags: ["Briefing", "Onboarding"] },
      {
        title: "UX/UI Design",
        caption: "20 hours",
        tags: ["Wireframe", "Layout Design", "Design System"],
      },
      {
        title: "Development",
        caption: "10 hours",
        tags: ["WordPress", "Elementor Pro Builder"],
      },
      {
        title: "Optimization",
        caption: "2 hours",
        tags: ["SEO", "Security", "Performance"],
      },
    ],
    note: "Project context: 10 days, 40 hours and a team of 2.",
  },
  decisions: {
    eyebrow: "Wireframe and UI",
    title: "Decisions",
    lead: "Each block of the one-page answers a question the lead asks before requesting a quote. Three decisions guided the structure, from wireframe to final UI.",
    decisionLabel: "What I did",
    rows: [
      {
        label: "Proof",
        text: "A lead in active search doesn't know Fac and needs to validate the company in seconds.",
        decision: "The numbers that used to travel only by referral (over 500 companies served, 12 years in the market, 100% warranty) are anchored in the hero, before any service description.",
      },
      {
        label: "Offer",
        text: "Someone comparing suppliers needs to know quickly whether Fac has the equipment they're looking for.",
        decision: "Solutions are organized by equipment category (servers, storage, switches and parts), with brands named and a dedicated call to action on each card.",
      },
      {
        label: "Contact",
        text: "Without a referral, the voice of a past customer is missing, and the first contact needs little friction.",
        decision: "Testimonials with name and title bring the referral onto the site. The closing combines a form and WhatsApp, with address and map as proof of a physical operation.",
      },
    ],
    altWireframes: "Fac Infoserver: landing page wireframes in perspective",
    altFinal: "Fac Infoserver: final landing page design on a laptop",
  },
  mobile: {
    eyebrow: "Delivery detail",
    title: "Mobile",
    lead: "Built in WordPress with Elementor from the Figma file, with responsiveness tests on desktop, tablet and mobile before launch.",
    altScreens: "Fac Infoserver: mobile version screens",
    altPhoto: "Fac Infoserver: landing page on a phone over a desk",
  },
  system: { eyebrow: "Design System", title: "Color and Typography" },
};

export const es: FacTexts = {
  meta: {
    title: "Del boca a boca a la búsqueda activa",
    client: "Fac Infoserver",
    role: "UX Designer",
    tagline: "Presencia digital para una empresa de TI con más de 500 clientes y ningún sitio web.",
  },
  about: {
    title: "Sobre el proyecto",
    lead: "Un proyecto ágil: discovery rápido, decisiones rápidas y un one-page entregado en 10 días. Fac Infoserver tenía 12 años de reputación construida por recomendación y ninguna forma de ser encontrada o validada por quien todavía no la conocía. El trabajo fue transformar esa reputación en prueba visible para el lead que investiga proveedores por su cuenta, antes de pedir un presupuesto.",
    stats: [
      { label: "Problema", value: "Negocio dependiente de recomendaciones, invisible en la búsqueda" },
      { label: "Mi rol", value: "UX Designer, del discovery a la UI final" },
      { label: "Restricción", value: "Un one-page, entregado en 10 días" },
      { label: "Resultado esperado", value: "Ser encontrada y validada en línea por leads en búsqueda activa" },
    ],
    tags: ["Generación de leads", "Prueba de credibilidad", "Presencia digital", "Design System"],
  },
  challenge: {
    eyebrow: "Fac Infoserver",
    title: "Desafío",
    lead: "Fac Infoserver tiene más de 12 años de experiencia en infraestructura de TI y más de 500 empresas atendidas. A pesar de su sólida reputación, no tenía presencia digital.\n\nSin un sitio institucional, la empresa enfrentaba invisibilidad digital, con clientes incapaces de encontrarla o validarla en línea. La generación de negocios dependía totalmente de recomendaciones y plataformas de terceros, lo que resultaba en una pérdida constante de oportunidades con leads en fase de búsqueda activa. Además, había dificultad para posicionarse como referencia en el mercado B2B de TI.",
    alt: "Fac Infoserver: logo, foto de un profesional en un data center y la home en un portátil",
  },
  process: {
    title: "Design Process",
    lead: "Con un plazo corto, el discovery sirvió para cerrar temprano una sola pregunta: qué necesita ver un lead que nunca oyó hablar de Fac para pedir un presupuesto. Las decisiones de estructura salieron de esa respuesta.",
    steps: [
      { title: "Investigación", caption: "8 horas", tags: ["Briefing", "Onboarding"] },
      {
        title: "UX/UI Design",
        caption: "20 horas",
        tags: ["Wireframe", "Layout Design", "Design System"],
      },
      {
        title: "Desarrollo",
        caption: "10 horas",
        tags: ["WordPress", "Elementor Pro Builder"],
      },
      {
        title: "Optimización",
        caption: "2 horas",
        tags: ["SEO", "Seguridad", "Performance"],
      },
    ],
    note: "Contexto del proyecto: 10 días, 40 horas y un equipo de 2 personas.",
  },
  decisions: {
    eyebrow: "Wireframe y UI",
    title: "Decisiones",
    lead: "Cada bloque del one-page responde a una pregunta que el lead se hace antes de pedir un presupuesto. Tres decisiones guiaron la estructura, del wireframe a la UI final.",
    decisionLabel: "Lo que hice",
    rows: [
      {
        label: "Prueba",
        text: "El lead en búsqueda activa no conoce a Fac y necesita validar la empresa en segundos.",
        decision: "Los números que antes solo circulaban por recomendación (más de 500 empresas atendidas, 12 años en el mercado, 100% de garantía) quedan anclados en el hero, antes de cualquier descripción de servicio.",
      },
      {
        label: "Oferta",
        text: "Quien compara proveedores necesita saber rápido si Fac tiene el equipo que busca.",
        decision: "Las soluciones se organizan por categoría de equipo (servidores, storages, switches y piezas), con las marcas citadas y una llamada propia en cada card.",
      },
      {
        label: "Contacto",
        text: "Sin recomendación, falta la voz de quien ya compró, y el primer contacto necesita poca fricción.",
        decision: "Testimonios con nombre y cargo llevan la recomendación al sitio. El cierre combina formulario y WhatsApp, con dirección y mapa como prueba de operación física.",
      },
    ],
    altWireframes: "Fac Infoserver: wireframes de la landing page en perspectiva",
    altFinal: "Fac Infoserver: diseño final de la landing page en un portátil",
  },
  mobile: {
    eyebrow: "Detalle de entrega",
    title: "Mobile",
    lead: "Construido en WordPress con Elementor a partir del Figma, con pruebas de responsividad en desktop, tablet y celular antes del lanzamiento.",
    altScreens: "Fac Infoserver: pantallas de la versión mobile",
    altPhoto: "Fac Infoserver: landing page en un celular sobre una mesa",
  },
  system: { eyebrow: "Design System", title: "Color y Tipografía" },
};
