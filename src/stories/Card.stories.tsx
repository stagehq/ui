// Card Story

import { Story, Meta } from "@storybook/react/types-6-0";
import Action from "../components/Action";
import { Card, CardProps } from "../components/Card";

export default {
  title: "UI/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Stacked = Template.bind({});
Stacked.args = {
  title: "Title",
  subtitle: "Subtitle",
  image: "https://source.unsplash.com/1000x500/?universe",
  icon: "ArchiveBoxXMarkIcon",
  type: "Stacked",
  action: <Action.Button text="Action Button" link="www.google.com"/>
};
