import React, { FC } from "react";
import { ButtonProps } from "./Button";
import { CardProps } from "./Card";
import { HeaderProps } from "./Header";
import { ListProps } from "./List";
import { PillsProps } from "./Pills";

export interface SectionProps {
  children: React.ReactElement<ListProps | ButtonProps | CardProps | PillsProps | HeaderProps>[];
}

export const Section: FC<SectionProps> = ({ children }) => {
  return <section className="flex flex-col justify-start items-start gap-7 w-full">{children}</section>;
};
