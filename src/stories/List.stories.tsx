// List story

import { Story, Meta } from "@storybook/react/types-6-0";

import { ListItem, ListItemProps } from "../components/List/Item";

export default {
  title: "UI/List",
  component: ListItem,
} as Meta;

const Template: Story<ListItemProps> = (args) => <ListItem {...args} />;

export const Card = Template.bind({});
Card.args = {
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

export const Text = Template.bind({});
Text.args = {
  type: "text",
  title: "A bright view in the wide universe",
  subtitle: "I once flew to the moon and back with a single rocket engine",
  additional: "This is a List",
  count: {
    value: 324,
    icon: "StarIcon",
  },
  index: 1,
};

export const Bullet = Template.bind({});
Bullet.args = {
  type: "bullet",
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

export const Cover = Template.bind({});
Cover.args = {
  type: "cover",
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
