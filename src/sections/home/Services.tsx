"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

const Services = () => {
  const ServiceItem = ({ text }: { text: string }) => (
    <div className="flex flex-row items-center border border-[#183453]/20 rounded-full px-4 py-3 w-full lg:w-fit bg-[#D5F0FF] gap-3">
      <div className="p-1 mt-1 rounded-full bg-[#183453]">
        <FaCheck size={12} color="white" />
      </div>
      <p className="text-xl whitespace-nowrap text-[#183453] font-medium">
        {text}
      </p>
    </div>
  );
  return (
    <section className="py-24 m:py-36 flex flex-col lg:flex-row gap-16 justify-between items-center  px-4 sm:px-8 md:px-24 relative">
      <div className="flex h-full w-full flex-col lg:flex-row lg:items-center lg:gap-12">
        {/* Content */}
        <div className="relative z-10 flex items-start flex-1 flex-col gap-5 md:gap-8">
          <div className="border border-[#183453]/50 rounded-full bg-[#EEF9FF] py-1 flex items-center gap-2 px-3 w-fit">
            <Image
              src="/paw-small.svg"
              height={16}
              width={16}
              alt="Embark Pet Services Badge Paw Prints"
            />
            <p className="font-semibold capitalize">All Your Pet Care Needs</p>
          </div>

          <h2 className="text-4xl w-auto md:w-[16ch]  md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight capitalize">
            Complete pet care Across one Network
          </h2>

          <p className="text-2xl  font-semibold mt-2 md:mt-4 md:mb-2">
            Our services include:
          </p>

          <div className="hidden lg:flex flex-wrap gap-3 max-w-[52rem]">
            <ServiceItem text="Daycare" />
            <ServiceItem text="Boarding" />
            <ServiceItem text="Grooming" />
            <ServiceItem text="Vet Care" />
            <ServiceItem text="Training" />
            <ServiceItem text="Grooming Education" />
            <ServiceItem text="Transportation" />
            <ServiceItem text="Mobile Grooming" />
          </div>
          <div className="flex flex-col  w-full gap-2 lg:hidden">
            <ServiceItem text="Daycare" />
            <ServiceItem text="Boarding" />
            <ServiceItem text="Grooming" />
            <ServiceItem text="Vet Care" />
            <ServiceItem text="Training" />
            <ServiceItem text="Grooming Education" />
            <ServiceItem text="Transportation" />
            <ServiceItem text="Mobile Grooming" />
          </div>
          <div className="w-full flex lg:justify-start justify-center">
            <Link href="/services" className="mt-6">
              <button className="font-medium text-lg md:text-xl border border-[#183453]/50 rounded-full py-4 px-8 md:py-5 md:px-10 bg-[#183453] text-white">
                Our Pet Services
              </button>
            </Link>
          </div>
        </div>
        <div className="flex mt-12 lg:mt-0 justify-center relative flex-1 min-w-0">
          <div className="absolute hidden lg:block lg:top-[-50px] lg:right-[-50px]">
            <Image
              src="/blue-circles.png"
              alt="Embark Pet Services"
              height={40}
              width={50}
            />
          </div>
          <Image
            src="/happy-dog.png"
            height={725}
            width={725}
            alt="Embark Pet Services Background Paw"
            className="border-2 aspect-square h-auto w-full max-w-[450px] lg:max-w-[560px] xl:max-w-[725px] border-[#183453] rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
