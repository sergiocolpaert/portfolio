import type { CaseFrontmatter } from "@/lib/cases";
import { buildCeffySections } from "./build";

export const meta: CaseFrontmatter = {
  title: "Goma que se leva a sério",
  client: "CÈFFY",
  role: "Product Designer",
  tagline: "Uma marca de suplementos que conquistou a confiança de quem desconfiava do formato.",
};

export const sections = buildCeffySections({
  about: {
    title: "Sobre",
    lead: "A CÈFFY queria vender suplementação em goma como categoria premium de longevidade, para mulheres que já foram enganadas por promessas milagrosas e associam goma a produto infantil. Meu trabalho foi traduzir essa desconfiança em decisões de produto. A arquitetura se organiza por objetivo (energia, sono, longevidade) e não por categoria. A página de produto coloca transparência nutricional e escolha de kit no mesmo momento da decisão. E a lógica de kits e descontos foi desenhada junto com a engenharia, para o carrinho nunca contradizer o que a interface promete.",
    tags: ["Discovery", "Arquitetura da informação", "Conversão", "Design System", "E-commerce"],
    alt: "CÈFFY: página de produto da Creatina em um laptop",
  },
  problem: {
    title: "Problema",
    text: "O desafio era duplo. De um lado, convencer um público maduro de que suplementação em goma é coisa séria, superando a associação do formato com produto infantil. Do outro, viabilizar kits flexíveis, desconto progressivo e emissão fiscal automatizada, recursos que o WooCommerce nativo não suporta.",
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
    lead: "A arquitetura da CÈFFY foi desenhada em torno de pilares de saúde, não de categorias de produto. O fluxo permite que a cliente chegue da Home ao checkout guiada por objetivo (Energia, Sono ou Longevidade), sem carga cognitiva desnecessária.",
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
  constraint: {
    title: "A restrição que moldou o design",
    lead: "A Buy Box promete kit e desconto progressivo num único gesto. No WooCommerce nativo, essas são duas regras de desconto que competem pelo mesmo carrinho, e sem resolver o conflito a interface mostraria um preço que o carrinho não entrega. Por isso, as regras do carrinho foram desenhadas como parte da experiência, junto com a engenharia, e viraram uma cadeia de hooks sob medida em PHP.",
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
    codeLabel: "Ver trecho do código",
  },
  signals: {
    title: "Primeiros sinais de comportamento",
    lead: "A loja roda com Hotjar. Antes de olhar os dados, defini quais sinais confirmam ou derrubam cada decisão da PDP. Os achados, e o que mudar a partir deles, entram aqui quando houver volume de sessões suficiente para conclusão.",
    decisionLabel: "Decisão em teste",
    rows: [
      {
        label: "Buy Box",
        text: "Cliques no seletor de kits e no botão de compra, em relação às sessões na PDP.",
        decision: "Concentrar kit e desconto progressivo na Buy Box resolve a escolha em um único gesto.",
      },
      {
        label: "Tabela nutricional",
        text: "Scroll até a seção nutricional antes do clique em comprar.",
        decision: "A transparência é consultada antes da compra, como a persona indicava.",
      },
      {
        label: "Carrinho",
        text: "Abandono depois que um kit ou desconto é aplicado.",
        decision: "O carrinho sustenta o preço que a Buy Box prometeu, sem surpresa no checkout.",
      },
    ],
  },
  performance: {
    title: "Performance técnica",
    lead: "Auditoria PageSpeed no site em produção, antes da entrega. É evidência de qualidade técnica, não de impacto no negócio.",
    labels: ["Performance", "Acessibilidade", "Boas práticas", "SEO"],
    columns: { desktop: "Desktop", mobile: "Mobile" },
  },
  reflection: {
    title: "Reflexão Final",
    lead: "Se este projeto tivesse uma segunda fase, o maior ganho não estaria na UI, e sim em fechar o ciclo entre decisão de design e comportamento real. A validação de fluxo até aqui foi uma revisão heurística feita por nós, complementada por feedback estruturado dos stakeholders sobre os wireframes, o que é suficiente para reduzir risco técnico, mas não substitui teste moderado com a persona real antes da UI final. O próximo passo é ler os sinais acima com volume suficiente e voltar a este case com dado de comportamento e conversão real, não apenas performance técnica.",
  },
});
