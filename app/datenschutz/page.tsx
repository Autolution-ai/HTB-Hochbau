import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | HTB Hochbau GmbH",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <section>
        <h2 className="font-display text-lg font-bold text-anthracite">1. Verantwortlicher</h2>
        <p className="mt-3">
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          <br />
          {company.name}, {company.street}, {company.postalCode} {company.city}
          <br />
          Telefon: {company.phoneDisplay}, E-Mail: {company.email}
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-anthracite">2. Hosting</h2>
        <p className="mt-3">
          Diese Website wird bei einem Dienstleister gehostet. Beim Aufruf werden
          technisch notwendige Server-Logdaten (z. B. IP-Adresse, Zeitpunkt,
          abgerufene Datei) verarbeitet, um den Betrieb und die Sicherheit der
          Website zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
          DSGVO (berechtigtes Interesse).
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-anthracite">3. Kontakt- und Anfrageformular</h2>
        <p className="mt-3">
          Wenn Sie uns über das Anfrageformular kontaktieren, verarbeiten wir die
          von Ihnen angegebenen Daten (u. a. Name, Telefonnummer, E-Mail sowie
          Angaben zu Ihrem Bauvorhaben) ausschließlich zur Bearbeitung Ihrer
          Anfrage und für mögliche Anschlussfragen. Rechtsgrundlage ist Art. 6
          Abs. 1 lit. b DSGVO (Anbahnung eines Vertragsverhältnisses) sowie Art.
          6 Abs. 1 lit. a DSGVO (Einwilligung). Die Daten werden gelöscht, sobald
          sie für den Zweck nicht mehr erforderlich sind und keine gesetzlichen
          Aufbewahrungspflichten entgegenstehen.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-anthracite">4. Schriftarten</h2>
        <p className="mt-3">
          Diese Website bindet Schriftarten lokal ein. Es findet kein Abruf von
          externen Servern (etwa Google Fonts) und damit keine Übermittlung Ihrer
          IP-Adresse an Dritte zu diesem Zweck statt.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-anthracite">5. Keine Tracking-Tools</h2>
        <p className="mt-3">
          Wir setzen keine Analyse- oder Marketing-Cookies und kein Tracking ein.
          Es werden nur technisch notwendige Daten verarbeitet.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-anthracite">6. Ihre Rechte</h2>
        <p className="mt-3">
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.
          Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die
          Zukunft widerrufen. Zudem steht Ihnen ein Beschwerderecht bei einer
          Datenschutz-Aufsichtsbehörde zu.
        </p>
      </section>

      <p className="text-sm text-steel/70">
        Hinweis: Diese Datenschutzerklärung ist eine Vorlage für die Demo und
        sollte vor Go-Live rechtlich geprüft und an die tatsächlichen
        Verarbeitungen (Hoster, E-Mail-Zustellung) angepasst werden.
      </p>
    </LegalLayout>
  );
}
