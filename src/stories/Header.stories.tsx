import { Story, Meta } from "@storybook/react/types-6-0";
import Action from "../components/Action";

import { Header, HeaderProps } from "../components/Header";

export default {
  title: "UI/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  subtitle: "Subtitle",
  icon: "ArchiveBoxXMarkIcon",
  action: <Action.Link text="Open" url="www.google.com" />,
};
