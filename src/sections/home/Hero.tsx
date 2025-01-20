"use client";
import { Button } from "@heroui/react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-[90vh] bg-gradient-to-b from-[#F9FDFF] to-[#EEF9FF]  py-12">
      <div className="items-center justify-between flex md:flex-row px-8 flex-col max-w-screen-2xl mx-auto">
        <div className="flex flex-1 flex-col gap-6">
          <h1 className="hero-title capitalize w-[12ch]">
            Caring for your <span className="text-[#9CD8F6]"> pets</span> like
            family
          </h1>
          <div className="space-x-2 mt-6">
            <Button
              className="font-medium text-xl border border-[#183453]/50 tracking-wide rounded-full py-8 px-10 bg-[#9CD8F6]"
              size="lg"
            >
              Our Services
            </Button>
            <Button
              className="font-medium text-xl border border-[#183453]/50 tracking-wide rounded-full py-8 px-10 bg-[#183453] text-white"
              size="lg"
            >
              Our Locations
            </Button>
          </div>
          <p className="pt-4 hero-text font-semibold">
            We unite local pet care brands under one standard of excellence
          </p>
        </div>

        <div className="flex-1">
          <div className="flex justify-end">
            <div className="space-y-4">
              <div className="h-auto  overflow-hidden">
                <Image
                  src="/hero-dog-1.png"
                  alt="Goldendoodle with bandana"
                  width={400}
                  height={400}
                  className="rounded-xl border-2 border-[#183453] w-[90%]  object-cover"
                />
              </div>
              <div className="h-auto  overflow-hidden">
                <Image
                  src="/hero-dog-2.png"
                  alt="Corgi with bandana"
                  width={350}
                  height={350}
                  className="rounded-xl border-2 border-[#183453] w-[90%] h-auto object-cover"
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
                  className="rounded-xl border-2 border-[#183453] w-[90%]  object-cover"
                />
              </div>
              <div className="h-auto overflow-hidden">
                <Image
                  src="/hero-dog-4.png"
                  alt="Wet shepherd mix"
                  width={420}
                  height={420}
                  className="rounded-xl border-2 border-[#183453] w-[90%]  object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[40px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
