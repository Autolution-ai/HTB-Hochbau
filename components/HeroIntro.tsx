"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Entrance-Animation für den Hero: staffelt die Kinder beim Laden ein.
export function HeroIntro({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
      }}
    >
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
