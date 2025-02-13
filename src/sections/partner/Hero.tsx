"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#D5F0FF] relative">
      <div className="container mx-auto px-4 sm:px-8 md:px-24 py-8 md:py-16 lg:py-24">
        <div className="flex flex-col items-center">
          {/* Badge */}
          <div className="border border-[#183453]/50 bg-white rounded-full py-1 flex items-center gap-2 px-3">
            <Image
              src="/paw-small.svg"
              height={16}
              width={16}
              alt="Paw Prints"
            />
            <p className="font-semibold capitalize">Join the network</p>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-4 md:mt-6 lg:mt-8 tracking-tight text-center capitalize">
            We want to partner with you
          </h1>

          {/* Description */}
          <p className="pt-4 md:pt-6 lg:pt-8 text-base sm:text-lg md:text-xl w-full md:max-w-[72ch] text-center font-semibold">
            Embark is actively looking to team up with the best pet daycare,
            boarding, and grooming providers in the US. We can develop flexible
            structures to accommodate sellers&apos; goals as they take the next
            step with their business
          </p>

          {/* Form */}
          <div className="flex items-center w-full md:w-auto mt-8 lg:mt-12 flex-col sm:flex-row gap-4">
            <input
              placeholder="Enter your email"
              type="email"
              className="w-full sm:w-[400px] py-3 md:py-4 border border-[#183453]/20 px-3 rounded-md"
            />
            <button className="w-full sm:w-auto font-medium border border-[#183453]/20 tracking-wide rounded-md py-3 md:py-4 px-6 md:px-8 bg-[#9CD8F6]">
              Submit
            </button>
          </div>

          {/* Hero Image Container */}
          <div className="relative mt-8 lg:mt-12 w-full">
            <div className="w-full relative aspect-[16/9]">
              <Image
                src="/partner-hero.png"
                fill
                alt="Embark's Network"
                className="rounded-2xl object-cover border border-[#183453]"
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 90vw,
                       80vw"
                priority
              />
            </div>

            {/* Badge Overlay */}
            <Image
              className="absolute hidden md:block w-32 lg:w-40 xl:w-44 top-[-30px] lg:top-[-40px] left-[-20px] lg:left-[-30px]"
              src="/white-badge.svg"
              alt="Embark sticker"
              width={170}
              height={170}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
