import clsx from "clsx";
import { useState } from "react";
import { Action } from "../Action";
import { withLink } from "../Action/helper";
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
  imageAlt?: string;
  index?: number;
  actions?: ActionsProps;
}

export const ListItem = ({
  type,
  title,
  subtitle,
  additional,
  count,
  image,
  imageAlt,
  index,
  actions,
}: ListItemProps) => {
  const [isHovering, setIsHovering] = useState(false);

  if (type === "card") {
    return withLink(
      <div
        className="flex w-full flex-col items-start overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-500/40"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {image && (
          <div className="h-52 w-full">
            <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
          </div>
        )}
        <div className="flex w-full flex-col items-start gap-3 p-6">
          <p
            className={clsx(
              "w-full overflow-hidden text-ellipsis text-left text-base font-semibold text-zinc-900 dark:text-zinc-100",
              isHovering && actions?.open && "underline"
            )}
          >
            {title}
          </p>
          <p className="w-full overflow-hidden text-ellipsis text-left text-sm text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
          {(actions?.link && <Action.Link {...actions.link} />) ||
            (actions?.button && <Action.Button {...actions.button} />)}
          <div className="flex w-full items-center justify-between gap-3">
            <p className="flex-grow overflow-hidden text-ellipsis text-left text-sm text-zinc-400">{additional}</p>
            {count && (
              <div className="flex items-center gap-2">
                {count?.icon && <Icon name={count.icon} color="neutral" size="sm" />}
                <p className="text-left text-sm font-medium text-zinc-400">{count.value}</p>
              </div>
            )}
          </div>
        </div>
      </div>,
      actions
    );
  }

  if (type === "text") {
    return withLink(
      <div
        className="flex w-full flex-col items-start gap-3 pb-6"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="flex items-start gap-3">
          <div className="flex h-5 w-0.5 rounded-[1px] bg-zinc-200"></div>
          <p className="flex-grow text-left text-sm text-zinc-400">{additional}</p>
        </div>
        <div className="flex w-full items-center gap-2">
          <p
            className={clsx(
              "flex-grow text-left text-base font-semibold text-zinc-900 dark:text-zinc-100",
              isHovering && actions?.open && "underline"
            )}
          >
            {title}
          </p>
          <div className="flex items-center gap-1">
            <div className="flex h-6 w-6 flex-col items-center justify-center">
              {count?.icon && <Icon name={count.icon} color="neutral" size="sm" />}
            </div>
            {count && <p className="text-left text-sm font-medium text-zinc-400">{count.value}</p>}
          </div>
        </div>
        <p className="text-left text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>
      </div>,
      actions
    );
  }

  if (type === "bullet") {
    return withLink(
      <div
        className="flex w-full flex-col gap-2 @xl:flex-row @xl:items-center @xl:gap-4"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {image && (
          <div
            className="flex h-10 w-10 flex-shrink-0 items-start gap-2 rounded-full border border-[#e9e9e9] bg-white p-[6px]"
            style={{ boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.05)" }}
          >
            <img src={image} alt={imageAlt} className="h-full w-full rounded-full object-cover object-center" />
          </div>
        )}
        <div className="flex flex-grow flex-col items-start gap-0.5">
          <div className="flex items-center gap-2 self-stretch">
            <p
              className={clsx(
                "flex-grow text-left text-base font-semibold text-zinc-900 dark:text-zinc-100",
                isHovering && actions?.open && "underline"
              )}
            >
              {title}
            </p>
          </div>
          <div className="flex items-center gap-3 self-stretch">
            <p className="flex-grow text-left text-[13px] text-zinc-600 dark:text-zinc-400">{subtitle}</p>
          </div>
        </div>
        {additional && <p className="text-left text-[13px] text-zinc-400">{additional}</p>}
      </div>,
      actions
    );
  }

  if (type === "cover") {
    return withLink(
      <div
        className="flex w-full items-center gap-3"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <p className="w-5 text-center text-sm font-semibold text-zinc-600 dark:text-zinc-400">{index}</p>
        <img src={image} alt={imageAlt} className="h-[46px] w-[46px] rounded-lg object-cover" />
        <div className="flex flex-grow flex-col items-start gap-0.5">
          <div className="flex items-center gap-2 self-stretch">
            <p
              className={clsx(
                "flex-grow text-left text-base font-semibold text-zinc-900 dark:text-zinc-100",
                isHovering && actions?.open && "underline"
              )}
            >
              {title}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-left text-[13px] text-zinc-600 dark:text-zinc-400">{subtitle}</p>
          </div>
        </div>
        {count && (
          <div className="flex items-center gap-2 pr-2">
            <p className="text-left text-sm font-medium text-zinc-400">{count.value}</p>
            {count.icon && <Icon name={count.icon} color="neutral" size="md" />}
          </div>
        )}
      </div>,
      actions
    );
  }

  return null;
};
