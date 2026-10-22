import type { CaseSectionDoc } from "@/lib/case-doc";

const IMG = "/images/cases/organicamente";

const GREEN = "#1c4533";
const WHITE = "#ffffff";
const CREAM = "#f7f6f2";

export type OrganicamenteTexts = {
  about: { title: string; lead: string; tags: string[]; alt: string };
  summary: { title: string; alt: string };
  context: { title: string; lead: string; alt: string };
  problem: { title: string; altSides: string; altNumbers: string; altForms: string };
  users: { title: string; lead: string; alt: string };
  discovery: {
    title: string;
    lead: string;
    hypothesis: string;
    hypothesisNote: string;
    alt: string;
  };
  decisions: { title: string; lead: string; alt: string };
  discarded: { title: string; alt: string };
  solution: { title: string; lead: string; alt: string };
  admin: {
    title: string;
    lead: string;
    altFeatures: string;
    altOverview: string;
    altScreens: string;
  };
  system: {
    title: string;
    lead: string;
    altNumbers: string;
    altShowcase: string;
    altDecisions: string;
    note: string;
  };
  results: {
    title: string;
    lead: string;
    altHighlights: string;
    altTable: string;
    note: string;
  };
  learnings: { title: string; lead: string };
};

type Img = { name: string; w: number; h: number };

function panel(
  img: Img,
  alt: string,
  bg: string,
  narrow = false,
  maxWidth?: number,
) {
  return {
    type: "image" as const,
    src: `${IMG}/${img.name}.webp`,
    width: img.w,
    height: img.h,
    alt,
    panel: bg,
    narrow,
    maxWidth,
  };
}

export function buildOrganicamenteSections(
  t: OrganicamenteTexts,
): CaseSectionDoc[] {
  return [
    {
      number: "01",
      title: t.about.title,
      lead: t.about.lead,
      blocks: [
        { type: "tags", items: t.about.tags },
        panel({ name: "capa-mockup", w: 2551, h: 1167 }, t.about.alt, GREEN),
      ],
    },
    {
      number: "02",
      title: t.summary.title,
      tone: "muted",
      blocks: [
        panel({ name: "ficha", w: 1742, h: 782 }, t.summary.alt, WHITE, true),
      ],
    },
    {
      number: "03",
      title: t.context.title,
      lead: t.context.lead,
      blocks: [
        panel({ name: "contexto", w: 1742, h: 193 }, t.context.alt, CREAM, true),
      ],
    },
    {
      number: "04",
      title: t.problem.title,
      tone: "muted",
      blocks: [
        panel({ name: "problema-lados", w: 2551, h: 544 }, t.problem.altSides, WHITE),
        panel({ name: "problema-numeros", w: 2551, h: 216 }, t.problem.altNumbers, WHITE),
        panel({ name: "problema-forms", w: 2551, h: 1244 }, t.problem.altForms, WHITE),
      ],
    },
    {
      number: "05",
      title: t.users.title,
      lead: t.users.lead,
      blocks: [
        panel({ name: "usuarios", w: 2551, h: 517 }, t.users.alt, CREAM),
      ],
    },
    {
      number: "06",
      title: t.discovery.title,
      lead: t.discovery.lead,
      tone: "muted",
      blocks: [
        { type: "statement", text: t.discovery.hypothesis },
        { type: "note", text: t.discovery.hypothesisNote },
        panel({ name: "linha-de-base", w: 778, h: 840 }, t.discovery.alt, WHITE, true, 520),
      ],
    },
    {
      number: "07",
      title: t.decisions.title,
      lead: t.decisions.lead,
      blocks: [
        panel({ name: "decisoes", w: 2551, h: 1954 }, t.decisions.alt, CREAM),
      ],
    },
    {
      number: "08",
      title: t.discarded.title,
      tone: "muted",
      blocks: [
        panel({ name: "descartei", w: 1742, h: 681 }, t.discarded.alt, WHITE, true),
      ],
    },
    {
      number: "09",
      title: t.solution.title,
      lead: t.solution.lead,
      blocks: [
        panel({ name: "inscricao-fluxo", w: 2551, h: 1686 }, t.solution.alt, CREAM),
      ],
    },
    {
      number: "10",
      title: t.admin.title,
      lead: t.admin.lead,
      tone: "muted",
      blocks: [
        panel({ name: "painel-funcoes", w: 2551, h: 517 }, t.admin.altFeatures, WHITE),
        panel({ name: "painel-visao-geral", w: 2551, h: 1361 }, t.admin.altOverview, WHITE),
        panel({ name: "painel-entregas-ficha", w: 2551, h: 856 }, t.admin.altScreens, WHITE),
      ],
    },
    {
      number: "11",
      title: t.system.title,
      lead: t.system.lead,
      blocks: [
        panel({ name: "ds-numeros", w: 2551, h: 249 }, t.system.altNumbers, CREAM),
        panel({ name: "ds-vitrine", w: 2551, h: 953 }, t.system.altShowcase, CREAM),
        panel({ name: "ds-decisoes", w: 2551, h: 416 }, t.system.altDecisions, CREAM),
        { type: "note", text: t.system.note },
      ],
    },
    {
      number: "12",
      title: t.results.title,
      lead: t.results.lead,
      tone: "muted",
      blocks: [
        panel({ name: "resultado-destaques", w: 2551, h: 506 }, t.results.altHighlights, WHITE),
        panel({ name: "resultado-tabela", w: 2551, h: 774 }, t.results.altTable, WHITE),
        { type: "note", text: t.results.note },
      ],
    },
    {
      number: "13",
      title: t.learnings.title,
      lead: t.learnings.lead,
      tone: "dark",
    },
  ];
}
