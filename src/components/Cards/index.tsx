import { Item, ItemProps } from "./Item";

export interface CardsProps {
  children: React.ReactElement<ItemProps> | React.ReactElement<ItemProps>[];
}

const Cards = ({ children }: CardsProps) => {
  return <div className="flex flex-col gap-6 w-full">{children}</div>;
};

Cards.Item = Item;

export default Cards;
