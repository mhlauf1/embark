"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { FaCheck } from "react-icons/fa6";

const WhyUsBulletItem = ({ text, title }: { text: string; title: string }) => (
  <div className="flex flex-row items-start gap-3">
    <div className="p-1 mt-1.5 rounded-full bg-[#8DD6FA] ">
      <FaCheck size={14} color="white" />
    </div>
    <div className="flex flex-col gap-1">
      <p className="text-xl md:text-2xl font-semibold">{title}</p>
      <p className="text-lg md:text-xl font-medium">{text}</p>
    </div>
  </div>
);

const WhyUs = () => {
  return (
    <section className="bg-gradient-to-b relative from-[#F9FDFF] to-[#EEF9FF] py-24 md:py-36">
      <div className="absolute top-[-70px] rotate-180 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 
      C480,100 960,-60 1440,20
      L1440,120 
      L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
      <div className=" px-8 max-w-screen-2xl pt-24 pb-12 mx-auto">
        <div className="justify-between flex md:flex-row  flex-col">
          <div className="flex items-start gap-6 md:items-end flex-col md:flex-row justify-between w-full">
            <div className="flex flex-col gap-4 items-start">
              <div className="border bg-white border-[#183453]/50 rounded-full py-1 flex flex-row items-center gap-2 px-3">
                <Image
                  src="/badge-paws.png"
                  height={18}
                  width={24}
                  alt="Paw Prints"
                />
                <p className="font-semibold  capitalize">
                  Professional Pet Care Network
                </p>
              </div>
              <h2 className="text-4xl w-auto md:w-[16ch] md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-center md:text-start capitalize ">
                Quality Care Built On Trust and Expertis
              </h2>
            </div>
            <div className="flex justify-end flex-1">
              <Button className="font-medium text-lg md:text-xl border border-[#183453]/50  rounded-full py-7 px-8 md:py-8 md:px-10 bg-[#183453] text-white">
                Hear from our customers
              </Button>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-neutral-200 my-12"></div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col justify-between items-start">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold">
                Why Embark?
              </h3>
              <div className="flex flex-col gap-8 mt-8">
                <WhyUsBulletItem
                  title="Quality"
                  text="Professional excellence in everything we do"
                />
                <WhyUsBulletItem
                  title="Reliability"
                  text="Trusted service when you need us most"
                />
                <WhyUsBulletItem
                  title="Safety"
                  text="Caring environments for peace of mind"
                />
              </div>
            </div>
            <div className="hidden md:block">
              <Image src="/cat-1.png" width={150} height={125} alt="Cat" />
            </div>
          </div>
          <div className="flex mt-12 md:mt-0 flex-row w-fit gap-4">
            <div className="flex flex-col gap-4 mt-auto items-center">
              <Image alt="bone" src="/bone-lg.png" height={124} width={124} />
              <Image
                alt="Why Choose Embark?"
                src="/why-us-1.png"
                className="rounded-xl border-2 border-[#183453]"
                height={415}
                width={330}
              />
            </div>
            <div className="space-y-4">
              <Image
                alt="Why Choose Embark?"
                src="/why-us-2.png"
                className="rounded-xl border-2 border-[#183453]"
                height={310}
                width={420}
              />
              <Image
                alt="Why Choose Embark?"
                src="/why-us-3.png"
                className="rounded-xl border-2 border-[#183453]"
                height={280}
                width={420}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
