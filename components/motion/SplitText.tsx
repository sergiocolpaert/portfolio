"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

// During the reveal, each word needs its own overflow-hidden box to
// mask the slide-up animation, and that box has to be tall enough to
// fully contain the font's ascent + descent (measured ~0.96em of ink
// for Switzer at large sizes, plus headroom) or it clips descenders
// (g, y, p, q). That safe height is taller than a genuinely tight
// display line-height like 0.89em, so a permanent overflow-hidden mask
// and a tight line-height are mutually exclusive. The fix: keep the
// safe, generous box only while the word is animating, then drop the
// mask once the whole line has settled and let the heading's own true
// line-height take over — tight leading is only a clipping risk when
// something is cropping the box, and nothing crops plain text.
const MASK_LINE_HEIGHT = 1.2;

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
   *  the heading itself once the reveal settles. */
  lineHeight?: number;
}) {
  const words = text.split(" ");
  const [settled, setSettled] = useState(false);

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
      style={
        settled && lineHeight !== undefined
          ? { lineHeight: `${lineHeight}em` }
          : undefined
      }
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
            <span
              className="inline-block"
              style={
                settled
                  ? undefined
                  : { overflow: "hidden", lineHeight: `${MASK_LINE_HEIGHT}em` }
              }
            >
              <motion.span
                variants={{
                  hidden: { y: "110%" },
                  show: {
                    y: 0,
                    transition: { duration: 0.75, ease: EASE },
                  },
                }}
                onAnimationComplete={
                  i === words.length - 1 ? () => setSettled(true) : undefined
                }
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
            {/* Rendered outside the masked box: a trailing space inside
                an inline-block gets trimmed by the UA's whitespace
                collapsing once overflow is no longer hidden. */}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
