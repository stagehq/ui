// Card Story

import { Story, Meta } from "@storybook/react/types-6-0";
import Action from "../components/Action";
import { Item, ItemProps } from "../components/Cards/Item";

export default {
  title: "UI/Card",
  component: Item,
} as Meta;

const Template: Story<ItemProps> = (args) => <Item {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
  title: "Title",
  subtitle: "Subtitle",
  image: "https://source.unsplash.com/1000x500/?gradient&backgrounds",
  icon: "ArchiveBoxXMarkIcon",
  type: "vertical",
  action: <Action.Button text="Action Button" link="www.google.com" />,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  title: "Title",
  subtitle: "Subtitle",
  image: "https://source.unsplash.com/500x500/?gradient&backgrounds",
  icon: "ArchiveBoxXMarkIcon",
  type: "horizontal",
  action: <Action.Button text="Action Button" link="www.google.com" />,
};

export const Small = Template.bind({});
Small.args = {
  title: "Title",
  subtitle: "Subtitle",
  image: "https://source.unsplash.com/500x500/?gradient&backgrounds",
  icon: "ArchiveBoxXMarkIcon",
  type: "small",
  action: <Action.Button text="Action Button" link="www.google.com" />,
};

export const Big = Template.bind({});
Big.args = {
  title: "Title",
  subtitle: "Subtitle",
  image: "https://source.unsplash.com/1000x500/?gradient&backgrounds",
  icon: "ArchiveBoxXMarkIcon",
  type: "big",
  action: <Action.Button text="Action Button" link="www.google.com" />,
};
