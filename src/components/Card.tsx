import Action from "./Action";
import { Icon, IconEnum } from "./Icon";
import { ButtonProps } from "./Action/Button";

export type CardEnum = "Stacked" | "Horizontal" | "Small" | "Full";
export interface CardProps {
  title: string;
  subtitle?: string;
  image?: string;
  icon?: IconEnum;
  type: CardEnum;
  action?: React.ReactElement<ButtonProps>
}

export const Card = ({ title, subtitle, image, icon, type, action }: CardProps) => {
  if(type === "Stacked"){
    return (
      <div className="flex flex-col items-start w-full relative overflow-hidden rounded-2xl border border-zinc-100">
        {image && (
          <div className="w-full h-40 relative">
            <img src={image} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex flex-col items-start self-stretch flex-grow-0 flex-shrink-0 gap-6 p-6">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
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
  } else {
    return (
      <div className="flex flex-col items-start w-full relative overflow-hidden rounded-2xl border border-zinc-100">
        {image && (
          <div className="w-full h-40 relative">
            <img src={image} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex flex-col items-start self-stretch flex-grow-0 flex-shrink-0 gap-6 p-6">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
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
        </div>
      </div>
    );
  }
};
