import { BlockProps } from "./Block";
import { PageFooter, PageFooterProps } from "./PageFooter";
import { PageHeader, PageHeaderProps } from "./PageHeader";

export interface PageProps {
  header: PageHeaderProps;
  main: React.ReactElement<BlockProps>[];
  aside: React.ReactElement<BlockProps>[];
  footer: PageFooterProps;
}

export const Page = ({ header, main, aside, footer }: PageProps) => {
  return (
    <div className="@container bg-zinc-50 dark:bg-black">
      <div className="relative bg-white max-w-screen-xl mx-auto px-6 @3xl:px-24 ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
        <PageHeader {...header} />
        <div className="flex flex-col @6xl:flex-row gap-6 @3xl:gap-16 py-12 @3xl:py-16">
          <main className="flex flex-col items-start gap-12 @3xl:gap-16 @6xl:w-2/3">{main}</main>
          <aside className="flex flex-col items-start gap-12 @3xl:gap-16 @6xl:w-1/3">{aside}</aside>
        </div>
      </div>
      <PageFooter {...footer} />
    </div>
  );
};
