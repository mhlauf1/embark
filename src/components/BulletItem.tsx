"use client";
import { FaCheck } from "react-icons/fa6";

export const BulletItem = ({ text }: { text: string }) => (
  <div className="flex flex-row items-center gap-3">
    <div className="p-1 rounded-full bg-[#8DD6FA] ">
      <FaCheck color="white" />
    </div>
    <p className="text-lg font-medium">{text}</p>
  </div>
);
