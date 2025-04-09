import React from "react";
import Hero from "@/sections/services/Hero";
import ServicesHighlight from "@/sections/services/ServicesHighlight";
import ServicesList from "@/sections/services/ServicesList";

export const metadata = {
  alternates: {
    canonical: "https://www.embarkpetservices.com/services",
  },
};

export default function Services() {
  return (
    <main>
      <Hero />
      <ServicesHighlight />
      <ServicesList />
    </main>
  );
}
