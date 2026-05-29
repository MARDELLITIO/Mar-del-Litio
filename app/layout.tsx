import type { Metadata } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";

import { site } from "@/lib/site";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Baterías a domicilio en Mar del Plata — Instalación en 45′`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "baterías a domicilio Mar del Plata",
    "batería de auto Mar del Plata",
    "cambio de batería a domicilio",
    "auto no arranca Mar del Plata",
    "baterías Moura Mateo Herbo",
    "service de baterías Mar del Plata",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Baterías a domicilio en Mar del Plata`,
    description: site.description,
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Baterías a domicilio en Mar del Plata — Mar del Litio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Baterías a domicilio en Mar del Plata`,
    description: site.description,
    images: ["/images/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "automotive",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: `+54${site.phoneTel}`,
  email: site.email,
  image: `${site.url}/images/hero-bg.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: site.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -38.0055,
    longitude: -57.5426,
  },
  areaServed: {
    "@type": "City",
    name: site.city,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: site.rating.count,
    bestRating: 5,
  },
  sameAs: [site.instagram, site.tiktok, site.maps],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bebas.variable} ${barlow.variable}`}>
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
