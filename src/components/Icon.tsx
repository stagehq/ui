import clsx from 'clsx';
import * as Heroicons from '@heroicons/react/24/outline';
export type IconEnum = keyof typeof Heroicons

export interface IconProps {
  name: IconEnum
  onLightBg: boolean
}

export const Icon = ({ name, onLightBg }: IconProps) => {
  const IconComponent = Heroicons[name];
  return <div className={clsx("w-6 h-6", onLightBg ? "text-zinc-600" : "text-zinc-300")}>
      <IconComponent />
    </div>;
};