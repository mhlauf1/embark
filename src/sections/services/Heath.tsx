import Image from "next/image";
import { GiWhistle } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { FaStethoscope } from "react-icons/fa";

const Health = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-16  items-center py-12">
      <div className="flex relative flex-1 w-full md:items-end flex-col gap-2">
        <div className="flex flex-row w-full gap-2">
          <div className="h-auto flex flex-1 w-full">
            <Image
              alt="Daycare"
              src="/health-wellness.png"
              className="rounded-xl flex-grow flex flex-1 border border-[#183453]"
              height={500}
              width={760}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-start flex-col">
        <div className="border border-[#183453]/50 rounded-full bg-[#9CD8F6] py-1 flex flex-row items-center gap-2 px-3">
          <Image src="/paw-small.svg" height={16} width={16} alt="Paw Prints" />
          <p className="font-semibold text-xl capitalize">Health & Wellness</p>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-start mt-5 md:mt-8 capitalize ">
          Comprehensive veterinary and training services
        </h2>
        <p className="my-5 md:my-8 w-full md:w-[85%] text-lg md:text-xl font-medium">
          From routine check-ups & specialized care to breed-specific training,
          we&apos;re here to support your pet&apos;s health and development at
          every stage of life
        </p>
        <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-16 max-w-3xl w-full">
          <div className="flex flex-col gap-2 items-center">
            <CiHeart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            <p className="text-sm sm:text-base md:text-lg text-center font-medium">
              Licensed Vets
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <FaStethoscope className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            <p className="text-sm sm:text-base md:text-lg text-center font-medium">
              Routine & Surgical Care
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <GiWhistle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            <p className="text-sm sm:text-base md:text-lg text-center font-medium">
              Training
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
