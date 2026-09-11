"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ArrowIcon from "./ArrowIcon";

export type NumberedListItem = {
  index: string;
  title: string;
  tags?: string[];
  description?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function NumberedList({ items }: { items: NumberedListItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <ul className="border-t border-border">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const hasDetail = Boolean(item.tags?.length || item.description);

        return (
          <li key={item.index} className="group border-b border-border">
            <button
              type="button"
              onClick={() => hasDetail && setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-7 text-left sm:py-9"
              aria-expanded={isOpen}
            >
              <span className="flex items-baseline gap-4 sm:gap-6">
                <span className="text-xs text-muted">{item.index}</span>
                <span
                  className={`font-display text-2xl font-medium tracking-tight transition-colors duration-300 sm:text-4xl ${
                    isOpen ? "text-foreground" : "text-muted group-hover:text-foreground"
                  }`}
                >
                  {item.title}
                </span>
              </span>
              {hasDetail && (
                <ArrowIcon
                  className={`h-6 w-6 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-7 sm:w-7 ${
                    isOpen ? "rotate-90" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  }`}
                />
              )}
            </button>

            <AnimatePresence initial={false}>
              {isOpen && hasDetail && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="max-w-xl pb-8 pl-0 sm:pb-10 sm:pl-16">
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {item.description && (
                      <p className="mt-4 text-muted">{item.description}</p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
