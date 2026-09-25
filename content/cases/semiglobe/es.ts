import { buildSemiglobeSections } from "./build";
import { es } from "./texts";

export const meta = es.meta;
export const sections = buildSemiglobeSections(es);
