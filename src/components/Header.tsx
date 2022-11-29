import { ActionsProps } from "./Actions";
import { Icon, IconEnum } from "./Icon";

export interface HeaderProps {
  title: string;
  subtitle?: string;
  icon?: IconEnum;
  actions?: React.ReactElement<ActionsProps>;
}

export const Header = ({ title, subtitle, icon, actions }: HeaderProps) => {
  return (
    <div className="flex flex-col items-start gap-3 w-full">
      <div className="flex items-center self-stretch gap-4">
        {icon && (
          <div className="flex items-start gap-2 p-2 rounded-lg bg-zinc-100/40 dark:bg-zinc-800/90 ring-1 ring-zinc-900/5 backdrop-blur dark:ring-white/10">
            <Icon name={icon} color="dark" size="md" />
          </div>
        )}
        <p className="flex-grow text-lg font-semibold text-left text-zinc-600 dark:text-zinc-100">{title}</p>
        {actions && actions}
      </div>
      {subtitle && <p className="self-stretch text-sm text-left text-zinc-600 dark:text-zinc-400">{subtitle}</p>}
    </div>
  );
};
