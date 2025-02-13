import React from "react";
import Image from "next/image";

const tenetData = [
  {
    id: 0,
    title: "Retreat, Rehire, or Re-Up",
    text: "Embark offers sellers flexibility to choose the next steps for their business involvement",
  },
  {
    id: 0,
    title: "Take Chips Off the Table",
    text: "Earn compensation for the great business you’ve built",
  },
  {
    id: 0,
    title: "Preserve Your Legacy",
    text: "We retain branding, vision, management, employees, and culture!",
  },
];

const TenetsItem = ({ text, title }: { text: string; title: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-[48px] md:w-[56px] relative h-[48px] md:h-[56px]">
      <Image src="/tenet-paw.svg" alt="Dog Paw" fill />
    </div>
    <h3 className="text-2xl mt-2 md:text-3xl font-semibold">{title}</h3>
    <p className="text-lg text-center  w-full font-semibold">{text}</p>
  </div>
);

const Tenets = () => {
  return (
    <section className="py-24 bg-[#EFF9FF] md:py-36 ">
      <div className="px-4 sm:px-8 md:px-24 flex flex-col">
        <div className="grid mt-16 grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
          {tenetData.map((item) => (
            <div key={item.id}>
              <TenetsItem text={item.text} title={item.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tenets;
