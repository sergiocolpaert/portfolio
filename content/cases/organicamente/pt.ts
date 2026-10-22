import type { CaseFrontmatter } from "@/lib/cases";
import { buildOrganicamenteSections } from "./build";
import { texts } from "./texts-pt";

export const meta: CaseFrontmatter = texts.meta;

export const sections = buildOrganicamenteSections(texts.sections);
