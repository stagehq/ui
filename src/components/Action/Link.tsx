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
      className="flex h-10 w-10 items-center justify-center rounded-3xl border border-zinc-300 bg-white text-black shadow-sm hover:border-zinc-400 hover:shadow dark:border-zinc-500 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-400"
      aria-label="Link with more information"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
      </svg>
    </a>
  );
};
