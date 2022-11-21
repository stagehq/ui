import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '../components/Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  profile: {
    image: 'https://avatars.githubusercontent.com/u/66323188?v=4',
    name: 'Siddharth',
    description: 'Frontend Developer',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
