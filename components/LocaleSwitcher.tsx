"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const t = useTranslations("locale");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 text-sm">
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1">
          <button
            onClick={() => router.replace(pathname, { locale: loc })}
            className={
              loc === locale
                ? "text-foreground underline underline-offset-4"
                : "text-muted hover:text-foreground transition-colors"
            }
            aria-current={loc === locale}
          >
            {t(loc)}
          </button>
          {i < routing.locales.length - 1 && (
            <span className="text-border">/</span>
          )}
        </span>
      ))}
    </div>
  );
}
