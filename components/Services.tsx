import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="leistungen" className="bg-concrete py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          label="Leistungen"
          title="Was wir bauen, sanieren und öffnen"
          intro="Von der einzelnen Wandöffnung bis zur Komplettinstandsetzung. Alles mit eigenen Facharbeitern, auch im laufenden Betrieb."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.key}
              delay={i * 0.06}
              className={service.lead ? "md:col-span-2" : ""}
            >
              <article
                id={service.lead ? undefined : undefined}
                className={`group relative flex h-full flex-col overflow-hidden border ${
                  service.lead
                    ? "border-brand bg-anthracite text-white"
                    : "border-line bg-white"
                }`}
              >
                <div className={`relative ${service.lead ? "h-64 md:h-72" : "h-48"} w-full overflow-hidden`}>
                  <Image
                    src={service.image}
                    alt={`${service.title} – Referenzbild von HTB Hochbau`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {service.lead && (
                    <span className="absolute left-4 top-4 bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      Hauptleistung
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3
                    className={`font-display text-xl font-bold ${
                      service.lead ? "text-white" : "text-anthracite"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      service.lead ? "text-white/75" : "text-steel"
                    }`}
                  >
                    {service.text}
                  </p>
                  {service.lead && (
                    <a
                      href="#wanddurchbruch"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand"
                    >
                      So läuft ein Wanddurchbruch <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
