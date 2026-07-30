// Zentrale Firmen- und Inhaltsdaten für HTB Hochbau GmbH.
// Quelle: bestehende Website htb24.com + Kundenbriefing.
// PLATZHALTER-Werte sind als solche markiert und vor Go-Live zu bestätigen.

export const company = {
  name: "HTB Hochbau GmbH",
  tagline: "Sanierung · Instandsetzung · Rekonstruktion",
  phone: "+49 30 54807600",
  phoneDisplay: "+49 (30) 54 80 76 00",
  fax: "+49 (30) 54 80 76 01",
  email: "info@htb24.de",
  street: "Fliegenpilzstraße 369",
  postalCode: "12526",
  city: "Berlin",
  district: "Berlin-Bohnsdorf",
  region: "Berlin & Brandenburg",
  facebook: "https://www.facebook.com/htb24.de",
  portfolioPdf:
    "https://htb24.com/wp-content/uploads/2025/01/2025-Portfolio-Bauleistungen-HTB-Hochbau-GmbH.pdf",
  yearsInBusiness: 30,
  employees: 15,
  // PLATZHALTER: echte Zahl vor Go-Live einsetzen
  projectsCompleted: "500+",
} as const;

export const contacts = [
  {
    role: "Geschäftsleitung",
    people: ["Dipl.-Bauing. Marc Tietz", "Dipl.-Bauing. Sven Ahrendt"],
  },
  { role: "Bauleitung", people: ["Maurermeister Riccardo Meier"] },
  { role: "Sekretariat", people: ["Sandy Niemann"] },
];

export const certifications = [
  "Bautechnischer Brandschutz PROMAT & WÜRTH",
  "Bewehrungsanschluss im Injektionsverfahren (WÜRTH, mit Zulassung)",
  "Abdichtungssysteme WEBAC",
  "Beschichtung & Abdichtung TRIFLEX",
  "Brandschutztüren HÖRMANN / STEINAU",
  "Stahlbaubrandschutz HENSOTHERM 421",
];

const IMG = "https://htb24.com/wp-content/uploads";

// Original-Logo der HTB Hochbau GmbH (blaues Quadrat, weißer Schriftzug)
export const logo = `${IMG}/2021/02/cropped-LOGO-400x400-1.jpg`;

export const heroSlides = [
  { src: `${IMG}/2021/05/WD_13.jpg`, alt: "Wanddurchbruch mit Stahlträger-Abfangung auf einer Baustelle von HTB Hochbau in Berlin" },
  { src: `${IMG}/2021/05/MW_K_40-scaled.jpg`, alt: "Mauerwerksbau durch Facharbeiter von HTB Hochbau" },
  { src: `${IMG}/2021/05/BETON_STB_07_N-scaled.jpg`, alt: "Beton- und Stahlbetonarbeiten auf einer HTB-Baustelle" },
  { src: `${IMG}/2021/05/MW_FASSADE_13.jpg`, alt: "Sanierte Klinkerfassade eines Bestandsgebäudes" },
];

