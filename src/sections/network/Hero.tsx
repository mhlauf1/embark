import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-auto bg-gradient-to-b from-[#F9FDFF] relative to-[#EEF9FF]  pt-12 pb-36">
      <div className="absolute top-24 right-[10vw]">
        <Image
          src="/blue-circles.png"
          alt="Blue Circles"
          height={40}
          width={50}
        />
      </div>
      <div className="items-start justify-center flex  px-8 flex-col max-w-screen-2xl  py-12 mx-auto">
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
        <h1 className="hero-title mt-8 tracking-tighter capitalize">
          The Embark Network
        </h1>
        <p className="pt-6 text-lg md:text-xl text-start w-auto md:w-[74ch]">
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
            <p className="text-white absolute top-[58px] left-[42px] z-10 text-start w-auto md:w-[38ch] text-xl  font-semibold">
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
            className="absolute bottom-[-60px] left-[-60px]"
            src="/badge-white.png"
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
