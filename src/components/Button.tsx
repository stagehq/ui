export interface ButtonProps {
  primary?: boolean;
  //needs to be changed to hero icon string type
  icon?: string;
  text: string;
  link: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = true,
  icon = "test",
  text = "Button Text",
  link = "https://getstage.app",
  ...props
}: ButtonProps) => {
  return (
    <button type="button" {...props}>
      {text}
    </button>
  );
};
