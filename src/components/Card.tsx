import { FC } from "react";

export interface CardProps {
  type: "card" | "text" | "bullet" | "cover";
  title: string;
  subtitle: string;
  additional: string;
  count: string;
  image?: string;
  actions?: JSX.Element;
}

export const Card: FC<CardProps> = ({ title, subtitle, additional, count, image, actions }) => {
  return (
    <div className="flex flex-col justify-start items-start overflow-hidden rounded-2xl border border-zinc-100">
      {image && (
        <div className="w-full h-40 relative">
          <img src={image} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex flex-col justify-start items-start self-stretch relative gap-3 p-6">
      <p className="text-base font-semibold text-left text-zinc-900">{title}</p>
        <p className="text-sm text-left text-zinc-600">{subtitle}</p>
        <div className="flex justify-start items-center relative">
          <p className="text-sm font-medium text-left text-[#1eb7a6]">link text</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 relative"
            preserveAspectRatio="none"
          >
            <path
              d="M11 9L14 12L11 15"
              stroke="#1EB7A6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <div className="flex justify-start items-center self-stretch relative gap-3">
          <p className="flex-grow text-sm text-left text-zinc-400">{additional}</p>
          <div className="flex justify-start items-center relative gap-2">
            <p className="text-sm font-medium text-left text-zinc-400">{count}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
