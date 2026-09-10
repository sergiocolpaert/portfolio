import { useLocale, useTranslations } from "next-intl";

export default function DownloadCVButton({
  className,
  variant = "solid",
}: {
  className?: string;
  variant?: "solid" | "invert" | "text";
}) {
  const locale = useLocale();
  const t = useTranslations("nav");

  const variants = {
    solid:
      "inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] active:scale-[0.96]",
    invert:
      "inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm text-foreground transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] active:scale-[0.96]",
    text: "link-underline text-sm",
  };

  return (
    <a href={`/cv/cv-${locale}.pdf`} download className={className ?? variants[variant]}>
      {t("downloadCV")}
      {variant !== "text" && <span aria-hidden>↓</span>}
    </a>
  );
}
