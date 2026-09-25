import type { CaseSectionDoc } from "@/lib/case-doc";

const IMG = "/images/cases/ceffy";

export type CeffyTexts = {
  about: {
    title: string;
    lead: string;
    tags: string[];
    alt: string;
    creditLabel: string;
  };
  problem: {
    title: string;
    quote: string;
    author: string;
    role: string;
  };
  process: {
    title: string;
    lead: string;
    steps: { title: string; tags: string[] }[];
    week: string;
  };
  architecture: {
    title: string;
    lead: string;
    columns: { title: string; items: string[] }[];
  };
  persona: {
    title: string;
    lead: string;
    name: string;
    role: string;
    cards: { label: string; text: string }[];
  };
  traceability: {
    title: string;
    lead: string;
    decisionLabel: string;
    rows: { label: string; text: string; decision: string }[];
  };
  wireframes: {
    title: string;
    lead: string;
    altDesktop: string;
    altMobile: string;
  };
  styleGuide: { title: string; lead: string; alt: string };
  ui: {
    title: string;
    lead: string;
    altMockups: string;
    altHome: string;
    homeCaption: string;
  };
  engineering: {
    title: string;
    lead: string;
    rows: { title: string; text: string }[];
    facts: string[];
  };
  performance: {
    title: string;
    lead: string;
    score: string;
    cards: { title: string; text: string }[];
    rows: { label: string; status: string }[];
    columns: { desktop: string; mobile: string };
  };
  reflection: { title: string; lead: string };
};

const CODE = `// K8. Fee só aplica com o kit completo no carrinho
if ( $i['discount'] > 0 && $i['expected'] > 0 && $i['live'] >= $i['expected'] ) {
    $cart->add_fee( 'Desconto Kit: ' . $i['label'], -$i['discount'] );
}`;

const SCORES = [
  { desktop: 92, mobile: 90 },
  { desktop: 95, mobile: 95 },
  { desktop: 100, mobile: 100 },
  { desktop: 92, mobile: 92 },
];

export function buildCeffySections(t: CeffyTexts): CaseSectionDoc[] {
  return [
    {
      number: "01",
      title: t.about.title,
      lead: t.about.lead,
      blocks: [
        { type: "tags", items: t.about.tags },
        {
          type: "credits",
          label: t.about.creditLabel,
          people: [
            {
              name: "Gabriel Ribeiro",
              href: "https://www.behance.net/Gabrielribeiroalves",
            },
          ],
        },
        {
          type: "image",
          src: `${IMG}/mockup-creatina.webp`,
          width: 2738,
          height: 1560,
          alt: t.about.alt,
        },
      ],
    },
    {
      number: "02",
      title: t.problem.title,
      tone: "dark",
      blocks: [
        {
          type: "quote",
          text: t.problem.quote,
          author: t.problem.author,
          role: t.problem.role,
        },
      ],
    },
    {
      number: "03",
      title: t.process.title,
      lead: t.process.lead,
      blocks: [
        {
          type: "steps",
          items: t.process.steps,
          ticks: [1, 2, 3, 4, 5].map((n) => `${t.process.week} ${n}`),
        },
      ],
    },
    {
      number: "04",
      title: t.architecture.title,
      lead: t.architecture.lead,
      tone: "muted",
      blocks: [{ type: "sitemap", columns: t.architecture.columns }],
    },
    {
      number: "05",
      title: t.persona.title,
      lead: t.persona.lead,
      blocks: [
        {
          type: "persona",
          name: t.persona.name,
          role: t.persona.role,
          image: `${IMG}/persona.webp`,
          cards: t.persona.cards,
        },
      ],
    },
    {
      number: "06",
      title: t.traceability.title,
      lead: t.traceability.lead,
      tone: "muted",
      blocks: [
        {
          type: "mapping",
          decisionLabel: t.traceability.decisionLabel,
          rows: t.traceability.rows,
        },
      ],
    },
    {
      number: "07",
      title: t.wireframes.title,
      lead: t.wireframes.lead,
      blocks: [
        {
          type: "image",
          src: `${IMG}/wireframes-desktop.webp`,
          width: 2738,
          height: 1560,
          alt: t.wireframes.altDesktop,
        },
        {
          type: "image",
          src: `${IMG}/wireframes-mobile.webp`,
          width: 2738,
          height: 1560,
          alt: t.wireframes.altMobile,
        },
      ],
    },
    {
      number: "08",
      title: t.styleGuide.title,
      lead: t.styleGuide.lead,
      tone: "muted",
      blocks: [
        {
          type: "image",
          src: `${IMG}/style-guide.webp`,
          width: 2520,
          height: 690,
          alt: t.styleGuide.alt,
        },
      ],
    },
    {
      number: "09",
      title: t.ui.title,
      lead: t.ui.lead,
      blocks: [
        {
          type: "image",
          src: `${IMG}/ui-mockups.webp`,
          width: 2738,
          height: 3760,
          alt: t.ui.altMockups,
        },
        {
          type: "image",
          src: `${IMG}/homepage.webp`,
          width: 2488,
          height: 7524,
          alt: t.ui.altHome,
          caption: t.ui.homeCaption,
          narrow: true,
        },
      ],
    },
    {
      number: "10",
      title: t.engineering.title,
      lead: t.engineering.lead,
      tone: "dark",
      blocks: [
        { type: "speclist", rows: t.engineering.rows },
        { type: "code", code: CODE },
        { type: "facts", items: t.engineering.facts },
      ],
    },
    {
      number: "11",
      title: t.performance.title,
      lead: t.performance.lead,
      blocks: [
        {
          type: "scores",
          score: { label: t.performance.score, value: 95 },
          cards: t.performance.cards,
          columns: t.performance.columns,
          rows: t.performance.rows.map((r, i) => ({ ...r, ...SCORES[i] })),
        },
      ],
    },
    {
      number: "12",
      title: t.reflection.title,
      lead: t.reflection.lead,
      tone: "dark",
    },
  ];
}
