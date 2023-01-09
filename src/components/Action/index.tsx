import { Button, ButtonProps } from "./Button";
import { Link, LinkProps } from "./Link";
import { LinkWrapper, LinkWrapperProps } from "./LinkWrapper";

interface ActionProps {
  children: React.ReactElement<ButtonProps | LinkProps | LinkWrapperProps>[];
}

export const Action = ({ children }: ActionProps) => {
  return <>{children}</>;
};

Action.Button = Button;
Action.Link = Link;
Action.LinkWrapper = LinkWrapper;
