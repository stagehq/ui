import { NonEmptyArr } from "../types/utils";
import { ButtonProps } from "./Button";
import { CardsProps } from "./Cards";
import { HeaderProps } from "./Header";
import { ListProps } from "./List";
import { PillsProps } from "./Pills";

type SectionElement = React.ReactElement<ListProps | ButtonProps | CardsProps | PillsProps | HeaderProps>;
type SectionChildren = NonEmptyArr<SectionElement>;

export interface SectionProps {
  children: SectionElement | SectionChildren;
}

export const Section = ({ children }: SectionProps) => {
  return <section className="flex flex-col justify-start items-start gap-7 w-full">{children}</section>;
};
