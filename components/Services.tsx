"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { serviceCategories } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Slideshow } from "./Slideshow";

export function Services() {
  const [active, setActive] = useState(1); // Start: Rekonstruktion (enthält die Hauptleistung)
  const category = serviceCategories[active];

  return (
    <section id="leistungen" className="bg-concrete py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          label="Leistungen"
          title="Was wir bauen, sanieren und öffnen"
          intro="Neubau, Rekonstruktion und Sanierung im Bestand. Alles mit eigenen Facharbeitern, auch im laufenden Betrieb."
        />

        {/* Oberbegriff-Tabs */}
        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Leistungsbereiche">
          {serviceCategories.map((cat, i) => (
            <button
              key={cat.key}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`border px-5 py-3 font-display text-sm font-bold transition-colors ${
                i === active
                  ? "border-brand bg-brand text-white"
                  : "border-line bg-white text-anthracite hover:border-brand"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <Reveal key={category.key} className="mt-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            {/* Foto-Diashow der Gruppe */}
            <Slideshow
              slides={category.images}
              className="aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[420px]"
              imageSizes="(max-width: 1024px) 100vw, 45vw"
            />

            {/* Leistungen der Gruppe */}
            <div>
              <p className="text-lg leading-relaxed text-steel">{category.intro}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {category.services.map((service) => (
                  <article
                    key={service.key}
                    className={`border p-5 ${
                      "lead" in service && service.lead
                        ? "border-brand bg-anthracite text-white sm:col-span-2"
                        : "border-line bg-white"
                    }`}
                  >
                    {"lead" in service && service.lead && (
                      <span className="mb-2 inline-block bg-brand px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-white">
                        Hauptleistung
                      </span>
                    )}
                    <h3
                      className={`font-display text-lg font-bold ${
                        "lead" in service && service.lead ? "text-white" : "text-anthracite"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`mt-1.5 text-sm leading-relaxed ${
                        "lead" in service && service.lead ? "text-white/75" : "text-steel"
                      }`}
                    >
                      {service.text}
                    </p>
                    {"lead" in service && service.lead && (
                      <a
                        href="#wanddurchbruch"
                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-light"
                      >
                        So läuft ein Wanddurchbruch <ArrowUpRight size={16} />
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
