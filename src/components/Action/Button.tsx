import { IconEnum } from "../Icon";
import { Button as HocButton } from "../Button";

export interface ButtonProps {
  primary?: boolean;
  icon?: IconEnum;
  text: string;
  url: string;
}

export const Button = ({ primary, icon, text, url }: ButtonProps) => {
  return <HocButton {...{ primary, icon, text, url }} />;
};
