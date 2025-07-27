import type { Metadata } from "next";
import { Cantarell, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";
import VideoOverlay from "../components/layout/VideoOverlay";
import Navigation from "../components/layout/Navigation";

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

export const metadata: Metadata = {
  title: "Carmen Vacchio - Software Developer",
  description: "Portfolio and projects of Carmen Vacchio, Software Developer",
  icons: {
    icon: '/icon.svg',
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
        className={`${cantarell.variable} ${cormorantGaramond.variable} ${playfairDisplay.variable} antialiased`}
      >
        <VideoOverlay/>
        <Navigation>{children}</Navigation>
      </body>
    </html>
  );
}
