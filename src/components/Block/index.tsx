import React, { FC, ReactElement, ReactNode } from "react";

export interface BlockProps {
  children: ReactNode | ReactElement;
}

const Block:FC<BlockProps> = ({children}) => {
  return <div className="@container border border-slate-300 shadow-sm rounded-2xl p-8">
    {children}
  </div>
}

export default Block;