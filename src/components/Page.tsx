import React from "react";
import { PageFooter, PageFooterProps } from "./PageFooter";
import { PageHeader, PageHeaderProps } from "./PageHeader";
import { SectionProps } from "./Section";

export interface PageProps {
  header: PageHeaderProps;
  main: React.ReactElement<SectionProps>[];
  aside: React.ReactElement<SectionProps>[];
  footer: PageFooterProps;
}

export const Page: React.FC<PageProps> = ({ header, main, aside, footer }) => {
  return (
    <div className="bg-neutral-50">
      <div className="relative bg-white max-w-screen-xl mx-auto px-6 md:px-24">
        <PageHeader {...header} />
        <div className="flex flex-col lg:flex-row gap-6 md:gap-16 py-12 md:py-16">
          <main className="flex flex-col items-start gap-12 md:gap-16 lg:w-2/3">{main}</main>
          <aside className="flex flex-col items-start gap-12 md:gap-16 lg:w-1/3">{aside}</aside>
        </div>
      </div>
      <PageFooter {...footer} />
    </div>
  );
};
