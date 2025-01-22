import React from "react";
import Image from "next/image";
import { RiToothLine } from "react-icons/ri";
import { RiScissors2Line } from "react-icons/ri";
import { FaBath } from "react-icons/fa";

const Grooming = () => {
  return (
    <div className="flex flex-row mt-24 gap-12 items-start">
      <div className="flex flex-1 items-start flex-col">
        <div className="border border-[#183453]/50 rounded-full bg-[#9CD8F6] py-1 flex flex-row items-center gap-2 px-3">
          <Image
            src="/badge-paws.png"
            height={18}
            width={24}
            alt="Paw Prints"
          />
          <p className="font-semibold text-xl capitalize">Grooming</p>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-start mt-8 capitalize ">
          A Day At The Spa… Or A Much-Needed Bath
        </h2>
        <p className="my-12 w-[85%] text-xl font-medium">
          Our breed-specific grooming services range from ongoing hygiene
          maintenance to full spa blow-outs. Each grooming service combines
          trained expertise with premium products in our safe, well-equipped
          facilities
        </p>
        <div className="flex flex-row items-start gap-16">
          <div className="flex w-fit flex-col gap-2 items-center">
            <FaBath size={48} />
            <p>Baths</p>
          </div>
          <div className="flex  w-fit  flex-col gap-2 items-center">
            <Image src="/dog-ear.png" height={48} width={48} alt="Grooming" />
            <p>Ears</p>
          </div>
          <div className="flex  w-fit  flex-col gap-2 items-center">
            <RiToothLine size={48} />
            <p>Teeth & Nails</p>
          </div>
          <div className="flex  w-fit  flex-col gap-2 items-center">
            <RiScissors2Line size={48} />
            <p>Cuts & Spa Days</p>
          </div>
        </div>
      </div>
      <div className="flex relative flex-1 items-end flex-col gap-2">
        <div className="flex flex-row w-full gap-2">
          <div className="h-auto  flex flex-1 w-full">
            <Image
              alt="Daycare"
              src="/daycare-1.png"
              className="rounded-xl flex-grow flex flex-1 border border-[#183453]"
              height={100}
              width={100}
            />
          </div>
          <div className="h-auto flex flex-1 w-full">
            <Image
              alt="Daycare"
              src="/daycare-2.png"
              className="rounded-xl border flex flex-1 border-[#183453]"
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grooming;
