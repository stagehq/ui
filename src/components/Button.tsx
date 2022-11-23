import clsx from "clsx";
import { Icon, IconEnum } from "./Icon";

export interface ButtonProps {
  primary?: boolean;
  icon?: IconEnum;
  text: string;
  link: string;
}

export const Button = ({ primary, icon, text, link }: ButtonProps) => {
  return (
      <a
        href={link}
        className={clsx(
          "h-10 font-semibold text-base w-full rounded-lg flex gap-3 justify-center items-center", 
          primary ? "bg-zinc-800 text-zinc-100" : "bg-zinc-50 text-zinc-800")} 
      >
        {text}
        {icon && <Icon name={icon} onLightBg={primary ? false : true}/>}
      </a>
  );
};
