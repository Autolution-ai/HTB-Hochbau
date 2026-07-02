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

export const heroImage = `${IMG}/2021/05/WD_13.jpg`;

export const services = [
  {
    key: "wanddurchbruch",
    title: "Statische Wanddurchbrüche",
    lead: true,
    text: "Öffnungen in tragenden und nichttragenden Wänden für Türen, Fenster oder mehr Raum, inklusive Statik, Sturz und Stahlträger.",
    image: `${IMG}/2021/05/WD_08.jpg`,
  },
  {
    key: "mauerarbeiten",
    title: "Mauerarbeiten",
    text: "Klassischer und konstruktiver Mauerwerksbau: Klinker, Fassaden, Pfeiler, Schornsteine, Ziegeldecken.",
    image: `${IMG}/2021/04/MW_K_21.jpg`,
  },
  {
    key: "rohbau",
    title: "Rohbau & Stahlbeton",
    text: "Beton- und Stahlbetonbau, Fundamente, Bodenplatten, Rohbauarbeiten für Aufzüge im Bestand.",
    image: `${IMG}/2021/04/BETON_STB_02.jpg`,
  },
  {
    key: "sanierung",
    title: "Sanierung & Instandsetzung",
    text: "Mauerwerks-, Beton- und Stahlbetonsanierung, Risssanierung, Verfugungen, Keller- und Fassadensanierung.",
    image: `${IMG}/2021/04/MWS_04_01-scaled.jpg`,
  },
  {
    key: "abdichtung",
    title: "Abdichtung & Beschichtung",
    text: "Keller, Balkone und Terrassen, klassisch oder mit dem langlebigen TRIFLEX-System.",
    image: `${IMG}/2021/05/TRIFLEX_03-scaled.jpg`,
  },
  {
    key: "brandschutz",
    title: "Baulicher Brandschutz",
    text: "Abschottungen, Brandschutzkonstruktionen und Brandschutztüren mit den nötigen Zulassungen.",
    image: `${IMG}/2021/05/BS_04-scaled.jpg`,
  },
];

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

export const serviceOptions = [
  "Wanddurchbruch",
  "Mauerarbeiten",
  "Sanierung",
  "Rohbau",
  "Instandsetzung",
  "Sonstiges",
];

export const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#wanddurchbruch", label: "Wanddurchbrüche" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#kontakt", label: "Kontakt" },
];
