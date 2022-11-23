import { Icon, IconEnum } from "./Icon";

export type CardEnum = "Stacked" | "Horizontal" | "Small" | "Full";

export interface CardProps {
  title: string;
  subtitle?: string;
  image?: string;
  icon?: IconEnum;
  count?: string;
  type: CardEnum;
}

export const Card = ({ title, subtitle, image, icon, count, type }: CardProps) => {
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
            <Icon name="BoltIcon" onLightBg={true}/>
            <p className="grow text-base font-semibold text-left text-zinc-900">
              {title}
            </p>
          </div>
          <p className="w-full text-sm text-zinc-600">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  )
};