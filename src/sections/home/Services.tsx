import React from "react";
import Image from "next/image";
import { BulletItem } from "@/components/BulletItem";

const Services = () => {
  return (
    <section className="flex min-h-[90vh] gap-16 flex-row">
      <div className="flex relative flex-1">
        <Image
          src="/home-services.png"
          fill
          alt="Embark Services"
          className="object-cover"
        />
      </div>
      <div className="flex  flex-1">
        <div className="flex flex-col relative  h-[80%] mt-auto justify-center gap-2 items-start">
          <div className="border border-[#183453]/50 rounded-full bg-[#9CD8F6] py-1 flex flex-row items-center gap-2 px-3">
            <Image
              src="/badge-paws.png"
              height={18}
              width={24}
              alt="Paw Prints"
            />
            <p className="font-semibold capitalize">All Your Pet Care Needs</p>
          </div>
          <h2 className=" w-[16ch]">Complete pet care Across one Network</h2>
          <p className="text-lg mt-8">Our services include:</p>
          <div className="grid grid-cols-3 w-fit gap-4 mt-4 mb-20">
            <BulletItem text="Daycare" />
            <BulletItem text="Boarding" />
            <BulletItem text="Grooming" />
            <BulletItem text="Vet Care" />
            <BulletItem text="Training" />
            <BulletItem text="Grooming Education" />
          </div>
          <Image
            src="/dogs-drawing.png"
            alt="Embark Services"
            height={60}
            width={200}
          />
          <div className="absolute top-16 right-0">
            <div className="w-4 h-4 rounded-full bg-[#183453]"></div>
          </div>
          <div className="absolute top-14 right-4">
            <div className="w-2 h-2 rounded-full bg-[#183453]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
