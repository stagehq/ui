import { FC } from "react";

export interface ListProps {
  list: {
    title: string;
    description: string;
    button: {
      text: string;
      link: string;
    };
    date: string;
  }[];
}

export const List: FC<ListProps> = ({ list }) => {
  return (
    <div className="list">
      {list.map((item) => (
        <div className="card" key={item.title}>
          <h1 className="text-xl font-semibold">{item.title}</h1>
          <p className="text-sm font-normal">{item.description}</p>
          <a href={item.button ? item.button.link : ""}>
            <button>{item.button ? item.button.text : ""}</button>
          </a>
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  );
};