// Leistungsstruktur: 3 Oberbegriffe mit insgesamt ~10 Leistungen.
// Wird für die Leistungs-Sektion UND den zweistufigen Anfrage-Funnel genutzt.
export const serviceCategories = [
  {
    key: "neubau",
    title: "Neubau",
    intro: "Rohbau und konstruktiver Mauerwerksbau, vom Fundament bis zur Decke.",
    services: [
      { key: "rohbau", title: "Rohbau & Stahlbeton", text: "Beton- und Stahlbetonbau, auch Rohbau für Aufzüge, Pools und Anbauten." },
      { key: "mauerarbeiten", title: "Mauerarbeiten", text: "Klassischer und konstruktiver Mauerwerksbau: Klinker, Fassaden, Pfeiler, Schornsteine." },
      { key: "bodenplatten", title: "Bodenplatten & Fundamente", text: "Tragfähige Grundlagen für Garagen, Anbauten und kleinere Bauprojekte." },
    ],
    images: [
      { src: `${IMG}/2021/04/BETON_STB_02.jpg`, alt: "Stahlbetonarbeiten im Neubau" },
      { src: `${IMG}/2021/04/MW_K_21.jpg`, alt: "Klassische Mauerarbeiten im Neubau" },
      { src: `${IMG}/2021/05/BT_BP_13.jpg`, alt: "Bodenplatte im Bau" },
      { src: `${IMG}/2021/05/MW_K_66-scaled.jpg`, alt: "Mauerwerk in allen Steinsorten" },
      { src: `${IMG}/2021/05/BETON_STB_16.jpg`, alt: "Betonbauarbeiten mit eigener Mannschaft" },
    ],
  },
  {
    key: "rekonstruktion",
    title: "Rekonstruktion",
    intro: "Eingriffe in die Substanz, fachgerecht abgefangen und statisch gesichert.",
    services: [
      { key: "wanddurchbruch", title: "Statische Wanddurchbrüche", lead: true, text: "Öffnungen in tragenden und nichttragenden Wänden inklusive Statik, Sturz und Stahlträger." },
      { key: "stahlbau", title: "Stahlbau & Abfangungen", text: "Stahlkonstruktionen für Abfangungen in Decken und Wänden, statische Sicherungsmaßnahmen." },
      { key: "rekonstruktionsbau", title: "Rekonstruktionsbau", text: "Pfeiler, Decken, Treppen und Schornsteine im Bestand wiederherstellen." },
      { key: "kernbohrungen", title: "Kernbohrungen & Abbruch", text: "Kernbohrungen in Mauerwerk und Beton, Fugenschnitte, konstruktiver Abbruch." },
    ],
    images: [
      { src: `${IMG}/2021/05/WD_20.jpg`, alt: "Wanddurchbruch in tragender Wand mit Stahlträger" },
      { src: `${IMG}/2021/05/ABFANG_14-scaled.jpg`, alt: "Stahlbau-Abfangung für eine Wandöffnung" },
      { src: `${IMG}/2021/05/WD_24.jpg`, alt: "Fertiger statischer Wanddurchbruch im Altbau" },
      { src: `${IMG}/2021/05/MW_DECKEN_07.jpg`, alt: "Rekonstruktion einer Ziegeldecke" },
      { src: `${IMG}/2021/05/ST_SA_27.jpg`, alt: "Stahlträger-Einbau im Bestand" },
    ],
  },
  {
    key: "sanierung",
    title: "Sanierung & Instandsetzung",
    intro: "Bestand erhalten: vom Keller bis zur Fassade, auch im laufenden Betrieb.",
    services: [
      { key: "mauerwerkssanierung", title: "Mauerwerks- & Betonsanierung", text: "Statische Risssanierung, Ziegelreparaturen, Verfugungen, Sichtmauerwerk." },
      { key: "abdichtung", title: "Keller & Abdichtung", text: "Kellersanierung, Abdichtung von Balkonen und Terrassen, TRIFLEX-Beschichtungen." },
      { key: "putz", title: "Putz & Trockenbau", text: "Außen- und Innenputz, Trockenbau, Vollwärmeschutz, Estrich." },
      { key: "brandschutz", title: "Baulicher Brandschutz", text: "Abschottungen, Brandschutzkonstruktionen und Brandschutztüren mit Zulassung." },
    ],
    images: [
      { src: `${IMG}/2021/04/MWS_04_01-scaled.jpg`, alt: "Sanierung von Bestandsmauerwerk" },
      { src: `${IMG}/2021/05/TRIFLEX_03-scaled.jpg`, alt: "TRIFLEX-Abdichtung auf einem Balkon" },
      { src: `${IMG}/2021/05/P_09-scaled.jpg`, alt: "Putzarbeiten an einer Fassade" },
      { src: `${IMG}/2021/05/BS_04-scaled.jpg`, alt: "Baulicher Brandschutz mit Zulassung" },
      { src: `${IMG}/2021/05/MW_S_74-scaled.jpg`, alt: "Instandgesetztes Sichtmauerwerk" },
    ],
  },
];

// Flache Liste für den Funnel: Oberbegriff -> Detail-Leistungen (+ Sonstiges)
export const funnelExtraOption = "Sonstiges";

export const referenceGallery = [
  { src: `${IMG}/2021/05/WD_20.jpg`, alt: "Wanddurchbruch in tragender Wand mit Stahlträger-Abfangung" },
  { src: `${IMG}/2021/04/MW_K_21.jpg`, alt: "Klassisches Mauerwerk im Neubau und in der Rekonstruktion" },
  { src: `${IMG}/2021/04/MWS_04_01-scaled.jpg`, alt: "Sanierung und Instandsetzung von Bestandsmauerwerk" },
  { src: `${IMG}/2021/05/BETON_STB_07_N-scaled.jpg`, alt: "Beton- und Stahlbetonarbeiten auf der Baustelle" },
  { src: `${IMG}/2021/05/ABFANG_14-scaled.jpg`, alt: "Stahlbau-Abfangung für eine Wandöffnung" },
  { src: `${IMG}/2021/05/MW_FASSADE_13.jpg`, alt: "Sanierte Klinkerfassade im Bestand" },
  { src: `${IMG}/2021/05/P_09-scaled.jpg`, alt: "Putzarbeiten an einer Fassade" },
  { src: `${IMG}/2021/05/TRIFLEX_04.jpg`, alt: "Abdichtung und Beschichtung mit dem TRIFLEX-System" },
];

export const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#wanddurchbruch", label: "Wanddurchbrüche" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#kontakt", label: "Kontakt" },
];
