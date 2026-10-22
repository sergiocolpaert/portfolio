import type { CaseSectionDoc } from "@/lib/case-doc";

const IMG = "/images/cases/organicamente";

type Row = { title: string; text: string };
type Mapping = { label: string; text: string; decision: string };

export type OrganicamenteTexts = {
  about: { title: string; lead: string; tags: string[]; alt: string };
  summary: { title: string; rows: Row[] };
  context: { title: string; lead: string; steps: string[]; stepLabel: string };
  problem: {
    title: string;
    rows: Row[];
    stats: { label: string; value: string }[];
    altForms: string;
  };
  users: { title: string; lead: string; rows: Row[] };
  discovery: {
    title: string;
    lead: string;
    stats: { label: string; value: string }[];
    hypothesis: string;
    hypothesisNote: string;
  };
  decisions: {
    title: string;
    lead: string;
    decisionLabel: string;
    rows: Mapping[];
  };
  discarded: { title: string; rows: Row[] };
  solution: {
    title: string;
    lead: string;
    altFlow: string;
    steps: { title: string; items: string[] }[];
    note: string;
  };
  admin: {
    title: string;
    lead: string;
    modules: { title: string; items: string[] }[];
    altMockup: string;
    altScreens: string;
  };
  system: {
    title: string;
    lead: string;
    stats: { label: string; value: string }[];
    alt: string;
    rows: Row[];
    note: string;
  };
  results: {
    title: string;
    lead: string;
    decisionLabel: string;
    rows: Mapping[];
    note: string;
  };
  learnings: { title: string; lead: string };
};

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
        {
          type: "image",
          src: `${IMG}/mockup-about.webp`,
          width: 2553,
          height: 1167,
          alt: t.about.alt,
          rounded: true,
        },
      ],
    },
    {
      number: "02",
      title: t.summary.title,
      tone: "muted",
      blocks: [{ type: "speclist", rows: t.summary.rows }],
    },
    {
      number: "03",
      title: t.context.title,
      lead: t.context.lead,
      blocks: [
        {
          type: "stats",
          items: t.context.steps.map((value, i) => ({
            label: `${t.context.stepLabel} ${i + 1}`,
            value,
          })),
        },
      ],
    },
    {
      number: "04",
      title: t.problem.title,
      tone: "dark",
      blocks: [
        { type: "speclist", rows: t.problem.rows },
        { type: "stats", items: t.problem.stats },
        {
          type: "image",
          src: `${IMG}/forms-antigo.webp`,
          width: 2557,
          height: 1247,
          alt: t.problem.altForms,
          rounded: true,
        },
      ],
    },
    {
      number: "05",
      title: t.users.title,
      lead: t.users.lead,
      blocks: [{ type: "speclist", rows: t.users.rows }],
    },
    {
      number: "06",
      title: t.discovery.title,
      lead: t.discovery.lead,
      tone: "muted",
      blocks: [
        { type: "stats", items: t.discovery.stats },
        { type: "statement", text: t.discovery.hypothesis },
        { type: "note", text: t.discovery.hypothesisNote },
      ],
    },
    {
      number: "07",
      title: t.decisions.title,
      lead: t.decisions.lead,
      blocks: [
        {
          type: "mapping",
          decisionLabel: t.decisions.decisionLabel,
          rows: t.decisions.rows,
        },
      ],
    },
    {
      number: "08",
      title: t.discarded.title,
      tone: "muted",
      blocks: [{ type: "speclist", rows: t.discarded.rows }],
    },
    {
      number: "09",
      title: t.solution.title,
      lead: t.solution.lead,
      blocks: [
        {
          type: "image",
          src: `${IMG}/fluxo-inscricao.webp`,
          width: 2548,
          height: 1070,
          alt: t.solution.altFlow,
        },
        {
          type: "sitemap",
          columns: t.solution.steps.map((s) => ({
            title: s.title,
            items: s.items,
          })),
        },
        { type: "note", text: t.solution.note },
      ],
    },
    {
      number: "10",
      title: t.admin.title,
      lead: t.admin.lead,
      tone: "dark",
      blocks: [
        { type: "sitemap", columns: t.admin.modules },
        {
          type: "image",
          src: `${IMG}/painel-mockup.webp`,
          width: 2550,
          height: 1360,
          alt: t.admin.altMockup,
          rounded: true,
        },
        {
          type: "image",
          src: `${IMG}/painel-telas.webp`,
          width: 2550,
          height: 855,
          alt: t.admin.altScreens,
          rounded: true,
        },
      ],
    },
    {
      number: "11",
      title: t.system.title,
      lead: t.system.lead,
      blocks: [
        { type: "stats", items: t.system.stats },
        {
          type: "image",
          src: `${IMG}/design-system.webp`,
          width: 2549,
          height: 950,
          alt: t.system.alt,
        },
        { type: "speclist", rows: t.system.rows },
        { type: "note", text: t.system.note },
      ],
    },
    {
      number: "12",
      title: t.results.title,
      lead: t.results.lead,
      tone: "muted",
      blocks: [
        {
          type: "mapping",
          decisionLabel: t.results.decisionLabel,
          rows: t.results.rows,
        },
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
