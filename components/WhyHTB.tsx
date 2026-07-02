import Image from "next/image";
import { ShieldCheck, Users, Wrench, ClipboardCheck } from "lucide-react";
import { certifications, contacts } from "@/lib/site";
import { Reveal } from "./Reveal";

const reasons = [
  {
    icon: Users,
    title: "Familiengeführt in zweiter Generation",
    text: "Seit über 30 Jahren dasselbe Unternehmen, geleitet von Bauingenieuren und einem Maurermeister.",
  },
  {
    icon: Wrench,
    title: "Eigene Mannschaft statt Subunternehmer-Kette",
    text: "Rund 15 fest angestellte Maurer, Beton- und Trockenbauer. Sie wissen, wer auf Ihrer Baustelle steht.",
  },
  {
    icon: ClipboardCheck,
    title: "Realistische Einschätzung",
    text: "Wir sagen ehrlich, was geht und was nicht, statt leere Versprechen zu machen.",
  },
  {
    icon: ShieldCheck,
    title: "Zugelassen und geschult",
    text: "Zertifiziert für Brandschutz, Abdichtung und Bewehrungstechnik führender Hersteller.",
  },
];

export function WhyHTB() {
  return (
    <section className="bg-anthracite py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="section-label text-brick">Warum HTB Hochbau</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-bold leading-tight sm:text-4xl">
            Ein Baubetrieb, den Sie beim Wort nehmen können
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 0.06}>
                <div>
                  <reason.icon size={26} className="text-brick" />
                  <h3 className="mt-4 font-display text-lg font-bold">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {reason.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="relative mb-8 aspect-[4/3] w-full overflow-hidden">
            <Image
              src="https://htb24.com/wp-content/uploads/2021/05/PEO_HTB_76.jpg"
              alt="Facharbeiter von HTB Hochbau bei der Arbeit auf einer Baustelle"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          <div className="border border-white/15 p-6">
            <h3 className="font-display text-lg font-bold">Ihre Ansprechpartner</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {contacts.map((c) => (
                <li key={c.role}>
                  <span className="text-brick">{c.role}</span>
                  <br />
                  <span className="text-white/85">{c.people.join(" · ")}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 border border-white/15 p-6">
            <h3 className="font-display text-lg font-bold">Zulassungen & Zertifikate</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-brick" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
