import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fat Foogo Tattoo — Custom Tattoo Studio Bregenz",
  description:
    "Custom Tattoo Studio in Bregenz, Vorarlberg. Individuelle Tattoos, traditionelle & moderne Stile. Jetzt Termin anfragen.",
  keywords: "tattoo, Bregenz, Vorarlberg, custom tattoo, Fat Foogo, Tattoo Studio",
  openGraph: {
    title: "Fat Foogo Tattoo — Custom Tattoo Studio Bregenz",
    description:
      "Individuelle Tattoos von Fat Foogo in Bregenz. Traditionelle & moderne Stile.",
    type: "website",
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
