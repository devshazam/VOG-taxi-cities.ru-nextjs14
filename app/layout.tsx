import type { Metadata } from "next";
import "./globals.css";
import "./globals.scss";
import type { Viewport } from 'next'
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import localFont from 'next/font/local'
const play = localFont({
  src: './fonts/Play-Regular.woff2',
  variable: "--font-play",
  // display: 'swap',
})

import { siteConfig } from "@/config/site"

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}


export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url.base),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url.author,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "ru-RU",
    url: siteConfig.url.base,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={play.className}> 
        {/*className={`${geistSans.variable} ${geistMono.variable} antialiased`}*/}
        <Header />
          {children}
        <Footer />
        </body>
    </html>
  );
}
