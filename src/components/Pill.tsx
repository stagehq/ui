import React from "react";

export interface PillProps {
  name: string;
}

export const Pill: React.FC<PillProps> = ({ name }) => {
  return (
    <div className="inline-flex items-center justify-center h-8 relative px-4 py-2 rounded-[20px] bg-[#f0f0f0]">
      <p className="text-sm font-semibold text-left text-black">{name}</p>
    </div>
  );
};
