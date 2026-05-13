import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel, Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "M·Roman — Joyería y Relojería de autor",
  description:
    "M·Roman. Casa de joyería y relojería desde 1952. Piezas de autor, alta relojería y servicio de taller artesanal.",
  keywords: [
    "joyería",
    "relojería",
    "M Roman",
    "alta joyería",
    "alta relojería",
    "taller",
    "diseño a medida",
    "tasación",
  ],
  openGraph: {
    title: "M·Roman — Joyería y Relojería",
    description:
      "Casa centenaria de joyería y relojería. Piezas de autor y alta relojería.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`${cormorant.variable} ${cinzel.variable} ${inter.variable} antialiased grain`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
