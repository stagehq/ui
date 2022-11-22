// pill component react

import React from "react";

export interface PillProps {
  name: string;
}

export const Pill: React.FC<PillProps> = ({ name }) => {
  return (
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 h-8 relative gap-2 px-4 py-2 rounded-[20px] bg-[#f0f0f0]">
      <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-black">{name}</p>
    </div>
  );
};
