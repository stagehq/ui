import { Button, ButtonProps } from "./Button";

interface ActionProps {
  children: React.ReactElement<ButtonProps>[];
}

const Action = ({ children }: ActionProps) => {
  return <>{children}</>;
};

Action.Button = Button;

export default Action;
