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
    <div className="w-full @container dark:bg-black">
      <div className="relative mx-auto max-w-screen-xl border-zinc-300 bg-zinc-50 px-6 ring-1 ring-zinc-100 @3xl:px-24 dark:bg-zinc-900 dark:ring-zinc-300/20 lg:border-l lg:border-r">
        <PageHeader {...header} />
        <div className="flex flex-col gap-6 py-12 @3xl:gap-8 @3xl:py-16 @6xl:flex-row">
          <main className="flex flex-col items-start gap-12 @3xl:gap-8 @6xl:w-2/3">{main}</main>
          <aside className="flex flex-col items-start gap-12 @3xl:gap-8 @6xl:w-1/3">{aside}</aside>
        </div>
      </div>
      <PageFooter {...footer} />
    </div>
  );
};
