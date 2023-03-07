import clsx from "clsx";
import { useState } from "react";
import { Action } from "./Action";
import { withLink } from "./Action/helper";
import { ActionsProps } from "./Actions";
import { Icon, IconEnum } from "./Icon";

export type CardType = "vertical" | "horizontal" | "small" | "big";
export interface CardProps {
  type: CardType;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  icon?: IconEnum;
  actions?: ActionsProps;
}

export const Card = ({ title, subtitle, image, imageAlt, icon, type, actions }: CardProps) => {

  const [isHovering, setIsHovering] = useState(false);

  if (type === "vertical") {
    return withLink(
      <div
        className="flex flex-col items-start w-full relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-500/40"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {image && (
          <div className="w-full h-40 relative">
            <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
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
              <p
                className={clsx(
                  "grow text-base font-semibold text-left text-zinc-900 dark:text-zinc-100",
                  isHovering && actions?.open && "underline"
                )}
              >
                {title}
              </p>
            </div>
            <p className="w-full text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>
          </div>
          {(actions?.link && <Action.Link {...actions.link} />) ||
            (actions?.button && <Action.Button {...actions.button} />)}
        </div>
      </div>,
      actions
    );
  }

  if (type === "horizontal") {
    return withLink(
      <div
        className="flex items-center overflow-hidden gap-6 pr-6 rounded-2xl border border-zinc-200 dark:border-zinc-500/40"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {image && (
          <div className="w-24 h-24 relative">
            <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex flex-col items-start gap-6 py-6 w-full">
          <div className="flex items-center gap-6 w-full">
            <div className="flex flex-col items-start gap-0.5 flex-grow">
              <div className="flex items-start self-stretch gap-3">
                <div className="flex items-center gap-2">
                  <p
                    className={clsx(
                      "text-base font-semibold text-left text-zinc-900 dark:text-zinc-100",
                      isHovering && actions?.open && "underline"
                    )}
                  >
                    {title}
                  </p>
                </div>
              </div>
              <p className="self-stretch text-[13px] text-left text-zinc-600 dark:text-zinc-400">{subtitle}</p>
            </div>
            {icon && (
              <div className="flex-none">
                <Icon name={icon} color="dark" />
              </div>
            )}
          </div>
          {(actions?.link && <Action.Link {...actions.link} />) ||
            (actions?.button && <Action.Button {...actions.button} />)}
        </div>
      </div>,
      actions
    );
  }

  if (type === "small") {
    return withLink(
      <div
        className="flex items-center overflow-hidden gap-6 px-6 rounded-2xl border border-zinc-200 dark:border-zinc-500/40"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="flex flex-col items-start flex-grow gap-6 py-6">
          <div className="flex items-center self-stretch gap-6">
            <img src={image} alt={imageAlt} className="w-[46px] h-[46px] rounded-lg object-cover" />
            <div className="flex flex-col items-start flex-grow gap-0.5">
              <div className="flex items-start self-stretch gap-3">
                <div className="flex items-center flex-grow gap-2">
                  <p
                    className={clsx(
                      "flex-grow text-base font-semibold text-left text-zinc-900 dark:text-zinc-100",
                      isHovering && actions?.open && "underline"
                    )}
                  >
                    {title}
                  </p>
                </div>
              </div>
              <p className="self-stretch text-[13px] text-left text-zinc-600 dark:text-zinc-400">{subtitle}</p>
            </div>
            {icon && (
              <div className="flex-none">
                <Icon name={icon} color="dark" />
              </div>
            )}
          </div>
          {(actions?.link && <Action.Link {...actions.link} />) ||
            (actions?.button && <Action.Button {...actions.button} />)}
        </div>
      </div>,
      actions
    );
  }

  if (type === "big") {
    return withLink(
      <div
        className="flex flex-col items-start h-[400px] overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-500/40 relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img src={image} alt={imageAlt} className="absolute w-full h-full top-0 bottom-0 left-0 right-0 object-cover" />
        <div
          className="flex flex-col justify-end items-start self-stretch flex-grow gap-6 p-6 z-10"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 30.9%, rgba(0,0,0,0.6) 81.94%)" }}
        >
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-start gap-3">
              <div className="flex items-center w-[304px] gap-2">
                {icon && <Icon name={icon} color="light" />}
                <p
                  className={clsx(
                    "flex-grow w-[272px] text-base font-semibold text-left text-white",
                    isHovering && actions?.open && "underline"
                  )}
                >
                  {title}
                </p>
              </div>
            </div>
            <p className="w-[304px] text-sm text-left text-[#e0e0e5]">{subtitle}</p>
          </div>
          {(actions?.link && <Action.Link {...actions.link} />) ||
            (actions?.button && <Action.Button {...actions.button} />)}
        </div>
      </div>,
      actions
    );
  }

  return null;
};
