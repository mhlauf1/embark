import Image from "next/image";
import Link from "next/link";
import StarRating from "@/components/StarRating";
import { FaCheck } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import {
  getLocationsWithRatings,
  type LocationWithRating,
} from "@/lib/google-places";

const LocationItem = ({ location }: { location: LocationWithRating }) => (
  <Link target="_blank" href={location.reviewLink}>
    <div className="bg-white p-6 rounded-2xl border h-full border-[#183453] group relative hover:shadow-md transition-all duration-300">
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-bold tracking-tight">{location.title}</h3>
        <span className="flex items-center gap-2 text-neutral-800 font-medium opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          View in Google Reviews
          <MdArrowOutward />
        </span>
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
  </Link>
);

const Network = async () => {
  const locations = await getLocationsWithRatings();

  return (
    <section className="py-24 md:py-36 bg-[#9CD8F6]">
      <div className="flex px-4 sm:px-8 md:px-24  flex-col">
        <div className="flex flex-col gap-5 md:gap-8 items-start">
          <div className="border border-[#183453]/50 bg-[#EEF9FF] rounded-full py-1 flex items-center gap-2 px-3">
            <Image
              src="/paw-small.svg"
              height={16}
              width={16}
              alt="Embark Pet Services Badge Paw Prints"
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
          <div className="grid grid-cols-1 relative md:grid-cols-2 w-full gap-x-8 gap-y-10 h-full">
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
