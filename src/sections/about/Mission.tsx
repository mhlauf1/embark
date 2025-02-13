"use client";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

interface MissionItemProps {
  id: number;
  src: string;
  title: string;
  bullets: string[];
  type: "image" | "video";
}

const missionData: MissionItemProps[] = [
  {
    id: 0,
    src: "/pets-come-first.png",
    type: "image",
    title: "Pets Come First",
    bullets: [
      "Elevated  pet care",
      "Seamless customer experience",
      "Happy at drop off, happy at pick-up",
    ],
  },
  {
    id: 1,
    src: "/mission-2.png",
    type: "image",
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
    type: "image",
    title: "Network of Excellence",
    bullets: [
      "Sharing best practices",
      "Staff development",
      "Consistent quality with local touch",
    ],
  },
];

const MissionItem = ({ src, title, bullets, type }: MissionItemProps) => (
  <div className="flex flex-col w-full items-start">
    {type === "image" ? (
      <Image
        className="rounded-xl border border-[#183453] w-full h-[600px] object-cover"
        src={src}
        alt={title}
        height={600}
        width={500}
      />
    ) : (
      <video
        autoPlay
        loop
        muted
        playsInline
        className="rounded-xl border border-[#183453] w-full h-[600px] object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
    )}
    <h3 className="text-2xl font-semibold pt-6 pb-3">{title}</h3>
    <div className="flex flex-col gap-3">
      {bullets.map((bullet) => (
        <div key={bullet} className="flex flex-row items-center gap-4">
          <div className="p-1 rounded-full bg-[#183453]">
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
    <section className=" py-24 relative md:py-36 border w-full">
      <div className="flex  px-4 sm:px-8 md:px-24 items-center flex-col">
        <div className="border border-[#183453]/50 rounded-full bg-white py-1 flex flex-row items-center gap-2 px-3">
          <Image src="/paw-small.svg" height={16} width={16} alt="Paw Prints" />
          <p className="font-semibold text-lg md:text-xl capitalize">
            Elevating pet care
          </p>
        </div>
        <h2 className="text-4xl mt-8 md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-center md:text-start capitalize ">
          Our Mission
        </h2>
        <div className="grid mt-12 md:mt-20 w-full grid-cols-1 md:grid-cols-3 gap-16  md:gap-8">
          {missionData.map((item) => (
            <div key={item.id}>
              <MissionItem
                id={item.id}
                src={item.src}
                type={item.type}
                title={item.title}
                bullets={item.bullets}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
