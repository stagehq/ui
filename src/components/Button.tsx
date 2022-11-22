import clsx from "clsx";
export interface ButtonProps {
  primary?: boolean;
  //needs to be changed to hero icon string type
  icon?: string;
  text: string;
  link: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, icon, text, link, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "h-10 font-semibold text-base w-full rounded-lg",
        primary ? "bg-zinc-800 text-zinc-100" : "bg-zinc-50 text-zinc-800"
      )}
    >
      {text}
    </button>
  );
};
