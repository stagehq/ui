import clsx from 'clsx';
import * as Heroicons from '@heroicons/react/24/outline';
type Icons = keyof typeof Heroicons

export interface DynamicIconProps {
  name: Icons
  light: boolean
}

export const DynamicIcon = ({ name, light }: DynamicIconProps) => {
  const IconComponent = Heroicons[name];
  return <div className={clsx("w-6 h-6", light ? "text-zinc-600" : "text-zinc-300")}>
      <IconComponent />
    </div>;
};