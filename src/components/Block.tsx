import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { Action } from "./Action";
import { ActionsProps } from "./Actions";
import { blockCols, BlockEditWrapper } from "./BlockEditWrapper";
import { ButtonProps } from "./Button";
import { CardProps } from "./Card";
import { ImageProps } from "./Image";
import { ListProps } from "./List";
import { PillsProps } from "./Pills";

export interface BlockProps {
  children?:
    | React.ReactElement<ListProps | ButtonProps | PillsProps | CardProps | ImageProps>
    | React.ReactElement<ListProps | ButtonProps | PillsProps | CardProps | ImageProps>[];
  size: blockCols;
  actions?: ActionsProps;
  imagePath?: string;
  title?: string;
  description?: string;
  isEditable?: boolean;
  isHighlighted?: boolean;
  handleTitleChange?: (title: string) => void;
  handleDescriptionChange?: (description: string) => void;
  handleSizeChange?: (size: blockCols) => void;
  handleDelete?: () => void;
}

export const Block = ({
  children,
  actions,
  imagePath,
  title,
  description,
  size,
  isEditable,
  isHighlighted,
  handleTitleChange,
  handleDescriptionChange,
  handleSizeChange,
  handleDelete,
}: BlockProps) => {
  const [titleInternal, setTitleInternal] = useState<string>(title ? title : "");
  const [descriptionInternal, setDescriptionInternal] = useState<string>(description ? description : "");
  const [isHovering, setIsHovering] = useState<boolean>(false);

  //refs
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  //controlled inputs
  useEffect(() => {
    setTitleInternal(title ? title : "");
  }, [title]);

  useEffect(() => {
    setDescriptionInternal(description ? description : "");
  }, [description]);

  //handle window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    handleDynamicHeight(descriptionRef);
  }, [descriptionRef, descriptionInternal]);

  const handleResize = () => {
    handleDynamicHeight(descriptionRef);
  };

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
        className={clsx(
          "@container flex flex-col gap-12 border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 shadow-sm rounded-2xl w-full overflow-hidden",
          isHighlighted && "border-blue-500 bg-blue-50 dark:border-blue-500/50 dark:bg-blue-900/30",
          (imagePath || title || actions) && "p-8"
        )}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {(imagePath || title || actions) && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-grow">
                {imagePath && <img src={imagePath} className="w-10 h-10 object-cover rounded-md"></img>}
                <input
                  type="text"
                  name="title"
                  id="title"
                  className={clsx(
                    "block text-xl h-10 px-2 w-full rounded-md dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 font-semibold placeholder-transparent bg-white border-0",
                    isEditable &&
                      "hover:placeholder-zinc-300 dark:hover:placeholder-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:bg-transparent dark:focus:bg-transparent focus:ring-black dark:focus:ring-white",
                    isHighlighted && "bg-transparent hover:bg-zinc-900/5 dark:bg-transparent dark:hover:bg-white/5",
                    !isEditable && "hover:bg-transparent dark:hover:bg-transparent"
                  )}
                  placeholder="Enter title"
                  value={titleInternal}
                  onChange={(e) => setTitleInternal(e.target.value)}
                  onBlur={() => handleTitleChange && handleTitleChange(titleInternal)}
                  disabled={!isEditable}
                />
              </div>
              {actions && <div className="w-10 h-10">
                {(actions?.link && <Action.Link {...actions.link} />) ||
                  (actions?.button && <Action.Button {...actions.button} />)}
              </div>}
            </div>
            {descriptionInternal && <div>
              <textarea
                ref={descriptionRef}
                name="description"
                id="description"
                className={clsx(
                  "block text-sm h-10 px-2 py-2 resize-none w-full rounded-md dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 font-regular placeholder-transparent bg-white border-0",
                  isEditable &&
                    "hover:placeholder-zinc-300 dark:hover:placeholder-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:bg-transparent dark:focus:bg-transparent focus:ring-black dark:focus:ring-white",
                  isHighlighted && "bg-transparent hover:bg-zinc-900/5 dark:bg-transparent dark:hover:bg-white/5",
                  !isEditable && "hover:bg-transparent dark:hover:bg-transparent"
                )}
                placeholder="Enter description"
                value={descriptionInternal}
                onChange={(e) => setDescriptionInternal(e.target.value)}
                onBlur={() => handleDescriptionChange && handleDescriptionChange(descriptionInternal)}
                disabled={!isEditable}
              />
            </div>}
          </div>
        )}
        {children && (
          <div className={clsx("flex flex-col", (imagePath || title || actions) && "gap-6")}>{children}</div>
        )}
      </div>
    </BlockEditWrapper>
  );
};

const handleDynamicHeight = (
  myRef: React.RefObject<HTMLTextAreaElement>
) => {
  if (myRef.current?.style) {
    myRef.current.style.height = 0 + "px";
    myRef.current.style.height = myRef.current.scrollHeight + "px";
  }
  setTimeout(() => {
    if (myRef.current?.style) {
      myRef.current.style.height = 0 + "px";
      myRef.current.style.height = myRef.current.scrollHeight + "px";
    }
  }, 100);
};