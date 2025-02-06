"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";

const Hero = () => {
  return (
    <section className="py-12 h-[150vh] px-[5%]">
      <div className="bg-[#ACD9F7] relative overflow-visible h-[100vh] py-24 px-20 flex items-center flex-col w-full  rounded-2xl">
        <div className="flex flex-col justify-center items-start">
          <div className="border border-[#183453]/50 bg-white rounded-full py-1 flex flex-row items-center gap-2 px-3">
            <Image
              src="/badge-paws.png"
              height={18}
              width={24}
              alt="Paw Prints"
            />
            <p className="font-semibold capitalize">Join the network</p>
          </div>
          <h1 className="hero-title mt-4 tracking-tighter  capitalize">
            We want to partner with you
          </h1>
          <p className="pt-4 hero-text text-start w-[85%] font-semibold">
            Embark is actively looking to team up with the best pet daycare,
            boarding, and grooming providers in the US. We can develop flexible
            structures to accommodate sellers&apos; goals as they take the next
            step with their business
          </p>
          <div className="flex items-center mt-12 flex-row gap-2">
            <input
              placeholder="Enter your email"
              type="email"
              className="w-[400px] py-3 px-3 rounded-md"
            />
            <Button
              className="font-medium  border border-[#183453]/20 tracking-wide rounded-md py-3 px-6 bg-[#EEF9FF]"
              size="lg"
            >
              Submit
            </Button>
          </div>
        </div>
        <div className="relative mt-8 w-full">
          <div className="relative">
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-[1] rounded-2xl pointer-events-none"
              style={{ height: "35%" }}
            ></div>
            <p className="text-white absolute top-[58px] left-[42px] z-10 text-start w-[38ch] text-xl leading-tight font-semibold">
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
            src="/sticker.png"
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
