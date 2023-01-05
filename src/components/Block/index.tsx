import React, { KeyboardEvent, useState } from "react";
import { ActionsProps } from "../Actions";
import { Card, CardProps } from "../Card";
import { List, ListProps } from "../List";
import { Pills, PillsProps } from "../Pills";
import { Seperator } from "../Seperator";

export interface BlockProps {
  children: React.ReactElement<ListProps | PillsProps | CardProps> | React.ReactElement<ListProps | PillsProps | CardProps>[];
  actions?: React.ReactElement<ActionsProps>;
  title?: string
  subtitle?: string
  handleTitleChange?: (title: string) => void
}

export const Block = ({children, actions, title, subtitle, handleTitleChange}: BlockProps) => {

  const [titleState, setTitleState] = useState<string | undefined>(title);

  const handleKeyPress = (e: KeyboardEvent) => {
    if(e.code === "Enter"){
      (e.target as HTMLInputElement).blur();
    }
  }

  const handleSubmit = () => {
    if(titleState != null && handleTitleChange != null){
      handleTitleChange(titleState);
    }  
  }

  return <div className="@container flex flex-col gap-12 border border-zinc-300 shadow-sm rounded-2xl p-8 w-full">
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-grow">
          <img src="https://avatars.githubusercontent.com/u/65030610?s=200&v=4" className="w-10 h-10 object-cover rounded-md"></img>
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
         {actions && actions}
        </div>
      </div>
      {subtitle && <p className="self-stretch text-sm text-left text-zinc-600 dark:text-zinc-400">{subtitle}</p>}
    </div>
    <div className="flex flex-col gap-6">
      {children}    
    </div>   
  </div>
}

Block.List = List;
Block.Pills = Pills;
Block.Card = Card;
Block.Seperator = Seperator;