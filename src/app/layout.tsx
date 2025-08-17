import type { Metadata } from "next";
import "./globals.css";
import VideoOverlay from "../components/layout/VideoOverlay";
import { cantarell, cormorantGaramond, playfairDisplay, inter } from "../lib/typography";

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
        {children}
   
      </body>
    </html>
  );
}
