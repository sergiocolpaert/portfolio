"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.045,
  as: Tag = "span",
  inView = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "h1" | "h2" | "p";
  inView?: boolean;
}) {
  const words = text.split(" ");

  const motionProps = inView
    ? {
        initial: "hidden" as const,
        whileInView: "show" as const,
        viewport: { once: true, margin: "-10% 0px -10% 0px" },
      }
    : {
        initial: "hidden" as const,
        animate: "show" as const,
      };

  return (
    <Tag className={className}>
      <motion.span
        {...motionProps}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: stagger, delayChildren: delay } },
        }}
        className="inline"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.08em]">
            <motion.span
              variants={{
                hidden: { y: "110%" },
                show: {
                  y: 0,
                  transition: { duration: 0.75, ease: EASE },
                },
              }}
              className="inline-block"
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
