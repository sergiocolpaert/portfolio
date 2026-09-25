import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";
import type { Locale } from "@/i18n/routing";
import type { CaseSectionDoc } from "@/lib/case-doc";

const CASES_DIR = path.join(process.cwd(), "content", "cases");

export type CaseMeta = {
  slug: string;
  year: number;
  category: string;
  tags: string[];
  tools: string[];
  duration: string;
  coverImage: string;
  behanceUrl: string;
  behanceEmbedId?: string;
  featuredOrder: number | null;
};

export type CaseFrontmatter = {
  title: string;
  client: string;
  role: string;
  tagline?: string;
};

export function getAllCaseSlugs(): string[] {
  return fs
    .readdirSync(CASES_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

export function getCaseMeta(slug: string): CaseMeta {
  const raw = fs.readFileSync(
    path.join(CASES_DIR, slug, "meta.json"),
    "utf-8",
  );
  return { slug, ...JSON.parse(raw) };
}

export function getAllCasesMeta(): CaseMeta[] {
  return getAllCaseSlugs()
    .map(getCaseMeta)
    .sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999));
}

function isSectioned(slug: string, locale: Locale) {
  return fs.existsSync(path.join(CASES_DIR, slug, `${locale}.ts`));
}

export async function getCaseContent(slug: string, locale: Locale) {
  if (isSectioned(slug, locale)) {
    const mod = (await import(`@/content/cases/${slug}/${locale}.ts`)) as {
      meta: CaseFrontmatter;
      sections: CaseSectionDoc[];
    };
    return {
      Content: null as ComponentType | null,
      frontmatter: mod.meta,
      sections: mod.sections,
    };
  }
  const mod = (await import(`@/content/cases/${slug}/${locale}.mdx`)) as {
    default: ComponentType;
    meta: CaseFrontmatter;
  };
  return {
    Content: mod.default as ComponentType | null,
    frontmatter: mod.meta,
    sections: null as CaseSectionDoc[] | null,
  };
}

export async function getAllCasesWithTitles(locale: Locale) {
  const metas = getAllCasesMeta();
  return Promise.all(
    metas.map(async (meta) => {
      const { frontmatter } = await getCaseContent(meta.slug, locale);
      return { ...meta, title: frontmatter.title };
    }),
  );
}
