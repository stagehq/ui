import { FC } from "react";
import { LinkProps } from "./Action/Link";
import { Icon, IconEnum } from "./Icon";

export interface HeaderProps {
  title: string;
  subtitle?: string;
  icon?: IconEnum;
  action?: React.ReactElement<LinkProps>;
}

export const Header: FC<HeaderProps> = ({ title, subtitle, icon, action }) => {
  return (
    <div className="flex flex-col items-start gap-3 w-full">
      <div className="flex items-center self-stretch gap-4">
        {icon && (
          <div
            className="flex items-start gap-2 p-2 rounded-lg bg-white border border-[#e9e9e9]"
            style={{ boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.05)" }}
          >
            <Icon name={icon} color="dark" size="md" />
          </div>
        )}
        <p className="flex-grow text-lg font-semibold text-left text-zinc-600">{title}</p>
        {action && action}
      </div>
      {subtitle && <p className="self-stretch text-sm text-left text-zinc-600">{subtitle}</p>}
    </div>
  );
};
