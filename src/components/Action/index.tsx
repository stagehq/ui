import { Button, ButtonProps } from "./Button";
import { Link, LinkProps } from "./Link";

interface ActionProps {
  children: React.ReactElement<ButtonProps | LinkProps>[];
}

export const Action = ({ children }: ActionProps) => {
  return <>{children}</>;
};

Action.Button = Button;
Action.Link = Link;
