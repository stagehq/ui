// List story

import { Story, Meta } from "@storybook/react/types-6-0";

import { Item, ItemProps } from "../components/List/Item";

export default {
  title: "UI/List/Item",
  component: Item,
} as Meta;

const Template: Story<ItemProps> = (args) => <Item {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "card",
  title: "A bright view in the wide universe",
  subtitle: "I once flew to the moon and back with a single rocket engine",
  additional: "This is a List",
  count: {
    value: 324,
    icon: "StarIcon",
  },
  index: 1,
  image: "https://source.unsplash.com/1000x500/?universe",
};
