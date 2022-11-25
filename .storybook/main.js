module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      // options: {
      //   backgrounds: false,
      // },
    },
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/preset-create-react-app",
    "storybook-addon-themes",
  ],
  options: {
    backgrounds: false,
  },
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
