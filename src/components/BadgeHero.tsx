import React from "react";
import Image from "next/image";

const BadgeHero = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col gap-4 items-start">
      <div className="border border-[#183453]/50 rounded-full py-1 flex flex-row items-center gap-2 px-3">
        <Image src="/badge-paws.png" height={18} width={24} alt="Paw Prints" />
        <p className="font-semibold text-xl capitalize">
          Local care your <span className="underline"> can</span> trust
        </p>
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default BadgeHero;
