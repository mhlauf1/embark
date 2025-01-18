"use client";
import React from "react";
import BadgeHero from "@/components/BadgeHero";
import Image from "next/image";
import { Button } from "@heroui/react";
import { BulletItem } from "@/components/BulletItem";

const About = () => {
  return (
    <section className="py-36 px-8 items-center justify-between flex md:flex-row flex-col max-w-screen-2xl mx-auto">
      <div className="flex flex-col items-start flex-1">
        <BadgeHero title="Premier Pet Care" />
        <p className="text-xl mt-4 w-[40ch]">
          A network of trusted, local pet care providers delivering
          comprehensive services with a focus on quality, reliability, and
          safety
        </p>
        <div className="grid grid-cols-2 w-fit gap-4 my-8">
          <BulletItem text="Professional expertise" />
          <BulletItem text="Local trusted teams" />
          <BulletItem text="Specialized facilities" />
          <BulletItem text="Comprehensive Service Offerings" />
        </div>
        <Button className="font-semibold bg-[#183453] text-white" size="lg">
          About Us
        </Button>
      </div>
      <div className="flex relative flex-1">
        <div className="h-auto w-auto">
          <Image
            src="/home-about.png"
            height={500}
            width={760}
            alt="Dog bathing"
            className="rounded-xl border-2 border-[#183453]"
          />
        </div>
        <div className="absolute bg-white  rounded border border-[#183453]  bottom-[-30] right-2">
          <div className="flex flex-row gap-8 px-8 py-4 relative">
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">6</p>
              <p className="font-medium">Locations</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">150+</p>
              <p className="font-medium">Team members</p>
            </div>
            <div className="absolute top-[-20] right-[-20]">
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
