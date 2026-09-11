import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ArrowIcon from "./ArrowIcon";
import type { CaseMeta } from "@/lib/cases";

export default function CaseCard({
  meta,
  title,
}: {
  meta: CaseMeta;
  title: string;
}) {
  const t = useTranslations("cases");

  return (
    <Link href={`/cases/${meta.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-foreground">
        <Image
          src={meta.coverImage}
          alt={title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover opacity-90 grayscale transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            {title}
          </h3>
          <p className="mt-1 text-sm text-muted">{meta.tags.join(" · ")}</p>
        </div>
        <span className="link-underline mt-1 flex shrink-0 items-center gap-1 text-sm">
          {t("viewCase")}
          <ArrowIcon className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
