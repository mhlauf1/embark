"use client";
import React from "react";
import Image from "next/image";
import { BulletItem } from "@/components/BulletItem";
import { Button } from "@heroui/react";
import Link from "next/link";

const Services = () => {
  return (
    <section className="min-h-screen grid md:grid-cols-2 gap-8">
      {/* Left Image */}
      <div className="relative border-r h-full bg-gradient-to-b from-[#F9FDFF] to-[#EEF9FF] p-36">
        <div className="relative h-full border-2 border-[#183453] rounded-xl">
          <Image
            src="/home-services.png"
            alt="Embark Services"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-center px-8 lg:px-12 relative">
        <div className="absolute top-24 right-[5vw]">
          <Image
            src="/blue-circles.png"
            alt="Blue Circles"
            height={40}
            width={50}
          />
        </div>
        {/* Background Paw */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[700px] h-[600px]">
          <Image
            src="/bg-paw.png"
            fill
            alt="Background Paw"
            className="opacity-60 -rotate-12"
          />
        </div>
        {/* Content */}
        <div className="relative z-10 flex flex-col gap-4">
          <div className="border border-[#183453]/50 rounded-full bg-[#9CD8F6] py-1 flex items-center gap-2 px-3 w-fit">
            <Image
              src="/badge-paws.png"
              height={18}
              width={24}
              alt="Paw Prints"
            />
            <p className="font-semibold capitalize">All Your Pet Care Needs</p>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight capitalize">
            Complete pet care Across one Network
          </h2>

          <p className="text-xl font-semibold mt-8 mb-6">
            Our services include:
          </p>

          <div className="flex flex-row gap-x-16">
            <div className="space-y-4">
              <BulletItem text="Daycare" />
              <BulletItem text="Vet Care" />
            </div>
            <div className="space-y-4">
              <BulletItem text="Boarding" />
              <BulletItem text="Training" />
            </div>
            <div className="space-y-4">
              <BulletItem text="Grooming" />
              <BulletItem text="Grooming Education" />
            </div>
          </div>

          <Link href="/services" className="mt-12">
            <Button className="font-medium text-lg md:text-xl border border-[#183453]/50 rounded-full py-7 px-8 md:py-8 md:px-10 bg-[#183453] text-white">
              View Our services
            </Button>
          </Link>
          <Image
            className="mt-8"
            src="/dogs-drawing.png"
            height={65}
            width={200}
            alt="Dog drawing"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
