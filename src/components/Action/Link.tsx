import { FC } from "react";

export interface LinkProps {
  text?: string;
  url: string;
}

export const Link: FC<LinkProps> = ({ text, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener" className="flex items-center">
      <span className="text-sm font-medium text-left text-[#1eb7a6]">{text ? text : "Link"}</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
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
    </a>
  );
};
