// card story

import { Story, Meta } from "@storybook/react/types-6-0";

import { Card, CardProps } from "../components/Card";

export default {
  title: "UI/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "A bright view in the wide universe",
  subtitle: "I once flew to the moon and back with a single rocket engine",
  additional: "This is a card",
  count: "324",
  image: "https://source.unsplash.com/1000x500/?universe",
};