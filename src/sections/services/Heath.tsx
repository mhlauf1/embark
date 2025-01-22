import React from "react";
import Image from "next/image";
import { GiWhistle } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { FaStethoscope } from "react-icons/fa";

const Health = () => {
  return (
    <div className="flex flex-row gap-12 items-start mt-24">
      <div className="flex relative flex-1 items-end flex-col gap-2">
        <div className="flex flex-row w-full gap-2">
          <div className="h-auto  flex flex-1 w-full">
            <Image
              alt="Daycare"
              src="/boarding-1.png"
              className="rounded-xl flex-grow flex flex-1 border border-[#183453]"
              height={100}
              width={100}
            />
          </div>
          <div className="h-auto flex flex-1 w-full">
            <Image
              alt="boarding"
              src="/boarding-2.png"
              className="rounded-xl border flex flex-1 border-[#183453]"
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-start flex-col">
        <div className="border border-[#183453]/50 rounded-full bg-[#9CD8F6] py-1 flex flex-row items-center gap-2 px-3">
          <Image
            src="/badge-paws.png"
            height={18}
            width={24}
            alt="Paw Prints"
          />
          <p className="font-semibold text-xl capitalize">Health & Wellness</p>
        </div>
        <h2 className="mt-8">Comprehensive veterinary and training services</h2>
        <p className="my-12 w-[85%] text-xl font-medium">
          From routine check-ups & specialized care to breed-specific training,
          we&apos; re here to support your pet&apos; s health and development at
          every stage of life
        </p>
        <div className="flex flex-row items-start gap-16">
          <div className="flex flex-col gap-2 items-center">
            <CiHeart size={48} />
            <p>Licensed Vets</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <FaStethoscope size={48} />
            <p>Routine & Surgical Care</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <GiWhistle size={48} />
            <p>Training</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
