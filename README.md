# HTB Hochbau GmbH – OnePage Demo

Kompakte, conversion-orientierte OnePage für die HTB Hochbau GmbH (Berlin).
Ziel: qualifizierte Projektanfragen für Wanddurchbrüche, Mauerarbeiten und
Sanierung im Bestand – bodenständig, faktenbasiert, ohne Marketing-Blabla.

## Tech-Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (Scroll-Reveal & Hero-Entrance)
- **Lucide React** (Icons)
- Deployment: **Vercel**

## Lokal starten

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build
```

## Struktur

- `app/page.tsx` – Komposition der OnePage
- `app/layout.tsx` – Fonts (lokal via next/font), SEO-Metadaten, JSON-LD (LocalBusiness/Service)
- `app/api/anfrage/route.ts` – Formular-Endpoint (Honeypot-Spamschutz, Validierung)
- `app/impressum` · `app/datenschutz` – Rechtstexte
- `components/*` – Sektions-Komponenten
- `lib/site.ts` – zentrale Firmen- und Inhaltsdaten

## Offene Punkte vor Go-Live (Platzhalter)

- **Projektfotos:** Werden aktuell von `htb24.com` geladen (Kundeneigentum). Vor
  Go-Live durch optimierte Bilder in `/public` ersetzen (`next.config.mjs` →
  `remotePatterns` anpassen/entfernen).
- **Projektzahl** (`lib/site.ts` → `projectsCompleted`) und **Google-Bewertungen**
  durch echte Werte ersetzen.
- **Impressum:** Handelsregister-Nr. und USt-IdNr. (mit `*` markiert) eintragen.
- **E-Mail-Zustellung:** In `app/api/anfrage/route.ts` an ein Mail-/CRM-System
  anbinden. Zugangsdaten ausschließlich über `.env.local`.

---

## Datenschutz- & Security-Check (Phase 4.5)

Stand: 02.07.2026

| Punkt | Status |
|---|---|
| Bilder = Kundeneigentum (htb24.com), keine Stockfotos, keine KI-Bilder | ✓ |
| Icons (Lucide, MIT) & Schriftarten (Google Fonts via next/font, lokal) lizenzfrei | ✓ |
| Datenschutzerklärung verlinkt (Footer + Formular) | ✓ (Vorlage, rechtlich prüfen) |
| Impressum vorhanden | ✓ (Register-Daten als Platzhalter) |
| Cookie-Banner | nicht nötig – kein Tracking, keine Marketing-Cookies |
| Google Fonts lokal geladen (kein externer Aufruf) | ✓ |
| Kontaktformular: Datenschutzhinweis + Einwilligung + Spam-Schutz (Honeypot) | ✓ |
| SSL | ✓ (Vercel automatisch) |
| Keine API-Keys im Repository, `.env*` in `.gitignore` | ✓ |
| HTTP-Security-Header (X-Frame-Options, X-Content-Type-Options, Referrer-Policy) | ✓ (`next.config.mjs`) |
| `npm audit`: kritische Findings behoben | ✓ (Next.js auf 15.5.20 gehoben) |

**Verbleibende Findings:** 2 × „moderate" in einem von Next.js **build-intern
gebündelten `postcss`** (XSS beim CSS-Stringify). Kein Laufzeitrisiko für eine
statische Seite ohne Verarbeitung fremder CSS-Eingaben; ein Fix erfordert einen
Downgrade von Next auf v9 (nicht vertretbar) und wird mit einem künftigen
Next.js-Release automatisch geschlossen.

**Offene Punkte vor Go-Live:** Register-/USt-Daten im Impressum, echte
Projektzahl, E-Mail-Zustellung des Formulars, finale Bilder, juristische Prüfung
der Rechtstexte.
