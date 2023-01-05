// Block Story

import { Story, Meta } from "@storybook/react/types-6-0";
import { Action } from "../components/Action";
import { Actions } from "../components/Actions";
import { Block, BlockProps } from "../components/Block";

export default {
  title: "UI/Block",
  component: Block,
} as Meta;

const Template: Story<BlockProps> = (args) => {
  return <Block {...args}>{
    <div className="p-4 bg-zinc-100 border border-zinc-200 flex items-center justify-center rounded-md h-32">Body</div>
  }</Block>
}

export const Default = Template.bind({});
Default.args = {
  actions: (
    <Actions>
      <Action.Link url="www.google.com" />
    </Actions>
  ),
  title: "Open Source"
};