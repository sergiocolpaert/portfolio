import type { CSSProperties } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import ArrowIcon from "@/components/ArrowIcon";
import Reveal from "@/components/motion/Reveal";
import type {
  CaseBlock,
  CaseSectionDoc,
  CaseTone,
} from "@/lib/case-doc";

const TONE_CLASS: Record<CaseTone, string> = {
  light: "bg-background text-foreground",
  muted: "bg-surface text-foreground",
  dark: "tone-dark bg-background text-foreground",
};

const STEP_HEIGHTS = [
  "md:min-h-56",
  "md:min-h-72",
  "md:min-h-96",
  "md:min-h-[30rem]",
];

const chip =
  "inline-flex items-center rounded-full border border-border px-3 py-1 text-xs tracking-widest uppercase";

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden
    >
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

function Block({ block }: { block: CaseBlock }) {
  switch (block.type) {
    case "tags":
      return (
        <ul className="flex flex-wrap gap-2">
          {block.items.map((item) => (
            <li key={item} className={chip}>
              {item}
            </li>
          ))}
        </ul>
      );

    case "quote":
      return (
        <figure className="max-w-5xl">
          <span
            aria-hidden
            className="block font-display text-8xl leading-none text-muted"
          >
            “
          </span>
          <blockquote className="mt-2 font-display text-2xl leading-snug font-medium tracking-tight md:text-3xl lg:text-4xl">
            {block.text}
          </blockquote>
          <figcaption className="mt-12 flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border font-display text-lg">
              {block.author.charAt(0)}
            </span>
            <span>
              <span className="block text-sm font-medium">{block.author}</span>
              <span className="block text-sm text-muted">{block.role}</span>
            </span>
          </figcaption>
        </figure>
      );

    case "image":
      return (
        <figure className={block.narrow ? "mx-auto max-w-4xl" : undefined}>
          {block.caption && (
            <figcaption className="mb-4 text-xs tracking-widest text-muted uppercase">
              {block.caption}
            </figcaption>
          )}
          <Image
            src={block.src}
            width={block.width}
            height={block.height}
            alt={block.alt}
            sizes="(min-width: 1440px) 1392px, 100vw"
            className={`h-auto w-full ${block.rounded ? "rounded-[18px]" : ""}`}
          />
        </figure>
      );

    case "steps":
      return (
        <div>
          <div className="grid gap-4 md:grid-cols-4 md:items-end">
            {block.items.map((item, i) => (
              <div key={item.title} className="flex flex-col">
                {item.caption && (
                  <p className="mb-3 text-xs tracking-widest text-muted uppercase">
                    {item.caption}
                  </p>
                )}
                <div
                  className={`flex flex-col justify-between border border-border p-6 ${
                    item.weight !== undefined
                      ? "md:min-h-[var(--h)]"
                      : (STEP_HEIGHTS[i] ?? "")
                  }`}
                  style={
                    item.weight !== undefined
                      ? ({
                          "--h": `${10 + item.weight * 0.55}rem`,
                        } as CSSProperties)
                      : undefined
                  }
                >
                  <h3 className="text-sm font-medium tracking-widest uppercase">
                    {item.title}
                  </h3>
                  <ul className="mt-10 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li key={tag} className={chip}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 hidden justify-between border-t border-border pt-4 text-xs tracking-widest text-muted uppercase md:flex">
            {block.ticks.map((tick) => (
              <span key={tick}>{tick}</span>
            ))}
          </div>
        </div>
      );

    case "stats":
      return (
        <dl
          className={`grid grid-cols-2 border-y border-border ${
            block.items.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"
          }`}
        >
          {block.items.map((item, i) => (
            <div
              key={item.label}
              className={`border-border px-0 py-6 md:px-6 md:py-8 ${
                i > 0 ? "md:border-l" : "md:pl-0"
              } ${i % 2 === 1 ? "border-l pl-6" : ""} ${
                i >= 2 ? "border-t md:border-t-0" : ""
              }`}
            >
              <dt className="text-xs tracking-widest text-muted uppercase">
                {item.label}
              </dt>
              <dd className="mt-2 text-sm font-medium">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      );

    case "palette":
      return (
        <div className="space-y-10">
          <ul
            className={`grid grid-cols-2 gap-4 ${
              block.swatches.length > 2 ? "sm:grid-cols-3 lg:grid-cols-6" : ""
            }`}
          >
            {block.swatches.map((sw) => (
              <li key={sw.colors.join("-")} className="min-w-0">
                <div
                  className="h-28 border border-border"
                  style={{
                    background:
                      sw.colors.length > 1
                        ? `linear-gradient(to right, ${sw.colors.join(", ")})`
                        : sw.colors[0],
                  }}
                />
                <p className="mt-3 text-xs tracking-widest text-muted uppercase">
                  {sw.colors.join(" → ")}
                </p>
              </li>
            ))}
          </ul>
          <div className="grid gap-4 md:grid-cols-2">
            {block.fonts.map((font) => (
              <div key={font.name} className="border border-border p-6">
                <p className="font-display text-3xl font-medium tracking-tight">
                  {font.name}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {font.weights.map((w) => (
                    <li key={w} className={chip}>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );

    case "sitemap":
      return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {block.columns.map((col) => (
            <div key={col.title} className="flex flex-col">
              <div className="bg-foreground px-4 py-3 text-sm font-medium text-background">
                {col.title}
              </div>
              <ul>
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="border-x border-b border-border px-4 py-3 text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );

    case "persona":
      return (
        <div className="grid gap-4 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-6">
          <div className="group">
            <div className="relative aspect-[5/4] overflow-hidden border border-border">
              <Image
                src={block.image}
                alt={block.name}
                fill
                sizes="(min-width: 768px) 320px, 100vw"
                className="object-cover grayscale transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-hover:grayscale-0"
              />
            </div>
            <p className="mt-4 font-display text-xl font-semibold tracking-tight">
              {block.name}
            </p>
            <p className="mt-1 text-sm text-muted">{block.role}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {block.cards.map((card) => (
              <div key={card.label} className="border border-border p-6">
                <span className={chip}>{card.label}</span>
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      );

    case "mapping":
      return (
        <div className="space-y-4">
          {block.rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-stretch md:gap-6"
            >
              <div className="border border-border p-6">
                <span className={chip}>{row.label}</span>
                <p className="mt-5 text-sm leading-relaxed">{row.text}</p>
              </div>
              <div className="flex items-center justify-center">
                <ArrowIcon className="h-5 w-5 rotate-[135deg] md:rotate-45" />
              </div>
              <div className="bg-foreground p-6 text-background">
                <p className="text-xs tracking-widest uppercase opacity-60">
                  {block.decisionLabel}
                </p>
                <p className="mt-5 text-sm leading-relaxed">{row.decision}</p>
              </div>
            </div>
          ))}
        </div>
      );

    case "speclist":
      return (
        <ol className="border-b border-border">
          {block.rows.map((row, i) => (
            <li
              key={row.title}
              className="grid gap-3 border-t border-border py-6 md:grid-cols-[3rem_15rem_1fr] md:items-baseline md:gap-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-medium">{row.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{row.text}</p>
            </li>
          ))}
        </ol>
      );

    case "code":
      return (
        <div className="border border-border bg-[#141413] text-[#f4f3f0]">
          <div className="flex gap-2 px-6 pt-5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#f4f3f0]/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#f4f3f0]/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#f4f3f0]/30" />
          </div>
          <pre className="overflow-x-auto px-6 pt-5 pb-6 font-mono text-[13px] leading-relaxed">
            <code>{block.code}</code>
          </pre>
        </div>
      );

    case "facts":
      return (
        <p className="flex flex-wrap gap-y-2 text-sm font-medium">
          {block.items.map((item, i) => (
            <span key={item}>
              {item}
              {i < block.items.length - 1 && (
                <span className="mx-3 text-muted">·</span>
              )}
            </span>
          ))}
        </p>
      );

    case "scores":
      return (
        <div>
          <div className="grid gap-4 lg:grid-cols-[14rem_repeat(3,1fr)]">
            <div className="flex min-h-56 flex-col justify-between bg-foreground p-6 text-background">
              <span className="text-sm opacity-70">{block.score.label}</span>
              <span className="font-display text-8xl leading-none font-semibold tracking-tight">
                {block.score.value}
              </span>
            </div>
            {block.cards.map((card) => (
              <div key={card.title} className="border border-border p-6">
                <h3 className="text-base font-medium">{card.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 border border-border">
            {block.rows.map((row) => (
              <div
                key={row.label}
                className="grid items-center gap-5 border-t border-border px-6 py-5 first:border-t-0 md:grid-cols-[1.2fr_2fr_2fr_auto] md:gap-10"
              >
                <span className="font-display text-lg font-medium tracking-tight">
                  {row.label}
                </span>
                {(
                  [
                    [block.columns.desktop, row.desktop],
                    [block.columns.mobile, row.mobile],
                  ] as const
                ).map(([label, value]) => (
                  <div key={label}>
                    <div className="flex items-baseline justify-between text-xs tracking-widest text-muted uppercase">
                      <span>{label}</span>
                      <span className="font-display text-lg tracking-normal text-foreground">
                        {value}
                      </span>
                    </div>
                    <div className="mt-2 h-1 bg-border">
                      <div
                        className="h-full bg-foreground"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                ))}
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs">
                  <Check />
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
  }
}

export default function CaseSections({
  sections,
}: {
  sections: CaseSectionDoc[];
}) {
  return (
    <>
      {sections.map((section) => (
        <section
          key={section.number}
          className={TONE_CLASS[section.tone ?? "light"]}
        >
          <Container className="py-20 sm:py-28">
            <Reveal className="grid gap-6 md:grid-cols-5 md:gap-10">
              <div className="md:col-span-2">
                <p className="text-sm tracking-widest text-muted uppercase">
                  ({section.number})
                </p>
                {section.eyebrow && (
                  <p className="mt-3 text-sm">{section.eyebrow}</p>
                )}
              </div>
              <div className="md:col-span-3">
                <h2 className="font-display text-4xl leading-[1.02] font-medium tracking-tight md:text-6xl">
                  {section.title}
                </h2>
                {section.lead && (
                  <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                    {section.lead.split("\n\n").map((para) => (
                      <p key={para}>{para}</p>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>

            {section.blocks && (
              <div className="mt-14 space-y-10 sm:mt-20 sm:space-y-14">
                {section.blocks.map((block, i) => (
                  <Reveal key={i}>
                    <Block block={block} />
                  </Reveal>
                ))}
              </div>
            )}
          </Container>
        </section>
      ))}
    </>
  );
}
