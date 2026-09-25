import { buildSemiglobeSections } from "./build";
import { pt } from "./texts";

export const meta = pt.meta;
export const sections = buildSemiglobeSections(pt);
