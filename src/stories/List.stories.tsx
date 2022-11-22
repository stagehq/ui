// List story

import { Story, Meta } from '@storybook/react/types-6-0';
import { List, ListProps } from '../components/List';

export default {
  title: 'Example/List',
  component: List,
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: [
    {
      title: 'Title',
      description: 'Description',
      button: {
        text: 'Button',
        link: 'https://www.google.com',
      },
      date: '2021-01-01',
    },
    {
      title: 'Title',
      description: 'Description',
      button: {
        text: 'Button',
        link: 'https://www.google.com',
      },
      date: '2021-01-01',
    },
    {
      title: 'Title',
      description: 'Description',
      button: {
        text: 'Button',
        link: 'https://www.google.com',
      },
      date: '2021-01-01',
    },
  ],
};
