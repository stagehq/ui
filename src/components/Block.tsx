import React, { KeyboardEvent, useState } from "react";
import { Action } from "./Action";
import { ActionsProps } from "./Actions";
import { blockCols, BlockEditWrapper } from "./BlockEditWrapper";
import { ButtonProps } from "./Button";
import { CardProps } from "./Card";
import { ListProps } from "./List";
import { PillsProps } from "./Pills";

export interface BlockProps {
  children:
    | React.ReactElement<ListProps | ButtonProps | PillsProps | CardProps>
    | React.ReactElement<ListProps | ButtonProps | PillsProps | CardProps>[];
  size: blockCols;
  actions?: ActionsProps;
  imagePath?: string;
  title?: string;
  isEditable?: boolean;
  handleTitleChange?: (title: string) => void;
  handleSizeChange?: (size: blockCols) => void;
  handleDelete?: () => void;
}

export const Block = ({
  children,
  actions,
  imagePath,
  title,
  size,
  isEditable,
  handleTitleChange,
  handleSizeChange,
  handleDelete,
}: BlockProps) => {
  const [titleInternal, setTitleInternal] = useState<string>(title ? title : "");
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <BlockEditWrapper
      isHovering={isHovering}
      setIsHovering={setIsHovering}
      size={size}
      handleSizeChange={handleSizeChange}
      handleDelete={handleDelete}
      isEditable={isEditable ? isEditable : false}
    >
      <div
        className="@container flex flex-col gap-12 border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 shadow-sm rounded-2xl p-8 w-full"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-grow">
              {imagePath && <img src={imagePath} className="w-10 h-10 object-cover rounded-md"></img>}
              <input
                type="text"
                name="title"
                id="title"
                className="block text-xl h-10 px-2 w-full rounded-md bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 font-semibold placeholder-transparent hover:placeholder-zinc-300 dark:hover:placeholder-zinc-300 focus:border-black focus:ring-black focus:bg-white dark:focus:bg-zinc-900  border-0"
                placeholder="Enter title"
                value={titleInternal}
                onChange={(e) => setTitleInternal(e.target.value)}
                onBlur={() => handleTitleChange && handleTitleChange(titleInternal)}
                disabled={!isEditable}
              />
            </div>
            <div className="w-10 h-10">
              {(actions?.link && <Action.Link {...actions.link} />) ||
                (actions?.button && <Action.Button {...actions.button} />)}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">{children}</div>
      </div>
    </BlockEditWrapper>
  );
};
