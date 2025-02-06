"use client";
import { GiJumpingDog } from "react-icons/gi";
import { FaShieldDog } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa";
import { BiBath } from "react-icons/bi";
import { PiDogFill } from "react-icons/pi";
import Image from "next/image";
import { IconType } from "react-icons";

interface VisionItemProps {
  title: string;
  Icon: IconType;
  className?: string;
}

const visionData = [
  {
    id: 0,
    Icon: GiJumpingDog,
    title: "Enriching experiences",
  },
  {
    id: 1,
    Icon: FaMedal,
    title: "Expert Staff",
  },
  {
    id: 2,
    Icon: FaShieldDog,
    title: "Safe Stays",
  },
  {
    id: 3,
    Icon: BiBath,
    title: "Clean & Welcoming Environments",
  },
  {
    id: 4,
    Icon: PiDogFill,
    title: "Reliable Partners",
  },
];

const VisionItem = ({ Icon, title, className = "" }: VisionItemProps) => (
  <div
    className={`flex rounded-xl border border-[#183453]/50 bg-[#EFF9FF] h-full py-16 md:py-20 flex-col items-center justify-center ${className}`}
  >
    <Icon size={48} className="flex-shrink-0" />
    <h3 className="text-2xl md:text-3xl font-semibold pt-4 px-6 text-center">
      {title}
    </h3>
  </div>
);

const Vision = () => {
  return (
    <section className="bg-[#9CD8F6] pt-48 md:pt-64 pb-36 md:pb-48">
      <div className="px-8 max-w-screen-2xl mx-auto">
        <div className="flex items-start flex-col">
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-1 items-start  flex-col">
              <div className="border border-[#183453]/50 rounded-full bg-[#EFF9FF] py-1 flex flex-row items-center gap-2 px-3">
                <Image
                  src="/badge-paws.png"
                  height={18}
                  width={24}
                  alt="Paw Prints"
                />
                <p className="font-semibold text-lg md:text-xl capitalize">
                  The Embark Way
                </p>
              </div>
              <h2 className="text-4xl mt-8 md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-start md:text-start capitalize">
                Our Vision
              </h2>
            </div>
            <div className="flex flex-1 items-end flex-col">
              <p className=" mb-4 w-auto font-medium md:w-[48ch] text-lg md:text-xl text-start leading-relaxed">
                We&apos;re building a network that elevates pet care standards
                while preserving the local relationships our communities trust.
              </p>
              <p className="w-auto md:w-[48ch] font-medium text-lg md:text-xl text-start leading-relaxed">
                Through shared expertise and resources, we empower each location
                to deliver exceptional care with the backing of a broader
                network.
              </p>
            </div>
          </div>

          <div className="grid w-full mt-24 grid-cols-1  md:grid-cols-3 gap-6">
            {visionData.map((item) => (
              <div key={item.id}>
                <VisionItem Icon={item.Icon} title={item.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
