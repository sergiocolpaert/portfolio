import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import Container from "./Container";

const YEAR = new Date().getFullYear();

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="https://www.linkedin.com/in/sergiocolpaert"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://www.behance.net/sergiocolpaert"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-foreground"
          >
            Behance
          </a>
          <a
            href="mailto:sergio.colpaert@gmail.com"
            className="link-underline text-foreground"
          >
            sergio.colpaert@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-6">
          <span>
            © {YEAR} Sergio Colpaert. {t("rights")}
          </span>
          <LocaleSwitcher />
        </div>
      </Container>
    </footer>
  );
}
