import React from "react";

export interface PillProps {
  name: string;
}

export const Pill: React.FC<PillProps> = ({ name }) => {
  return (
    <div className="inline-flex items-center justify-center h-8 relative px-4 py-2 rounded-[20px] bg-zinc-100 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
      <p className="text-sm font-semibold text-left text-black dark:text-zinc-400">{name}</p>
    </div>
  );
};
