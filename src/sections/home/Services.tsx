"use client";
import React from "react";
import Image from "next/image";
import { BulletItem } from "@/components/BulletItem";
import { Button } from "@heroui/react";
import Link from "next/link";

const Services = () => {
  return (
    <section className="py-24 md:py-36 px-8 gap-20 justify-between flex flex-col-reverse md:flex-row max-w-screen-2xl mx-auto">
      <div className="flex relative flex-1">
        <Image
          fill
          src="/home-services.png"
          alt="Embark Services"
          className="object-cover border h-[400px] border-[#183453] rounded-xl"
        />
      </div>
      <div className="flex flex-col relative h-full mt-auto  gap-4 items-start flex-1">
        <div className="border border-[#183453]/50 rounded-full bg-[#9CD8F6] py-1 flex flex-row items-center gap-2 px-3">
          <Image
            src="/badge-paws.png"
            height={18}
            width={24}
            alt="Paw Prints"
          />
          <p className="font-semibold  capitalize">All Your Pet Care Needs</p>
        </div>
        <h2 className="w-auto md:w-[16ch] capitalize">
          Complete pet care Across one Network
        </h2>
        <p className="text-xl font-semibold  mt-2">Our services include:</p>
        <div className="grid grid-cols-2 md:grid-cols-1 w-fit gap-y-4">
          <BulletItem text="Daycare" />
          <BulletItem text="Boarding" />
          <BulletItem text="Grooming" />
          <BulletItem text="Vet Care" />
          <BulletItem text="Training" />
          <BulletItem text="Grooming Education" />
        </div>
        <Link className="mt-12" href="/services">
          <Button className="font-medium  text-lg md:text-xl border border-[#183453]/50  rounded-full py-7 px-8 md:py-8 md:px-10 bg-[#183453] text-white">
            View Our services
          </Button>
        </Link>
        <div className="absolute top-16 right-0">
          <div className="w-4 h-4 rounded-full bg-[#183453]"></div>
        </div>
        <div className="absolute top-14 right-4">
          <div className="w-2 h-2 rounded-full bg-[#183453]"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
