import { FC } from "react";
import { Icon, IconEnum } from "./Icon";

export interface ListItemProps {
  type: "card" | "text" | "bullet" | "cover";
  title: string;
  subtitle: string;
  additional?: string;
  count?: {
    value: number;
    icon: IconEnum;
  };
  image?: string;
  index?: number;
  actions?: JSX.Element;
}

export const ListItem: FC<ListItemProps> = ({ type, title, subtitle, additional, count, image, index, actions }) => {
  if (type === "card") {
    return (
      <div className="flex flex-col items-start overflow-hidden rounded-2xl border border-zinc-100">
        {image && (
          <div className="w-full h-40 relative">
            <img src={image} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex flex-col items-start relative gap-3 p-6">
          <p className="text-base font-semibold text-left text-zinc-900">{title}</p>
          <p className="text-sm text-left text-zinc-600">{subtitle}</p>
          <div className="flex items-center relative">
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
          <div className="flex items-center relative gap-3">
            <p className="flex-grow text-sm text-left text-zinc-400">{additional}</p>
            {count && (
              <div className="flex items-center relative gap-2">
                <p className="text-sm font-medium text-left text-zinc-400">{count.value}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (type === "text") {
    return (
      <div className="flex flex-col items-start relative gap-3 w-full">
        <div className="flex items-start relative gap-3">
          <div className="w-0.5 rounded-[1px] bg-zinc-200"></div>
          <p className="flex-grow text-sm text-left text-zinc-400">{additional}</p>
        </div>
        <div className="flex items-center relative gap-2 w-full">
          <p className="flex-grow text-base font-semibold text-left text-zinc-900">{title}</p>
          <div className="flex items-center relative gap-1">
            <div className="flex flex-col justify-center items-center h-6 w-6">
              {count?.icon && <Icon name={count.icon} color="neutral" size="sm" />}
            </div>
            {count && <p className="text-sm font-medium text-left text-zinc-400">{count.value}</p>}
          </div>
        </div>
        <p className="text-sm text-left text-zinc-600">{subtitle}</p>
        <div className="flex items-center relative">
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
      </div>
    );
  }

  if (type === "bullet") {
    return (
      <div className="flex items-center relative gap-4">
        {image && (
          <div
            className="flex-shrink-0 h-10 w-10 flex items-start gap-2 p-[6px] rounded-full bg-white border border-[#e9e9e9]"
            style={{ boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.05)" }}
          >
            <img src={image} alt="logo" className="object-cover object-center w-full h-full rounded-full" />
          </div>
        )}
        <div className="flex flex-col items-start flex-grow gap-0.5">
          <div className="flex items-center self-stretch gap-2">
            <p className="flex-grow text-base font-semibold text-left text-zinc-900">{title}</p>
          </div>
          <div className="flex items-center self-stretch gap-3">
            <p className="flex-grow text-[13px] text-left text-zinc-600">{subtitle}</p>
          </div>
        </div>
        {additional && <p className="text-[13px] text-left text-zinc-400">{additional}</p>}
      </div>
    );
  }

  if (type === "cover") {
    return (
      <div className="flex items-center relative gap-3">
        <p className="w-5 text-sm font-semibold text-center text-zinc-600">{index}</p>
        <img className="w-[46px] h-[46px] rounded-lg" src={image} />
        <div className="flex flex-col items-start flex-grow gap-0.5">
          <div className="flex items-center self-stretch relative gap-2">
            <p className="flex-grow text-base font-semibold text-left text-zinc-900">{title}</p>
          </div>
          <div className="flex items-center relative gap-3">
            <p className="text-[13px] text-left text-zinc-600">{subtitle}</p>
          </div>
        </div>
        {count && (
          <div className="flex items-center relative gap-2 pr-2">
            <p className="text-sm font-medium text-left text-zinc-400">{count.value}</p>
            {count.icon && <Icon name={count.icon} color="neutral" size="md" />}
          </div>
        )}
      </div>
    );
  }

  return null;
};
