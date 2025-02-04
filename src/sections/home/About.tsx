"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { BulletItem } from "@/components/BulletItem";

const About = () => {
  return (
    <section className="py-24 md:py-40 px-8 items-start justify-between flex md:flex-row flex-col max-w-screen-2xl mx-auto">
      <div className="flex flex-col items-start flex-1">
        <div className="flex flex-col gap-4 items-start">
          <div className="border border-[#183453]/50 bg-[#8DD6FA] rounded-full py-1 flex flex-row items-center gap-2 px-3">
            <Image
              src="/badge-paws.png"
              height={18}
              width={24}
              alt="Paw Prints"
            />
            <p className="font-semibold capitalize">
              Local care your <span className="underline"> can</span> trust
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-center md:text-start capitalize">
            Premier Pet Care
          </h2>
        </div>
        <p className="text-lg md:text-xl mt-4 md:mt-6 w-[95%] md:w-[90%]">
          A network of trusted, local pet care providers delivering
          comprehensive services with a focus on quality, reliability, and
          safety
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 w-[100%] gap-y-4 mt-6 md:mt-8 mb-10 md:mb-16">
          <BulletItem text="Professional Expertise" />
          <BulletItem text="Local Trusted Teams" />
          <BulletItem text="Comprehensive Service Offerings" />
          <BulletItem text="Specialized Facilities" />
        </div>
        <Link href="/about">
          <Button className="font-medium  text-lg md:text-xl border border-[#183453]/50  rounded-full py-7 px-8 md:py-8 md:px-10 bg-[#183453] text-white">
            About Us
          </Button>
        </Link>
      </div>
      <div className="flex relative mt-12 md:mt-0 flex-1">
        <div className="h-auto w-auto">
          <Image
            src="/home-about.png"
            height={500}
            width={760}
            alt="Dog bathing"
            className="rounded-xl border-2 border-[#183453]"
          />
        </div>
        <div className="absolute bg-white  rounded border border-[#183453] bottom-[-50px] md:bottom-[-30px] right-2">
          <div className="flex flex-row gap-8 px-8 py-4 relative">
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">6</p>
              <p className="font-medium">Locations</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">150+</p>
              <p className="font-medium">Team Members</p>
            </div>
            <div className="absolute top-[-20px] right-[-20px]">
              <Image
                src="/small-white-paw.png"
                alt="Paw"
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
