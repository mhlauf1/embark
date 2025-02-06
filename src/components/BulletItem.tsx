"use client";
import { FaCheck } from "react-icons/fa6";

export const BulletItem = ({ text }: { text: string }) => (
  <div className="flex flex-row w-fit items-start gap-3">
    <div className="p-1 mt-1 rounded-full bg-[#8DD6FA] ">
      <FaCheck size={12} color="white" />
    </div>
    <p className="text-xl w-fit font-medium">{text}</p>
  </div>
);
