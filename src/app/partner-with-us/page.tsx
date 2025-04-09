import React from "react";
import Hero from "@/sections/partner/Hero";
import Tenets from "@/sections/partner/Tenets";

export const metadata = {
  alternates: {
    canonical: "https://www.embarkpetservices.com/partner-with-us",
  },
};

export default function PartnerWithUs() {
  return (
    <main>
      <Hero />
      <Tenets />
    </main>
  );
}
