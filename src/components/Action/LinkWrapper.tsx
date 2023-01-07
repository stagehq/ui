import React from "react";

export interface LinkWrapperProps {
    url: string;
    children?: (React.ReactElement | React.ReactElement[])
  }
  
  export const LinkWrapper = ({ url, children }: LinkWrapperProps) => {
    return (
      <a href={url}>
        {children}
      </a>
    );
  };
  