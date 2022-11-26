import { IconEnum } from "../Icon";
import { Button as HocButton } from "../Button";
import { FC } from "react";

export interface ButtonProps {
  primary?: boolean;
  icon?: IconEnum;
  text: string;
  link: string;
}

export const Button: FC<ButtonProps> = ({ primary, icon, text, link }) => {
  return <HocButton {...{ primary, icon, text, link }} />;
};
