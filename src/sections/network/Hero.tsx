import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-auto bg-gradient-to-b from-[#F9FDFF] relative to-[#EEF9FF] pt-4 md:pt-12 pb-24 md:pb-36">
      <div className="absolute top-4 right-4 md:top-24 -z-1 md:right-[10vw]">
        <Image
          src="/blue-circles.png"
          alt="Blue Circles"
          height={40}
          width={50}
        />
      </div>
      <div className="items-start justify-center flex flex-col py-12 px-4 sm:px-8 md:px-24">
        <div className="border border-[#183453]/50 rounded-full bg-[#D5F0FF] py-1 flex flex-row items-center gap-2 px-3">
          <Image src="/paw-small.svg" height={16} width={16} alt="Paw Prints" />
          <p className="font-semibold text-xl capitalize">
            Professional Care, Local Heart
          </p>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-5 md:mt-8 md:w-full tracking-tight text-start capitalize">
          The Embark Network
        </h1>
        <p className="pt-6 text-base sm:text-lg md:text-xl max-w-[74ch] font-semibold">
          A community of premium pet care facilities operating under one shared
          mission, managed by long-term, local staff with deep connections to
          their communities
        </p>
        <div className="relative mt-10 w-full">
          <div className="relative">
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-[1] rounded-2xl pointer-events-none"
              style={{ height: "40%" }}
            ></div>
            <p className="text-white absolute top-[24px] md:top-[58px] left-[24px] md:left-[42px] z-10 text-start w-auto md:w-[38ch] text-lg md:text-xl  font-semibold">
              Embark delivers a comprehensive suite of pet services focused on
              quality and reliability.
            </p>
            <div className="w-full relative h-[700px]">
              <Image
                src="/network-hero.png"
                fill
                alt="Embark's Network"
                className="rounded-2xl object-cover border border-[#183453]"
                sizes="100vw"
              />
            </div>
          </div>
          <Image
            className="absolute bottom-[-90px] md:bottom-[-60px] -rotate-12 md:rotate-0 left-0 md:left-[-60px]"
            src="/white-badge.svg"
            alt="Embark sticker"
            height={170}
            width={170}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
