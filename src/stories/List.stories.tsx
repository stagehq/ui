// List story

import { Story, Meta } from "@storybook/react/types-6-0";

import { List, ListProps } from "../components/List";

export default {
  title: "UI/List",
  component: List,
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "card",
  title: "A bright view in the wide universe",
  subtitle: "I once flew to the moon and back with a single rocket engine",
  additional: "This is a List",
  count: "324",
  image: "https://source.unsplash.com/1000x500/?universe",
};
