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
    imageAlt: personal.imageAlt,
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
        image="https://avatars.githubusercontent.com/u/65030610?s=200&v=4"
        imageAlt="Dev.to logo"
        size={2}
        isEditable={true}
        actions={{ link: { url: "https://dev.to" } }}
        breakpoint="lg"
      >
        <List>
          {blogPosts.map((post, index) => (
            <List.Item
              type={post.type}
              title={post.title}
              additional={post.additional}
              subtitle={post.subtitle}
              key={`Posts-${index}`}
              actions={{ open: { url: "https://dev.to" } }}
            />
          ))}
        </List>
      </Block>
      <Block
        title="Open Source"
        image="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
        imageAlt="GitHub logo"
        size={2}
        isEditable={true}
        actions={{ link: { url: "https://github.com" } }}
        breakpoint="lg"
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
              key={`OpenSource-${index}`}
              actions={{ open: { url: "https://github.com" } }}
            />
          ))}
        </List>
      </Block>
      <Block
        image="https://avatars.githubusercontent.com/u/24602613?s=200&v=4"
        imageAlt="Placeholder logo"
        size={2}
        isEditable={true}
        title="Deployed Projects"
        breakpoint="lg"
      >
        <List>
          {projects.map((project, index) => (
            <List.Item
              type={project.type}
              title={project.title}
              additional={project.additional}
              subtitle={project.subtitle}
              image={project.image}
              key={`Projects-${index}`}
            />
          ))}
        </List>
      </Block>
      <Block
        title="My Music"
        image="https://avatars.githubusercontent.com/u/251374?s=200&v=4"
        imageAlt="Spotify logo"
        size={2}
        isEditable={true}
        actions={{ link: { url: "https://spotify.com" } }}
        breakpoint="lg"
      >
        <Card
          type="horizontal"
          title="This album title"
          subtitle="Artist Name"
          image="https://placeimg.com/640/480/arch"
          imageAlt="Album cover"
          icon="PlayIcon"
          actions={{ open: { url: "https://google.com" } }}
        />
        <List>
          {spotify.map((album, index) => (
            <List.Item
              index={index + 1}
              type={album.type}
              title={album.title}
              subtitle={album.subtitle}
              image={album.image}
              imageAlt={album.imageAlt}
              count={album.count && { value: album.count.value, icon: album.count.icon }}
              key={`Music-${index}`}
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
        image="https://avatars.githubusercontent.com/u/357098?s=200&v=4"
        imageAlt="LinkedIn logo"
        size={1}
        isEditable={true}
        actions={{ link: { url: "https://www.google.com" } }}
        breakpoint="lg"
      >
        <List>
          {experience.map((job, index) => (
            <List.Item
              type={job.type}
              title={job.subtitle}
              subtitle={job.title}
              additional={job.additional}
              image={job.image}
              imageAlt={job.imageAlt}
              key={`Experience-${index}`}
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
              imageAlt={job.imageAlt}
              key={`University-${index}`}
            />
          ))}
        </List>
      </Block>
    </>,
  ],
};

export const Default = Template.bind({});
Default.args = argObject;
