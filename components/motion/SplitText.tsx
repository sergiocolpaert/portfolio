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
  lineHeight,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "h1" | "h2" | "p";
  inView?: boolean;
  /** Final resting line-to-line distance, in em (e.g. 0.89). Applied to
   *  the heading from first paint, no mask/settle step involved. */
  lineHeight?: number;
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
    <Tag
      className={className}
      style={lineHeight !== undefined ? { lineHeight: `${lineHeight}em` } : undefined}
    >
      <motion.span
        {...motionProps}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: stagger, delayChildren: delay } },
        }}
        className="inline"
      >
        {words.map((word, i) => (
          <span key={i}>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: "0.3em" },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: EASE },
                },
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
