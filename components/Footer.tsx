import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import Container from "./Container";
import ArrowIcon from "./ArrowIcon";

const YEAR = new Date().getFullYear();

const navItemClass =
  "font-display text-2xl font-semibold tracking-tight text-muted transition-colors hover:text-foreground sm:text-3xl";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="border-t border-border">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="text-sm text-muted">({t("navigate")})</p>
            <nav className="mt-4 flex flex-col items-start gap-1">
              <Link href="/" className={navItemClass}>
                {tNav("home")}
              </Link>
              <Link href="/cases" className={navItemClass}>
                {tNav("cases")}
              </Link>
              <Link href="/sobre" className={navItemClass}>
                {tNav("about")}
              </Link>
              <Link href="/contato" className={navItemClass}>
                {tNav("contact")}
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-sm text-muted">({t("connect")})</p>
            <div className="mt-4 flex flex-col items-start gap-1">
              <a
                href="https://www.linkedin.com/in/sergiocolpaert"
                target="_blank"
                rel="noopener noreferrer"
                className={navItemClass}
              >
                LinkedIn
              </a>
              <a
                href="https://www.behance.net/sergiocolpaert"
                target="_blank"
                rel="noopener noreferrer"
                className={navItemClass}
              >
                Behance
              </a>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="text-sm text-muted">({t("languages")})</p>
            <div className="mt-4">
              <LocaleSwitcher variant="list" />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {YEAR} Sergio Colpaert. {t("rights")}
          </span>
          <a href="#" className="link-underline flex items-center gap-1">
            {t("backToTop")}
            <ArrowIcon className="h-3.5 w-3.5 -rotate-45" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
