import { Story, Meta } from "@storybook/react/types-6-0";

import { Pill, PillProps } from "../components/Pill";

export default {
  title: "Private/Pill",
  component: Pill,
} as Meta;

const Template: Story<PillProps> = (args) => <Pill {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: "text.js",
};