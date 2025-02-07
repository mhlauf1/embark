import Image from "next/image";
import { MdSupervisedUserCircle } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";

const Daycare = () => {
  return (
    <div className="flex flex-col md:flex-row gap-16 items-center">
      <div className="flex flex-1 items-start flex-col">
        <div className="border border-[#183453]/50 rounded-full bg-[#9CD8F6] py-1 flex flex-row items-center gap-2 px-3">
          <Image
            src="/badge-paws.png"
            height={18}
            width={24}
            alt="Paw Prints"
          />
          <p className="font-semibold text-xl capitalize">Daycare</p>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-start mt-5 md:mt-8 capitalize ">
          Where Every Day is an adventure
        </h2>
        <p className="my-5 md:my-8 md:w-[85%] text-lg md:text-xl font-medium">
          Keep your pet active and engaged with supervised play sessions
          throughout the day. Our professional staff ensures safe socialization
          while maintaining the perfect balance of activity and rest
        </p>
        <div className="flex flex-row justify-center items-end gap-8 md:gap-16">
          <div className="flex flex-col gap-2 items-center">
            <MdSupervisedUserCircle size={48} />
            <p>Supervised Play</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <FaPeopleGroup size={46} />
            <p>Social Activities</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <FaRegLightbulb size={42} />
            <p>Enrichment</p>
          </div>
        </div>
      </div>
      <div className="flex relative flex-1 md:items-end flex-col gap-2">
        <div className="flex flex-row w-full gap-2">
          <Image
            src="/bone-lg.png"
            alt="Large Bone"
            height={90}
            width={90}
            className="absolute hidden md:block top-[-40] left-[-40]"
          />
          <div className="flex flex-1">
            <Image
              alt="Daycare"
              src="/daycare-1.png"
              className="rounded-xl border border-[#183453] object-cover"
              height={400}
              width={500}
            />
          </div>
          <div className="flex flex-1">
            <Image
              alt="Daycare"
              src="/daycare-2.png"
              className="rounded-xl border border-[#183453] object-cover"
              height={400}
              width={350}
            />
          </div>
        </div>
        <Image alt="Daycare" src="/many-paws.png" height={100} width={490} />
      </div>
    </div>
  );
};

export default Daycare;
