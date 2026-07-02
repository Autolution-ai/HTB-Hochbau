import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const points = [
  "Statische Prüfung und Nachweis vor dem ersten Schnitt",
  "Fachgerechte Abfangung mit Stahlträger oder Sturz",
  "Saubere Ausführung, auch in bewohnten Objekten",
  "Versicherter Betrieb, dokumentierte Übergabe",
];

export function UseCase() {
  return (
    <section id="wanddurchbruch" className="bg-anthracite py-24 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="https://htb24.com/wp-content/uploads/2021/05/WD_24.jpg"
              alt="Fertiger statischer Wanddurchbruch mit Stahlträger in einem Berliner Altbau"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="section-label text-brand">Use Case · Wanddurchbruch</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
            Mehr Raum schaffen durch statische Wanddurchbrüche
          </h2>
          <p className="mt-5 leading-relaxed text-white/80">
            Zwei kleine Räume sollen ein großer werden. Dafür braucht es mehr als
            eine Kernbohrung: einen Statiker, einen erfahrenen Fachbetrieb und
            eine saubere Abfangung. Wir prüfen Ihr Vorhaben, stimmen die Schritte
            ab und setzen den Durchbruch fachgerecht um.
          </p>

          <ul className="mt-7 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center bg-brand">
                  <Check size={15} className="text-white" />
                </span>
                <span className="text-white/85">{point}</span>
              </li>
            ))}
          </ul>

          <a
            href="#kontakt"
            className="mt-8 inline-flex bg-brand px-7 py-4 font-semibold text-white transition-colors hover:bg-brand-deep"
          >
            Wanddurchbruch anfragen
          </a>
        </Reveal>
      </div>
    </section>
  );
}
