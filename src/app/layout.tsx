import type { Metadata } from "next";
import Nav from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";

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
      </body>
    </html>
  );
}
