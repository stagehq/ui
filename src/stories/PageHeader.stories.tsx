import { Story, Meta } from "@storybook/react";

import { PageHeader, PageHeaderProps } from "../components/PageHeader";

export default {
  title: "Private/PageHeader",
  component: PageHeader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<PageHeaderProps>;

const Template: Story<PageHeaderProps> = (args) => <PageHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Header",
  description: "Header description",
  image: "https://avatars.githubusercontent.com/u/11758660?v=4",
  lightMode: false,
};
