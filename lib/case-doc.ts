export type CaseTone = "light" | "muted" | "dark";

export type CaseBlock =
  | { type: "tags"; items: string[] }
  | { type: "statement"; text: string }
  | { type: "note"; text: string }
  | {
      type: "image";
      src: string;
      width: number;
      height: number;
      alt: string;
      caption?: string;
      narrow?: boolean;
      rounded?: boolean;
    }
  | {
      type: "steps";
      items: {
        title: string;
        tags: string[];
        caption?: string;
        weight?: number;
      }[];
      ticks: string[];
    }
  | { type: "stats"; items: { label: string; value: string }[] }
  | {
      type: "palette";
      swatches: { colors: string[] }[];
      fonts: { name: string; weights: string[] }[];
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
  | { type: "code"; code: string; label?: string };

export type CaseSectionDoc = {
  number: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  tone?: CaseTone;
  blocks?: CaseBlock[];
};
