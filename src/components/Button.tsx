import clsx from "clsx";
import { Icon, IconEnum } from "./Icon";

export interface ButtonProps {
  text: string;
  link: string;
  icon?: IconEnum;
  primary?: boolean;
}

export const Button = ({ primary, icon, text, link }: ButtonProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener"
      className={clsx(
        "h-10 font-semibold text-base w-full rounded-lg flex gap-3 justify-center items-center",
        primary ? "bg-zinc-800 text-zinc-100" : "bg-zinc-50 text-zinc-800 dark:text-zinc-100"
      )}
    >
      {text}
      {icon && <Icon name={icon} color={primary ? "light" : "dark"} />}
    </a>
  );
};
