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
    <section className="bg-gradient-to-b from-[#F9FDFF] to-[#EEF9FF] py-24 md:py-36">
      <div className=" px-8 max-w-screen-2xl mx-auto">
        <div className="flex items-center flex-col">
          <IoPaw size={48} color="#183453" />
          <h2 className="text-4xl mt-4 md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-center md:text-start capitalize ">
            Our Mission
          </h2>
          <div className="grid mt-12 grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
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
    </section>
  );
};

export default Mission;
