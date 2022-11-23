// Icon Story

import { Story, Meta } from "@storybook/react/types-6-0";
import { Icon, IconProps } from "../components/Icon";

export default {
  title: "PRIVATE/Icon",
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

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
