import { Story, Meta } from "@storybook/react/types-6-0";
import { Action } from "../components/Action";
import { Block } from "../components/Block";
import { Cards } from "../components/Cards";
import { List } from "../components/List";
import { Page, PageProps } from "../components/Page";
import { Pills } from "../components/Pills";
import { Seperator } from "../components/Seperator";
import { blogPosts, experience, openSource, personal, projects, spotify, university } from "./_data";

export default {
  title: "Private/Page",
  component: Page,
} as Meta;

const Template: Story<PageProps> = (args) => <Page {...args} />;

const argObject = {
  header: {
    title: personal.name,
    description: personal.description,
    image: personal.image,
    lightMode: true,
    toggleLightMode: () => {
      "toggle light mode";
    },
  },
  footer: {
    title: "John Doe",
    location: personal.location,
    privacyPolicy: "https://google.com",
  },
  main: [
    <>
      <Block title="My writings" actions={<Action.Link url="https://dev.to"/>}>
        <List>
          {blogPosts.map((post) => (
            <List.Item
              type={post.type}
              title={post.title}
              additional={post.additional}
              subtitle={post.subtitle}
            />
          ))}
        </List>
      </Block>
      <Block title="Open Source" actions={<Action.Link url="https://github.com"/>}>
        <Pills pills={["react.js", "vue.js", "angular.js", "ember.js", "svelte.js"]} />
        <List>
          {openSource.map((project) => (
            <List.Item
              type={project.type}
              title={project.title}
              additional={project.additional}
              subtitle={project.subtitle}
              count={project.count && { value: project.count?.value, icon: project.count?.icon }}
            />
          ))}
        </List>
      </Block>
      <Block title="Deployed Projects">
        <List>
          {projects.map((project) => (
            <List.Item
              type={project.type}
              title={project.title}
              additional={project.additional}
              subtitle={project.subtitle}
              image={project.image}
            />
          ))}
        </List>
      </Block>
      <Block title="My Music" actions={<Action.Link url="https://spotify.com"/>}>
        <Cards>
          <Cards.Item
            type="horizontal"
            title="This album title"
            subtitle="Artist Name"
            image="https://placeimg.com/640/480/arch"
            icon="PlayIcon"
          />
        </Cards>
        <List>
          {spotify.map((album, index) => (
            <List.Item
              index={index + 1}
              type={album.type}
              title={album.title}
              subtitle={album.subtitle}
              image={album.image}
              count={album.count && { value: album.count.value, icon: album.count.icon }}
            />
          ))}
        </List>
      </Block>
    </>,
  ],
  aside: [
    <>
      <Block title="Experience" actions={<Action.Link url="https://linkedin.com"/>}>
        <List>
          {experience.map((job) => (
            <List.Item
              type={job.type}
              title={job.subtitle}
              subtitle={job.title}
              additional={job.additional}
              image={job.image}
            />
          ))}
        </List>
        <Seperator />
        <List>
          {university.map((job) => (
            <List.Item
              type={job.type}
              title={job.title}
              subtitle={job.subtitle}
              additional={job.additional}
              image={job.image}
            />
          ))}
        </List>
      </Block>
    </>,
  ],
};

export const Default = Template.bind({});
Default.args = argObject;
export const Tablet = Template.bind({});
Tablet.args = argObject;
Tablet.decorators = [
  (Page) => (
    <div style={{ width: '1024px' }}>
      <Page />
    </div>
  ),
];

export const Mobile = Template.bind({});
Mobile.args = argObject;
Mobile.decorators = [
  (Page) => (
    <div style={{ width: '375px' }}>
      <Page />
    </div>
  ),
];