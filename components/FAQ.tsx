"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type FAQItem = {
  question: string;
  answer: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-border">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="border-b border-border">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
              aria-expanded={isOpen}
            >
              <span className="flex items-baseline gap-4 sm:gap-6">
                <span className="text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl font-medium tracking-tight sm:text-2xl">
                  {item.question}
                </span>
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-foreground text-lg transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="max-w-xl pb-6 text-muted sm:pb-7">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
