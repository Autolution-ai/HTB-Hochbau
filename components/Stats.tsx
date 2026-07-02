"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { company, certifications } from "@/lib/site";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const stats = [
  { to: company.yearsInBusiness, suffix: "", label: "Jahre am Markt" },
  { to: company.employees, suffix: "", label: "eigene Facharbeiter" },
  { to: 500, suffix: "+", label: "Projekte im Bestand *" },
  { to: certifications.length, suffix: "", label: "Herstellerzulassungen" },
];

export function Stats() {
  return (
    <section className="border-y border-line bg-charcoal">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-4xl font-extrabold text-brand md:text-5xl">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs leading-relaxed text-white/45">
          * Richtwert, wird vor Veröffentlichung durch die tatsächliche
          Projektzahl ersetzt. Zulassungen u.&nbsp;a.: PROMAT, WÜRTH, WEBAC,
          TRIFLEX, HÖRMANN, HENSOTHERM.
        </p>
      </div>
    </section>
  );
}
