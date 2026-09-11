import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

const switzer = localFont({
  variable: "--font-switzer",
  src: [
    { path: "../../fonts/Switzer-Thin.woff2", weight: "100", style: "normal" },
    { path: "../../fonts/Switzer-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/Switzer-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../fonts/Switzer-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../../fonts/Switzer-Bold.woff2", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Sergio Colpaert | UI/UX & Product Designer",
  description:
    "Portfolio de Sergio Colpaert, UI/UX & Product Designer. Cases de produto digital com processo e decisões.",
};

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${switzer.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
