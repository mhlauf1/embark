"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import dynamic from "next/dynamic";

interface Location {
  id: number;
  title: string;
  location: string;
  tags: string[];
  mapPosition: { lat: number; lng: number };
}

const locations: Location[] = [
  {
    id: 0,
    title: "Rio Grooming School & Salon",
    location: "Hastings, MN",
    tags: ["Grooming", "Grooming Education", "Self-Service Dog Wash"],
    mapPosition: { lat: 44.76931430798924, lng: -92.86027409156992 },
  },
  {
    id: 1,
    title: "Barks & Rec Hastings",
    location: "Hastings, MN",
    tags: ["Daycare", "Boarding"],
    mapPosition: { lat: 44.77103052242032, lng: -92.86014533006993 },
  },
  {
    id: 2,
    title: "Wags Stay N' Play",
    location: "Moorhead, MN",
    tags: ["Daycare", "Boarding", "Grooming"],
    mapPosition: { lat: 46.858830071276856, lng: -96.73532188223334 },
  },
  {
    id: 3,
    title: "Boxers Bed & Biscuits",
    location: "Belpre, OH",
    tags: ["Daycare", "Boarding", "Grooming", "Vet Care", "Training"],
    mapPosition: { lat: 39.274995949370485, lng: -81.58609851878592 },
  },
];

// Dynamically import Google Maps component
const GoogleMapComponent = dynamic(() => import("./GoogleMapComponent"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center">
      Loading map...
    </div>
  ),
});

const LocationItem = ({
  location,
  isActive,
  onClick,
}: {
  location: Location;
  isActive: boolean;
  onClick: () => void;
}) => (
  <motion.div
    layout
    onClick={onClick}
    className={`bg-white p-6 rounded-2xl border cursor-pointer transition-all duration-500 ${
      isActive ? "border-[#183453] shadow-lg" : "border-[#183453]/20"
    }`}
    whileHover={{ scale: 1.01 }}
  >
    <div className="flex justify-between items-start">
      <h3 className="text-2xl font-bold tracking-tight">{location.title}</h3>
      {isActive ? (
        <CiCircleMinus size={36} fill="#183453" />
      ) : (
        <CiCirclePlus size={36} fill="#183453" />
      )}
    </div>
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden mt-2"
        >
          <p className="text-lg text-gray-700 mt-1.5">{location.location}</p>
          <div className="flex mt-3 flex-wrap gap-2">
            {location.tags.map((tag) => (
              <span
                className="px-3 py-1 border border-[#183453]/20 rounded-full bg-[#D5F0FF] text-sm"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const Network = () => {
  const [activeLocation, setActiveLocation] = useState<number | null>(0);

  const handleToggle = (id: number) => {
    setActiveLocation((prev) => (prev === id ? null : id));
  };

  const activeLocationData = locations.find((loc) => loc.id === activeLocation);

  return (
    <section className="py-24 md:py-36 bg-[#9CD8F6]">
      <div className="max-w-screen-2xl mx-auto px-8 flex flex-col">
        <div className="flex flex-col gap-4 items-start">
          <div className="border border-[#183453]/50 bg-[#D5F0FF] rounded-full py-1 flex items-center gap-2 px-3">
            <Image
              src="/badge-paws.png"
              height={18}
              width={24}
              alt="Paw Prints"
            />
            <p className="font-semibold capitalize">Our care network</p>
          </div>

          <h2 className="text-4xl md:text-5xl w-full md:w-[16ch] lg:text-6xl xl:text-7xl font-bold tracking-tight capitalize">
            Quality Care Built On Trust and Expertise
          </h2>
        </div>

        <div className="flex mt-12 gap-8 flex-col md:flex-row">
          <motion.div layout className="flex flex-1 flex-col gap-4">
            {locations.map((location) => (
              <LocationItem
                key={location.id}
                location={location}
                isActive={activeLocation === location.id}
                onClick={() => handleToggle(location.id)}
              />
            ))}
          </motion.div>

          <motion.div
            layout
            className="flex flex-1 bg-white border border-[#183453] rounded-2xl p-6"
          >
            <div className="w-full h-[450px]">
              {activeLocationData && (
                <GoogleMapComponent
                  center={activeLocationData.mapPosition}
                  zoom={14}
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Network;
