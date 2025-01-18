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
  <div className="bg-white rounded-2xl border border-[#183453] flex flex-col">
    <h3>{title}</h3>
    <p>{location}</p>
    <div className="flex flex-row items-center gap-2">
      {tags.map((tag) => (
        <span>{tag}</span>
      ))}
    </div>
  </div>
);
const Network = () => {
  return (
    <section className="py-36 px-8 bg-[#9CD8F6]">
      <div className="max-w-screen-2xl mx-auto  flex flex-col">
        <div className="flex flex-col gap-2 items-start">
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
        <div className="flex mt-16 flex-col md:flex-row">
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
          <div className="flex flex-1">map</div>
        </div>
      </div>
    </section>
  );
};

export default Network;
