export type CaseTone = "light" | "muted" | "dark";

export type CaseBlock =
  | { type: "tags"; items: string[] }
  | { type: "quote"; text: string; author: string; role: string }
  | {
      type: "image";
      src: string;
      width: number;
      height: number;
      alt: string;
      caption?: string;
      narrow?: boolean;
    }
  | {
      type: "steps";
      items: { title: string; tags: string[] }[];
      ticks: string[];
    }
  | { type: "sitemap"; columns: { title: string; items: string[] }[] }
  | {
      type: "persona";
      name: string;
      role: string;
      image: string;
      cards: { label: string; text: string }[];
    }
  | {
      type: "mapping";
      decisionLabel: string;
      rows: { label: string; text: string; decision: string }[];
    }
  | { type: "speclist"; rows: { title: string; text: string }[] }
  | { type: "code"; code: string }
  | { type: "facts"; items: string[] }
  | {
      type: "scores";
      score: { label: string; value: number };
      cards: { title: string; text: string }[];
      rows: {
        label: string;
        desktop: number;
        mobile: number;
        status: string;
      }[];
      columns: { desktop: string; mobile: string };
    };

export type CaseSectionDoc = {
  number: string;
  title: string;
  lead?: string;
  tone?: CaseTone;
  blocks?: CaseBlock[];
};
