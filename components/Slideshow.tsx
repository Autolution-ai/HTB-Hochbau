"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Slide = { src: string; alt: string };

// Wiederverwendbare Diashow: Autoplay (pausiert bei Hover/Interaktion),
// Pfeile + Punkte, respektiert prefers-reduced-motion.
export function Slideshow({
  slides,
  interval = 5000,
  className = "",
  imageSizes = "100vw",
  cover = true,
  showControls = true,
  priorityFirst = false,
}: {
  slides: readonly Slide[];
  interval?: number;
  className?: string;
  imageSizes?: string;
  cover?: boolean;
  showControls?: boolean;
  priorityFirst?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + slides.length) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    if (reduced || paused || slides.length < 2) return;
    timer.current = setInterval(() => go(1), interval);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [go, interval, paused, reduced, slides.length]);

  return (
    <div
      className={`group relative overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="Diashow"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.7, ease: "easeInOut" }}
        >
          <Image
            src={slides[index].src}
            alt={slides[index].alt}
            fill
            sizes={imageSizes}
            priority={priorityFirst && index === 0}
            className={cover ? "object-cover" : "object-contain"}
          />
        </motion.div>
      </AnimatePresence>

      {showControls && slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Vorheriges Bild"
            className="absolute left-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center bg-anthracite/60 text-white opacity-0 transition-opacity focus-visible:opacity-100 group-hover:opacity-100"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Nächstes Bild"
            className="absolute right-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center bg-anthracite/60 text-white opacity-0 transition-opacity focus-visible:opacity-100 group-hover:opacity-100"
          >
            <ChevronRight size={22} />
          </button>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Bild ${i + 1} anzeigen`}
                aria-current={i === index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
