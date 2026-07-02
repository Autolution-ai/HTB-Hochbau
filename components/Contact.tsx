import { Phone, Mail, MapPin, FileDown } from "lucide-react";
import { company } from "@/lib/site";
import { Reveal } from "./Reveal";
import { RequestFunnel } from "./RequestFunnel";

const steps = [
  { n: "1", title: "Sie schicken uns Ihre Anfrage", text: "Über das Formular, kurz und ohne Anmeldung." },
  { n: "2", title: "Wir prüfen den Umfang", text: "Bei Bedarf mit kostenlosem Termin vor Ort." },
  { n: "3", title: "Wir melden uns", text: "Mit einer ehrlichen Einschätzung und einem Angebot." },
];

export function Contact() {
  return (
    <section id="kontakt" className="bg-charcoal py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <p className="section-label text-brick">Kontakt</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
            Projekt beschreiben, Angebot erhalten
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-white/75">
            Sie schicken uns Ihre Anfrage, wir prüfen den Umfang und melden uns.
            Die Erstberatung vor Ort und der Kostenvoranschlag sind kostenlos.
          </p>

          <ol className="mt-10 space-y-6">
            {steps.map((step) => (
              <Reveal as="li" key={step.n} className="flex gap-4">
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center bg-brick font-display text-lg font-bold">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{step.title}</h3>
                  <p className="text-sm text-white/70">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <div className="mt-10 space-y-3 border-t border-white/10 pt-8 text-sm">
            <a href={`tel:${company.phone}`} className="flex items-center gap-3 text-white/85 hover:text-white">
              <Phone size={18} className="text-brick" /> {company.phoneDisplay}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-white/85 hover:text-white">
              <Mail size={18} className="text-brick" /> {company.email}
            </a>
            <p className="flex items-center gap-3 text-white/85">
              <MapPin size={18} className="text-brick" />
              {company.street}, {company.postalCode} {company.city}
            </p>
          </div>

          <a
            href={company.portfolioPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 border border-white/30 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
          >
            <FileDown size={18} /> Leistungsübersicht herunterladen (PDF)
          </a>
        </div>

        <Reveal delay={0.1}>
          <RequestFunnel />
        </Reveal>
      </div>
    </section>
  );
}
