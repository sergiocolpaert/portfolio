import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import DownloadCVButton from "./DownloadCVButton";
import Container from "./Container";

export default function Header() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-5">
        <Link
          href="/"
          className="flex items-center gap-1.5 font-display text-lg font-extrabold tracking-tight uppercase"
        >
          Sergio
          <span className="rounded-full bg-foreground px-2.5 py-0.5 text-background">
            .design
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm md:gap-8">
          <Link href="/cases" className="link-underline">
            {t("cases")}
          </Link>
          <Link href="/sobre" className="link-underline">
            {t("about")}
          </Link>
          <Link href="/contato" className="link-underline">
            {t("contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <DownloadCVButton className="link-underline hidden text-sm sm:inline" />
          <LocaleSwitcher />
        </div>
      </Container>
    </header>
  );
}
