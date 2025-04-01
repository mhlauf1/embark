import type { Metadata } from "next";
import Nav from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Embark Pet Services | Premium Pet Care Network Across the Midwest",
  description:
    "Embark Pet Services unites four trusted local pet care brands delivering professional boarding, grooming, daycare, and veterinary services across the Midwest. Quality care you can trust, backed by network excellence.",
  keywords: [
    "embark pet services",
    "embark dog servcies",
    "pet services",
    "pet care",
    "dog boarding",
    "grooming",
    "pet daycare",
    "veterinary services",
    "Midwest pet care",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.embarkpetservices.com",
  },
  metadataBase: new URL("https://www.embarkpetservices.com"),
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} overflow-x-hidden antialiased`}>
        <Nav />
        {children}
        <Footer />

        {/* Structured Data / JSON-LD for Local Business */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Embark Pet Services",
              description:
                "Embark Pet Services unites four trusted local pet care brands delivering professional boarding, grooming, daycare, and veterinary services across the Midwest.",
              url: "https://www.embarkpetservices.com",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Midwest",
                addressCountry: "US",
              },
              service: [
                {
                  "@type": "Service",
                  name: "Pet Boarding",
                  description: "Professional pet boarding services",
                },
                {
                  "@type": "Service",
                  name: "Pet Grooming",
                  description: "Professional pet grooming services",
                },
                {
                  "@type": "Service",
                  name: "Pet Daycare",
                  description: "Professional pet daycare services",
                },
                {
                  "@type": "Service",
                  name: "Veterinary Services",
                  description: "Professional veterinary services",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
