"use client";
import React from "react";
import Image from "next/image";
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
    <section className="bg-gradient-to-b relative border from-[#F9FDFF] to-[#EEF9FF] py-24 md:py-36">
      <div className="px-4 sm:px-8 md:px-24">
        <div className="justify-between flex md:flex-row  flex-col">
          <div className="flex items-start gap-6 md:items-end flex-col md:flex-row justify-between w-full">
            <div className="flex flex-col gap-5 md:gap-8 items-start">
              <div className="border bg-white border-[#183453]/50 rounded-full py-1 flex flex-row items-center gap-2 px-3">
                <Image
                  src="/paw-small.svg"
                  height={16}
                  width={16}
                  alt="Paw Prints"
                />
                <p className="font-semibold  capitalize">
                  Professional Pet Care Network
                </p>
              </div>
              <h2 className="text-4xl w-[80%] md:w-[16ch] md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-start capitalize ">
                Quality Care Built On Trust and Experts
              </h2>
            </div>
            <div className="flex mt-4 md:mt-0 justify-end flex-1">
              <button className="font-medium text-lg md:text-xl border border-[#183453]/50  rounded-full py-4 px-8 md:py-5 md:px-10 bg-[#183453] text-white">
                Hear from our customers
              </button>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-neutral-200 my-12"></div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col justify-between items-start">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
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
          <div className="flex mt-12 md:mt-0 flex-col md:flex-row w-full md:w-fit gap-4">
            <div className="hidden md:flex flex-col gap-4 mt-auto md:items-center">
              <Image
                alt="bone"
                src="/bone-lg.png"
                height={124}
                width={124}
                className="w-[80px] md:w-[124px]"
              />
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full md:h-[400px] border-2 border-[#183453] rounded-xl object-cover"
              >
                <source src="/blue-bg-vid.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="space-y-4 w-full md:w-auto">
              <Image
                alt="Why Choose Embark?"
                src="/cat-trimming.jpg"
                className="w-full hidden md:block md:w-[420px] rounded-xl border-2 border-[#183453] object-cover"
                height={300}
                width={420}
              />
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full md:w-[420px] border-2 border-[#183453] rounded-xl object-cover"
              >
                <source src="/why-us-vid.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
