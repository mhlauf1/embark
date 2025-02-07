"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#D5F0FF] relative px-4 sm:px-8 md:px-24 h-auto flex items-center pt-6 md:pt-12 pb-24 md:pb-36 flex-col w-full">
      <div className="items-center justify-center flex  w-full flex-col py-12 ">
        <div className="flex flex-col justify-center  items-center">
          <div className="border border-[#183453]/50 bg-white rounded-full py-1 flex flex-row items-center gap-2 px-3">
            <Image
              src="/badge-paws.png"
              height={18}
              width={24}
              alt="Paw Prints"
            />
            <p className="font-semibold capitalize">Join the network</p>
          </div>
          <h1 className="text-4xl sm:text-5xl px-4 md:text-6xl lg:text-7xl font-bold mt-5 md:mt-8 tracking-tight text-center capitalize">
            We want to partner with you
          </h1>
          <p className="pt-5 px-4 md:pt-8 text-lg text-center md:text-xl max-w-[72ch] font-semibold">
            Embark is actively looking to team up with the best pet daycare,
            boarding, and grooming providers in the US. We can develop flexible
            structures to accommodate sellers&apos; goals as they take the next
            step with their business
          </p>
          <div className="flex items-center mt-12 px-4 flex-row gap-2">
            <input
              placeholder="Enter your email"
              type="email"
              className="w-[400px] py-3 px-3 rounded-md"
            />
            <button className="font-medium  border border-[#183453]/20 tracking-wide rounded-md py-4 px-8 bg-[#9CD8F6]">
              Submit
            </button>
          </div>
        </div>
        <div className="relative mt-12 w-full">
          <div className="relative">
            <div className="w-full relative h-[700px]">
              <Image
                src="/partner-hero.png"
                fill
                alt="Embark's Network"
                className="rounded-2xl object-cover border border-[#183453]"
                sizes="100vw"
              />
            </div>
          </div>
          <Image
            className="absolute bottom-[-60px] left-[-60px]"
            src="/hero-badge.png"
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
