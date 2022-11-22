// Button Story

import { Story, Meta } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from "../components/Button";

export default {
  title: "UI/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  text: "Secondary Button",
};
