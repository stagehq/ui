import { PageFooter, PageFooterProps } from "./PageFooter";
import { PageHeader, PageHeaderProps } from "./PageHeader";
import { SectionProps } from "./Section";

export interface PageProps {
  header: PageHeaderProps;
  main: React.ReactElement<SectionProps>[];
  aside: React.ReactElement<SectionProps>[];
  footer: PageFooterProps;
}

export const Page = ({ header, main, aside, footer }: PageProps) => {
  return (
    <div className="bg-zinc-50 dark:bg-black">
      <div className="relative bg-white max-w-screen-xl mx-auto px-6 md:px-24 ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
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
