import { useLocale, useTranslations } from "next-intl";
import ArrowIcon from "./ArrowIcon";

export default function DownloadCVButton({
  className,
  variant = "solid",
}: {
  className?: string;
  variant?: "solid" | "invert" | "text";
}) {
  const locale = useLocale();
  const t = useTranslations("nav");
  const tHome = useTranslations("home");
  const fileName = `Sergio Colpaert - ${tHome("role").replace(/\//g, "-")}.pdf`;

  const variants = {
    solid:
      "inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] active:scale-[0.96]",
    invert:
      "inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm text-foreground transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] active:scale-[0.96]",
    text: "link-underline inline-flex items-center gap-1 text-sm",
  };

  return (
    <a
      href={`/cv/cv-${locale}.pdf`}
      download={fileName}
      className={className ?? variants[variant]}
    >
      {t("downloadCV")}
      <ArrowIcon className="h-3.5 w-3.5 rotate-90" />
    </a>
  );
}
