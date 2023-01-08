import { Story, Meta } from "@storybook/react/types-6-0";
import { Block } from "../components/Block";
import { List } from "../components/List";
import { Card } from "../components/Card";
import { Page, PageProps } from "../components/Page";
import { Pills } from "../components/Pills";
import { blogPosts, experience, openSource, personal, projects, spotify, university } from "./_data";
import { Seperator } from "../components/Seperator";

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
      <Block
        title="My writings"
        imagePath="https://avatars.githubusercontent.com/u/65030610?s=200&v=4"
        size={2}
        isEditable={true}
        actions={{ link: { url: "https://dev.to" } }}
      >
        <List>
          {blogPosts.map((post, index) => (
            <List.Item
              type={post.type}
              title={post.title}
              additional={post.additional}
              subtitle={post.subtitle}
              key={`Block-${index}`}
            />
          ))}
        </List>
      </Block>
      <Block
        title="Open Source"
        imagePath="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
        size={2}
        isEditable={true}
        actions={{ link: { url: "https://github.com" } }}
      >
        <Pills pills={["react.js", "vue.js", "angular.js", "ember.js", "svelte.js"]} />
        <List>
          {openSource.map((project, index) => (
            <List.Item
              type={project.type}
              title={project.title}
              additional={project.additional}
              subtitle={project.subtitle}
              count={project.count && { value: project.count?.value, icon: project.count?.icon }}
              key={`Block-${index}`}
            />
          ))}
        </List>
      </Block>
      <Block
        imagePath="https://avatars.githubusercontent.com/u/24602613?s=200&v=4"
        size={2}
        isEditable={true}
        title="Deployed Projects"
      >
        <List>
          {projects.map((project, index) => (
            <List.Item
              type={project.type}
              title={project.title}
              additional={project.additional}
              subtitle={project.subtitle}
              image={project.image}
              key={`Block-${index}`}
            />
          ))}
        </List>
      </Block>
      <Block
        title="My Music"
        imagePath="https://avatars.githubusercontent.com/u/251374?s=200&v=4"
        size={2}
        isEditable={true}
        actions={{ link: { url: "https://spotify.com" } }}
      >
        <Card
          type="horizontal"
          title="This album title"
          subtitle="Artist Name"
          image="https://placeimg.com/640/480/arch"
          icon="PlayIcon"
        />
        <List>
          {spotify.map((album, index) => (
            <List.Item
              index={index + 1}
              type={album.type}
              title={album.title}
              subtitle={album.subtitle}
              image={album.image}
              count={album.count && { value: album.count.value, icon: album.count.icon }}
              key={`Block-${index}`}
            />
          ))}
        </List>
      </Block>
    </>,
  ],
  aside: [
    <>
      <Block
        title="Experience"
        imagePath="https://avatars.githubusercontent.com/u/357098?s=200&v=4"
        size={1}
        isEditable={true}
        actions={{ link: { url: "https://www.google.com" } }}
      >
        <List>
          {experience.map((job, index) => (
            <List.Item
              type={job.type}
              title={job.subtitle}
              subtitle={job.title}
              additional={job.additional}
              image={job.image}
              key={`Block-${index}`}
            />
          ))}
        </List>
        <Seperator />
        <List>
          {university.map((job, index) => (
            <List.Item
              type={job.type}
              title={job.title}
              subtitle={job.subtitle}
              additional={job.additional}
              image={job.image}
              key={`Block-${index}`}
            />
          ))}
        </List>
      </Block>
    </>,
  ],
};

export const Default = Template.bind({});
Default.args = argObject;
