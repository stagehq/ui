import { FC } from 'react';

export interface CardProps {
  title: string;
  description: string;
  image: string;
  button: {
    text: string;
    link: string;
  };
}

export const Card: FC<CardProps> = ({ title, description, image, button }) => {
  return (
    <div className="card">
      <img src={image} alt="card" />
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={button.link}>
        <button>{button.text}</button>
      </a>
    </div>
  );
};