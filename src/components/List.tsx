import { FC } from "react";

export interface ListItemProps {
  type: "card" | "text" | "bullet" | "cover";
  title: string;
  subtitle: string;
  additional?: string;
  count?: string;
  image?: string;
  actions?: JSX.Element;
}

export const ListItem: FC<ListItemProps> = ({ type, title, subtitle, additional, count, image, actions }) => {
  if (type === "card") {
    return (
      <div className="flex flex-col justify-start items-start overflow-hidden rounded-2xl border border-zinc-100">
        {image && (
          <div className="w-full h-40 relative">
            <img src={image} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex flex-col justify-start items-start relative gap-3 p-6">
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
          <div className="flex justify-start items-center relative gap-3">
            <p className="flex-grow text-sm text-left text-zinc-400">{additional}</p>
            <div className="flex justify-start items-center relative gap-2">
              <p className="text-sm font-medium text-left text-zinc-400">{count}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "text") {
    return (
      <div className="flex flex-col justify-start items-start relative gap-3 w-full">
        <div className="flex justify-start items-start relative gap-3">
          <div className="w-0.5 rounded-[1px] bg-zinc-200"></div>
          <p className="flex-grow text-sm text-left text-zinc-400">{additional}</p>
        </div>
        <div className="flex justify-start items-center relative gap-2 w-full">
          <p className="flex-grow text-base font-semibold text-left text-zinc-900">{title}</p>
          <div className="flex justify-start items-center relative gap-1">
            <div className="flex flex-col justify-center items-center h-6 w-6 relative gap-2 p-0.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M6.65311 1.40833C6.6813 1.33955 6.72932 1.28071 6.79105 1.2393C6.85279 1.19789 6.92544 1.17578 6.99977 1.17578C7.07411 1.17578 7.14676 1.19789 7.2085 1.2393C7.27023 1.28071 7.31825 1.33955 7.34644 1.40833L8.76311 4.81566C8.78963 4.87942 8.83322 4.93463 8.88909 4.97521C8.94496 5.01579 9.01094 5.04017 9.07977 5.04566L12.7584 5.34033C13.0911 5.367 13.2258 5.78233 12.9724 5.999L10.1698 8.40033C10.1174 8.44512 10.0784 8.50347 10.057 8.56897C10.0356 8.63447 10.0326 8.70459 10.0484 8.77166L10.9051 12.3617C10.9223 12.4337 10.9178 12.5092 10.8921 12.5787C10.8665 12.6481 10.8208 12.7084 10.7609 12.7519C10.7009 12.7955 10.6295 12.8202 10.5555 12.8232C10.4815 12.8261 10.4083 12.807 10.3451 12.7683L7.19511 10.845C7.13627 10.8091 7.06868 10.7902 6.99977 10.7902C6.93086 10.7902 6.86328 10.8091 6.80444 10.845L3.65444 12.769C3.59128 12.8077 3.51808 12.8267 3.44408 12.8238C3.37008 12.8209 3.29861 12.7961 3.23869 12.7526C3.17877 12.7091 3.13308 12.6488 3.10741 12.5793C3.08174 12.5099 3.07722 12.4344 3.09444 12.3623L3.95111 8.77166C3.967 8.7046 3.96408 8.63445 3.94267 8.56893C3.92126 8.50342 3.8822 8.44508 3.82977 8.40033L1.02711 5.999C0.970984 5.95074 0.930382 5.88696 0.910408 5.81569C0.890434 5.74441 0.89198 5.66883 0.914852 5.59843C0.937724 5.52803 0.980901 5.46597 1.03895 5.42004C1.097 5.37412 1.16734 5.34639 1.24111 5.34033L4.91978 5.04566C4.98861 5.04017 5.05459 5.01579 5.11046 4.97521C5.16633 4.93463 5.20992 4.87942 5.23644 4.81566L6.65311 1.409V1.40833Z"
                  stroke="#A1A1AA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <p className="text-sm font-medium text-left text-zinc-400">{count}</p>
          </div>
        </div>
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
      </div>
    );
  }

  if (type === "bullet") {
    return (
      <div className="flex justify-start items-center relative gap-4">
        <div
          className="h-12 w-12 flex justify-start items-start relative gap-2 p-2 rounded-full bg-white border border-[#e9e9e9]"
          style={{ boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.05)" }}
        >

        </div>
        <div className="flex flex-col justify-start items-start flex-grow gap-0.5">
          <div className="flex justify-start items-center self-stretch relative gap-2">
            <p className="flex-grow text-base font-semibold text-left text-zinc-900">{ title }</p>
          </div>
          <div className="flex justify-start items-center self-stretch relative gap-3">
            <p className="flex-grow text-[13px] text-left text-zinc-600">{ subtitle }</p>
          </div>
        </div>
        <p className="text-[13px] text-left text-zinc-400">{additional}</p>
      </div>
    );
  }

  return null;
};
