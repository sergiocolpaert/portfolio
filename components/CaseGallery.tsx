"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import CaseCard from "./CaseCard";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";
import type { CaseMeta } from "@/lib/cases";

export default function CaseGallery({
  cases,
}: {
  cases: (CaseMeta & { title: string; client: string })[];
}) {
  const t = useTranslations("cases");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(
    () => Array.from(new Set(cases.flatMap((c) => c.tags))),
    [cases],
  );

  const filtered = activeTag
    ? cases.filter((c) => c.tags.includes(activeTag))
    : cases;

  return (
    <div>
      <div className="flex flex-wrap gap-3 border-b border-border pb-8 text-sm">
        <button
          onClick={() => setActiveTag(null)}
          aria-pressed={activeTag === null}
          className={
            activeTag === null
              ? "rounded-full bg-foreground px-4 py-1.5 text-background"
              : "rounded-full border border-border px-4 py-1.5 text-muted transition-colors hover:border-foreground hover:text-foreground"
          }
        >
          {t("filterAll")}
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            aria-pressed={activeTag === tag}
            className={
              activeTag === tag
                ? "rounded-full bg-foreground px-4 py-1.5 text-background"
                : "rounded-full border border-border px-4 py-1.5 text-muted transition-colors hover:border-foreground hover:text-foreground"
            }
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Remount on filter change: the group animates once, so cards added
          later would otherwise stay in their hidden state. */}
      <StaggerGroup
        key={activeTag ?? "all"}
        className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2"
      >
        {filtered.map((meta) => (
          <StaggerItem key={meta.slug}>
            <CaseCard
              meta={meta}
              title={meta.title}
              client={meta.client}
            />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}
