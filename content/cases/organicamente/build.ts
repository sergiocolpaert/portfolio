import type { CaseBlock, CaseSectionDoc } from "@/lib/case-doc";

const IMG = "/images/cases/organicamente";

type Row = { label: string; text: string };

export type OrganicamenteTexts = {
  about: { title: string; lead: string; tags: string[]; alt: string };
  summary: { title: string; rows: Row[] };
  context: { title: string; lead: string; stepLabel: string; steps: string[] };
  problem: {
    title: string;
    sides: Row[];
    kpis: { label: string; value: string; caption: string }[];
    altRules: string;
    altFields: string;
  };
  users: {
    title: string;
    lead: string;
    cards: { label: string; text: string; tags: string[] }[];
  };
  discovery: {
    title: string;
    lead: string;
    metric: {
      label: string;
      value: string;
      caption: string;
      rows: { label: string; value: string }[];
      note: string;
    };
    hypothesis: string;
    hypothesisNote: string;
  };
  decisions: {
    title: string;
    lead: string;
    decisionLabel: string;
    rows: { label: string; text: string; decision: string }[];
  };
  discarded: {
    title: string;
    items: { kind: "no" | "yes"; title: string; text: string }[];
  };
  solution: {
    title: string;
    lead: string;
    screens: { title: string; caption: string; alt: string }[];
    note: string;
  };
  admin: {
    title: string;
    lead: string;
    features: { title: string; text: string }[];
    altOverview: string;
    altDeliveries: string;
    altProfile: string;
  };
  system: {
    title: string;
    lead: string;
    kpis: { label: string; value: string; caption: string }[];
    fonts: { name: string; weights: string[] }[];
    decisions: { title: string; text: string }[];
    note: string;
  };
  results: {
    title: string;
    lead: string;
    metrics: {
      label: string;
      value: string;
      caption: string;
      note: string;
    }[];
    columns: string[];
    rows: {
      cells: string[];
      status: string;
      tone: "good" | "info" | "neutral";
    }[];
    note: string;
  };
  learnings: { title: string; lead: string };
};

const SWATCHES = [
  { name: "primary", colors: ["#1C4533"] },
  { name: "primary-light", colors: ["#2B684F"] },
  { name: "secondary", colors: ["#51B888"] },
  { name: "accent", colors: ["#EBF5EF"] },
  { name: "bg", colors: ["#F7F6F2"] },
  { name: "text", colors: ["#2D322E"] },
  { name: "success", colors: ["#2B684F"] },
  { name: "warning", colors: ["#945610"] },
  { name: "danger", colors: ["#B42322"] },
  { name: "info", colors: ["#215D9F"] },
];

const screen = (name: string, w: number, h: number) => ({
  src: `${IMG}/${name}.webp`,
  width: w,
  height: h,
});

export function buildOrganicamenteSections(
  t: OrganicamenteTexts,
): CaseSectionDoc[] {
  const flow: CaseBlock = {
    type: "screens",
    items: t.solution.screens.map((s, i) => ({
      ...screen(`passo-${i + 1}`, 485, i === 0 ? 1056 : 1069),
      ...s,
    })),
  };

  return [
    {
      number: "01",
      title: t.about.title,
      lead: t.about.lead,
      blocks: [
        { type: "tags", items: t.about.tags },
        {
          type: "image",
          ...screen("capa-mockup", 2551, 1167),
          alt: t.about.alt,
          rounded: true,
        },
      ],
    },
    {
      number: "02",
      title: t.summary.title,
      tone: "muted",
      blocks: [{ type: "facts", rows: t.summary.rows }],
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
      tone: "muted",
      blocks: [
        { type: "cards", items: t.problem.sides },
        { type: "kpis", items: t.problem.kpis },
        {
          type: "gallery",
          items: [
            { ...screen("forms-regras", 1252, 1244), alt: t.problem.altRules },
            { ...screen("forms-campos", 1252, 1244), alt: t.problem.altFields },
          ],
        },
      ],
    },
    {
      number: "05",
      title: t.users.title,
      lead: t.users.lead,
      blocks: [{ type: "cards", items: t.users.cards }],
    },
    {
      number: "06",
      title: t.discovery.title,
      lead: t.discovery.lead,
      tone: "muted",
      blocks: [
        { type: "statement", text: t.discovery.hypothesis },
        { type: "note", text: t.discovery.hypothesisNote },
        { type: "metrics", items: [{ ...t.discovery.metric, dark: true }] },
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
      blocks: [{ type: "verdicts", items: t.discarded.items }],
    },
    {
      number: "09",
      title: t.solution.title,
      lead: t.solution.lead,
      blocks: [flow, { type: "note", text: t.solution.note }],
    },
    {
      number: "10",
      title: t.admin.title,
      lead: t.admin.lead,
      tone: "muted",
      blocks: [
        { type: "cards", cols: 4, items: t.admin.features },
        {
          type: "image",
          ...screen("painel-visao-geral", 2551, 1361),
          alt: t.admin.altOverview,
          rounded: true,
        },
        {
          type: "gallery",
          items: [
            { ...screen("painel-entregas", 1252, 856), alt: t.admin.altDeliveries },
            { ...screen("painel-ficha", 1252, 856), alt: t.admin.altProfile },
          ],
        },
      ],
    },
    {
      number: "11",
      title: t.system.title,
      lead: t.system.lead,
      blocks: [
        { type: "kpis", items: t.system.kpis },
        { type: "palette", swatches: SWATCHES, fonts: t.system.fonts },
        { type: "speclist", rows: t.system.decisions },
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
          type: "metrics",
          items: t.results.metrics.map((m, i) => ({ ...m, dark: i === 0 })),
        },
        { type: "table", columns: t.results.columns, rows: t.results.rows },
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
