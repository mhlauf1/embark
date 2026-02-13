"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BulletItem } from "@/components/BulletItem";

const About = () => {
  return (
    <section className="py-28 md:py-40 items-start px-4 sm:px-8 md:px-24 relative justify-between flex md:flex-row flex-col">
      <div className="flex flex-col items-start flex-1">
        <div className="flex flex-col gap-5 md:gap-8 items-start">
          <div className="border border-[#183453]/50 bg-[#8DD6FA] rounded-full py-1 flex flex-row items-center gap-2 px-3">
            <Image
              src="/paw-small.svg"
              height={16}
              width={16}
              alt="Embark Pet Services Badge Paw Prints"
            />
            <p className="font-semibold capitalize">Local care you can trust</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-center md:text-start capitalize">
            Premier Pet Care
          </h2>
        </div>
        <p className="text-lg md:text-xl mt-4 md:mt-6 w-full md:w-[90%]">
          A network of trusted, local pet care providers delivering
          comprehensive services with a focus on quality, reliability, and
          safety
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 w-[100%] gap-y-4 mt-6 md:mt-8 mb-8 md:mb-12">
          <BulletItem text="Professional Expertise" />
          <BulletItem text="Local Trusted Teams" />
          <BulletItem text="Comprehensive Service Offerings" />
          <BulletItem text="Specialized Facilities" />
        </div>
        <Link href="/about">
          <button className="font-medium  text-lg md:text-xl border border-[#183453]/50  rounded-full py-4 px-8 md:py-5 md:px-10 bg-[#183453] text-white">
            About Us
          </button>
        </Link>
      </div>
      <div className="flex relative mt-12 md:mt-0 flex-1">
        <div className="h-auto w-auto">
          <Image
            src="/about-us-home.jpg"
            height={500}
            width={760}
            alt="Embark Pet Services Dog Bathing"
            className="rounded-xl border-2 border-[#183453]"
          />
        </div>
        <div className="absolute bg-white  rounded border border-[#183453] bottom-[-50px] md:bottom-[-30px] right-2">
          <div className="flex flex-row gap-8 px-8 py-4 relative">
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">9</p>
              <p className="font-medium">Locations</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">150+</p>
              <p className="font-medium">Team Members</p>
            </div>
            <div className="absolute top-[-20px] right-[-20px]">
              <Image
                src="/small-white-paw.svg"
                alt="Embark Pet Services Small Paw"
                height={48}
                width={48}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
