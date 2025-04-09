import React from "react";
import Hero from "@/sections/about/Hero";
import Mission from "@/sections/about/Mission";
import Vision from "@/sections/about/OurVision";

export const metadata = {
  alternates: {
    canonical: "https://www.embarkpetservices.com/about",
  },
};

export default function About() {
  return (
    <main>
      <Hero />
      <Mission />
      <Vision />
    </main>
  );
}
