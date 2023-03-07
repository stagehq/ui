import { Icon } from "./Icon";

export interface PageHeaderProps {
  title: string;
  description: string;
  image: string;
  lightMode: boolean;
  toggleLightMode: () => void;
}

export const PageHeader = ({ title, description, image, lightMode, toggleLightMode }: PageHeaderProps) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[54px] pt-6">
      <div className="flex items-start justify-end gap-2 self-stretch">
        <div
          className="relative flex items-start justify-start gap-2 rounded-full bg-zinc-100/40 p-2 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
          onClick={toggleLightMode}
        >
          <Icon name={lightMode ? "SunIcon" : "MoonIcon"} color="dark" size="md" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-5 self-stretch @3xl:w-3/4 @6xl:w-1/2">
        <img src={image} alt={"Profile picture"} className="h-16 w-16 rounded-full object-cover" />
        <h1 className="w-auto text-left text-2xl font-bold text-zinc-800 @3xl:text-4xl dark:text-zinc-100">{title}</h1>
        <h2 className="w-auto text-left text-sm text-zinc-600 dark:text-zinc-400">{description}</h2>
      </div>
    </div>
  );
};
