import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { getAllCaseSlugs, getCaseMeta, getCaseContent } from "@/lib/cases";
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

  return (
    <article>
      <Container className="prose-grid py-16 sm:py-24">
        <Link href="/cases" className="link-underline text-sm text-muted">
          ← {t("back")}
        </Link>

        <header className="mt-8 border-b border-border pb-10">
          <Reveal>
            <p className="text-sm tracking-widest text-muted uppercase">
              {meta.category} · {meta.year}
            </p>
          </Reveal>
          <SplitText
            as="h1"
            text={frontmatter.title}
            className="mt-4 font-display text-5xl leading-[0.89] font-bold tracking-tight uppercase sm:text-6xl md:text-7xl"
          />

          <Reveal delay={0.3}>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 text-sm sm:grid-cols-4">
              <div>
                <dt className="text-muted">{t("role")}</dt>
                <dd className="mt-1">{frontmatter.role}</dd>
              </div>
              <div>
                <dt className="text-muted">{t("duration")}</dt>
                <dd className="mt-1">{meta.duration}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-muted">{t("tools")}</dt>
                <dd className="mt-1">{meta.tools.join(", ")}</dd>
              </div>
            </dl>
          </Reveal>
        </header>

        <div className="contents prose prose-neutral max-w-none prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-foreground">
          <Content />
        </div>

        {meta.behanceUrl && (
          <Reveal className="mt-4 border-t border-border pt-8">
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
    </article>
  );
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllCaseSlugs().map((slug) => ({ locale, slug })),
  );
}
