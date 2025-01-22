import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-auto bg-gradient-to-b from-[#F9FDFF] to-[#EEF9FF]  py-12">
      <div className="items-center justify-center flex  px-8 flex-col max-w-screen-2xl py-12 mx-auto">
        <div className="border border-[#183453]/50 rounded-full bg-[#9CD8F6] py-1 flex flex-row items-center gap-2 px-3">
          <Image
            src="/badge-paws.png"
            height={18}
            width={24}
            alt="Paw Prints"
          />
          <p className="font-semibold text-xl capitalize">
            Professional Care, Local Heart
          </p>
        </div>
        <h1 className="hero-title mt-4 capitalize">The Embark Network</h1>
        <p className="pt-8 hero-text text-center w-[74ch]">
          A community of premium pet care facilities operating under one shared
          mission, managed by long-term, local staff with deep connections to
          their communities
        </p>
        <p className="mt-[10vh] text-lg text-center w-[74ch] font-semibold">
          Embark delivers a comprehensive suite of pet services focused on
          quality and reliability.
        </p>
        <Image
          src="/network-hero.png"
          height={680}
          width={1245}
          alt="Embark's Netowkr"
          className="rounded-2xl border border-[#183453] mt-4"
        />
      </div>
    </section>
  );
};

export default Hero;
