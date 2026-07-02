import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import { company } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://htb24.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Wanddurchbrüche & Hochbau Berlin | HTB Hochbau GmbH",
  description:
    "Statische Wanddurchbrüche, Mauerarbeiten & Rekonstruktionsbau in Berlin und Brandenburg. Familienbetrieb, 30 Jahre, eigene Facharbeiter. Projekt anfragen.",
  keywords: [
    "Wanddurchbruch Berlin",
    "statischer Wanddurchbruch Berlin",
    "Mauerarbeiten Berlin",
    "Bausanierung Berlin",
    "Rekonstruktionsbau Berlin",
    "Hochbau Berlin Brandenburg",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: company.name,
    title: "Wanddurchbrüche & Hochbau in Berlin | HTB Hochbau GmbH",
    description:
      "30 Jahre, eigene Mannschaft, ein Ansprechpartner: statische Wanddurchbrüche, Mauerarbeiten und Sanierung im Bestand für Gewerbe, Hausverwaltungen und Bauvorhaben.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["GeneralContractor", "LocalBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: company.name,
      description:
        "Familiengeführtes Bauunternehmen für Sanierung, Instandsetzung und Rekonstruktion im Bestand. Spezialisiert auf statische Wanddurchbrüche.",
      url: siteUrl,
      telephone: company.phone,
      email: company.email,
      foundingDate: "1994",
      address: {
        "@type": "PostalAddress",
        streetAddress: company.street,
        postalCode: company.postalCode,
        addressLocality: company.city,
        addressCountry: "DE",
      },
      areaServed: ["Berlin", "Brandenburg"],
      sameAs: [company.facebook],
    },
    {
      "@type": "Service",
      serviceType: "Statische Wanddurchbrüche",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: ["Berlin", "Brandenburg"],
      description:
        "Herstellen von Öffnungen in tragenden und nichttragenden Wänden inklusive Statik, Sturz und Stahlträger.",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${archivo.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
