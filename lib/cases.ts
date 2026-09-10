import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";
import type { Locale } from "@/i18n/routing";

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

export async function getCaseContent(slug: string, locale: Locale) {
  const mod = (await import(`@/content/cases/${slug}/${locale}.mdx`)) as {
    default: ComponentType;
    meta: CaseFrontmatter;
  };
  return { Content: mod.default, frontmatter: mod.meta };
}

export async function getAllCasesWithTitles(locale: Locale) {
  const metas = getAllCasesMeta();
  return Promise.all(
    metas.map(async (meta) => {
      const mod = (await import(
        `@/content/cases/${meta.slug}/${locale}.mdx`
      )) as { meta: CaseFrontmatter };
      return { ...meta, title: mod.meta.title };
    }),
  );
}
