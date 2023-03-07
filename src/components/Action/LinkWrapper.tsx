import React from "react";

export interface LinkWrapperProps {
  url: string;
  children?: React.ReactElement | React.ReactElement[];
}

export interface OpenProps {
  url: string;
}

export const LinkWrapper = ({ url, children }: LinkWrapperProps) => {
  return (
    <a href={url} target="_blank" rel="noopener" draggable="false" aria-label="Link with more information">
      {children}
    </a>
  );
};
