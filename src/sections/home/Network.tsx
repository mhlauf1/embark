"use client";
import Image from "next/image";
import Link from "next/link";
import StarRating from "@/components/StarRating";
import { FaCheck } from "react-icons/fa6";
import { Tooltip } from "@heroui/react";

interface Location {
  id: number;
  title: string;
  location: string;
  tags: string[];
  mapPosition: { lat: number; lng: number };
  rating: number;
  reviews: number;
  reviewLink: string;
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
    reviewLink:
      "https://www.google.com/search?q=Rio+Grooming+School+%26+Salon&oq=Rio+Grooming+School+%26+Salon&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBBzQ1NWowajGoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x87f7c4784a70d1d9:0xd6b16a4eaf83eb6e,1,,,,",
  },

  {
    id: 2,
    title: "Wags Stay N' Play",
    location: "Moorhead, MN",
    tags: ["Daycare", "Boarding", "Grooming"],
    mapPosition: { lat: 46.858830071276856, lng: -96.73532188223334 },
    rating: 4.4,
    reviews: 185,
    reviewLink:
      "https://www.google.com/search?q=Wags+Stay+N%27+Play&sca_esv=35c83397f18a25ed&ei=ojWuZ5faG-G2ptQPqJTaqQM&ved=0ahUKEwiXs5jPn8GLAxVhm4kEHSiKNjUQ4dUDCBE&uact=5&oq=Wags+Stay+N%27+Play&gs_lp=Egxnd3Mtd2l6LXNlcnAiEVdhZ3MgU3RheSBOJyBQbGF5MgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigVI0BBQ1gZY1gZwBHgBkAEAmAGLAaABiwGqAQMwLjG4AQPIAQD4AQL4AQGYAgWgApsBwgIKEAAYsAMY1gQYR5gDAIgGAZAGCJIHAzQuMaAHswc&sclient=gws-wiz-serp#lrd=0x52c8cf2b6b24afe9:0x7e1144f2b595c885,1,,,,",
  },
  {
    id: 3,
    title: "Barks & Rec Hastings",
    location: "Hastings, MN",
    tags: ["Daycare", "Boarding"],
    mapPosition: { lat: 44.77103052242032, lng: -92.86014533006993 },
    rating: 4.8,
    reviews: 16,
    reviewLink:
      "https://www.google.com/search?q=Barks+%26+Rec+Hastings&sca_esv=35c83397f18a25ed&ei=1jWuZ9OWDNftptQPk5fk4QY&ved=0ahUKEwjT2e7nn8GLAxXXtokEHZMLOWwQ4dUDCBE&uact=5&oq=Barks+%26+Rec+Hastings&gs_lp=Egxnd3Mtd2l6LXNlcnAiFEJhcmtzICYgUmVjIEhhc3RpbmdzMgcQABiABBgKMg0QLhiABBjHARgKGK8BMgYQABgWGB4yBhAAGBYYHjIIEAAYgAQYogQyBRAAGO8FMggQABiABBiiBEjRC1CHA1iHA3ADeAGQAQCYAXKgAXKqAQMwLjG4AQPIAQD4AQL4AQGYAgSgAnvCAgoQABiwAxjWBBhHmAMAiAYBkAYIkgcDMy4xoAeuCQ&sclient=gws-wiz-serp#lrd=0x87f7c5dcaed8371f:0xff578cbfb86b5932,1,,,,",
  },
  {
    id: 4,
    title: "Boxers Bed & Biscuits",
    location: "Belpre, OH",
    tags: ["Daycare", "Boarding", "Grooming", "Vet Care", "Training"],
    mapPosition: { lat: 39.274995949370485, lng: -81.58609851878592 },
    rating: 4.6,
    reviews: 254,
    reviewLink:
      "https://www.google.com/search?q=Boxers+Bed+%26+Biscuits&sca_esv=35c83397f18a25ed&ei=5TWuZ6HTDIu8ptQPjarC6Q4&ved=0ahUKEwjh2YLvn8GLAxULnokEHQ2VMO0Q4dUDCBE&uact=5&oq=Boxers+Bed+%26+Biscuits&gs_lp=Egxnd3Mtd2l6LXNlcnAiFUJveGVycyBCZWQgJiBCaXNjdWl0czILEC4YgAQYxwEYrwEyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yGhAuGIAEGMcBGK8BGJcFGNwEGN4EGOAE2AEBSOEPUMoIWMoIcAR4AJABAJgBvQGgAb0BqgEDMC4xuAEDyAEA-AEC-AEBmAIFoALPAcICChAAGIAEGLADGArCAhAQLhiABBiwAxjHARgKGK8BwgIJEAAYsAMYCBgewgIIEAAYsAMY7wXCAgsQABiABBiwAxiiBJgDAIgGAZAGCLoGBggBEAEYFJIHAzQuMaAHlQs&sclient=gws-wiz-serp#lrd=0x8848459108fe6ecb:0x7cfe04e12bd42000,1,,,,",
  },
];

const LocationItem = ({ location }: { location: Location }) => (
  <Tooltip
    placement="top-start"
    content={`View ${location.title} in google reviews`}
  >
    <Link target="_blank" href={location.reviewLink}>
      <div className="bg-white p-6 rounded-2xl border h-full border-[#183453]">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold tracking-tight">
            {location.title}
          </h3>
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
                <p className="text-lg w-full text-[#183453] font-medium">
                  {tag}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  </Tooltip>
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
            <h2 className="text-4xl md:text-5xl w-full md:w-[20ch] lg:text-6xl xl:text-7xl font-bold tracking-tight capitalize">
              Conveniently-Located, State-of-the-Art Facilities
            </h2>
            <Link href="/network" className="mt-8 md:mt-12">
              <button className="font-medium text-lg md:text-xl border border-[#183453]/50 rounded-full py-4 px-8 md:py-5 md:px-10 bg-[#183453] text-white">
                Explore Network
              </button>
            </Link>
          </div>
        </div>

        <div className="flex mt-12 gap-8 flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-8 gap-y-10 h-full">
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
