import Image from "next/image";
import { referenceGallery, company } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function References() {
  return (
    <section id="referenzen" className="bg-concrete py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          label="Referenzen"
          title="Echte Baustellen aus über 30 Jahren"
          intro="Ein Ausschnitt aus unseren Projekten, von einzelnen Wandöffnungen bis zu komplexen Sanierungen. Keine Stockfotos, nur eigene Arbeiten."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {referenceGallery.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 4) * 0.05}
              className={i === 0 ? "col-span-2 row-span-2" : ""}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  i === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-sm text-steel">
            Sie möchten eine ausführliche Referenzliste?{" "}
            <a href="#kontakt" className="font-semibold text-brand underline-offset-4 hover:underline">
              Fragen Sie sie einfach an.
            </a>{" "}
            Oder laden Sie unsere{" "}
            <a
              href={company.portfolioPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand underline-offset-4 hover:underline"
            >
              Leistungsübersicht als PDF
            </a>{" "}
            herunter.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
