// page footer story with types

import { Story, Meta } from "@storybook/react/types-6-0";
import { PageFooter, PageFooterProps } from "../components/PageFooter";

export default {
  title: "Private/PageFooter",
  component: PageFooter,
} as Meta;

const Template: Story<PageFooterProps> = (args) => <PageFooter {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: "John Doe",
  location: "New York, NY",
  socialMedia: {
    twitter: "https://twitter.com/ArchiveBox",
    linkedin: "https://www.linkedin.com/company/archivebox",
    github: "https://github.com/felixhaeberle",
    gitlab: "https://gitlab.com/felixhaeberle",
  },
  privacyPolicy: "https://archivebox.io/privacy",
};
