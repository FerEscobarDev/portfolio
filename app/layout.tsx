import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Oswald } from "next/font/google";
import JsonLd from "@/components/SEO/JsonLd";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fernandoescobar.dev"),
  title: {
    default: "Fernando Escobar | Desarrollador Fullstack",
    template: "%s | Fernando Escobar",
  },
  description:
    "Desarrollador Fullstack con +5 años de experiencia construyendo soluciones digitales. Especializado en C#, .NET, React, TypeScript y arquitecturas escalables.",
  keywords: [
    "Fernando Escobar",
    "Desarrollador Fullstack",
    "Fullstack Developer",
    "React Developer",
    ".NET Developer",
    "C# Developer",
    "TypeScript",
    "JavaScript",
    "Colombia",
    "Desarrollo Web",
    "Software Engineer",
    "Freelance Developer",
  ],
  authors: [{ name: "Fernando Escobar", url: "https://fernandoescobar.dev" }],
  creator: "Fernando Escobar",
  publisher: "Fernando Escobar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://fernandoescobar.dev",
    siteName: "Fernando Escobar - Portfolio",
    title: "Fernando Escobar | Desarrollador Fullstack",
    description:
      "Desarrollador Fullstack con +5 años de experiencia. Transformando ideas en código que impacta.",
    images: [
      {
        url: "/img/icon.png",
        width: 512,
        height: 512,
        alt: "Fernando Escobar - Desarrollador Fullstack",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Fernando Escobar | Desarrollador Fullstack",
    description:
      "Desarrollador Fullstack con +5 años de experiencia. Transformando ideas en código que impacta.",
    images: ["/img/icon.png"],
    creator: "@fernandoescobar",
  },
  alternates: {
    canonical: "https://fernandoescobar.dev",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/img/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/img/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <JsonLd />
      </head>
      <body
        className={`${jetbrainsMono.variable} ${oswald.variable} font-primary antialiased bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]`}
      >
        {children}
      </body>
    </html>
  );
}
