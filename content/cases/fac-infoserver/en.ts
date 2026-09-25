import { buildFacSections } from "./build";
import { en } from "./texts";

export const meta = en.meta;
export const sections = buildFacSections(en);
