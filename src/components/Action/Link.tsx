export interface LinkProps {
  url: string;
}

export const Link = ({ url }: LinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      draggable="false"
      className="flex items-center w-10 h-10 justify-center rounded-3xl border text-black dark:text-zinc-100 border-zinc-300 dark:border-zinc-500 hover:border-zinc-400 dark:hover:border-zinc-400 bg-white dark:bg-zinc-900 hover:shadow shadow-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
      </svg>
    </a>
  );
};
