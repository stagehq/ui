import { ActionsProps } from "../Actions";
import { Icon, IconEnum } from "../Icon";

type ListType = "card" | "text" | "bullet" | "cover";
export interface ListItemProps {
  type: ListType;
  title: string;
  subtitle: string;
  additional?: string;
  count?: {
    value: number;
    icon: IconEnum;
  };
  image?: string;
  index?: number;
  actions?: React.ReactElement<ActionsProps>;
}

export const ListItem = ({ type, title, subtitle, additional, count, image, index, actions }: ListItemProps) => {
  if (type === "card") {
    return (
      <div className="flex flex-col items-start overflow-hidden rounded-2xl border border-zinc-100 dark:border-zinc-700/40 w-full">
        {image && (
          <div className="w-full h-52">
            <img src={image} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex flex-col items-start gap-3 p-6 w-full">
          <p className="text-base font-semibold text-left text-zinc-900 dark:text-zinc-100">{title}</p>
          <p className="text-sm text-left text-zinc-600 dark:text-zinc-400">{subtitle}</p>
          {actions && actions}
          <div className="flex items-center justify-between gap-3 w-full">
            <p className="flex-grow text-sm text-left text-zinc-400">{additional}</p>
            {count && (
              <div className="flex items-center gap-2">
                {count?.icon && <Icon name={count.icon} color="neutral" size="sm" />}
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
      <div className="flex flex-col items-start gap-3 w-full pb-6">
        <div className="flex items-start gap-3">
          <div className="flex h-5 w-0.5 rounded-[1px] bg-zinc-200"></div>
          <p className="flex-grow text-sm text-left text-zinc-400">{additional}</p>
        </div>
        <div className="flex items-center gap-2 w-full">
          <p className="flex-grow text-base font-semibold text-left text-zinc-900 dark:text-zinc-100">{title}</p>
          <div className="flex items-center gap-1">
            <div className="flex flex-col justify-center items-center h-6 w-6">
              {count?.icon && <Icon name={count.icon} color="neutral" size="sm" />}
            </div>
            {count && <p className="text-sm font-medium text-left text-zinc-400">{count.value}</p>}
          </div>
        </div>
        <p className="text-sm text-left text-zinc-600 dark:text-zinc-400">{subtitle}</p>
        {actions && actions}
      </div>
    );
  }

  if (type === "bullet") {
    return (
      <div className="flex @xl:items-center gap-2 @xl:gap-4 w-full flex-col @xl:flex-row">
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
            <p className="flex-grow text-base font-semibold text-left text-zinc-900 dark:text-zinc-100">{title}</p>
          </div>
          <div className="flex items-center self-stretch gap-3">
            <p className="flex-grow text-[13px] text-left text-zinc-600 dark:text-zinc-400">{subtitle}</p>
          </div>
        </div>
        {additional && <p className="text-[13px] text-left text-zinc-400">{additional}</p>}
      </div>
    );
  }

  if (type === "cover") {
    return (
      <div className="flex items-center gap-3 w-full">
        <p className="w-5 text-sm font-semibold text-center text-zinc-600 dark:text-zinc-400">{index}</p>
        <img className="w-[46px] h-[46px] rounded-lg object-cover" src={image} />
        <div className="flex flex-col items-start flex-grow gap-0.5">
          <div className="flex items-center self-stretch gap-2">
            <p className="flex-grow text-base font-semibold text-left text-zinc-900 dark:text-zinc-100">{title}</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-[13px] text-left text-zinc-600 dark:text-zinc-400">{subtitle}</p>
          </div>
        </div>
        {count && (
          <div className="flex items-center gap-2 pr-2">
            <p className="text-sm font-medium text-left text-zinc-400">{count.value}</p>
            {count.icon && <Icon name={count.icon} color="neutral" size="md" />}
          </div>
        )}
      </div>
    );
  }

  return null;
};
