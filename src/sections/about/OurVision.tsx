"use client";
import { GiJumpingDog } from "react-icons/gi";
import { FaHandHoldingHeart, FaShieldDog } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa";
import { BiBath } from "react-icons/bi";
import { PiDogFill } from "react-icons/pi";
import Image from "next/image";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

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
  {
    id: 5,
    Icon: FaHandHoldingHeart, // Import this from react-icons
    title: "Personalized Care",
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
    <section className="bg-[#9CD8F6] py-24 md:py-36">
      <div className="px-4 sm:px-8 md:px-24">
        <div className="flex items-start flex-col">
          <div className="flex flex-col md:flex-row w-full justify-between">
            <div className="flex flex-1 items-start  flex-col">
              <div className="border border-[#183453]/50 rounded-full bg-white py-1 flex flex-row items-center gap-2 px-3">
                <Image
                  src="/paw-small.svg"
                  height={16}
                  width={16}
                  alt="Embark Pet Services Badge Paw Prints About"
                />
                <p className="font-semibold text-lg md:text-xl capitalize">
                  The Embark Way
                </p>
              </div>
              <h2 className="text-4xl mt-5 md:mt-8 md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-start md:text-start capitalize">
                Our Vision
              </h2>
              <p
                style={{ lineHeight: "150%" }}
                className="mb-0 md:mb-4 w-auto font-medium mt-5 md:mt-8 md:w-[80%] text-lg md:text-xl text-start"
              >
                We&apos;re building a network that elevates pet care standards
                while preserving the local relationships our communities trust.
                Through shared expertise and resources, we empower each location
                to deliver exceptional care with the backing of a broader
                network.
              </p>
            </div>
            <div className="hidden md:flex relative">
              <motion.div
                layout
                whileHover={{ scale: 1.01 }}
                className="h-auto w-auto duration-300 flex"
              >
                <Image
                  src="/hero-badge.png"
                  height={300}
                  width={300}
                  alt="Hero Badge"
                  className=" rounded-full object-contain"
                />
              </motion.div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-3 mt-16 gap-6 place-items-stretch">
            {visionData.map((item) => (
              <VisionItem key={item.id} Icon={item.Icon} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
