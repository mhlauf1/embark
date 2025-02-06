"use client";
import { FaCheck } from "react-icons/fa6";
import { IoPaw } from "react-icons/io5";
import Image from "next/image";

interface MissionItemProps {
  src: string;
  title: string;
  bullets: string[];
}

const missionData = [
  {
    id: 0,
    src: "/mission-1.png",
    title: "Pets Come First",
    bullets: [
      "Elevated  pet care",
      "Seamless customer experience",
      "Your pet will want to come back",
    ],
  },
  {
    id: 1,
    src: "/mission-2.png",
    title: "Local Is Better",
    bullets: [
      "Established, long-term relationships",
      "Local management",
      "Community involvement",
    ],
  },
  {
    id: 2,
    src: "/mission-3.png",
    title: "Network of Excellence",
    bullets: [
      "Best practice sharing",
      "Staff development",
      "Consistent quality with local touch",
    ],
  },
];

const MissionItem = ({ src, title, bullets }: MissionItemProps) => (
  <div className="flex flex-col items-start">
    <Image
      className="rounded-xl border border-[#183453]"
      src={src}
      alt={title}
      height={425}
      width={500}
    />
    <h3 className="text-2xl font-semibold pt-6 pb-3">{title}</h3>
    <div className="flex flex-col gap-3">
      {bullets.map((bullet) => (
        <div key={bullet} className="flex flex-row items-center gap-4">
          <div className="p-1 rounded-full bg-[#183453] ">
            <FaCheck size={14} color="white" />
          </div>
          <p className="text-lg font-medium">{bullet}</p>
        </div>
      ))}
    </div>
  </div>
);

const Mission = () => {
  return (
    <section className="py-12 relative md:py-16">
      <div className=" px-8 mx-16 py-12 md:py-32 bg-white   rounded-xl">
        <div className="flex max-w-screen-2xl mx-auto items-center flex-col">
          <div className="border border-[#183453]/50 rounded-full bg-white py-1 flex flex-row items-center gap-2 px-3">
            <Image
              src="/badge-paws.png"
              height={18}
              width={24}
              alt="Paw Prints"
            />
            <p className="font-semibold text-lg md:text-xl capitalize">
              Elevating pet care
            </p>
          </div>
          <h2 className="text-4xl mt-8 md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-center md:text-start capitalize ">
            Our Mission
          </h2>
          <div className="grid mt-20 grid-cols-1 md:grid-cols-3 gap-16 px-16 md:gap-8">
            {missionData.map((item) => (
              <div key={item.id}>
                <MissionItem
                  src={item.src}
                  title={item.title}
                  bullets={item.bullets}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-100px] rotate-180 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[200px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 
    C380,80 660,-20 1440,30
    L1440,120 
    L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Mission;
