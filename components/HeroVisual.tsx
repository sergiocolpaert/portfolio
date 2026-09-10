"use client";

import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-foreground sm:aspect-[16/10]">
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="fade" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f4f3f0" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f4f3f0" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {[70, 100, 130].map((r, i) => (
          <motion.circle
            key={r}
            cx="200"
            cy="150"
            r={r}
            fill="none"
            stroke="url(#fade)"
            strokeWidth="1"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{
              opacity: { duration: 1, delay: i * 0.15 },
              scale: { duration: 1, delay: i * 0.15 },
              rotate: {
                duration: 40 + i * 15,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{ transformOrigin: "200px 150px" }}
          />
        ))}

        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const x = 200 + Math.cos(angle) * 130;
          const y = 150 + Math.sin(angle) * 130;
          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r={3}
              fill="#f4f3f0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          );
        })}

        <motion.circle
          cx="200"
          cy="150"
          r="6"
          fill="#f4f3f0"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
      </svg>
    </div>
  );
}
