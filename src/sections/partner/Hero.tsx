"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";

const Hero = () => {
  return (
    <section className="py-12 h-[150vh] px-[5%]">
      <div className="bg-[#ACD9F7] relative overflow-visible h-[100vh] py-24 px-20 flex items-center flex-col w-full  rounded-2xl">
        <div className="flex flex-col justify-center items-center">
          <div className="border border-[#183453]/50 bg-white rounded-full py-1 flex flex-row items-center gap-2 px-3">
            <Image
              src="/badge-paws.png"
              height={18}
              width={24}
              alt="Paw Prints"
            />
            <p className="font-semibold capitalize">Join the network</p>
          </div>
          <h1 className="">We want to partner with you</h1>
          <p className="pt-4 hero-text text-center w-[85%] font-semibold">
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
        <Image
          src="/network-hero.png"
          height={680}
          width={1245}
          alt="Embark's Netowkr"
          className="rounded-2xl border border-[#183453] mt-16"
        />
      </div>
    </section>
  );
};

export default Hero;
