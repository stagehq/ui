import { FC } from 'react';

interface ListProps {
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
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <a href={item.button ? item.button.link : ''}>
            <button>{item.button ? item.button.text : ''}</button>
          </a>
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  );
};