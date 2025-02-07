"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

const Services = () => {
  const ServiceItem = ({ text }: { text: string }) => (
    <div className="flex flex-row items-center border border-[#183453]/20 rounded-full px-6 md:px-4 py-4 md:py-3 w-full md:w-fit bg-[#D5F0FF] gap-5 md:gap-3">
      <div className="p-1 mt-1 rounded-full bg-[#183453]">
        <FaCheck size={12} color="white" />
      </div>
      <p className="text-xl w-full text-[#183453] font-medium">{text}</p>
    </div>
  );
  return (
    <section className="py-24 m:py-36 flex flex-col md:flex-row gap-16 justify-between items-center  px-4 sm:px-8 md:px-24 relative">
      <div className="flex h-full w-full flex-col md:flex-row">
        {/* Content */}
        <div className="relative z-10 flex items-start flex-1 flex-col gap-8">
          <div className="border border-[#183453]/50 rounded-full bg-[#EEF9FF] py-1 flex items-center gap-2 px-3 w-fit">
            <Image
              src="/badge-paws.png"
              height={18}
              width={24}
              alt="Paw Prints"
            />
            <p className="font-semibold capitalize">All Your Pet Care Needs</p>
          </div>

          <h2 className="text-4xl w-auto md:w-[16ch]  md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight capitalize">
            Complete pet care Across one Network
          </h2>

          <p className="text-2xl  font-semibold mt-2 md:mt-4 md:mb-2">
            Our services include:
          </p>

          <div className="hidden md:flex flex-row items-start md:items-center gap-3">
            <div className="space-y-3">
              <ServiceItem text="Daycare" />
              <ServiceItem text="Vet Care" />
            </div>
            <div className="space-y-3">
              <ServiceItem text="Boarding" />
              <ServiceItem text="Training" />
            </div>
            <div className="space-y-3">
              <ServiceItem text="Grooming" />
              <ServiceItem text="Grooming Education" />
            </div>
          </div>
          <div className="flex flex-col  w-full gap-2 md:hidden">
            <ServiceItem text="Daycare" />
            <ServiceItem text="Boarding" />
            <ServiceItem text="Grooming" />
            <ServiceItem text="Vet Care" />
            <ServiceItem text="Training" />
            <ServiceItem text="Grooming Education" />
          </div>
          <div className="w-full flex md:justify-start justify-center">
            <Link href="/services" className="mt-6">
              <Button className="font-medium text-lg md:text-xl border border-[#183453]/50 rounded-full py-7 px-8 md:py-8 md:px-10 bg-[#183453] text-white">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex mt-12 md:mt-0 justify-center relative flex-1">
          <div className="absolute hidden md:block md:top-[-50px] md:right-[-50px]">
            <Image
              src="/blue-circles.png"
              alt="Blue Circles"
              height={40}
              width={50}
            />
          </div>
          <Image
            src="/happy-dog.png"
            height={725}
            width={725}
            alt="Background Paw"
            className="border-2 h-[450px] w-[450px] md:w-[725px] md:h-[725px] border-[#183453] rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
