"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex relative pb-4 md:pb-16 flex-col">
      <Image
        src="/bone-lg.png"
        alt="Embark Pet Services Large Bone"
        height={90}
        width={90}
        className="absolute top-[-45px] rotate-45 left-[40%] md:left-[47%]"
      />
      <div className=" px-4 sm:px-8 md:px-24  w-full ">
        <div className="flex flex-col flex-grow items-center justify-center">
          <div className="flex mt-24 w-full flex-col md:flex-row gap-4">
            <div className="flex items-start flex-1 bg-[#9CD8F6] rounded-xl border border-[#183453] py-8 md:py-16 px-8 md:px-12 flex-col gap-3 md:gap-4">
              <div className="w-[64px] md:w-[72px] relative h-[64px] md:h-[72px]">
                <Image
                  src="/large-white-paw.svg"
                  className="rotate-12"
                  alt="Dog Paw"
                  fill
                />
              </div>

              <h3 className="text-3xl md:text-5xl font-semibold tracking-tight">
                Partner with us
              </h3>
              <p className="mb-3 md:mb-6 font-medium w-full md:mt-1 text-lg md:text-2xl">
                We are actively looking to partner with the best pet care
                facilities in the country
              </p>
              <Link
                className="font-medium text-lg md:text-xl border border-[#183453]/50 rounded-full py-4 px-8 md:py-5 md:px-10 bg-[#183453] text-white"
                href="/partner-with-us"
              >
                Become a Partner
              </Link>
            </div>
            <div className="flex flex-1 items-start bg-[#EEF9FF] rounded-xl border border-[#183453] py-8 md:py-16 px-8 md:px-12 flex-col gap-3 md:gap-4">
              <div className="w-[64px] md:w-[72px] relative h-[64px] md:h-[72px]">
                <Image
                  className="rotate-12"
                  src="/large-white-paw.svg"
                  alt="Dog Paw"
                  fill
                />
              </div>

              <h3 className="text-3xl md:text-5xl font-semibold tracking-tight">
                Find Care Near You
              </h3>
              <p className="mb-3 md:mb-6 font-medium md:mt-1 text-lg md:text-2xl">
                Discover quality pet care in your community
              </p>
              <Link href="/network">
                <button className="font-medium text-lg md:text-xl border border-[#183453]/50  rounded-full py-4 px-8 md:py-5 md:px-10 bg-[#183453] text-white">
                  View Locations
                </button>
              </Link>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex flex-col text-[#183453]/60 text-sm mt-8 md:mt-16 gap-8 items-start md:items-center">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Our Pet Services</Link>
            <Link href="/network">Network</Link>
            <Link href="/partner-with-us">Partner With Us</Link>
          </ul>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Link href="https://riogrooming.com/" target="_blank">
              Rio Grooming & Salon
            </Link>
            <Link href="https://www.barksnrec.co/" target="_blank">
              Barks & Rec Hastings
            </Link>
            <Link href="https://www.wagsstaynplay.com/" target="_blank">
              Wags Stay N&apos; Play
            </Link>
            <Link href="https://www.boxersbedandbiscuits.com/" target="_blank">
              Boxers Bed & Biscuits
            </Link>
            <Link href="https://houndaroundresort.com/" target="_blank">
              Hound Around Resort
            </Link>
            <Link href="https://kingdomcanine.com/" target="_blank">
              Kingdom Canine
            </Link>
            <Link href="https://caninecountryclubwdm.com/" target="_blank">
              Canine Country Club
            </Link>
          </ul>
          <div className="flex items-start md:items-center flex-col">
            <p>© Embark Pet Services, LLC 2026. All rights reserved.</p>
            <p>
              Designed and developed by{" "}
              <Link
                href="https://www.lauf.co/"
                target="_blank"
                className="font-bold"
              >
                Lauf.
              </Link>{" "}
            </p>
          </div>
        </div>
        <div className="absolute md:block hidden bottom-0 right-0">
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
