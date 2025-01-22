"use client";
import * as React from "react";
import { HeroUIProvider } from "@heroui/react";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  );
}
