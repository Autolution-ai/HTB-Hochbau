import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { company, heroImage } from "@/lib/site";
import { HeroIntro } from "./HeroIntro";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden">
      <Image
        src={heroImage}
        alt="Wanddurchbruch mit Stahlträger-Abfangung auf einer Baustelle von HTB Hochbau in Berlin"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-anthracite via-anthracite/80 to-anthracite/30" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32 md:pb-24">
        <HeroIntro>
          <p className="section-label text-brick">
            Hochbau im Bestand · {company.region}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl md:text-6xl">
            Wanddurchbrüche und Umbauten, die halten.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Statische Wanddurchbrüche, Mauerarbeiten und Sanierung im Bestand.
            Familienbetrieb aus Berlin, eigene Mannschaft, ein Ansprechpartner
            vom ersten Termin bis zur Übergabe.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-2 bg-brick px-7 py-4 font-semibold text-white transition-colors hover:bg-brick-deep"
            >
              Projekt anfragen
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:${company.phone}`}
              className="inline-flex items-center justify-center gap-2 border border-white/30 px-7 py-4 font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone size={18} /> {company.phoneDisplay}
            </a>
          </div>

          <p className="mt-8 text-sm font-medium text-white/70">
            {company.yearsInBusiness} Jahre · rund {company.employees} eigene
            Facharbeiter · familiengeführt in zweiter Generation
          </p>
        </HeroIntro>
      </div>
    </section>
  );
}
