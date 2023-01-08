import { ButtonProps } from "../Action/Button";
import { LinkProps } from "../Action/Link";
import { OpenProps } from "../Action/LinkWrapper";

export interface ActionsProps {
  button?: ButtonProps;
  link?: LinkProps;
  open?: OpenProps;
}
