import { referenceGallery, company } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Slideshow } from "./Slideshow";

export function References() {
  return (
    <section id="referenzen" className="bg-concrete py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          label="Referenzen"
          title="Echte Baustellen aus über 30 Jahren"
          intro="Ein Ausschnitt aus unseren Projekten, von einzelnen Wandöffnungen bis zu komplexen Sanierungen. Keine Stockfotos, nur eigene Arbeiten."
        />

        {/* Große Projekt-Diashow */}
        <Reveal className="mt-12">
          <Slideshow
            slides={referenceGallery}
            interval={4500}
            className="aspect-[16/9] w-full sm:aspect-[21/9]"
            imageSizes="(max-width: 1152px) 100vw, 1152px"
          />
        </Reveal>

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
