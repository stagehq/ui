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
    <div className="flex flex-col justify-start items-start gap-[54px] pt-6">
      <div className="flex justify-end items-start self-stretch gap-2">
        <div
          className="flex justify-start items-start relative gap-2 p-2 rounded-full bg-zinc-100/40 dark:bg-zinc-800/90 ring-1 ring-zinc-900/5 backdrop-blur dark:ring-white/10"
          onClick={toggleLightMode}
        >
          <Icon name={lightMode ? "SunIcon" : "MoonIcon"} color="dark" size="md" />
        </div>
      </div>
      <div className="flex flex-col justify-start items-start self-stretch gap-5 lg:w-1/2">
        <img src={image} className="w-16 h-16 rounded-full object-cover" />
        <h1 className="w-auto text-2xl md:text-4xl font-bold text-left text-zinc-800 dark:text-zinc-100">{title}</h1>
        <h2 className="w-auto text-sm text-left text-zinc-600 dark:text-zinc-400">{description}</h2>
      </div>
    </div>
  );
};
