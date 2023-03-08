import clsx from "clsx";
import { FC } from "react";
import { BlockProps } from "./Block";

export type blockCols = 1 | 2 | 3;
interface BlockEditWrapperProps {
  children: React.ReactElement<BlockProps>;
  isHovering: boolean;
  size: blockCols;
  isEditable: boolean;
  setIsHovering: (value: boolean) => void;
  handleSizeChange?: (size: blockCols) => void;
  handleDelete?: () => void;
}

export const BlockEditWrapper: FC<BlockEditWrapperProps> = ({
  children,
  isHovering,
  size,
  isEditable,
  setIsHovering,
  handleSizeChange,
  handleDelete,
}) => {
  const handleResize = (instruction: blockCols) => {
    if (size != instruction) {
      if (handleSizeChange != null) {
        handleSizeChange(instruction);
      }
    }
  };

  return (
    <div className={clsx("relative w-full rounded-2xl ring-zinc-800", isEditable && "cursor-grab hover:ring-2")}>
      {children}
      {isHovering && isEditable && (
        <div
          className="absolute -mt-5 flex h-11 w-full justify-center gap-1"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="flex items-center gap-1 rounded-lg bg-zinc-800 px-2">
            <div
              onClick={() => handleResize(3)}
              className={clsx(
                "flex h-8 w-10 cursor-pointer items-center justify-center rounded-md hover:bg-zinc-700",
                size === 3 ? "bg-zinc-600" : "bg-transparent"
              )}
            >
              <div className="h-2 w-5 rounded-sm border-2 border-white"></div>
            </div>
            <div
              onClick={() => handleResize(2)}
              className={clsx(
                "flex h-8 w-10 cursor-pointer items-center justify-center rounded-md hover:bg-zinc-700",
                size === 2 ? "bg-zinc-600" : "bg-transparent"
              )}
            >
              <div className="h-4 w-4 rounded-sm border-2 border-white"></div>
            </div>
            <div
              onClick={() => handleResize(1)}
              className={clsx(
                "flex h-8 w-10 cursor-pointer items-center justify-center rounded-md hover:bg-zinc-700",
                size === 1 ? "bg-zinc-600" : "bg-transparent"
              )}
            >
              <div className="h-5 w-2 rounded-sm border-2 border-white"></div>
            </div>
          </div>
          <div
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg bg-zinc-800 text-white shadow-lg hover:bg-zinc-700"
            onClick={handleDelete}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-6 w-6"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              ></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
