// Card Story

import { Story, Meta } from "@storybook/react/types-6-0";
import { Action } from "../components/Action";
import { Actions } from "../components/Actions";
import { CardsItem, CardsItemProps } from "../components/Cards/Item";

export default {
  title: "UI/Card",
  component: CardsItem,
} as Meta;

const Template: Story<CardsItemProps> = (args) => <CardsItem {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
  title: "Title",
  subtitle: "Subtitle",
  image: "https://source.unsplash.com/1000x500/?gradient&backgrounds",
  icon: "ArchiveBoxXMarkIcon",
  type: "vertical",
  actions: (
    <Actions>
      <Action.Button text="Action Button" link="www.google.com" />
    </Actions>
  ),
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  title: "Title",
  subtitle: "Subtitle",
  image: "https://source.unsplash.com/500x500/?gradient&backgrounds",
  icon: "ArchiveBoxXMarkIcon",
  type: "horizontal",
  actions: (
    <Actions>
      <Action.Button text="Action Button" link="www.google.com" />
    </Actions>
  ),
};

export const Small = Template.bind({});
Small.args = {
  title: "Title",
  subtitle: "Subtitle",
  image: "https://source.unsplash.com/500x500/?gradient&backgrounds",
  icon: "ArchiveBoxXMarkIcon",
  type: "small",
  actions: (
    <Actions>
      <Action.Button text="Action Button" link="www.google.com" />
    </Actions>
  ),
};

export const Big = Template.bind({});
Big.args = {
  title: "Title",
  subtitle: "Subtitle",
  image: "https://source.unsplash.com/1000x500/?gradient&backgrounds",
  icon: "ArchiveBoxXMarkIcon",
  type: "big",
  actions: (
    <Actions>
      <Action.Button text="Action Button" link="www.google.com" />
    </Actions>
  ),
};
