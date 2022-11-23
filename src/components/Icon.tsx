import clsx from 'clsx';
import * as Heroicons from '@heroicons/react/24/outline';
type Icons = keyof typeof Heroicons

export interface IconProps {
  name: Icons
  light: boolean
}

export const Icon = ({ name, light }: IconProps) => {
  const IconComponent = Heroicons[name];
  return <div className={clsx("w-6 h-6", light ? "text-zinc-600" : "text-zinc-300")}>
      <IconComponent />
    </div>;
};