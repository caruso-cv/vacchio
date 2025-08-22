import type { Metadata } from "next";
import "./globals.css";
import VideoOverlay from "../components/layout/VideoOverlay";
import { cantarell, cormorantGaramond, playfairDisplay, inter } from "../lib/typography";

export const metadata: Metadata = {
  title: "Carmen Vacchio - Software Developer",
  description: "Portfolio and projects of Carmen Vacchio, a passionate software developer specializing in React, Next.js, and modern web technologies. View my work and experience.",
  keywords: ["Carmen Vacchio", "Software Developer", "React", "Next.js", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "Carmen Vacchio" }],
  creator: "Carmen Vacchio",
  publisher: "Carmen Vacchio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
      openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://carmenvacchio.com',
      title: 'Carmen Vacchio - Software Developer',
      description: 'Portfolio and projects of Carmen Vacchio, a passionate software developer specializing in React, Next.js, and modern web technologies.',
      siteName: 'Carmen Vacchio Portfolio',
      images: [
        {
          url: '/jpg/thumbnail.jpg',
          width: 1200,
          height: 630,
          alt: 'Carmen Vacchio - Software Developer',
        },
      ],
    },
      twitter: {
      card: 'summary_large_image',
      title: 'Carmen Vacchio - Software Developer',
      description: 'Portfolio and projects of Carmen Vacchio, a passionate software developer specializing in React, Next.js, and modern web technologies.',
      images: ['/jpg/thumbnail.jpg'],
      creator: '@carmenvacchio',
    },
  icons: {
    icon: '/svg/favicon.svg',
    apple: '/svg/favicon.svg',
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-verification-code',
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
