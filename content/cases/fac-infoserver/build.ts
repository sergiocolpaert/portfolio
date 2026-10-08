import type { CaseFrontmatter } from "@/lib/cases";
import type { CaseSectionDoc } from "@/lib/case-doc";

const IMG = "/images/cases/fac-infoserver";

export type FacTexts = {
  meta: CaseFrontmatter;
  about: {
    title: string;
    lead: string;
    stats: { label: string; value: string }[];
    tags: string[];
  };
  challenge: {
    eyebrow: string;
    title: string;
    lead: string;
    alt: string;
  };
  process: {
    title: string;
    lead?: string;
    steps: { title: string; caption: string; tags: string[] }[];
    note: string;
  };
  decisions: {
    eyebrow: string;
    title: string;
    lead: string;
    decisionLabel: string;
    rows: { label: string; text: string; decision: string }[];
    altWireframes: string;
    altFinal: string;
  };
  mobile: {
    eyebrow: string;
    title: string;
    lead: string;
    altScreens: string;
    altPhoto: string;
  };
  system: { eyebrow: string; title: string };
};

const STEP_HOURS = [8, 20, 10, 2];

export function buildFacSections(t: FacTexts): CaseSectionDoc[] {
  return [
    {
      number: "01",
      title: t.about.title,
      lead: t.about.lead,
      blocks: [
        { type: "stats", items: t.about.stats },
        { type: "tags", items: t.about.tags },
      ],
    },
    {
      number: "02",
      eyebrow: t.challenge.eyebrow,
      title: t.challenge.title,
      lead: t.challenge.lead,
      tone: "dark",
      blocks: [
        {
          type: "image",
          src: `${IMG}/challenge.webp`,
          width: 2387,
          height: 2412,
          alt: t.challenge.alt,
          rounded: true,
        },
      ],
    },
    {
      number: "03",
      title: t.process.title,
      lead: t.process.lead,
      tone: "muted",
      blocks: [
        {
          type: "steps",
          items: t.process.steps.map((s, i) => ({
            ...s,
            weight: STEP_HOURS[i],
          })),
          ticks: ["00", "10", "20", "30", "40"],
        },
        { type: "note", text: t.process.note },
      ],
    },
    {
      number: "04",
      eyebrow: t.decisions.eyebrow,
      title: t.decisions.title,
      lead: t.decisions.lead,
      blocks: [
        {
          type: "mapping",
          decisionLabel: t.decisions.decisionLabel,
          rows: t.decisions.rows,
        },
        {
          type: "image",
          src: `${IMG}/wireframes.webp`,
          width: 2399,
          height: 1606,
          alt: t.decisions.altWireframes,
          rounded: true,
        },
        {
          type: "image",
          src: `${IMG}/design-final.webp`,
          width: 2399,
          height: 1610,
          alt: t.decisions.altFinal,
          rounded: true,
        },
      ],
    },
    {
      number: "05",
      eyebrow: t.system.eyebrow,
      title: t.system.title,
      tone: "muted",
      blocks: [
        {
          type: "palette",
          swatches: [
            { colors: ["#5573CD", "#40A4DB"] },
            { colors: ["#FFFFFF", "#D9D9D9"] },
          ],
          fonts: [
            { name: "Syne", weights: ["Medium", "SemiBold"] },
            {
              name: "Plus Jakarta Sans",
              weights: ["Light", "Regular", "Medium"],
            },
          ],
        },
      ],
    },
    {
      number: "06",
      eyebrow: t.mobile.eyebrow,
      title: t.mobile.title,
      lead: t.mobile.lead,
      tone: "dark",
      blocks: [
        {
          type: "image",
          src: `${IMG}/mobile.webp`,
          width: 2399,
          height: 2426,
          alt: t.mobile.altScreens,
          rounded: true,
        },
        {
          type: "image",
          src: `${IMG}/mobile-photo.webp`,
          width: 2395,
          height: 1598,
          alt: t.mobile.altPhoto,
          rounded: true,
        },
      ],
    },
  ];
}
