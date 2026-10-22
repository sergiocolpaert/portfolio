import type { CaseFrontmatter } from "@/lib/cases";
import { buildOrganicamenteSections } from "./build";
import { texts } from "./texts-en";

export const meta: CaseFrontmatter = texts.meta;

export const sections = buildOrganicamenteSections(texts.sections);
