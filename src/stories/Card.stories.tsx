// Card Story

import { Story, Meta } from "@storybook/react/types-6-0";
import { Card, CardProps } from "../components/Card";

export default {
  title: "UI/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
  title: "Title",
  subtitle: "Subtitle",
  image: "https://source.unsplash.com/1000x500/?gradient&backgrounds",
  imageAlt: "Gradient Background",
  icon: "ArchiveBoxXMarkIcon",
  type: "vertical",
  actions: { button: { text: "Action Button", url: "https://www.google.com" } },
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  title: "Title",
  subtitle: "Subtitle",
  image: "https://source.unsplash.com/500x500/?gradient&backgrounds",
  imageAlt: "Gradient Background",
  icon: "ArchiveBoxXMarkIcon",
  type: "horizontal",
  actions: { button: { text: "Action Button", url: "https://www.google.com" } },
};

export const Small = Template.bind({});
Small.args = {
  title: "Title",
  subtitle: "Subtitle",
  image: "https://source.unsplash.com/500x500/?gradient&backgrounds",
  imageAlt: "Gradient Background",
  icon: "ArchiveBoxXMarkIcon",
  type: "small",
  actions: { button: { text: "Action Button", url: "https://www.google.com" } },
};

export const Big = Template.bind({});
Big.args = {
  title: "Title",
  subtitle: "Subtitle",
  image: "https://source.unsplash.com/1000x500/?gradient&backgrounds",
  imageAlt: "Gradient Background",
  icon: "ArchiveBoxXMarkIcon",
  type: "big",
  actions: { button: { text: "Action Button", url: "https://www.google.com" } },
};
