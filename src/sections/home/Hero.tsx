"use client";
import { Button } from "@heroui/react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#F9FDFF] to-[#EEF9FF] py-16 md:py-12">
      <div className="absolute top-[25px] left-[2%] md:left-[5%]">
        <Image
          src="/bg-paw.png"
          height={800}
          width={900}
          alt="Background Paw"
          className="opacity-70 -rotate-12"
        />
      </div>
      <div className="items-center justify-between h-full flex md:flex-row px-[5%] md:px-8 flex-col md:max-w-screen-2xl mx-auto">
        <div className="flex flex-1 px-4 flex-col gap-6">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl xl:text-8xl text-center md:text-start capitalize ">
            Caring for your{" "}
            <span className="text-[#9CD8F6]">
              {" "}
              <br /> pets
            </span>{" "}
            like family
          </h1>
          <div className="space-x-2 flex flex-row justify-center md:justify-start mt-3 md:mt-6">
            <Button className="font-medium text-lg md:text-xl border border-[#183453]/50  rounded-full py-7 px-8 md:py-8 md:px-10 bg-[#9CD8F6]">
              Our Services
            </Button>
            <Button className="font-medium text-lg md:text-xl border border-[#183453]/50  rounded-full py-7 px-8 md:py-8 md:px-10 bg-[#183453] text-white">
              Our Locations
            </Button>
          </div>
          <p className="pt-2 md:pt-4 px-4 md:px-0 text-center md:text-start hero-text font-semibold">
            We unite local pet care brands under one standard of excellence
          </p>
        </div>

        <div className="flex-1 mt-16 md:mt-0">
          <div className="flex justify-end gap-4">
            <div className="space-y-4 gap-2">
              <div className="h-auto  overflow-hidden">
                <Image
                  src="/hero-dog-1.png"
                  alt="Goldendoodle with bandana"
                  width={400}
                  height={400}
                  className="rounded-xl border-2 border-[#183453] w-[300px]  object-cover"
                />
              </div>
              <div className="h-auto  overflow-hidden">
                <Image
                  src="/hero-dog-2.png"
                  alt="Corgi with bandana"
                  width={350}
                  height={350}
                  className="rounded-xl border-2 border-[#183453] w-[300px] h-auto object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-4">
              <div className="h-auto  overflow-hidden">
                <Image
                  src="/hero-dog-3.png"
                  alt="Grey poodle"
                  width={300}
                  height={300}
                  className="rounded-xl border-2 border-[#183453] w-[250px]  object-cover"
                />
              </div>
              <div className="h-auto overflow-hidden">
                <Image
                  src="/hero-dog-4.png"
                  alt="Wet shepherd mix"
                  width={420}
                  height={420}
                  className="rounded-xl border-2 border-[#183453] w-[250px]  object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
