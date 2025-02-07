"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const networkData = [
  {
    id: 0,
    image: "/rio-image.png",
    title: "Rio Grooming School & Salon",
    link: "https://riogrooming.com/",
    location: "Hastings, MN",
    services: ["Grooming", "Grooming Education", "Self-services Dog Wash"],
  },
  {
    id: 1,
    image: "/barks-image.png",
    title: "Barks & Rec Hastings",
    link: "https://www.barksnrec.co/",
    location: "Hastings, MN",
    services: ["Daycare", "Boarding"],
  },
  {
    id: 2,
    image: "/wags-image.png",
    title: "Wags Stay N' Play",
    link: "https://www.wagsstaynplay.com/",
    location: "Moorhead, MN",
    services: ["Daycare", "Boarding", "Grooming"],
  },
  {
    id: 3,
    image: "/boxers-image.png",
    title: "Boxers Bed & Biscuits",
    link: "https://www.boxersbedandbiscuits.com/",
    location: "Belpre, OH",
    services: ["Daycare", "Boarding", "Grooming", "Vet Care", "Training"],
  },
];

interface NetworkItemProps {
  title: string;
  link: string;
  location: string;
  services: string[];
}
const Item = ({ title, link, location, services }: NetworkItemProps) => (
  <div className="grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-[2fr,3fr,1fr] w-full  items-start">
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
        {title}
      </h3>
      <p className="text-lg font-medium text-gray-600 mt-1">{location}</p>
    </div>
    <div className="flex flex-row flex-wrap gap-2">
      {services.map((service) => (
        <div
          className="bg-[#D5F0FF] border border-[#183453]/20 py-2 px-4 rounded-full"
          key={service}
        >
          <p className="font-medium">{service}</p>
        </div>
      ))}
    </div>
    <div className="flex mb-4 md:mb-0 mt-4 md:mt-0 md:justify-end">
      <Link target="_blank" href={link}>
        <button className="font-medium text-lg border border-[#183453]/20 rounded-full py-4 px-8 bg-[#9CD8F6]">
          View Website
        </button>
      </Link>
    </div>
  </div>
);

const MeetNetwork = () => {
  return (
    <section className="bg-[#EEF9FF] flex flex-col py-24 md:py-36">
      <div className="flex flex-col items-center justify-center w-full px-4 sm:px-8 md:px-24">
        <div className="border border-[#183453]/50 bg-[#D5F0FF] rounded-full py-1 flex items-center gap-2 px-3">
          <Image
            src="/badge-paws.png"
            height={18}
            width={24}
            alt="Paw Prints"
          />
          <p className="font-semibold capitalize">
            Midwest&apos;s Trusted Pet Care
          </p>
        </div>
        <h2 className="mt-5 md:mt-8 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-center md:text-start capitalize">
          Meet our network
        </h2>
        <p className="pt-8 text-lg text-center w-auto md:w-[74ch]">
          Five trusted local brands delivering quality pet care across the
          Midwest
        </p>
        <div className="grid grid-cols-1 mt-16 w-full gap-y-6">
          {networkData.map((item) => (
            <div
              className="w-full py-6   border-[#183453] border-b"
              key={item.id}
            >
              <Item
                link={item.link}
                location={item.location}
                title={item.title}
                services={item.services}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetNetwork;
