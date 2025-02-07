"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#D5F0FF] relative min-h-screen">
      <div className=" px-4 sm:px-8 md:px-24 py-12 md:py-24">
        <div className="flex flex-col items-center">
          <div className="border border-[#183453]/50 bg-white rounded-full py-1 flex items-center gap-2 px-3">
            <Image
              src="/badge-paws.png"
              height={18}
              width={24}
              alt="Paw Prints"
            />
            <p className="font-semibold capitalize">Join the network</p>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-5 md:mt-8 tracking-tight text-center capitalize">
            We want to partner with you
          </h1>

          <p className="pt-5 md:pt-8 text-lg md:text-xl max-w-[72ch] text-center font-semibold">
            Embark is actively looking to team up with the best pet daycare,
            boarding, and grooming providers in the US. We can develop flexible
            structures to accommodate sellers&apos; goals as they take the next
            step with their business
          </p>

          <div className="flex items-center w-full md:w-auto mt-12 flex-col sm:flex-row gap-4">
            <input
              placeholder="Enter your email"
              type="email"
              className="w-full sm:w-[400px] py-4 border border-[#183453]/20 px-3 rounded-md"
            />
            <button className="w-full sm:w-auto font-medium border border-[#183453]/20 tracking-wide rounded-md py-4 px-8 bg-[#9CD8F6]">
              Submit
            </button>
          </div>

          <div className="relative mt-12 w-full">
            <div className="w-full relative h-[700px]">
              <Image
                src="/partner-hero.png"
                fill
                alt="Embark's Network"
                className="rounded-2xl object-cover border border-[#183453]"
                sizes="100vw"
              />
            </div>
            <Image
              className="absolute top-[-30px] md:top-[-60px] -rotate-12 md:rotate-0 left-0 md:left-[-60px]"
              src="/white-badge.svg"
              alt="Embark sticker"
              height={170}
              width={170}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
