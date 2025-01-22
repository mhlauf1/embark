"use client";
import { GiJumpingDog } from "react-icons/gi";
import { FaShieldDog } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa";
import { BiBath } from "react-icons/bi";
import { PiDogFill } from "react-icons/pi";
import { IoPaw } from "react-icons/io5";
import { IconType } from "react-icons";

interface VisionItemProps {
  title: string;
  Icon: IconType;
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

const VisionItem = ({ Icon, title }: VisionItemProps) => (
  <div className="flex rounded-xl border-[#183453]/50 bg-[#EFF9FF] h-full py-20 flex-col items-center justify-center">
    <Icon size={48} className="flex-shrink-0" />
    <h3 className="text-3xl font-semibold pt-4 px-6 text-center">{title}</h3>
  </div>
);

const Vision = () => {
  return (
    <section className="bg-white pt-36 pb-48">
      <div className="px-8 max-w-screen-2xl mx-auto">
        <div className="flex items-start flex-col">
          <IoPaw size={48} color="#183453" />
          <h2 className="mt-4">Our Vision</h2>
          <p className="mt-6 mb-4 w-[55ch] text-xl leading-[160%]">
            We&apos;re building a network that elevates pet care standards while
            preserving the local relationships our communities trust.
          </p>
          <p className="w-[55ch] text-xl leading-[160%]">
            Through shared expertise and resources, we empower each location to
            deliver exceptional care with the backing of a broader network
          </p>
          <div className="grid w-full mt-16 grid-cols-3  gap-6">
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
