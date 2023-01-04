import React, { FC, KeyboardEvent, ReactElement, ReactNode, useState } from "react";
import { ActionsProps } from "../Actions";

export interface BlockProps {
  children: ReactNode | ReactElement;
  actions?: React.ReactElement<ActionsProps>;
  title?: string
}

const Block:FC<BlockProps> = ({children, actions, title}) => {

  const [titleState, setTitleState] = useState<string | undefined>(title);

  const handleKeyPress = (e: KeyboardEvent) => {
    if(e.code === "Enter"){
      (e.target as HTMLInputElement).blur();
    }
  }

  const handleSubmit = () => {
    console.log(titleState);
  }

  return <div className="@container flex flex-col gap-12 border border-zinc-300 shadow-sm rounded-2xl p-8">
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4 flex-grow">
        <img src="https://avatars.githubusercontent.com/u/65030610?s=200&v=4" className="w-10 h-10 object-cover rounded-md"></img>
        <input
          type="text"
          name="title"
          id="title"
          className="block text-xl h-10 px-2 w-full rounded-md text-zinc-800 font-semibold focus:bg-zink-100 hover:bg-zinc-100 focus:border-zinc-800 focus:ring-zinc-800 focus:bg-white border-0"
          placeholder="Enter title"
          value={titleState}
          onChange={(e) => setTitleState(e.target.value)}
          onKeyDown={(e) => handleKeyPress(e)}
          onBlur={() => handleSubmit()}
        />
      </div>
      {actions && actions}
    </div>
    {children}
  </div>
}

export default Block;