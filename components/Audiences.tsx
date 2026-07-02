import { Building2, KeyRound, HardHat, Home } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const groups = [
  {
    icon: Building2,
    title: "Gewerbekunden",
    text: "Umbauten und Instandsetzung in Bestandsobjekten, auf Wunsch am Wochenende oder im laufenden Betrieb.",
  },
  {
    icon: KeyRound,
    title: "Hausverwaltungen",
    text: "Planbare Termine, ein fester Ansprechpartner und saubere Dokumentation für Ihr Objektportfolio.",
  },
  {
    icon: HardHat,
    title: "Bauleiter & Architekten",
    text: "Zuverlässige Ausführung von Roh-, Mauer- und Stahlbauarbeiten als Gewerk in Ihrem Projekt.",
  },
  {
    icon: Home,
    title: "Private Bauvorhaben",
    text: "Für klar umrissene Vorhaben wie Wanddurchbrüche oder Sanierungen im Wohnbestand.",
  },
];

export function Audiences() {
  return (
    <section className="bg-concrete-dark py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          label="Für wen wir arbeiten"
          title="Gemacht für mittlere Umbau- und Sanierungsprojekte"
          intro="Wir arbeiten am liebsten dort, wo Erfahrung und eine feste Mannschaft zählen. Vom überschaubaren Umbau bis zum sechsstelligen Sanierungsprojekt."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="flex h-full flex-col border border-line bg-white p-7">
                <span className="grid h-12 w-12 place-items-center bg-anthracite">
                  <group.icon size={22} className="text-brand" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-anthracite">
                  {group.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{group.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-steel">
            Als Orientierung: Die meisten unserer Projekte bewegen sich im Rahmen
            von rund 5.000 bis 100.000 Euro. Kleinere Reparaturen und
            Schnittstellen übernehmen wir, wenn es zeitlich passt.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
