"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";

const Footer = () => {
  return (
    <footer className="flex relative pb-16 flex-col">
      <Image
        src="/bone-lg.png"
        alt="Large Bone"
        height={90}
        width={90}
        className="absolute top-[-40] rotate-45 left-[47%]"
      />
      <div className="bg-[#183453] h-[300px] w-full"></div>
      <div className=" px-8 max-w-screen-2xl  w-full mx-auto">
        <div className="flex flex-col flex-grow items-center justify-center">
          <div className="flex mt-[-15vh] w-full flex-row gap-4">
            <div className="flex items-start flex-1 bg-[#9CD8F6] rounded-xl border border-[#183453] py-16 px-12 flex-col gap-4">
              <Image
                src="/small-white-paw.png"
                alt="Dog Paw"
                height={82}
                width={82}
              />
              <h3 className="text-5xl font-semibold tracking-tight">
                Parter with us
              </h3>
              <p className="mb-6 font-medium text-2xl">
                Join our network of pet care excellence
              </p>
              <Button
                className="font-medium text-xl border border-[#183453]/50 tracking-wide rounded-full py-8 px-10 bg-[#183453] text-white"
                size="lg"
              >
                Learn more
              </Button>
            </div>
            <div className="flex flex-1 items-start bg-[#EEF9FF] rounded-xl border border-[#183453] py-16 px-12 flex-col gap-4">
              <Image
                src="/small-white-paw.png"
                alt="Dog Paw"
                height={82}
                width={82}
              />
              <h3 className="text-5xl font-semibold tracking-tight">
                Find Care Near You
              </h3>
              <p className="mb-6 font-medium text-2xl">
                Discover quality pet care in your community
              </p>
              <Button
                className="font-medium text-xl border border-[#183453]/50 tracking-wide rounded-full py-8 px-10 bg-[#183453] text-white"
                size="lg"
              >
                View Locations
              </Button>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex flex-col text-[#183453]/60 text-sm mt-16 gap-8 items-center">
          <ul className="flex gap-8">
            <li>About</li>
            <li>Services</li>
            <li>Network</li>
            <li>Partner With Us</li>
          </ul>
          <ul className="flex gap-8">
            <li>Rio Grooming & Salon</li>
            <li>Barks & Rec Hastings</li>
            <li>Wags Stay N&apos; Play</li>
            <li>Boxers Bed & Biscuits</li>
          </ul>
          <div className="flex items-center flex-col">
            <p>© Embark Pet Services, LLC 2024. All rights reserved.</p>
            <p>Designed and developed by Lauf.</p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            src="/footer-paw.png"
            height={282}
            width={282}
            alt="Footer Paw"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
