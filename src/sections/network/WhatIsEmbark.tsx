import React from "react";
import Image from "next/image";

const WhatIsEmbark = () => {
  return (
    <section className="bg-[#9CD8F6] border border-[#183453]/50 px-4 sm:px-8 md:px-24 flex flex-col items-center justify-center py-28 md:py-40">
      <div className="border border-[#183453]/50 bg-[#EEF9FF] rounded-full py-1 flex items-center gap-2 px-3">
        <Image src="/paw-small.svg" height={16} width={16} alt="Paw Prints" />{" "}
        <p className="font-semibold capitalize">Premium Pet Care Network</p>
      </div>
      <h2 className="mt-5 md:mt-8 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-center  capitalize">
        What is the embark network?
      </h2>
      <p
        style={{ lineHeight: "140%" }}
        className="pt-6 md:pt-8 text-lg md:text-2xl font-medium text-center  w-auto md:w-[74ch]"
      >
        The Embark Network is a community of premium pet care facilities
        operating under one connected vision. Our locations are founded by local
        families, and Embark preserves the family vision and community bonds,
        fostering deep connections within their communities.
      </p>
    </section>
  );
};

export default WhatIsEmbark;
