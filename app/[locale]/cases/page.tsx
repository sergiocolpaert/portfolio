import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getAllCasesWithTitles } from "@/lib/cases";
import CaseGallery from "@/components/CaseGallery";
import Container from "@/components/Container";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";

export default async function CasesPage({
  params,
}: PageProps<"/[locale]/cases">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations("cases");
  const cases = await getAllCasesWithTitles(locale);

  return (
    <Container className="py-16 sm:py-24">
      <SplitText
        as="h1"
        text={t("title")}
        className="font-display text-6xl leading-[0.65] font-bold tracking-tight uppercase sm:text-7xl md:text-[90px]"
      />
      <Reveal delay={0.2}>
        <p className="mt-4 max-w-xl text-muted">{t("subtitle")}</p>
      </Reveal>

      <div className="mt-14">
        <CaseGallery cases={cases} />
      </div>
    </Container>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
