import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import DownloadCVButton from "@/components/DownloadCVButton";
import Container from "@/components/Container";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contato">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations("contact");

  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-2xl">
      <SplitText
        as="h1"
        text={t("title")}
        lineHeight={0.89}
        className="font-display text-6xl font-semibold tracking-tight uppercase sm:text-7xl md:text-[90px]"
      />
      <Reveal delay={0.25}>
        <p className="mt-6 text-muted">{t("subtitle")}</p>
      </Reveal>

      <StaggerGroup className="mt-14 divide-y divide-border border-t border-border">
        <StaggerItem className="py-6">
          <p className="text-sm text-muted">{t("emailLabel")}</p>
          <a
            href="mailto:sergio.colpaert@gmail.com"
            className="link-underline mt-1 inline-block font-display text-xl font-medium tracking-tight sm:text-2xl"
          >
            sergio.colpaert@gmail.com
          </a>
        </StaggerItem>
        <StaggerItem className="py-6">
          <p className="text-sm text-muted">{t("whatsappLabel")}</p>
          <a
            href="https://wa.me/5521993755022"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-1 inline-block font-display text-xl font-medium tracking-tight sm:text-2xl"
          >
            +55 21 99375-5022
          </a>
        </StaggerItem>
        <StaggerItem className="py-6">
          <p className="text-sm text-muted">{t("linkedinLabel")}</p>
          <a
            href="https://www.linkedin.com/in/sergiocolpaert"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-1 inline-block font-display text-xl font-medium tracking-tight sm:text-2xl"
          >
            linkedin.com/in/sergiocolpaert
          </a>
        </StaggerItem>
        <StaggerItem className="py-6">
          <p className="text-sm text-muted">{t("behanceLabel")}</p>
          <a
            href="https://www.behance.net/sergiocolpaert"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-1 inline-block font-display text-xl font-medium tracking-tight sm:text-2xl"
          >
            behance.net/sergiocolpaert
          </a>
        </StaggerItem>
      </StaggerGroup>

      <Reveal delay={0.2} className="mt-14">
        <DownloadCVButton />
      </Reveal>
      </div>
    </Container>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
