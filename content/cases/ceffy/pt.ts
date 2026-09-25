import type { CaseFrontmatter } from "@/lib/cases";
import { buildCeffySections } from "./build";

export const meta: CaseFrontmatter = {
  title: "CÈFFY: E-commerce",
  client: "CÈFFY",
  role: "UI/UX Designer",
  tagline: "Loja virtual para uma marca de suplementos em gomas.",
};

export const sections = buildCeffySections({
  about: {
    title: "Sobre",
    lead: "Cèffy é uma plataforma de e-commerce sob medida criada para reposicionar a suplementação em goma como categoria premium de longevidade, unindo um Design System sofisticado a um motor de vendas customizado em PHP, com integração fiscal automatizada.",
    tags: ["UI/UX", "Design", "PHP Engineering"],
    alt: "CÈFFY: página de produto da Creatina em um laptop",
    creditLabel: "Em parceria com",
  },
  problem: {
    title: "O Problema",
    quote:
      "A CÈFFY enfrentou um desafio duplo. De um lado, era preciso convencer um público maduro de que a suplementação em goma é séria, superando a associação do formato com produtos infantis. Do outro, era necessário viabilizar operações comerciais como kits flexíveis, descontos progressivos e emissão fiscal automatizada, recursos que o WooCommerce nativo não suporta e que exigiram desenvolvimento sob medida.",
    author: "Equipe Cèffy",
    role: "Suplementação Feminina",
  },
  process: {
    title: "Design Process",
    lead: "Começamos com discovery e mapeamento de persona para alinhar posicionamento de marca, hábitos de consumo e requisitos fiscais. Com base nesses insights, estruturamos a arquitetura de informação e revisamos os fluxos em wireframes com heurísticas de usabilidade, validando as decisões de estrutura com feedback direto com os stakeholders antes da UI final. O Design System, a UI final e a engenharia PHP sob medida garantiram consistência visual, precisão de cálculo e prontidão para escala, do primeiro clique à nota fiscal emitida.",
    week: "Semana",
    steps: [
      {
        title: "Strategy & UX",
        tags: ["Briefing", "Persona", "Arquitetura da Informação"],
      },
      {
        title: "Wireframing",
        tags: ["UX Audit", "Fluxos de Compra", "Wireframes"],
      },
      {
        title: "Design System & UI",
        tags: ["Moodboard", "UI Kit", "Telas Mobile-First"],
      },
      {
        title: "Development",
        tags: ["WooCommerce", "Integrações", "Personalização PHP"],
      },
    ],
  },
  architecture: {
    title: "Arquitetura da Informação",
    lead: "A arquitetura da Cèffy foi desenhada em torno de pilares de saúde, não de categorias de produto. O fluxo permite que a cliente chegue da Home ao checkout guiada por objetivo (Energia, Sono ou Longevidade), sem carga cognitiva desnecessária.",
    columns: [
      {
        title: "Home",
        items: ["Hero / Carrossel", "Vitrine de Produtos", "FAQ Rápido"],
      },
      {
        title: "Catálogo",
        items: ["Filtros por Benefício", "Ordenação", "Grid de Produtos"],
      },
      {
        title: "Produto (PDP)",
        items: [
          "Buy Box",
          "Para quem é ideal",
          "Informação Nutricional",
          "Avaliações",
          "FAQ do Produto",
        ],
      },
      {
        title: "Nossa História",
        items: ["Nossa Motivação", "Nossa Solução", "Nossos Valores"],
      },
      {
        title: "Carrinho",
        items: ["Barra de Progresso", "Itens da Sacola", "Resumo do Pedido"],
      },
      {
        title: "Checkout",
        items: ["Seus Dados", "Entrega", "Pagamento"],
      },
    ],
  },
  persona: {
    title: "Persona Principal",
    lead: "Desenvolvemos uma persona aprofundada para orientar cada decisão de UX, da forma como comunicamos benefícios até a hierarquia de informação nas páginas de produto.",
    name: "Cristina Freitas",
    role: "Consultora de Marketing, 42 anos",
    cards: [
      {
        label: "Dor",
        text: 'Já foi enganada por suplementos "milagrosos" sem comprovação, e desconfia de embalagens que parecem apelar ao público infantil em vez de transmitir seriedade clínica.',
      },
      {
        label: "Motivação",
        text: "Manter energia e disposição na rotina sem abrir mão de praticidade, e sentir que está investindo em algo sério para sua saúde de longo prazo.",
      },
      {
        label: "Expectativa",
        text: "Transparência total, tabela nutricional clara, ingredientes rastreáveis e informação de dosagem acessível antes mesmo de abrir a embalagem.",
      },
      {
        label: "Alegria",
        text: "Sentir que finalmente encontrou uma rotina de suplementação que é ao mesmo tempo prática, saborosa e alinhada com seus valores de bem-estar.",
      },
    ],
  },
  traceability: {
    title: "Rastreabilidade de Decisão",
    lead: "Cada decisão de UX da PDP nasce de um insight específico de Cristina, não de preferência estética. A seguir, o mapeamento direto entre dor/motivação/expectativa/alegria e a escolha de design correspondente.",
    decisionLabel: "Decisão de design",
    rows: [
      {
        label: "Dor",
        text: 'Já foi enganada por suplementos "milagrosos" e desconfia de embalagens apelativas.',
        decision:
          "A goma tem formato de pastilha arredondada, não de bala de fruta infantil. A fotografia de produto segue linha editorial séria, sem estética artificial de IA.",
      },
      {
        label: "Motivação",
        text: "Manter energia na rotina sem abrir mão de praticidade.",
        decision:
          "O seletor de kits e o desconto progressivo ficam concentrados na Buy Box, resolvendo escolha de quantidade e vantagem comercial em um único gesto.",
      },
      {
        label: "Expectativa",
        text: "Transparência total, com ingredientes rastreáveis e dosagem acessível.",
        decision:
          "A tabela nutricional aparece já na primeira imagem do carrossel e ganha uma seção própria na PDP, ao lado de destaques dos principais benefícios do produto.",
      },
      {
        label: "Alegria",
        text: "Encontrar uma rotina prática, saborosa e alinhada aos seus valores.",
        decision:
          "A fotografia de produto e os sabores priorizam uma estética sensorial e autêntica, com mulheres brasileiras reais, não um visual estéril de farmácia.",
      },
    ],
  },
  wireframes: {
    title: "Wireframes",
    lead: "Antes da camada estética, testamos a estrutura em wireframes de baixa e média fidelidade no Figma, validando onde a Buy Box, o seletor de kits e as tabelas nutricionais deveriam ficar para captar atenção no momento certo da jornada.",
    altDesktop: "CÈFFY: wireframes desktop de home, produto e carrinho",
    altMobile: "CÈFFY: wireframes mobile de home, produto, carrinho e entrega",
  },
  styleGuide: {
    title: "Style Guide",
    lead: "Desenhado mobile-first, já que a maior parte do tráfego vem do celular: touch targets confortáveis, verde institucional que comunica saúde sem parecer infantil, e tipografia pensada para legibilidade de dosagens em telas pequenas.",
    alt: "CÈFFY: tipografia (Plus Jakarta Sans nos títulos, Inter no corpo e na legenda) e paleta de cores em verdes institucionais e neutros",
  },
  ui: {
    title: "UI Design",
    lead: "Da Home à confirmação do pedido, cada tela guia a usuária com fluidez. Na PDP, a Buy Box concentra o desconto progressivo e o seletor de kits em um único gesto de decisão.",
    altMockups:
      "CÈFFY: mockups da página de produto, home mobile, resumo do pedido e carrinho lateral",
    altHome: "CÈFFY: home do e-commerce em página inteira",
    homeCaption: "Homepage",
  },
  engineering: {
    title: "Engenharia PHP",
    lead: "Kits e desconto progressivo por quantidade são, tecnicamente, duas lógicas de desconto que competem pelo mesmo carrinho. Resolver esse conflito, sem depender de plugins genéricos, exigiu uma cadeia de 12 hooks coordenados no ciclo de vida do WooCommerce, não um shortcode isolado.",
    rows: [
      {
        title: "Fee condicional",
        text: "O desconto do kit só é aplicado quando o número de peças no carrinho bate exatamente com o esperado; kit incompleto nunca gera desconto indevido.",
      },
      {
        title: "Isenção de conflito",
        text: "Antes da fee ser calculada, os itens de kit são forçados de volta ao preço cheio para não colidir com o desconto progressivo por quantidade.",
      },
      {
        title: "Frete consolidado",
        text: "Os componentes soltos do kit são unificados num pacote virtual só para o cálculo de frete, usando peso e dimensão do produto pai.",
      },
      {
        title: "Desmembramento reverso",
        text: "Se a cliente remove um componente, os irmãos sobreviventes viram produtos normais, elegíveis ao desconto por Tiers.",
      },
      {
        title: "Split por quantidade",
        text: "Levar 2 unidades de um item de kit trava a linha em 1 e envia o excedente como produto avulso, com desconto progressivo próprio.",
      },
    ],
    facts: [
      "12 hooks coordenados",
      "Zero conflitos entre kit e desconto progressivo",
      "Carrinho íntegro em qualquer ação da cliente",
    ],
  },
  performance: {
    title: "Performance",
    lead: "Sem histórico de tráfego para citar impacto comercial, a prova concreta está na performance de produção medida antes da entrega: 95 de score médio no PageSpeed, validado em Desktop e Mobile, sem depender de estimativa.",
    score: "Score",
    columns: { desktop: "Desktop", mobile: "Mobile" },
    cards: [
      {
        title: "Design & Experiência",
        text: "Sistema visual mobile-first completo, da paleta institucional ao checkout, testado em wireframe antes da UI final, sem retrabalho de estrutura.",
      },
      {
        title: "Engenharia sob medida",
        text: "12 hooks coordenados resolvendo kit, desconto progressivo, frete e fiscal no mesmo carrinho, sem depender de plugin genérico e sem conflito entre regras.",
      },
      {
        title: "Performance validada",
        text: "Auditoria PageSpeed pós-deploy, não estimativa: 92 de Performance em Desktop e Mobile, medidos no site real, antes da entrega.",
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
    title: "Reflexão Final",
    lead: "Se este projeto tivesse uma segunda fase, o maior ganho não estaria na UI, e sim em fechar o ciclo entre decisão de design e comportamento real. A validação de fluxo até aqui foi uma revisão heurística feita por nós, complementada por feedback estruturado dos stakeholders sobre os wireframes, o que é suficiente para reduzir risco técnico, mas não substitui teste moderado com a persona real antes da UI final. O próximo passo natural é instrumentar analytics desde o dia zero, para poder voltar a este case daqui a alguns meses com dado de conversão real, não apenas performance técnica.",
  },
});
