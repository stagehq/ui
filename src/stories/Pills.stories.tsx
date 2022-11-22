// pills storiy file

import { Meta, Story } from "@storybook/react";
import { Pills, PillsProps } from "../components/Pills";

export default {
  title: "UI/Pills",
  component: Pills,
} as Meta;

const Template: Story<PillsProps> = (args) => <Pills {...args} />;

export const Default = Template.bind({});
Default.args = {
  pills: [
    "react.js",
    "vue.js",
    "angular.js",
    "ember.js",
    "svelte.js",
    "meteor.js",
    "backbone.js",
    "knockout.js",
    "jquery.js",
    "node.js",
  ],
};
