import React from "react";
import Hero from "@/sections/network/Hero";
import WhatIsEmbark from "@/sections/network/WhatIsEmbark";
import MeetNetwork from "@/sections/network/MeetNetwork";

export const metadata = {
  alternates: {
    canonical: "/network",
  },
};

export default function Network() {
  return (
    <main>
      <Hero />
      <WhatIsEmbark />
      <MeetNetwork />
    </main>
  );
}
