import type { ReactNode } from "react";
import Container from "./Container";
import Reveal from "./motion/Reveal";
import SplitText from "./motion/SplitText";

export default function CTASection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-foreground text-background">
      <Container className="py-24 text-center sm:py-32">
        <SplitText
          as="h2"
          text={title}
          inView
          className="mx-auto max-w-3xl font-display text-5xl leading-[0.95] font-semibold tracking-tight sm:text-7xl"
        />
        <Reveal delay={0.3} className="mt-10 flex justify-center">
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
