"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Loader2, Send } from "lucide-react";
import { funnelExtraOption, serviceCategories } from "@/lib/site";

type Data = {
  categories: string[]; // gewählte Oberbegriffe
  services: string[]; // gewählte Detail-Leistungen (Mehrfachauswahl)
  customerType: string;
  location: string;
  hasPlans: string;
  timeframe: string;
  projectSize: string; // optional: Klein / Mittel / Groß / Noch unklar
  message: string;
  name: string;
  phone: string;
  email: string;
  privacy: boolean;
  company_website: string; // Honeypot – muss leer bleiben
};

const initial: Data = {
  categories: [],
  services: [],
  customerType: "",
  location: "",
  hasPlans: "",
  timeframe: "",
  projectSize: "",
  message: "",
  name: "",
  phone: "",
  email: "",
  privacy: false,
  company_website: "",
};

const timeframes = [
  "So bald wie möglich",
  "In den nächsten Wochen",
  "In den nächsten Monaten",
  "Erst einmal nur Information",
];

const projectSizes = ["Klein", "Mittel", "Groß", "Noch unklar"];

export function RequestFunnel() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Data>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const set = <K extends keyof Data>(key: K, value: Data[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const toggle = (key: "categories" | "services", value: string) =>
    setData((d) => {
      const list = d[key];
      const next = list.includes(value)
        ? list.filter((v) => v !== value)
        : [...list, value];
      if (key === "categories") {
        // Beim Abwählen eines Oberbegriffs dessen Leistungen mit entfernen
        const allowed = new Set(
          serviceCategories
            .filter((c) => next.includes(c.title))
            .flatMap((c) => c.services.map((s) => s.title))
            .concat(funnelExtraOption)
        );
        return { ...d, categories: next, services: d.services.filter((s) => allowed.has(s)) };
      }
      return { ...d, [key]: next };
    });

  const activeCategories = serviceCategories.filter((c) =>
    data.categories.includes(c.title)
  );

  const stepValid =
    step === 0
      ? data.categories.length > 0 && data.services.length > 0 && data.customerType
      : step === 1
        ? data.location && data.timeframe
        : data.name && data.phone && data.email && data.privacy;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stepValid) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Fehler");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center justify-center bg-white p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-brand">
          <Check size={32} className="text-white" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold text-anthracite">
          Danke, Ihre Anfrage ist da.
        </h3>
        <p className="mt-3 max-w-sm text-steel">
          Wir prüfen den Umfang und melden uns zeitnah bei Ihnen. Bei dringenden
          Fällen erreichen Sie uns direkt am Telefon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8">
      {/* Fortschritt */}
      <div className="mb-8 flex items-center gap-2">
        {[0, 1, 2].map((s) => (
          <div
            key={s}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              s <= step ? "bg-brand" : "bg-line"
            }`}
          />
        ))}
      </div>
      <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-steel">
        Schritt {step + 1} von 3
      </p>

      {step === 0 && (
        <div className="space-y-6">
          <Field label="Worum geht es? (Mehrfachauswahl möglich)">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {serviceCategories.map((cat) => (
                <Choice
                  key={cat.key}
                  active={data.categories.includes(cat.title)}
                  onClick={() => toggle("categories", cat.title)}
                  multi
                >
                  {cat.title}
                </Choice>
              ))}
            </div>
          </Field>

          {activeCategories.length > 0 && (
            <Field label="Welche Leistungen benötigen Sie? (Mehrfachauswahl möglich)">
              <div className="space-y-4">
                {activeCategories.map((cat) => (
                  <div key={cat.key}>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-steel">
                      {cat.title}
                    </p>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {cat.services.map((service) => (
                        <Choice
                          key={service.key}
                          active={data.services.includes(service.title)}
                          onClick={() => toggle("services", service.title)}
                          multi
                        >
                          {service.title}
                        </Choice>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <Choice
                    active={data.services.includes(funnelExtraOption)}
                    onClick={() => toggle("services", funnelExtraOption)}
                    multi
                  >
                    {funnelExtraOption}
                  </Choice>
                </div>
              </div>
            </Field>
          )}

          <Field label="Sind Sie Privat- oder Gewerbekunde?">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {["Gewerbekunde / Hausverwaltung", "Privatkunde"].map((opt) => (
                <Choice
                  key={opt}
                  active={data.customerType === opt}
                  onClick={() => set("customerType", opt)}
                >
                  {opt}
                </Choice>
              ))}
            </div>
          </Field>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-6">
          <Field label="Wo befindet sich das Objekt?">
            <input
              type="text"
              value={data.location}
              onChange={(e) => set("location", e.target.value)}
              placeholder="Ort oder Bezirk, z. B. Berlin-Mitte"
              className={inputClass}
            />
          </Field>
          <Field label="Gibt es bereits Pläne, Bilder oder einen Statiker?">
            <div className="grid grid-cols-3 gap-2">
              {["Ja", "Teilweise", "Nein"].map((opt) => (
                <Choice key={opt} active={data.hasPlans === opt} onClick={() => set("hasPlans", opt)}>
                  {opt}
                </Choice>
              ))}
            </div>
          </Field>
          <Field label="Wann soll das Projekt umgesetzt werden?">
            <div className="grid gap-2 sm:grid-cols-2">
              {timeframes.map((opt) => (
                <Choice key={opt} active={data.timeframe === opt} onClick={() => set("timeframe", opt)}>
                  {opt}
                </Choice>
              ))}
            </div>
          </Field>
          <Field label="Wie schätzen Sie den Projektumfang ein? (optional)">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {projectSizes.map((opt) => (
                <Choice
                  key={opt}
                  active={data.projectSize === opt}
                  onClick={() => set("projectSize", data.projectSize === opt ? "" : opt)}
                >
                  {opt}
                </Choice>
              ))}
            </div>
          </Field>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <Field label="Kurze Projektbeschreibung">
            <textarea
              value={data.message}
              onChange={(e) => set("message", e.target.value)}
              rows={3}
              placeholder="Was soll gemacht werden?"
              className={inputClass}
            />
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name *">
              <input type="text" value={data.name} onChange={(e) => set("name", e.target.value)} className={inputClass} />
            </Field>
            <Field label="Telefonnummer *">
              <input type="tel" value={data.phone} onChange={(e) => set("phone", e.target.value)} className={inputClass} />
            </Field>
          </div>
          <Field label="E-Mail-Adresse *">
            <input type="email" value={data.email} onChange={(e) => set("email", e.target.value)} className={inputClass} />
          </Field>

          {/* Honeypot – für Menschen unsichtbar */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={data.company_website}
            onChange={(e) => set("company_website", e.target.value)}
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
            aria-hidden="true"
          />

          <label className="flex items-start gap-3 text-sm text-steel">
            <input
              type="checkbox"
              checked={data.privacy}
              onChange={(e) => set("privacy", e.target.checked)}
              className="mt-1 h-4 w-4 accent-[var(--color-brand)]"
            />
            <span>
              Ich habe die{" "}
              <a href="/datenschutz" className="font-semibold text-brand underline-offset-2 hover:underline">
                Datenschutzerklärung
              </a>{" "}
              gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung
              der Anfrage einverstanden. *
            </span>
          </label>

          {status === "error" && (
            <p className="text-sm text-brand-deep">
              Das hat leider nicht geklappt. Bitte rufen Sie uns an oder
              versuchen Sie es erneut.
            </p>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-steel hover:text-anthracite"
          >
            <ArrowLeft size={16} /> Zurück
          </button>
        ) : (
          <span />
        )}

        {step < 2 ? (
          <button
            type="button"
            disabled={!stepValid}
            onClick={() => setStep((s) => s + 1)}
            className="inline-flex items-center gap-2 bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-40"
          >
            Weiter <ArrowRight size={16} />
          </button>
        ) : (
          <button
            type="submit"
            disabled={!stepValid || status === "sending"}
            className="inline-flex items-center gap-2 bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-40"
          >
            {status === "sending" ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Wird gesendet
              </>
            ) : (
              <>
                Projekt anfragen <Send size={16} />
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
}

const inputClass =
  "w-full border border-line bg-concrete px-4 py-3 text-anthracite outline-none transition-colors focus:border-brand";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-anthracite">{label}</label>
      {children}
    </div>
  );
}

function Choice({
  active,
  onClick,
  children,
  multi = false,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  multi?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex items-center gap-2 border px-4 py-3 text-left text-sm font-medium transition-colors ${
        active
          ? "border-brand bg-brand text-white"
          : "border-line bg-white text-anthracite hover:border-brand"
      }`}
    >
      {multi && (
        <span
          className={`grid h-4 w-4 flex-shrink-0 place-items-center border ${
            active ? "border-white bg-white" : "border-line"
          }`}
        >
          {active && <Check size={12} className="text-brand" />}
        </span>
      )}
      {children}
    </button>
  );
}
