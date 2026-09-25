import { Link } from "@/i18n/navigation";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import ArrowIcon from "@/components/ArrowIcon";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default function CaseTopBar({ backLabel }: { backLabel: string }) {
  return (
    <div className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link
          href="/cases"
          className="link-underline inline-flex items-center gap-2 text-sm whitespace-nowrap"
        >
          <ArrowIcon className="h-3.5 w-3.5 -rotate-[135deg]" />
          {backLabel}
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <LocaleSwitcher />
          <Link href="/" aria-label="Home">
            <Logo className="h-6 w-auto sm:h-8" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
