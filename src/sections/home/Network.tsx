"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@heroui/react";
import StarRating from "@/components/StarRating";

interface Location {
  id: number;
  title: string;
  location: string;
  tags: string[];
  mapPosition: { lat: number; lng: number };
  rating: number;
  reviews: number;
}

const locations: Location[] = [
  {
    id: 0,
    title: "Rio Grooming School & Salon",
    location: "Hastings, MN",
    tags: ["Grooming", "Grooming Education", "Self-Service Dog Wash"],
    mapPosition: { lat: 44.76931430798924, lng: -92.86027409156992 },
    rating: 4.7,
    reviews: 210,
  },
  {
    id: 1,
    title: "Barks & Rec Hastings",
    location: "Hastings, MN",
    tags: ["Daycare", "Boarding"],
    mapPosition: { lat: 44.77103052242032, lng: -92.86014533006993 },
    rating: 4.8,
    reviews: 16,
  },
  {
    id: 2,
    title: "Wags Stay N' Play",
    location: "Moorhead, MN",
    tags: ["Daycare", "Boarding", "Grooming"],
    mapPosition: { lat: 46.858830071276856, lng: -96.73532188223334 },
    rating: 4.4,
    reviews: 185,
  },
  {
    id: 3,
    title: "Boxers Bed & Biscuits",
    location: "Belpre, OH",
    tags: ["Daycare", "Boarding", "Grooming", "Vet Care", "Training"],
    mapPosition: { lat: 39.274995949370485, lng: -81.58609851878592 },
    rating: 4.6,
    reviews: 253,
  },
];

const LocationItem = ({ location }: { location: Location }) => (
  <motion.div
    layout
    className="bg-white p-6 rounded-2xl border border-[#183453] cursor-pointer transition-all duration-500"
    whileHover={{ scale: 1.01 }}
  >
    <div className="flex justify-between items-start">
      <h3 className="text-2xl font-bold tracking-tight">{location.title}</h3>
    </div>
    <div className="mt-2">
      <StarRating rating={location.rating} reviews={location.reviews} />
      <p className="text-xl text-gray-700 mt-2">{location.location}</p>
      <div className="flex mt-4 flex-wrap gap-2">
        {location.tags.map((tag) => (
          <span
            className="px-3 py-1 border border-[#183453]/20 rounded-full bg-[#D5F0FF] text-lg"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Network = () => {
  return (
    <section className="py-24 md:py-36 bg-[#9CD8F6]">
      <div className="max-w-screen-2xl mx-auto px-8 flex flex-col">
        <div className="flex flex-col gap-8 items-start">
          <div className="border border-[#183453]/50 bg-[#EEF9FF] rounded-full py-1 flex items-center gap-2 px-3">
            <Image
              src="/badge-paws.png"
              height={18}
              width={24}
              alt="Paw Prints"
            />
            <p className="font-semibold capitalize">Our care network</p>
          </div>
          <div className="flex justify-between flex-col md:flex-row w-full items-start md:items-center">
            <h2 className="text-4xl md:text-5xl w-full md:w-[16ch] lg:text-6xl xl:text-7xl font-bold tracking-tight capitalize">
              Quality Care Built On Trust and Expertise
            </h2>
            <Link href="/network" className="mt-12">
              <Button className="font-medium text-lg md:text-xl border border-[#183453]/50 rounded-full py-7 px-8 md:py-8 md:px-10 bg-[#183453] text-white">
                Explore Network
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex mt-12 gap-8 flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
            {locations.map((location) => (
              <LocationItem key={location.id} location={location} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;
