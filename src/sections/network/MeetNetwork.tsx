"use client";
import React from "react";
import { IoPaw } from "react-icons/io5";
import Image from "next/image";
import { Button } from "@heroui/react";
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
  image: string;
  title: string;
  link: string;
  location: string;
  services: string[];
}

const NetworkItem = ({
  image,
  title,
  link,
  location,
  services,
}: NetworkItemProps) => (
  <div className="flex flex-col border rounded-xl border-[#183453]/10">
    <Image
      src={image}
      width={770}
      height={400}
      alt={title}
      className="rounded-t-xl border-b border-[#183453]/10"
    />
    <div className="px-6 py-10">
      <div className="flex flex-row justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-3xl font-semibold tracking-tight">{title}</h3>
          <p>{location}</p>
        </div>
        <Link target="_blank" href={link}>
          <Button className="font-medium text-lg border border-[#183453]/20  rounded-full py-6 px-8 bg-[#9CD8F6]">
            View Website
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-3 mt-8">
        <p className="text-xl font-medium">Services:</p>
        <div className="flex flex-row gap-1">
          {services.map((service) => (
            <div className="bg-[#D5F0FF] py-2 px-4 rounded-full" key={service}>
              <p className="font-medium">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const MeetNetwork = () => {
  return (
    <section className="bg-white flex flex-col py-48">
      <div className="flex px-8 flex-col items-center justify-center  max-w-screen-2xl mx-auto">
        <IoPaw size={48} color="#183453" />
        <h2 className="mt-4">Meet our network</h2>
        <p className="pt-8 text-lg text-center w-[74ch]">
          Five trusted local brands delivering quality pet care across the
          Midwest
        </p>
        <div className="grid grid-cols-2 mt-16 gap-x-8 gap-y-12">
          {networkData.map((item) => (
            <div key={item.id}>
              <NetworkItem
                image={item.image}
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
