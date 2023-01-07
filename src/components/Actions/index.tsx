import { NonEmptyArr } from "../../types/utils";
import { LinkProps } from "../Action/Link";
import { ButtonProps } from "../Button";

type ActionsElement = React.ReactElement<LinkProps | ButtonProps>;
type ActionsChildren = NonEmptyArr<ActionsElement>;

export interface ActionsProps {
  children: ActionsElement | ActionsChildren;
}

export const Actions = ({ children }: ActionsProps) => {
  return <>{children}</>;
};
