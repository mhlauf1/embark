import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoPaw } from "react-icons/io5";
import { AiFillSafetyCertificate } from "react-icons/ai";

const Boarding = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-16 py-12 items-center">
      <div className="flex flex-1 gap-4">
        <div className="flex-1">
          <Image
            alt="Daycare"
            src="/boarding-1.png"
            className="rounded-xl border border-[#183453] w-full"
            height={400}
            width={350}
            style={{ height: "auto" }}
          />
        </div>
        <div className="flex-1">
          <Image
            alt="boarding"
            src="/boarding-2.png"
            className="rounded-xl border border-[#183453] w-full"
            height={400}
            width={350}
            style={{ height: "auto" }}
          />
        </div>
      </div>
      <div className="flex flex-[1] items-start flex-col">
        <div className="border border-[#183453]/50 rounded-full bg-[#9CD8F6] py-1 flex flex-row items-center gap-2 px-3">
          <Image
            src="/badge-paws.png"
            height={18}
            width={24}
            alt="Paw Prints"
          />
          <p className="font-semibold text-xl capitalize">Boarding</p>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-start mt-5 md:mt-8 capitalize ">
          Safe, Secure Stays When You&apos;re Away
        </h2>
        <p className="my-5 md:my-8 md:w-[85%] text-lg md:text-xl font-medium">
          Give your pet a comfortable home away from home in our modern boarding
          facilities with personalized care, structured night-time routines, and
          plenty of attention
        </p>
        <div className="flex flex-row items-end justify-center gap-8 md:gap-16">
          <div className="flex flex-col gap-2 items-center">
            <IoPaw size={48} />
            <p>Daily Activities</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <FaStar size={48} />
            <p>Premium Comfort</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <AiFillSafetyCertificate size={48} />
            <p>Safety</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boarding;
