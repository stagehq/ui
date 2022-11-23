import { IconEnum } from "../Icon";
import { Button as HocButton } from "../Button";

export interface ButtonProps {
  primary?: boolean;
  icon?: IconEnum;
  text: string;
  link: string;
}

export const Button = ({ primary, icon, text, link }: ButtonProps) => {
  return <HocButton {...{ primary, icon, text, link }}/>
};
