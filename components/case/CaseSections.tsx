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

    case "statement":
      return (
        <p className="max-w-5xl font-display text-2xl leading-snug font-medium tracking-tight md:text-3xl lg:text-4xl">
          {block.text}
        </p>
      );

    case "note":
      return <p className="max-w-2xl text-sm text-muted">{block.text}</p>;

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
              <li key={sw.name ?? sw.colors.join("-")} className="min-w-0">
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
                  {sw.name && <span className="text-foreground">{sw.name} </span>}
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

    case "cards":
      return (
        <div
          className={`grid gap-4 ${
            block.cols === 4
              ? "sm:grid-cols-2 lg:grid-cols-4"
              : "md:grid-cols-2"
          }`}
        >
          {block.items.map((item) => (
            <div
              key={item.label ?? item.title}
              className="flex flex-col border border-border p-6 md:p-8"
            >
              {item.label && (
                <p className="text-xs tracking-widest text-muted uppercase">
                  {item.label}
                </p>
              )}
              {item.title && (
                <h3 className="font-display text-2xl font-medium tracking-tight">
                  {item.title}
                </h3>
              )}
              <p
                className={`text-sm leading-relaxed ${
                  item.title ? "mt-4 text-muted" : "mt-5"
                }`}
              >
                {item.text}
              </p>
              {item.tags && (
                <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                  {item.tags.map((tag) => (
                    <li key={tag} className={chip}>
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      );

    case "kpis":
      return (
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {block.items.map((item) => (
            <div key={item.label} className="border border-border p-6">
              <dt className="text-xs tracking-widest text-muted uppercase">
                {item.label}
              </dt>
              <dd className="mt-4 font-display text-5xl font-medium tracking-tight">
                {item.value}
              </dd>
              {item.caption && (
                <p className="mt-3 text-sm text-muted">{item.caption}</p>
              )}
            </div>
          ))}
        </dl>
      );

    case "metrics":
      return (
        <div className="grid gap-4 md:grid-cols-2">
          {block.items.map((item) => (
            <div
              key={item.label}
              className={`flex flex-col p-8 md:p-10 ${
                item.dark
                  ? "bg-foreground text-background"
                  : "border border-border"
              }`}
            >
              <p className="text-xs tracking-widest uppercase opacity-60">
                {item.label}
              </p>
              <p className="mt-6 font-display text-6xl font-medium tracking-tight md:text-7xl">
                {item.value}
              </p>
              <p className="mt-4 max-w-sm text-base opacity-80">
                {item.caption}
              </p>
              {item.rows && (
                <dl className="mt-8 border-t border-current/20">
                  {item.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex justify-between gap-6 border-b border-current/20 py-3 text-sm"
                    >
                      <dt className="opacity-70">{row.label}</dt>
                      <dd className="text-right font-medium">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {item.note && (
                <p className="mt-auto pt-6 text-sm opacity-60">{item.note}</p>
              )}
            </div>
          ))}
        </div>
      );

    case "facts":
      return (
        <dl className="border-b border-border">
          {block.rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-2 border-t border-border py-6 md:grid-cols-[14rem_1fr] md:gap-8"
            >
              <dt className="text-xs tracking-widest text-muted uppercase md:pt-1">
                {row.label}
              </dt>
              <dd className="text-base leading-relaxed">{row.text}</dd>
            </div>
          ))}
        </dl>
      );

    case "verdicts":
      return (
        <ul className="space-y-4">
          {block.items.map((item) => (
            <li
              key={item.title}
              className={`flex items-start gap-5 p-6 md:p-8 ${
                item.kind === "yes"
                  ? "bg-foreground text-background"
                  : "border border-border"
              }`}
            >
              <span
                aria-hidden
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-current text-base"
              >
                {item.kind === "yes" ? "✓" : "✕"}
              </span>
              <div>
                <h3 className="text-base font-medium">{item.title}</h3>
                <p
                  className={`mt-2 text-sm ${
                    item.kind === "yes" ? "opacity-70" : "text-muted"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      );

    case "screens":
      return (
        <ol className="-mx-6 flex snap-x gap-4 overflow-x-auto px-6 pb-2 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0">
          {block.items.map((item, i) => (
            <li
              key={item.title}
              className="w-60 shrink-0 snap-start lg:w-auto"
            >
              <p className="text-xs tracking-widest text-muted uppercase">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-sm font-medium">{item.title}</h3>
              <Image
                src={item.src}
                width={item.width}
                height={item.height}
                alt={item.alt}
                sizes="(min-width: 1024px) 270px, 240px"
                className="mt-5 h-auto w-full rounded-[18px] border border-border"
              />
              <p className="mt-4 text-sm text-muted">{item.caption}</p>
            </li>
          ))}
        </ol>
      );

    case "gallery":
      return (
        <div className="grid gap-4 md:grid-cols-2">
          {block.items.map((item) => (
            <Image
              key={item.src}
              src={item.src}
              width={item.width}
              height={item.height}
              alt={item.alt}
              sizes="(min-width: 1440px) 684px, (min-width: 768px) 50vw, 100vw"
              className="h-auto w-full rounded-[18px]"
            />
          ))}
        </div>
      );

    case "table":
      return (
        <div className="-mx-6 overflow-x-auto px-6 lg:mx-0 lg:px-0">
          <table className="w-full min-w-[44rem] border-y border-border text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs tracking-widest text-muted uppercase">
                {block.columns.map((col) => (
                  <th key={col} className="py-4 pr-6 font-normal">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr
                  key={row.cells[0]}
                  className="border-b border-border last:border-b-0"
                >
                  {row.cells.map((cell, i) => (
                    <td
                      key={i}
                      className={`py-5 pr-6 align-top ${
                        i === 0 ? "font-medium" : i === 1 ? "text-muted" : ""
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                  <td className="py-5 align-top">
                    <span
                      className={`${chip} ${
                        row.tone === "good"
                          ? "border-foreground bg-foreground text-background"
                          : row.tone === "info"
                            ? "border-foreground"
                            : "text-muted"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "code": {
      const code = (
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
      if (!block.label) return code;
      return (
        <details className="group">
          <summary
            className={`${chip} cursor-pointer gap-2 transition-colors hover:border-foreground [&::-webkit-details-marker]:hidden`}
          >
            {block.label}
            <ArrowIcon className="h-3 w-3 rotate-[135deg] transition-transform group-open:-rotate-45" />
          </summary>
          <div className="mt-6">{code}</div>
        </details>
      );
    }
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
            <Reveal className="grid gap-6 md:grid-cols-2 md:gap-10">
              <div>
                <p className="text-sm tracking-widest text-muted uppercase">
                  ({section.number})
                </p>
                {section.eyebrow && (
                  <p className="mt-3 text-sm">{section.eyebrow}</p>
                )}
              </div>
              <div>
                <h2 className="font-display text-4xl leading-[1.02] font-medium tracking-tight md:text-5xl lg:text-6xl">
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
