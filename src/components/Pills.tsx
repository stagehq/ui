import React from "react";
import { Pill } from "./Pill";

export interface PillsProps {
  pills: string[];
}

export const Pills: React.FC<PillsProps> = ({ pills }) => {
  return (
    <div className="flex flex-row flex-wrap gap-2">
      {pills.map((pill) => (
        <Pill name={pill} />
      ))}
    </div>
  );
};