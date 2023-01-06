import { Story, Meta } from "@storybook/react/types-6-0";
import { Action } from "../components/Action";
import { Block } from "../components/Block";
import { Page, PageProps } from "../components/Page";
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
      <Block
        title="My writings"
        imagePath="https://avatars.githubusercontent.com/u/65030610?s=200&v=4"
        size={2}
        isEditable={true}
        actions={<Action.Link url="https://dev.to" />}
      >
        <Block.List>
          {blogPosts.map((post, index) => (
            <Block.List.Item
              type={post.type}
              title={post.title}
              additional={post.additional}
              subtitle={post.subtitle}
              key={`Block-${index}`}
            />
          ))}
        </Block.List>
      </Block>
      <Block
        title="Open Source"
        imagePath="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
        size={2}
        isEditable={true}
        actions={<Action.Link url="https://github.com" />}
      >
        <Block.Pills pills={["react.js", "vue.js", "angular.js", "ember.js", "svelte.js"]} />
        <Block.List>
          {openSource.map((project, index) => (
            <Block.List.Item
              type={project.type}
              title={project.title}
              additional={project.additional}
              subtitle={project.subtitle}
              count={project.count && { value: project.count?.value, icon: project.count?.icon }}
              key={`Block-${index}`}
            />
          ))}
        </Block.List>
      </Block>
      <Block
        imagePath="https://avatars.githubusercontent.com/u/24602613?s=200&v=4"
        size={2}
        isEditable={true}
        title="Deployed Projects"
      >
        <Block.List>
          {projects.map((project, index) => (
            <Block.List.Item
              type={project.type}
              title={project.title}
              additional={project.additional}
              subtitle={project.subtitle}
              image={project.image}
              key={`Block-${index}`}
            />
          ))}
        </Block.List>
      </Block>
      <Block
        title="My Music"
        imagePath="https://avatars.githubusercontent.com/u/251374?s=200&v=4"
        size={2}
        isEditable={true}
        actions={<Action.Link url="https://spotify.com" />}
      >
        <Block.Card
          type="horizontal"
          title="This album title"
          subtitle="Artist Name"
          image="https://placeimg.com/640/480/arch"
          icon="PlayIcon"
        />
        <Block.List>
          {spotify.map((album, index) => (
            <Block.List.Item
              index={index + 1}
              type={album.type}
              title={album.title}
              subtitle={album.subtitle}
              image={album.image}
              count={album.count && { value: album.count.value, icon: album.count.icon }}
              key={`Block-${index}`}
            />
          ))}
        </Block.List>
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
        actions={<Action.Link url="https://linkedin.com" />}
      >
        <Block.List>
          {experience.map((job, index) => (
            <Block.List.Item
              type={job.type}
              title={job.subtitle}
              subtitle={job.title}
              additional={job.additional}
              image={job.image}
              key={`Block-${index}`}
            />
          ))}
        </Block.List>
        <Block.Seperator />
        <Block.List>
          {university.map((job, index) => (
            <Block.List.Item
              type={job.type}
              title={job.title}
              subtitle={job.subtitle}
              additional={job.additional}
              image={job.image}
              key={`Block-${index}`}
            />
          ))}
        </Block.List>
      </Block>
    </>,
  ],
};

export const Default = Template.bind({});
Default.args = argObject;
