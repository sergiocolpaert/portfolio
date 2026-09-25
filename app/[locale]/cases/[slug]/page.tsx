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
import CaseTopBar from "@/components/case/CaseTopBar";
import CaseHero from "@/components/case/CaseHero";
import MetaStrip from "@/components/case/MetaStrip";
import CaseSections from "@/components/case/CaseSections";

export default async function CaseStudyPage({
  params,
}: PageProps<"/[locale]/cases/[slug]">) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const meta = getAllCaseSlugs().includes(slug) ? getCaseMeta(slug) : null;
  if (!meta) notFound();

  const t = await getTranslations("case");
  const { Content, frontmatter, sections } = await getCaseContent(slug, locale);

  const allCases = getAllCasesMeta();
  const currentIndex = allCases.findIndex((c) => c.slug === slug);
  const nextCase = allCases[(currentIndex + 1) % allCases.length];
  const nextCaseTitle =
    nextCase && nextCase.slug !== slug
      ? (await getCaseContent(nextCase.slug, locale)).frontmatter.title
      : null;

  const metaItems = [
    { label: t("client"), value: frontmatter.client },
    { label: t("role"), value: frontmatter.role },
    { label: t("tools"), value: meta.tools.join(", ") },
    { label: t("year"), value: String(meta.year) },
  ];

  return (
    <article>
      <CaseTopBar backLabel={t("back")} />
      <CaseHero
        eyebrow={meta.category}
        title={frontmatter.title}
        tagline={frontmatter.tagline}
        image={meta.coverImage}
        imageAlt={frontmatter.title}
      />
      <MetaStrip items={metaItems} />

      {sections ? (
        <CaseSections sections={sections} />
      ) : (
        Content && (
          <Container className="prose-grid py-20 sm:py-28">
            <div className="contents prose prose-neutral max-w-none prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-foreground">
              <Content />
            </div>
          </Container>
        )
      )}

      {meta.behanceUrl && (
        <section className="border-t border-border">
          <Container className="py-10">
            <a
              href={meta.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-1 text-sm"
            >
              {t("viewOnBehance")}
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </Container>
        </section>
      )}

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
