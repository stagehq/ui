import { Item, ItemProps } from "./Item";

export interface ListProps {
  children: React.ReactElement<ItemProps> | React.ReactElement<ItemProps>[];
}

const List = ({ children }: ListProps) => {
  return <div className="flex flex-col gap-6 w-full">{children}</div>;
};

List.Item = Item;

export default List;
