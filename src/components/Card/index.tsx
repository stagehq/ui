import { CardItem, CardItemProps } from "./Item";

export interface CardProps {
  children: React.ReactElement<CardItemProps> | React.ReactElement<CardItemProps>[];
}

export const Card = ({ children }: CardProps) => {
  return <div className="flex flex-col gap-6 w-full">{children}</div>;
};

Card.Item = CardItem;
