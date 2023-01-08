import React, { KeyboardEvent, useState } from "react";
import { Action } from "./Action";
import { ActionsProps } from "./Actions";
import { BlockEditWrapper } from "./BlockEditWrapper";
import { CardProps } from "./Card";
import { ListProps } from "./List";
import { PillsProps } from "./Pills";

export interface BlockProps {
  children:
    | React.ReactElement<ListProps | PillsProps | CardProps>
    | React.ReactElement<ListProps | PillsProps | CardProps>[];
  actions?: ActionsProps;
  imagePath?: string;
  title?: string;
  subtitle?: string;
  size: number;
  isEditable: boolean;
  handleTitleChange?: (title: string) => void;
  handleSizeChange?: (size: number) => void;
}

export const Block = ({
  children,
  actions,
  imagePath,
  title,
  subtitle,
  size,
  isEditable,
  handleTitleChange,
  handleSizeChange,
}: BlockProps) => {
  const [titleState, setTitleState] = useState<string | undefined>(title);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.code === "Enter") {
      (e.target as HTMLInputElement).blur();
    }
  };

  const handleSubmit = () => {
    if (titleState != null && handleTitleChange != null) {
      handleTitleChange(titleState);
    }
  };

  return (
    <BlockEditWrapper
      isHovering={isHovering}
      setIsHovering={setIsHovering}
      size={size}
      handleSizeChange={handleSizeChange}
      isEditable={isEditable}
    >
      <div
        className="@container flex flex-col gap-12 border border-zinc-200 bg-white shadow-sm rounded-2xl p-8 w-full"
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
                className="block text-xl h-10 px-2 w-full rounded-md text-zinc-800 font-semibold focus:bg-zink-100 placeholder-transparent hover:placeholder-zinc-300 focus:border-black focus:ring-black focus:bg-white border-0"
                placeholder="Enter title"
                value={titleState}
                onChange={(e) => setTitleState(e.target.value)}
                onKeyDown={(e) => handleKeyPress(e)}
                onBlur={() => handleSubmit()}
              />
            </div>
            <div className="w-10 h-10">
              {(actions?.link && <Action.Link {...actions.link} />) ||
                (actions?.button && <Action.Button {...actions.button} />)}
            </div>
          </div>
          {subtitle && <p className="self-stretch text-sm text-left text-zinc-600 dark:text-zinc-400">{subtitle}</p>}
        </div>
        <div className="flex flex-col gap-6">{children}</div>
      </div>
    </BlockEditWrapper>
  );
};
