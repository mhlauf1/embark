import React from "react";
import { IoPaw } from "react-icons/io5";

const WhatIsEmbark = () => {
  return (
    <section className="bg-[#9CD8F6] flex flex-col items-center justify-center py-28  mb-46">
      <IoPaw size={48} color="#183453" />
      <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-center md:text-start capitalize">
        What is the embark network?
      </h2>
      <p className="pt-8 text-lg text-center w-[74ch]">
        The Embark Network is a community of premium pet care facilities
        operating under one connected vision. Our locations are often
        family-owned and operated, fostering deep connections within their
        communities.
      </p>
    </section>
  );
};

export default WhatIsEmbark;
