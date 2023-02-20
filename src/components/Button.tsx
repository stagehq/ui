import clsx from "clsx";
import { Icon, IconEnum } from "./Icon";

export interface ButtonProps {
  text: string;
  url: string;
  icon?: IconEnum;
  primary?: boolean;
}

export const Button = ({ primary, icon, text, url }: ButtonProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      draggable="false"
      className={clsx(
        "h-10 font-semibold text-base w-full rounded-lg flex gap-3 justify-center items-center",
        primary
          ? "bg-zinc-800 text-zinc-50 dark:bg-zinc-700"
          : "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300"
      )}
    >
      {text}
      {icon && <Icon name={icon} color={primary ? "light" : "dark"} />}
    </a>
  );
};
