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
  handleDelete
}) => {
  const handleResize = (instruction: blockCols) => {
    if (size != instruction) {
      if (handleSizeChange != null) {
        handleSizeChange(instruction);
      }
    }
  };

  return (
    <div
      className={clsx(
        "relative outline-2 outline-zinc-800 rounded-2xl cursor-grab w-full",
        isEditable && "hover:outline"
      )}
    >
      {children}
      {isHovering && isEditable && (
        <div
          className="absolute w-full flex justify-center h-11 -mt-5 gap-1"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="flex gap-1 items-center px-2 bg-zinc-800 rounded-lg">
            <div
              onClick={() => handleResize(3)}
              className={clsx(
                "flex items-center justify-center w-10 h-8 hover:bg-zinc-700 rounded-md cursor-pointer",
                size === 3 ? "bg-zinc-600" : "bg-transparent"
              )}
            >
              <div className="border-2 border-white w-5 h-2 rounded-sm"></div>
            </div>
            <div
              onClick={() => handleResize(2)}
              className={clsx(
                "flex items-center justify-center w-10 h-8 hover:bg-zinc-700 rounded-md cursor-pointer",
                size === 2 ? "bg-zinc-600" : "bg-transparent"
              )}
            >
              <div className="border-2 border-white w-4 h-4 rounded-sm"></div>
            </div>
            <div
              onClick={() => handleResize(1)}
              className={clsx(
                "flex items-center justify-center w-10 h-8 hover:bg-zinc-700 rounded-md cursor-pointer",
                size === 1 ? "bg-zinc-600" : "bg-transparent"
              )}
            >
              <div className="border-2 border-white w-2 h-5 rounded-sm"></div>
            </div>
          </div>
          <div className="flex items-center justify-center h-11 w-11 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg shadow-lg cursor-pointer" onClick={handleDelete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-6 h-6"
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
