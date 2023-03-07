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
  image?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  enableDescription?: boolean;
  isEditable?: boolean;
  handleTitleChange?: (title: string) => void;
  handleDescriptionChange?: (description: string) => void;
  handleSizeChange?: (size: blockCols) => void;
  handleDelete?: () => void;
}

export const Block = ({
  children,
  actions,
  image,
  imageAlt,
  title,
  description,
  enableDescription,
  size,
  isEditable,
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

  //style variables
  const removeFokusState = "focus-visible:ring-0 focus-visible:border-none focus-visible:outline-none focus:ring-0 focus:border-none focus:outline-none cursor-default";
  const addFokusState = "focus-visible:ring-zinc-900 focus-visible:ring-1 focus-visible:ringfocus-visible:border-none focus-visible:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-none focus:outline-none cursor-default focus:bg-transparent focus:hover:bg-transparent dark:focus:ring-white !cursor-text";

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
    if (!descriptionRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      handleDynamicHeight(descriptionRef);
    });
    resizeObserver.observe(descriptionRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    handleDynamicHeight(descriptionRef);
  }, [descriptionRef, descriptionInternal]);

  const handleResize = () => {
    handleDynamicHeight(descriptionRef);
  };

  const id = "title " + Math.random().toString(36).substr(2, 9);

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
          "flex w-full flex-col gap-12 overflow-hidden rounded-2xl border border-zinc-300 bg-white shadow-sm @container dark:border-zinc-600 dark:bg-zinc-900",
          (image || title || actions) && "p-8"
        )}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {(image || title || actions) && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-grow items-center gap-4">
                {image && <img src={image} alt={imageAlt} className="h-10 w-10 rounded-md object-cover"></img>}
                <input
                  type="text"
                  name="title"
                  id={id}
                  className={clsx(
                    removeFokusState,
                    "block h-10 w-full rounded-md border-0 px-2  text-xl font-semibold text-zinc-800 placeholder-transparent hover:bg-transparent dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-transparent",
                    isEditable && addFokusState,
                    isEditable && 
                      "hover:bg-zinc-100 hover:placeholder-zinc-300 dark:hover:bg-zinc-800 dark:hover:placeholder-zinc-300"
                    
                  )}
                  placeholder="Enter title"
                  value={titleInternal}
                  onChange={(e) => setTitleInternal(e.target.value)}
                  onBlur={() => handleTitleChange && handleTitleChange(titleInternal)}
                  readOnly={!isEditable}
                />
              </div>
              {actions && (
                <div className="h-10 w-10">
                  {(actions?.link && <Action.Link {...actions.link} />) ||
                    (actions?.button && <Action.Button {...actions.button} />)}
                </div>
              )}
            </div>
            {enableDescription && (
              <div>
                <textarea
                  ref={descriptionRef}
                  name="description"
                  id="description"
                  className={clsx(
                    removeFokusState,
                    "font-regular block h-10 w-full resize-none rounded-md border-0 bg-white px-2 py-2 text-sm text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400",
                    isEditable && addFokusState,
                    isEditable &&
                      "hover:bg-zinc-100 placeholder-zinc-400 dark:hover:bg-zinc-800 dark:placeholder-zinc-300"  
                  )}
                  placeholder="Enter description ..."
                  value={descriptionInternal}
                  onChange={(e) => setDescriptionInternal(e.target.value)}
                  onBlur={() => handleDescriptionChange && handleDescriptionChange(descriptionInternal)}
                  readOnly={!isEditable}
                />
              </div>
            )}
          </div>
        )}
        {children && <div className={clsx("flex flex-col", (image || title || actions) && "gap-6")}>{children}</div>}
      </div>
    </BlockEditWrapper>
  );
};

const handleDynamicHeight = (myRef: React.RefObject<HTMLTextAreaElement>) => {
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
