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
        className="relative flex w-full flex-col items-start overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-500/40"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {image && (
          <div className="relative h-40 w-full">
            <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
          </div>
        )}
        <div className="flex flex-col items-start gap-6 self-stretch p-6">
          <div className="relative flex flex-col items-start gap-3">
            <div className="flex w-full gap-2">
              {icon && (
                <div className="flex-none">
                  <Icon name={icon} color="dark" />
                </div>
              )}
              <p
                className={clsx(
                  "grow text-left text-base font-semibold text-zinc-900 dark:text-zinc-100",
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
        className="flex items-center gap-6 overflow-hidden rounded-2xl border border-zinc-200 pr-6 dark:border-zinc-500/40"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {image && (
          <div className="relative h-24 w-24">
            <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
          </div>
        )}
        <div className="flex w-full flex-col items-start gap-6 py-6">
          <div className="flex w-full items-center gap-6">
            <div className="flex flex-grow flex-col items-start gap-0.5">
              <div className="flex items-start gap-3 self-stretch">
                <div className="flex items-center gap-2">
                  <p
                    className={clsx(
                      "text-left text-base font-semibold text-zinc-900 dark:text-zinc-100",
                      isHovering && actions?.open && "underline"
                    )}
                  >
                    {title}
                  </p>
                </div>
              </div>
              <p className="self-stretch text-left text-[13px] text-zinc-600 dark:text-zinc-400">{subtitle}</p>
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
        className="flex items-center gap-6 overflow-hidden rounded-2xl border border-zinc-200 px-6 dark:border-zinc-500/40"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="flex flex-grow flex-col items-start gap-6 py-6">
          <div className="flex items-center gap-6 self-stretch">
            <img src={image} alt={imageAlt} className="h-[46px] w-[46px] rounded-lg object-cover" />
            <div className="flex flex-grow flex-col items-start gap-0.5">
              <div className="flex items-start gap-3 self-stretch">
                <div className="flex flex-grow items-center gap-2">
                  <p
                    className={clsx(
                      "flex-grow text-left text-base font-semibold text-zinc-900 dark:text-zinc-100",
                      isHovering && actions?.open && "underline"
                    )}
                  >
                    {title}
                  </p>
                </div>
              </div>
              <p className="self-stretch text-left text-[13px] text-zinc-600 dark:text-zinc-400">{subtitle}</p>
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
        className="relative flex h-[400px] flex-col items-start overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-500/40"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img src={image} alt={imageAlt} className="absolute top-0 bottom-0 left-0 right-0 h-full w-full object-cover" />
        <div
          className="z-10 flex flex-grow flex-col items-start justify-end gap-6 self-stretch p-6"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 30.9%, rgba(0,0,0,0.6) 81.94%)" }}
        >
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-start gap-3">
              <div className="flex w-[304px] items-center gap-2">
                {icon && <Icon name={icon} color="light" />}
                <p
                  className={clsx(
                    "w-[272px] flex-grow text-left text-base font-semibold text-white",
                    isHovering && actions?.open && "underline"
                  )}
                >
                  {title}
                </p>
              </div>
            </div>
            <p className="w-[304px] text-left text-sm text-[#e0e0e5]">{subtitle}</p>
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
