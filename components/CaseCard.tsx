import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { CaseMeta } from "@/lib/cases";

export default function CaseCard({
  meta,
  title,
  index,
}: {
  meta: CaseMeta;
  title: string;
  index?: number;
}) {
  const t = useTranslations("cases");

  return (
    <Link href={`/cases/${meta.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-foreground">
        <Image
          src={meta.coverImage}
          alt={title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover opacity-90 grayscale transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0"
        />
        {typeof index === "number" && (
          <span className="absolute top-4 left-4 font-display text-sm text-background/70">
            {String(index).padStart(2, "0")}
          </span>
        )}
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            {title}
          </h3>
          <p className="mt-1 text-sm text-muted">{meta.tags.join(" · ")}</p>
        </div>
        <span className="link-underline mt-1 shrink-0 text-sm">
          {t("viewCase")} ↗
        </span>
      </div>
    </Link>
  );
}
