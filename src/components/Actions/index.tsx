import { ButtonProps } from "../Action/Button";
import { LinkProps } from "../Action/Link";

export interface OpenProps {
  url: string;
}
export interface ActionsProps {
  button?: ButtonProps;
  link?: LinkProps;
  open?: OpenProps;
}
