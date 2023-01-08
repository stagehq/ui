import { Action } from ".";
import { ActionsProps } from "../Actions";

export const withLink = (children: React.ReactElement, actions?: ActionsProps) => {
  return actions?.open?.url ? <Action.LinkWrapper url={actions.open?.url}>{children}</Action.LinkWrapper> : children;
};
