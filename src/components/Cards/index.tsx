import { CardsItem, CardsItemProps } from "./Item";

export interface CardsProps {
  children: React.ReactElement<CardsItemProps> | React.ReactElement<CardsItemProps>[];
}

const Cards = ({ children }: CardsProps) => {
  return <div className="flex flex-col gap-6 w-full">{children}</div>;
};

Cards.Item = CardsItem;

export default Cards;
