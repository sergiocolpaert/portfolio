import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import Container from "./Container";
import Logo from "./Logo";

export default function Header() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-5">
        <Link href="/" className="flex items-center">
          <Logo className="h-8 w-auto sm:h-9" />
        </Link>

        <nav className="flex items-center gap-6 text-sm md:gap-8">
          <Link href="/" className="link-underline">
            {t("home")}
          </Link>
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
          <LocaleSwitcher />
        </div>
      </Container>
    </header>
  );
}
