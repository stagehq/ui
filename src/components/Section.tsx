import React, { FC } from 'react';

export interface SectionProps {
  title: string;
  icon: string;
  link: string;
  children: React.ReactNode;
}

export const Section: FC<SectionProps> = ({ title, icon, link, children }) => {
  return (
    <section>
      <div className="section-title">
        <h1>{title}</h1>
        <a href={link}>
          <i className={icon}></i>
        </a>
      </div>
      {children}
    </section>
  );
};