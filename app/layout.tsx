import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { brand } from "./lib/brand";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
const shareImage = brand.logo;
const title = "Luana Oliveira Advocacia | Inventário, Usucapião e Regularização de Imóveis";
const description = "Dra. Luana Oliveira — Advocacia especializada em Inventário, Usucapião e Regularização de Imóveis. 8 anos de experiência em Cartório de Registro de Imóveis. Caratinga - MG e atendimento on-line em todo o Brasil.";

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title,
  description,
  keywords: [
    "Luana Oliveira",
    "Advogada Caratinga",
    "Inventário",
    "Usucapião",
    "Regularização de Imóveis",
    "Direito Imobiliário",
    "Direito Notarial e Registral",
    "Advocacia Caratinga MG"
  ],
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }] },
  openGraph: {
    title,
    description,
    locale: "pt_BR",
    siteName: brand.businessName,
    type: "website",
    images: metadataBase
      ? [
          {
            url: shareImage,
            width: 2172,
            height: 724,
            alt: brand.businessName,
          },
        ]
      : undefined,
  },
  twitter: {
    card: metadataBase ? "summary_large_image" : "summary",
    title,
    description,
    ...(metadataBase ? { images: [shareImage] } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${bodyFont.variable} ${displayFont.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FAF7F2] font-sans text-[#121417] antialiased">
        {children}
      </body>
    </html>
  );
}
