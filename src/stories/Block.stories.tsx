// Block Story

import { Story, Meta } from "@storybook/react/types-6-0";
import Block, { BlockProps } from "../components/Block";

export default {
  title: "UI/Block",
  component: Block,
} as Meta;

const Template: Story<BlockProps> = (args) => <Block {...args}>{<div>Title</div>}</Block>;

export const Default = Template.bind({});
// Default.args = {
//   primary: true,
//   text: "Primary Button",
//   link: "https://www.google.com",
//   icon: "EnvelopeIcon",
// };