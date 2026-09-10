import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Container from "@/components/Container";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";

export default async function AboutPage({
  params,
}: PageProps<"/[locale]/sobre">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations("about");
  const home = await getTranslations("home");

  return (
    <Container className="py-16 sm:py-24">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1fr_260px] sm:items-start">
        <div className="max-w-2xl">
          <SplitText
            as="h1"
            text={t("title")}
            className="font-display text-5xl font-semibold tracking-tight sm:text-7xl"
          />
          <Reveal delay={0.25}>
            <p className="mt-8 text-lg text-muted">{home("aboutSummary")}</p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="relative aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/sergio-portrait.png"
              alt="Sergio Colpaert"
              fill
              sizes="260px"
              className="object-cover grayscale"
            />
          </div>
        </Reveal>
      </div>

      <div className="max-w-2xl">
        <Reveal delay={0.1} className="mt-16 border-t border-border pt-10">
          <h2 className="font-display text-xl font-semibold tracking-tight">
            {t("toolsTitle")}
          </h2>
          <p className="mt-3 text-muted">
            Figma, FigJam, Framer, Adobe Photoshop, Adobe Illustrator, Maze,
            HTML/CSS/JS
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 border-t border-border pt-10">
          <h2 className="font-display text-xl font-semibold tracking-tight">
            {t("educationTitle")}
          </h2>
          <p className="mt-3 text-muted">
            Análise e Desenvolvimento de Sistemas — IBMR
          </p>
        </Reveal>
      </div>
    </Container>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
