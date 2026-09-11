import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import {
  getAllCaseSlugs,
  getAllCasesMeta,
  getCaseMeta,
  getCaseContent,
} from "@/lib/cases";
import Container from "@/components/Container";
import ArrowIcon from "@/components/ArrowIcon";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";

export default async function CaseStudyPage({
  params,
}: PageProps<"/[locale]/cases/[slug]">) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const meta = getAllCaseSlugs().includes(slug) ? getCaseMeta(slug) : null;
  if (!meta) notFound();

  const t = await getTranslations("case");
  const { Content, frontmatter } = await getCaseContent(slug, locale);

  const allCases = getAllCasesMeta();
  const currentIndex = allCases.findIndex((c) => c.slug === slug);
  const nextCase = allCases[(currentIndex + 1) % allCases.length];
  const nextCaseTitle =
    nextCase && nextCase.slug !== slug
      ? (await getCaseContent(nextCase.slug, locale)).frontmatter.title
      : null;

  return (
    <article>
      <Container className="prose-grid py-16 sm:py-24">
        <Link href="/cases" className="link-underline text-sm text-muted">
          ← {t("back")}
        </Link>

        <header className="mt-8 border-b border-border pb-10">
          <Reveal>
            <p className="text-sm tracking-widest text-muted uppercase">
              {meta.category}
            </p>
          </Reveal>

          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <SplitText
              as="h1"
              text={frontmatter.title}
              lineHeight={0.89}
              className="font-display text-5xl font-semibold tracking-tight uppercase sm:text-6xl md:text-7xl"
            />
            <Reveal delay={0.3}>
              <span className="font-display text-2xl text-muted">
                ({meta.year})
              </span>
            </Reveal>
          </div>

          {frontmatter.tagline && (
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-lg text-muted">
                {frontmatter.tagline}
              </p>
            </Reveal>
          )}

          <Reveal delay={0.35}>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 text-sm sm:grid-cols-4">
              <div>
                <dt className="text-muted">{t("client")}</dt>
                <dd className="mt-1">{frontmatter.client}</dd>
              </div>
              <div>
                <dt className="text-muted">{t("role")}</dt>
                <dd className="mt-1">{frontmatter.role}</dd>
              </div>
              {meta.duration && (
                <div>
                  <dt className="text-muted">{t("duration")}</dt>
                  <dd className="mt-1">{meta.duration}</dd>
                </div>
              )}
              <div>
                <dt className="text-muted">{t("tools")}</dt>
                <dd className="mt-1">{meta.tools.join(", ")}</dd>
              </div>
            </dl>
          </Reveal>
        </header>

        <Reveal className="mt-10">
          <span className="text-xs text-muted">(001)</span>
        </Reveal>

        <div className="contents prose prose-neutral max-w-none prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-foreground">
          <Content />
        </div>

        {meta.behanceUrl && (
          <Reveal className="mt-4 border-t border-border pt-8">
            <span className="mb-4 block text-xs text-muted">(002)</span>
            <a
              href={meta.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-1 text-sm"
            >
              {t("viewOnBehance")}
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </Reveal>
        )}
      </Container>

      {nextCase && nextCaseTitle && (
        <section className="border-t border-border">
          <Link href={`/cases/${nextCase.slug}`} className="group block">
            <Container className="py-16 sm:py-20">
              <div className="flex items-center justify-between">
                <p className="text-sm tracking-widest text-muted uppercase">
                  {t("nextCase")}
                </p>
                <ArrowIcon className="h-5 w-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight uppercase transition-colors sm:text-6xl">
                {nextCaseTitle}
              </h2>
            </Container>
            <div className="relative aspect-[21/9] w-full overflow-hidden bg-foreground">
              <Image
                src={nextCase.coverImage}
                alt={nextCaseTitle}
                fill
                sizes="100vw"
                className="object-cover opacity-90 grayscale transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02] group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          </Link>
        </section>
      )}
    </article>
  );
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllCaseSlugs().map((slug) => ({ locale, slug })),
  );
}
