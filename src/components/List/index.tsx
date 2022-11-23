import { Item, ItemProps } from "./Item";

interface ListProps {
  children: React.ReactElement<ItemProps>[];
}

const List = ({ children }: ListProps) => {
  return <>{children}</>;
};

List.Item = Item;

export default List;
