import type { Metadata } from "next";
import { Cantarell, Cormorant_Garamond, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import VideoOverlay from "../components/layout/VideoOverlay";
import Navigation from "../components/layout/Navigation";
import { Toaster } from "../components/ui/sonner";

const cantarell = Cantarell({
  variable: "--font-cantarell",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Carmen Vacchio - Software Developer",
  description: "Portfolio and projects of Carmen Vacchio, Software Developer",
  icons: {
    icon: '/svg/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cantarell.variable} ${cormorantGaramond.variable} ${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        <VideoOverlay/>
        <Navigation>{children}</Navigation>
        <Toaster />
      </body>
    </html>
  );
}
