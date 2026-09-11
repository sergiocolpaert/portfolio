"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const NATIVE_NAMES: Record<string, string> = {
  pt: "Português",
  es: "Español",
  en: "English",
};

export default function LocaleSwitcher({
  variant = "inline",
}: {
  variant?: "inline" | "list";
}) {
  const t = useTranslations("locale");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  if (variant === "list") {
    return (
      <div className="flex flex-col items-start gap-1">
        {routing.locales.map((loc) => (
          <button
            key={loc}
            onClick={() => router.replace(pathname, { locale: loc })}
            aria-current={loc === locale}
            className={`font-display text-2xl font-semibold tracking-tight transition-colors sm:text-3xl ${
              loc === locale ? "text-foreground" : "text-muted hover:text-foreground"
            }`}
          >
            {NATIVE_NAMES[loc]}
          </button>
        ))}
      </div>
    );
  }

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
