import Image from "next/image";
import { RiToothLine } from "react-icons/ri";
import { RiScissors2Line } from "react-icons/ri";
import { FaBath } from "react-icons/fa";

const Grooming = () => {
  return (
    <div className="flex flex-col md:flex-row py-12 gap-16 items-center">
      <div className="flex flex-1 items-start flex-col">
        <div className="border border-[#183453]/50 rounded-full bg-[#9CD8F6] py-1 flex flex-row items-center gap-2 px-3">
          <Image src="/paw-small.svg" height={16} width={16} alt="Paw Prints" />
          <p className="font-semibold text-xl capitalize">Grooming</p>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-start mt-5 md:mt-8 capitalize ">
          A Day At The Spa… Or A Much-Needed Bath
        </h2>
        <p className="my-5 md:my-8  w-full md:w-[85%] text-xl font-medium">
          Our breed-specific grooming services range from ongoing hygiene
          maintenance to full spa blow-outs. Each grooming service combines
          trained expertise with premium products in our safe, well-equipped
          facilities
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 md:gap-16 max-w-2xl w-full">
          <div className="flex flex-col gap-2 items-center">
            <FaBath className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            <p className="text-sm sm:text-base md:text-lg text-center font-medium">
              Baths
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image
              src="/dog-ear.png"
              height={48}
              width={48}
              alt="Grooming"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <p className="text-sm sm:text-base md:text-lg text-center font-medium">
              Ears
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <RiToothLine className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            <p className="text-sm sm:text-base md:text-lg text-center font-medium">
              Teeth & Nails
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <RiScissors2Line className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            <p className="text-sm sm:text-base md:text-lg text-center font-medium">
              Cuts & Spa Days
            </p>
          </div>
        </div>
      </div>
      <div className="flex relative flex-1 w-full md:items-end flex-col gap-2">
        <div className="flex flex-col w-full gap-2">
          <div className="h-auto flex flex-1 w-full">
            <Image
              alt="Daycare"
              src="/grooming-2.png"
              className="rounded-xl flex-grow flex flex-1 border border-[#183453]"
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grooming;
