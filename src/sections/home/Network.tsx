"use client";
import Image from "next/image";
import Link from "next/link";
import StarRating from "@/components/StarRating";
import { FaCheck } from "react-icons/fa6";

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
    title: "Barks & Rec Hastings",
    location: "Hastings, MN",
    tags: ["Daycare", "Boarding"],
    mapPosition: { lat: 44.77103052242032, lng: -92.86014533006993 },
    rating: 4.8,
    reviews: 16,
  },
  {
    id: 4,
    title: "Boxers Bed & Biscuits",
    location: "Belpre, OH",
    tags: ["Daycare", "Boarding", "Grooming", "Vet Care", "Training"],
    mapPosition: { lat: 39.274995949370485, lng: -81.58609851878592 },
    rating: 4.6,
    reviews: 253,
  },
];

const LocationItem = ({ location }: { location: Location }) => (
  <div className="bg-white p-6 rounded-2xl border border-[#183453]">
    <div className="flex justify-between items-start">
      <h3 className="text-2xl font-bold tracking-tight">{location.title}</h3>
    </div>
    <div className="mt-2">
      <StarRating rating={location.rating} reviews={location.reviews} />
      <p className="text-xl text-gray-700 mt-2">{location.location}</p>
      <div className="flex mt-4 flex-wrap gap-2">
        {location.tags.map((tag) => (
          <div
            key={tag}
            className="flex flex-row items-center border border-[#183453]/20 rounded-full px-4 py-2 w-fit bg-[#D5F0FF] gap-3"
          >
            <div className="p-1 mt-1 rounded-full bg-[#183453]">
              <FaCheck className="h-[12px] w-[12px]" color="white" />
            </div>
            <p className="text-lg w-full text-[#183453] font-medium">{tag}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Network = () => {
  return (
    <section className="py-24 md:py-36 bg-[#9CD8F6]">
      <div className="flex px-4 sm:px-8 md:px-24  flex-col">
        <div className="flex flex-col gap-5 md:gap-8 items-start">
          <div className="border border-[#183453]/50 bg-[#EEF9FF] rounded-full py-1 flex items-center gap-2 px-3">
            <Image
              src="/paw-small.svg"
              height={16}
              width={16}
              alt="Paw Prints"
            />
            <p className="font-semibold capitalize">Our care network</p>
          </div>
          <div className="flex justify-between flex-col md:flex-row w-full items-start md:items-center">
            <h2 className="text-4xl md:text-5xl w-full md:w-[16ch] lg:text-6xl xl:text-7xl font-bold tracking-tight capitalize">
              Quality Care Built On Trust and Expertise
            </h2>
            <Link href="/network" className="mt-8 md:mt-12">
              <button className="font-medium text-lg md:text-xl border border-[#183453]/50 rounded-full py-4 px-8 md:py-5 md:px-10 bg-[#183453] text-white">
                Explore Network
              </button>
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
