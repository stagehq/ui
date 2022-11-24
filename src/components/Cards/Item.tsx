import Action from "../Action";
import { Icon, IconEnum } from "../Icon";
import { ButtonProps } from "../Action/Button";

export type ItemEnum = "vertical" | "horizontal" | "small" | "big";
export interface ItemProps {
  type: ItemEnum;
  title: string;
  subtitle?: string;
  image?: string;
  icon?: IconEnum;
  action?: React.ReactElement<ButtonProps>;
}

export const Item = ({ title, subtitle, image, icon, type, action }: ItemProps) => {
  if (type === "vertical") {
    return (
      <div className="flex flex-col items-start w-full relative overflow-hidden rounded-2xl border border-zinc-100">
        {image && (
          <div className="w-full h-40 relative">
            <img src={image} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex flex-col items-start self-stretch gap-6 p-6">
          <div className="flex flex-col items-start relative gap-3">
            <div className="flex w-full gap-2">
              {icon && (
                <div className="flex-none">
                  <Icon name={icon} color="dark" />
                </div>
              )}
              <p className="grow text-base font-semibold text-left text-zinc-900">{title}</p>
            </div>
            <p className="w-full text-sm text-zinc-600">{subtitle}</p>
          </div>
          {action && action}
        </div>
      </div>
    );
  }

  if (type === "horizontal") {
    return (
      <div className="flex items-center overflow-hidden gap-6 pr-6 rounded-2xl border border-zinc-100">
        {image && (
          <div className="w-24 h-24 relative">
            <img src={image} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex flex-col items-start gap-6 py-6 w-full">
          <div className="flex items-center gap-6 w-full">
            <div className="flex flex-col items-start gap-0.5 flex-grow">
              <div className="flex items-start self-stretch gap-3">
                <div className="flex items-center gap-2">
                  <p className="text-base font-semibold text-left text-zinc-900">{title}</p>
                </div>
              </div>
              <p className="self-stretch text-[13px] text-left text-zinc-600">{subtitle}</p>
            </div>
            {icon && (
              <div className="flex-none">
                <Icon name={icon} color="dark" />
              </div>
            )}
          </div>
          {action && action}
        </div>
      </div>
    );
  }

  if (type === "small") {
    return (
      <div className="flex items-center overflow-hidden gap-6 px-6 rounded-2xl border border-zinc-100">
        <div className="flex flex-col items-start flex-grow gap-6 py-6">
          <div className="flex items-center self-stretch gap-6">
            <img className="w-[46px] h-[46px] rounded-lg object-cover" src={image} />
            <div className="flex flex-col items-start flex-grow gap-0.5">
              <div className="flex items-start self-stretch gap-3">
                <div className="flex items-center flex-grow gap-2">
                  <p className="flex-grow text-base font-semibold text-left text-zinc-900">{title}</p>
                </div>
              </div>
              <p className="self-stretch text-[13px] text-left text-zinc-600">{subtitle}</p>
            </div>
            {icon && (
              <div className="flex-none">
                <Icon name={icon} color="dark" />
              </div>
            )}
          </div>
          {action && action}
        </div>
      </div>
    );
  }

  if (type === "big") {
    return (
      <div className="flex flex-col items-start h-[400px] overflow-hidden rounded-2xl border border-zinc-100 relative">
        <img className="absolute w-full h-full top-0 bottom-0 left-0 right-0 object-cover" src={image} />
        <div
          className="flex flex-col justify-end items-start self-stretch flex-grow gap-6 p-6 z-10"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 30.9%, rgba(0,0,0,0.6) 81.94%)" }}
        >
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-start gap-3">
              <div className="flex items-center w-[304px] gap-2">
                {icon && <Icon name={icon} color="light" />}
                <p className="flex-grow w-[272px] text-base font-semibold text-left text-white">{title}</p>
              </div>
            </div>
            <p className="w-[304px] text-sm text-left text-[#e0e0e5]">{subtitle}</p>
          </div>
          {action && action}
        </div>
      </div>
    );
  }

  return null;
};