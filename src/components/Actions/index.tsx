import { LinkProps } from "../Action/Link";
import { ButtonProps } from "../Button";

export interface ActionsProps {
  children: React.ReactElement<ButtonProps | LinkProps> | React.ReactElement<ButtonProps | LinkProps>[];
}

const Actions = ({ children }: ActionsProps) => {
  return <>{children}</>;
};

export default Actions;
