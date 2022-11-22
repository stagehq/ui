import clsx from "clsx";
import * as Heroicons from '@heroicons/react/24/outline';
type Icons = keyof typeof Heroicons
export interface ButtonProps {
  primary?: boolean;
  icon?: Icons;
  text: string;
  link: string;
}

interface DynamicIconProp {
  name: Icons
}

const DynamicIcon = ({ name }: DynamicIconProp) => {
  const IconComponent = Heroicons[name];
  return <IconComponent />;
};

export const Button = ({ primary, icon, text, link }: ButtonProps) => {
  return (
      <a
        href={link}
        className={clsx(
          "h-10 font-semibold text-base w-full rounded-lg flex gap-3 justify-center items-center", 
          primary ? "bg-zinc-800 text-zinc-100" : "bg-zinc-50 text-zinc-800")} 
      >
        {text}
        {icon && <div className={clsx("w-6 h-6", primary ? "text-zinc-300" : "text-zinc-600")}>
          <DynamicIcon name={icon}/>
        </div>}
      </a>
  );
};