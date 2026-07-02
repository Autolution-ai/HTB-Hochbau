import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum | HTB Hochbau GmbH",
  robots: { index: false, follow: true },
};

// Hinweis: Mit * markierte Angaben (Handelsregister, USt-IdNr.) sind
// Platzhalter und vor Go-Live durch die echten Daten zu ersetzen.
export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <section>
        <h2 className="font-display text-lg font-bold text-anthracite">Angaben gemäß § 5 DDG</h2>
        <p className="mt-3">
          {company.name}
          <br />
          {company.street}
          <br />
          {company.postalCode} {company.city}
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-anthracite">Vertreten durch</h2>
        <p className="mt-3">Marc Tietz, Sven Ahrendt (Geschäftsführung)</p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-anthracite">Kontakt</h2>
        <p className="mt-3">
          Telefon: {company.phoneDisplay}
          <br />
          Fax: {company.fax}
          <br />
          E-Mail: {company.email}
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-anthracite">Registereintrag *</h2>
        <p className="mt-3">
          Registergericht: Amtsgericht Berlin (Charlottenburg) *<br />
          Registernummer: HRB XXXXXX *
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-anthracite">Umsatzsteuer-ID *</h2>
        <p className="mt-3">
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG: DE XXXXXXXXX *
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-anthracite">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <p className="mt-3">
          Marc Tietz
          <br />
          {company.street}, {company.postalCode} {company.city}
        </p>
      </section>

      <p className="text-sm text-steel/70">
        * Diese Angaben sind Platzhalter und werden vor der Veröffentlichung
        durch die tatsächlichen Registerdaten ersetzt.
      </p>
    </LegalLayout>
  );
}
