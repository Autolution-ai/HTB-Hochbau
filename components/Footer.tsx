import { Facebook } from "lucide-react";
import { company } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-anthracite text-white/70">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center bg-brick font-display text-lg font-extrabold text-white">
                HTB
              </span>
              <span className="font-display text-lg font-bold text-white">Hochbau GmbH</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              {company.tagline}. Familiengeführtes Bauunternehmen im Raum{" "}
              {company.region}.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Kontakt
            </h3>
            <address className="mt-4 space-y-1 text-sm not-italic">
              <p>{company.street}</p>
              <p>
                {company.postalCode} {company.city}
              </p>
              <p className="pt-2">
                <a href={`tel:${company.phone}`} className="hover:text-white">
                  {company.phoneDisplay}
                </a>
              </p>
              <p>Fax {company.fax}</p>
              <p>
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Leistungen
            </h3>
            <ul className="mt-4 space-y-1.5 text-sm">
              <li><a href="#wanddurchbruch" className="hover:text-white">Statische Wanddurchbrüche</a></li>
              <li><a href="#leistungen" className="hover:text-white">Mauerarbeiten</a></li>
              <li><a href="#leistungen" className="hover:text-white">Sanierung & Instandsetzung</a></li>
              <li><a href="#referenzen" className="hover:text-white">Referenzen</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Rechtliches
            </h3>
            <ul className="mt-4 space-y-1.5 text-sm">
              <li><a href="/impressum" className="hover:text-white">Impressum</a></li>
              <li><a href="/datenschutz" className="hover:text-white">Datenschutz</a></li>
            </ul>
            <a
              href={company.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm hover:text-white"
            >
              <Facebook size={18} /> Facebook
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/45">
          © {company.name}. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
