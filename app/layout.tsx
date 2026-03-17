import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.w7saneamento.com.br";

export const metadata: Metadata = {
  title: "W7 Saneamento | Distribuidor B2B de Materiais de Saneamento",
  description:
    "W7 Saneamento — distribuidor B2B de tubos e conexões de PEAD, PVC, ferro fundido, sistemas de drenagem e saneamento. Atendemos empresas em Santa Catarina e em todo o Brasil. Solicite cotação via WhatsApp.",
  keywords: [
    "saneamento",
    "tubos PEAD",
    "tubos PVC",
    "tubos ferro fundido",
    "esgoto",
    "adução de água",
    "conexões PVC",
    "ferro fundido",
    "drenagem",
    "distribuidor saneamento",
    "materiais saneamento",
    "tubos e conexões",
    "ASPERBRAS",
    "CIMFLEX",
    "R2SAN",
    "Santa Catarina",
    "Brasil",
    "B2B saneamento",
    "Infraestrutura",
    "drenagem",
    "conexões para saneamento",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/files/logo-blue.png', sizes: 'any', type: 'image/png' },
      { url: '/files/logo-blue.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/files/logo-blue.png', sizes: '180x180', type: 'image/png' },
  },
  openGraph: {
    title: "W7 Saneamento | Distribuidor B2B de Materiais de Saneamento",
    description:
      "Distribuidor B2B de tubos e conexões de PEAD, PVC, ferro fundido e sistemas de drenagem. Santa Catarina e Brasil.",
    url: SITE_URL,
    siteName: "W7 Saneamento",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: '/files/logo-blue.png',
        width: 400,
        height: 180,
        alt: 'W7 Saneamento',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "W7 Saneamento",
              url: SITE_URL,
              telephone: "+554899225-0207",
              email: "comercial@w7saneamento.com.br",
              description:
                "Distribuidor B2B de materiais de saneamento: tubos e conexões de PEAD, PVC, ferro fundido, sistemas de drenagem. Atendemos empresas em Santa Catarina e em todo o Brasil.",
              areaServed: "BR",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+554899225-0207",
                contactType: "sales",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
