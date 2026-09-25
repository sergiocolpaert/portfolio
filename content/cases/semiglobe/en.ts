import { buildSemiglobeSections } from "./build";
import { en } from "./texts";

export const meta = en.meta;
export const sections = buildSemiglobeSections(en);
