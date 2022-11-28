import { ListItem, ListItemProps } from "./Item";

export interface ListProps {
  children: React.ReactElement<ListItemProps> | React.ReactElement<ListItemProps>[];
}

const List = ({ children }: ListProps) => {
  return <div className="flex flex-col gap-6 w-full">{children}</div>;
};

List.Item = ListItem;

export default List;
