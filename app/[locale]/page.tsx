import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { getAllCasesWithTitles } from "@/lib/cases";
import CaseCard from "@/components/CaseCard";
import DownloadCVButton from "@/components/DownloadCVButton";
import NumberedList, { type NumberedListItem } from "@/components/NumberedList";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Container from "@/components/Container";
import ArrowIcon from "@/components/ArrowIcon";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations("home");
  const tNav = await getTranslations("nav");
  const tSkills = await getTranslations("skills");
  const tStats = await getTranslations("stats");
  const tFaq = await getTranslations("faq");
  const cases = (await getAllCasesWithTitles(locale)).slice(0, 4);

  const skillItems = tSkills.raw("items") as NumberedListItem[];
  const statItems = tStats.raw("items") as { value: string; label: string }[];
  const faqItems = tFaq.raw("items") as { question: string; answer: string }[];

  return (
    <div>
      {/* Hero */}
      <Container className="pt-16 pb-20 sm:pt-24 sm:pb-28">
        <SplitText
          as="h1"
          text={t("heroTitle")}
          lineHeight={0.89}
          className="max-w-4xl font-display text-6xl leading-none font-semibold tracking-tight uppercase sm:text-7xl md:text-[90px]"
        />
        <Reveal delay={0.35} className="mt-8 max-w-xl">
          <p className="text-lg text-muted sm:text-xl">{t("heroSubtitle")}</p>
        </Reveal>
        <Reveal delay={0.5} className="mt-10 flex flex-wrap items-center gap-4">
          <DownloadCVButton />
          <Link href="/cases" className="link-underline inline-flex items-center gap-1 text-sm">
            {t("ctaCases")}
            <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </Container>

      {/* Featured work */}
      <Container className="pb-20 sm:pb-28">
        <div className="flex items-baseline justify-between border-b border-border pb-4">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {t("featuredTitle")}
            </h2>
          </Reveal>
          <Link href="/cases" className="link-underline inline-flex items-center gap-1 text-sm text-muted">
            {t("ctaCases")}
            <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
        <StaggerGroup className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
          {cases.map((meta) => (
            <StaggerItem key={meta.slug}>
              <CaseCard meta={meta} title={meta.title} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>

      {/* Services / skills */}
      <Container className="pb-20 sm:pb-28">
        <Reveal>
          <p className="text-sm tracking-widest text-muted uppercase">
            {t("servicesLabel")}
          </p>
        </Reveal>
        <SplitText
          as="h2"
          text={t("servicesTitle")}
          inView
          className="mt-4 max-w-2xl font-display text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
        />
        <Reveal delay={0.1} className="mt-14">
          <NumberedList items={skillItems} />
        </Reveal>
      </Container>

      {/* Stats */}
      <Container className="pb-20 sm:pb-28">
        <Reveal>
          <p className="text-sm tracking-widest text-muted uppercase">
            {t("statsLabel")}
          </p>
        </Reveal>
        <div className="mt-8">
          <Stats stats={statItems} />
        </div>
      </Container>

      {/* About */}
      <section className="border-t border-border">
        <Container className="grid grid-cols-1 gap-12 py-20 sm:py-28 md:grid-cols-[240px_1fr]">
          <Reveal>
            <div className="relative aspect-[3/4] w-full max-w-[240px] overflow-hidden">
              <Image
                src="/images/sergio-portrait.png"
                alt="Sergio Colpaert"
                fill
                sizes="240px"
                className="object-cover grayscale"
              />
            </div>
            <p className="mt-3 text-sm text-muted">
              Sergio Colpaert
              <br />
              {t("role")}
            </p>
          </Reveal>
          <div>
            <Reveal delay={0.1}>
              <p className="text-sm tracking-widest text-muted uppercase">
                {t("aboutTitle")}
              </p>
              <p className="mt-6 font-display text-2xl leading-snug font-medium tracking-tight sm:text-4xl">
                {t("aboutSummary1")}
              </p>
              <p className="mt-6 font-display text-2xl leading-snug font-medium tracking-tight sm:text-4xl">
                {t("aboutSummary2")}
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8">
              <Link
                href="/sobre"
                className="link-underline inline-flex items-center gap-1.5 font-display text-lg font-medium"
              >
                {t("aboutLink")}
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-border">
        <Container className="py-20 sm:py-28">
          <Reveal>
            <p className="text-sm tracking-widest text-muted uppercase">
              {t("faqLabel")}
            </p>
          </Reveal>
          <SplitText
            as="h2"
            text={t("faqTitle")}
            inView
            className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl"
          />
          <div className="mt-14">
            <FAQ items={faqItems} />
          </div>
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
