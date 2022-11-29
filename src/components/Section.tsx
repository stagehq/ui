import { ButtonProps } from "./Button";
import { CardsProps } from "./Cards";
import { HeaderProps } from "./Header";
import { ListProps } from "./List";
import { PillsProps } from "./Pills";

export interface SectionProps {
  children:
    | React.ReactElement<ListProps | ButtonProps | CardsProps | PillsProps | HeaderProps>
    | React.ReactElement<ListProps | ButtonProps | CardsProps | PillsProps | HeaderProps>[];
}

export const Section = ({ children }: SectionProps) => {
  return <section className="flex flex-col justify-start items-start gap-7 w-full">{children}</section>;
};
