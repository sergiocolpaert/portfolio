import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";

export default function CaseHero({
  eyebrow,
  title,
  tagline,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  tagline?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="grid md:grid-cols-2">
      <div className="flex flex-col justify-center py-12 pr-6 pl-6 md:min-h-[34rem] md:py-24 md:pr-12 md:pl-[max(1.5rem,calc((100vw-1440px)/2+1.5rem))]">
        <Reveal>
          <p className="text-sm tracking-widest text-muted uppercase">
            {eyebrow}
          </p>
        </Reveal>
        <SplitText
          as="h1"
          text={title}
          lineHeight={0.89}
          className="mt-6 font-display text-5xl font-semibold tracking-tight uppercase sm:text-6xl lg:text-7xl"
        />
        {tagline && (
          <Reveal delay={0.25}>
            <p className="mt-8 max-w-md text-lg text-muted">{tagline}</p>
          </Reveal>
        )}
      </div>

      <div className="group relative aspect-[4/3] overflow-hidden bg-foreground md:aspect-auto">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover opacity-90 grayscale transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02] group-hover:opacity-100 group-hover:grayscale-0"
        />
      </div>
    </section>
  );
}
