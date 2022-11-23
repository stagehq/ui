// Icon Story

import { Story, Meta } from "@storybook/react/types-6-0";
import { DynamicIcon, DynamicIconProps } from "../components/DynamicIcon";

export default {
  title: "PRIVATE/DynamicIcon",
  component: DynamicIcon,
} as Meta;

const Template: Story<DynamicIconProps> = (args) => <DynamicIcon {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
  name: "BanknotesIcon",
  light: true
};

export const Example2 = Template.bind({});
Example2.args = {
  name: "AdjustmentsVerticalIcon",
  light: true
};
