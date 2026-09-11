import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { getAllCasesWithTitles } from "@/lib/cases";
import Container from "@/components/Container";
import CaseCard from "@/components/CaseCard";
import NumberedList, { type NumberedListItem } from "@/components/NumberedList";
import CTASection from "@/components/CTASection";
import ArrowIcon from "@/components/ArrowIcon";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";

export default async function AboutPage({
  params,
}: PageProps<"/[locale]/sobre">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations("about");
  const tNav = await getTranslations("nav");
  const tSkills = await getTranslations("skills");
  const cases = await getAllCasesWithTitles(locale);
  const skillItems = tSkills.raw("items") as NumberedListItem[];
  const approachPoints = t.raw("approachPoints") as { title: string; text: string }[];

  return (
    <div>
      {/* Intro */}
      <Container className="pt-16 pb-12 sm:pt-24">
        <SplitText
          as="h1"
          text={t("title")}
          className="font-display text-6xl font-bold tracking-tight uppercase sm:text-7xl md:text-[90px]"
        />
        <Reveal delay={0.3} className="mt-8 max-w-xl">
          <p className="text-lg text-muted sm:text-xl">{t("subtitle")}</p>
        </Reveal>
        <Reveal delay={0.45} className="mt-10">
          <a
            href="mailto:sergio.colpaert@gmail.com"
            className="inline-flex items-center rounded-full border border-foreground px-6 py-3 text-sm transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] active:scale-[0.96]"
          >
            sergio.colpaert@gmail.com
          </a>
        </Reveal>
      </Container>

      {/* Portrait */}
      <Container className="pb-20 sm:pb-28">
        <Reveal>
          <div className="relative aspect-[4/5] w-full max-w-xl overflow-hidden border border-border">
            <Image
              src="/images/sergio-portrait.png"
              alt="Sergio Colpaert"
              fill
              sizes="(min-width: 640px) 576px, 100vw"
              className="object-cover grayscale"
            />
          </div>
        </Reveal>
      </Container>

      {/* Approach */}
      <section className="border-t border-border">
        <Container className="grid grid-cols-1 gap-10 py-20 sm:py-28 md:grid-cols-2">
          <Reveal>
            <p className="text-sm tracking-widest text-muted uppercase">
              {t("approachLabel")}
            </p>
            <p className="mt-6 max-w-md font-display text-2xl leading-snug font-medium tracking-tight sm:text-3xl">
              {t("approachIntro")}
            </p>
          </Reveal>
          <div className="flex flex-col gap-10">
            {approachPoints.map((point, i) => (
              <Reveal key={point.title} delay={0.1 + i * 0.1}>
                <p className="text-xs text-muted">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">
                  {point.title}
                </h3>
                <p className="mt-2 text-muted">{point.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="border-t border-border">
        <Container className="py-20 sm:py-28">
          <Reveal>
            <p className="text-sm tracking-widest text-muted uppercase">
              {t("servicesLabel")}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <NumberedList items={skillItems} />
          </Reveal>
        </Container>
      </section>

      {/* Featured work */}
      {cases.length > 0 && (
        <section className="border-t border-border">
          <Container className="py-20 sm:py-28">
            <Reveal>
              <p className="text-sm tracking-widest text-muted uppercase">
                {t("workLabel")}
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
              {cases.slice(0, 2).map((meta) => (
                <Reveal key={meta.slug}>
                  <CaseCard meta={meta} title={meta.title} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Tools & education */}
      <section className="border-t border-border">
        <Container className="grid grid-cols-1 gap-10 py-20 sm:py-28 sm:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-xl font-semibold tracking-tight">
              {t("toolsTitle")}
            </h2>
            <p className="mt-3 text-muted">
              Figma, FigJam, Framer, Adobe Photoshop, Adobe Illustrator, Maze,
              HTML/CSS/JS
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-xl font-semibold tracking-tight">
              {t("educationTitle")}
            </h2>
            <p className="mt-3 text-muted">
              Análise e Desenvolvimento de Sistemas, IBMR
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection title={t("ctaTitle")}>
        <Link
          href="/contato"
          className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm text-foreground transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] active:scale-[0.96]"
        >
          {tNav("contact")}
          <ArrowIcon className="h-3.5 w-3.5" />
        </Link>
      </CTASection>
    </div>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
