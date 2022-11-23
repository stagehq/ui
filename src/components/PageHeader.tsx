import { FC } from "react";

export interface PageHeaderProps {
  title: string;
  description: string;
  image: string;
  lightMode: boolean;
  toggleLightMode: () => void;
}

export const PageHeader: FC<PageHeaderProps> = ({ title, description, image, lightMode, toggleLightMode }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-[54px]">
      <div className="flex justify-end items-start self-stretch gap-2">
        <div
          className="flex justify-start items-start relative gap-2 p-2 rounded-full bg-white border border-[#e9e9e9]"
          style={{ boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.05)" }}
          onClick={toggleLightMode}
        >
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
              d="M12 3V5.25M18.364 5.636L16.773 7.227M21 12H18.75M18.364 18.364L16.773 16.773M12 18.75V21M7.227 16.773L5.636 18.364M5.25 12H3M7.227 7.227L5.636 5.636M15.75 12C15.75 12.9946 15.3549 13.9484 14.6517 14.6517C13.9484 15.3549 12.9946 15.75 12 15.75C11.0054 15.75 10.0516 15.3549 9.34835 14.6517C8.64509 13.9484 8.25 12.9946 8.25 12C8.25 11.0054 8.64509 10.0516 9.34835 9.34835C10.0516 8.64509 11.0054 8.25 12 8.25C12.9946 8.25 13.9484 8.64509 14.6517 9.34835C15.3549 10.0516 15.75 11.0054 15.75 12V12Z"
              stroke="#52525B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start self-stretch relative gap-5">
        <img src={image} className="w-16 h-16 rounded-full object-cover" />
        <h1 className="w-auto text-2xl font-bold text-left text-black">{title}</h1>
        <h2 className="w-auto text-sm text-left text-zinc-600">{description}</h2>
      </div>
    </div>
  );
};
