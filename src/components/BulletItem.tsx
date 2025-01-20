"use client";
import { FaCheck } from "react-icons/fa6";

export const BulletItem = ({ text }: { text: string }) => (
  <div className="flex flex-row items-center gap-3">
    <div className="p-1 rounded-full bg-[#8DD6FA] ">
      <FaCheck size={14} color="white" />
    </div>
    <p className="text-2xl font-medium">{text}</p>
  </div>
);
