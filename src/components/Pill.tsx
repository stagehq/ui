export interface PillProps {
  name: string;
}

export const Pill = ({ name }: PillProps) => {
  return (
    <div className="relative inline-flex h-8 items-center justify-center rounded-[20px] bg-zinc-100 px-4 py-2 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
      <p className="text-left text-sm font-semibold text-black dark:text-zinc-400">{name}</p>
    </div>
  );
};
