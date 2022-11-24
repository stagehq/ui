import React from "react";
import { PageFooter, PageFooterProps } from "./PageFooter";
import { PageHeader, PageHeaderProps } from "./PageHeader";
import { SectionProps } from "./Section";

export interface PageProps {
  header: PageHeaderProps;
  children: React.ReactElement<SectionProps>[];
  footer: PageFooterProps;
}

export const Page: React.FC<PageProps> = ({ header, children, footer }) => {
  return (
    <div className="bg-neutral-50">
      <div className="relative bg-white max-w-screen-xl mx-auto px-6 md:px-24">
        <PageHeader {...header} />
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 py-6 md:py-16">
          <main className="flex flex-col items-start gap-6 md:gap-16 md:w-2/3">{children}</main>
          <aside className="md:w-1/3">This is aside</aside>
        </div>
      </div>
      <PageFooter {...footer} />
    </div>
  );
};
