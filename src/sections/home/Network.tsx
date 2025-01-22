import React from "react";
import Image from "next/image";

const locations = [
  {
    id: 0,
    title: "Rio Grooming School & Saloon",
    location: "Hastings, MN",
    tags: ["Grooming", "Grooming Education", "Self-Service Dog Wash"],
  },
  {
    id: 0,
    title: "Barks & Rec Hastings",
    location: "Hastings, MN",
    tags: ["Daycare", "Boarding"],
  },
  {
    id: 0,
    title: "Wags Stay N’ Play",
    location: "Moorhead, MN",
    tags: ["Daycare", "Boarding", "Grooming"],
  },
  {
    id: 0,
    title: "Boxers Bed & Biscuits",
    location: "Belpre, OH",
    tags: ["Daycare", "Boarding", "Grooming", "Vet Care", "Training"],
  },
];

interface LocationItemProps {
  title: string;
  location: string;
  tags: string[];
}

const LocationItem = ({ title, location, tags }: LocationItemProps) => (
  <div className="bg-white p-8 rounded-2xl border border-[#183453] flex flex-col">
    <h3 className="text-3xl tracking-tight font-bold">{title}</h3>
    <p className="opacity-70 text-xl mt-1.5 mb-3">{location}</p>
    <div className="flex mt-2 flex-wrap flex-row items-start md:items-center gap-2">
      {tags.map((tag) => (
        <span
          className="px-4 border border-[#183453]/50 py-2 rounded-full bg-[#D5F0FF]"
          key={tag}
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);
const Network = () => {
  return (
    <section className="py-24 md:py-36  bg-[#9CD8F6]">
      <div className="max-w-screen-2xl mx-auto px-8 flex flex-col">
        <div className="flex flex-col gap-4 items-start">
          <div className="border border-[#183453]/50 bg-white rounded-full py-1 flex flex-row items-center gap-2 px-3">
            <Image
              src="/badge-paws.png"
              height={18}
              width={24}
              alt="Paw Prints"
            />
            <p className="font-semibold capitalize">Our care network</p>
          </div>
          <h2 className=" w-[16ch]">
            Quality Care Built On Trust and Expertis
          </h2>
        </div>
        <div className="flex mt-12 gap-8 flex-col md:flex-row">
          <div className="flex flex-1 flex-col gap-2">
            {locations.map((location) => (
              <div key={location.id}>
                <LocationItem
                  title={location.title}
                  location={location.location}
                  tags={location.tags}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-1 bg-white border border-[#183453] rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Network;
