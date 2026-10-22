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
      swatches: { colors: string[]; name?: string }[];
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
  | { type: "code"; code: string; label?: string }
  | {
      type: "cards";
      cols?: 2 | 4;
      items: { label?: string; title?: string; text: string; tags?: string[] }[];
    }
  | {
      type: "kpis";
      items: { label: string; value: string; caption?: string }[];
    }
  | {
      type: "metrics";
      items: {
        label: string;
        value: string;
        caption: string;
        rows?: { label: string; value: string }[];
        note?: string;
        dark?: boolean;
      }[];
    }
  | {
      type: "facts";
      rows: { label: string; text: string }[];
      /** Aligns the list with the section title column. */
      inset?: boolean;
    }
  | { type: "split"; left: CaseBlock[]; right: CaseBlock[] }
  | {
      type: "verdicts";
      items: { kind: "no" | "yes"; title: string; text: string }[];
    }
  | {
      type: "screens";
      items: {
        src: string;
        width: number;
        height: number;
        alt: string;
        title: string;
        caption: string;
      }[];
    }
  | {
      type: "gallery";
      items: { src: string; width: number; height: number; alt: string }[];
    }
  | {
      type: "table";
      columns: string[];
      rows: { cells: string[]; status: string; tone: "good" | "info" | "neutral" }[];
    };

export type CaseSectionDoc = {
  number: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  tone?: CaseTone;
  blocks?: CaseBlock[];
};
