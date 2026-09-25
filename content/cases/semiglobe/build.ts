import type { CaseFrontmatter } from "@/lib/cases";
import type { CaseSectionDoc } from "@/lib/case-doc";

const IMG = "/images/cases/semiglobe";

export type SemiglobeTexts = {
  meta: CaseFrontmatter;
  about: {
    title: string;
    lead: string;
    stats: { label: string; value: string }[];
    tags: string[];
    creditLabel: string;
    creditName: string;
    alt: string;
  };
  process: {
    title: string;
    stats: { label: string; value: string }[];
    steps: { title: string; caption: string; tags: string[] }[];
  };
  wireframe: { eyebrow: string; title: string; lead: string; alt: string };
  ui: {
    eyebrow: string;
    title: string;
    lead: string;
    altHero: string;
    altScreens: string;
    altHome: string;
    homeCaption: string;
  };
  system: {
    eyebrow: string;
    title: string;
  };
};

const STEP_DAYS = [7, 28, 18, 2];

export function buildSemiglobeSections(t: SemiglobeTexts): CaseSectionDoc[] {
  return [
    {
      number: "01",
      title: t.about.title,
      lead: t.about.lead,
      blocks: [
        { type: "stats", items: t.about.stats },
        { type: "tags", items: t.about.tags },
        {
          type: "credits",
          label: t.about.creditLabel,
          people: [{ name: t.about.creditName }],
        },
        {
          type: "image",
          src: `${IMG}/mockup-about.webp`,
          width: 2387,
          height: 1592,
          alt: t.about.alt,
          rounded: true,
        },
      ],
    },
    {
      number: "02",
      title: t.process.title,
      tone: "muted",
      blocks: [
        { type: "stats", items: t.process.stats },
        {
          type: "steps",
          items: t.process.steps.map((s, i) => ({
            ...s,
            weight: STEP_DAYS[i],
          })),
          ticks: ["00", "15", "30", "45", "60"],
        },
      ],
    },
    {
      number: "03",
      eyebrow: t.wireframe.eyebrow,
      title: t.wireframe.title,
      lead: t.wireframe.lead,
      blocks: [
        {
          type: "image",
          src: `${IMG}/wireframes.webp`,
          width: 2399,
          height: 1606,
          alt: t.wireframe.alt,
          rounded: true,
        },
      ],
    },
    {
      number: "04",
      eyebrow: t.ui.eyebrow,
      title: t.ui.title,
      lead: t.ui.lead,
      tone: "dark",
      blocks: [
        {
          type: "image",
          src: `${IMG}/ui-hero.webp`,
          width: 2387,
          height: 1592,
          alt: t.ui.altHero,
          rounded: true,
        },
        {
          type: "image",
          src: `${IMG}/ui-screens.webp`,
          width: 2399,
          height: 1602,
          alt: t.ui.altScreens,
          rounded: true,
        },
        {
          type: "image",
          src: `${IMG}/homepage.webp`,
          width: 1200,
          height: 6846,
          alt: t.ui.altHome,
          caption: t.ui.homeCaption,
          narrow: true,
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
          swatches: ["#006AFF", "#0004FF", "#0B35AB", "#090C13", "#FFFFFF", "#F6F6F6"].map(
            (c) => ({ colors: [c] }),
          ),
          fonts: [
            {
              name: "Plus Jakarta Sans",
              weights: ["Light", "Regular", "Medium", "SemiBold"],
            },
          ],
        },
      ],
    },
  ];
}
