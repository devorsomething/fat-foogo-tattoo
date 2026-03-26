import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fat Foogo Tattoo — Custom Tattoo Studio Bregenz",
  description:
    "Custom Tattoo Studio in Bregenz, Vorarlberg. Individuelle Tattoos, traditionelle & moderne Stile. Jetzt Termin anfragen.",
  keywords: "tattoo, Bregenz, Vorarlberg, custom tattoo, Fat Foogo, Tattoo Studio",
  openGraph: {
    title: "Fat Foogo Tattoo Studio Bregenz",
    description: "Custom Tattoo Studio in Bregenz — Individual Designs, traditionell & modern",
    images: [
      {
        url: '/og?name=Fat%20Foogo%20Tattoo&tagline=Custom%20Tattoo%20%C2%B7%20Bregenz&color=%23CC0000',
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fat Foogo Tattoo Studio Bregenz",
    description: "Custom Tattoo Studio in Bregenz — Individual Designs, traditionell & modern",
    images: ['/og'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-charcoal text-white antialiased">{children}</body>
    </html>
  );
}
