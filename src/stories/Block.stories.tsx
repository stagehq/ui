// Block Story

import { Story, Meta } from "@storybook/react/types-6-0";
import { Action } from "../components/Action";
import { Actions } from "../components/Actions";
import { Block, BlockProps } from "../components/Block";
import { blogPosts, experience, openSource, projects, spotify } from "./_data";

export default {
  title: "UI/Block",
  component: Block,
} as Meta;

const exampleTitleHanlder = (title: string) => {
  console.log(title);
};

const exampleChangeSize = (size: number) => {
  console.log("size: " + size);
};

const Template: Story<BlockProps> = (args) => {
  return (
    <div className="flex flex-col gap-8 max-w-screen-xl px-24 mx-auto">
      <div className="w-full">
        <Block {...args} size={3} isEditable={true} />
      </div>
      <div className="flex gap-8 flex-col md:flex-row">
        <div className="w-full md:w-[calc((100%_-_32px)_/_2_*_1)] xl:w-[calc((100%_-_64px)_/_3_*_2_+_32px)]">
          <Block {...args} size={2} isEditable={true} />
        </div>
        <div className="w-full md:w-[calc((100%_-_32px)_/_2_*_1)] xl:w-[calc((100%_-_64px)_/_3_*_1)]">
          <Block {...args} size={1} isEditable={true} />
        </div>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  actions: (
    <Actions>
      <Action.Link url="www.google.com" />
    </Actions>
  ),
  handleTitleChange: exampleTitleHanlder,
  handleSizeChange: exampleChangeSize,
  title: "Title",
  children: (
    <div className="p-4 bg-zinc-100 border border-zinc-200 flex items-center justify-center rounded-md h-32">Body</div>
  ),
};

export const Blogs = Template.bind({});
Blogs.args = {
  actions: (
    <Actions>
      <Action.Link url="https://dev.to" />
    </Actions>
  ),
  handleTitleChange: exampleTitleHanlder,
  handleSizeChange: exampleChangeSize,
  title: "Open Source",
  imagePath: "https://avatars.githubusercontent.com/u/65030610?s=200&v=4",
  children: (
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
  ),
};

export const Repos = Template.bind({});
Repos.args = {
  actions: (
    <Actions>
      <Action.Link url="https://github.com" />
    </Actions>
  ),
  handleTitleChange: exampleTitleHanlder,
  handleSizeChange: exampleChangeSize,
  title: "My Repositories",
  imagePath: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
  children: (
    <Block.List>
      {openSource.map((project, index) => (
        <Block.List.Item
          type={project.type}
          title={project.title}
          additional={project.additional}
          subtitle={project.subtitle}
          count={project.count}
          key={`Block-${index}`}
        />
      ))}
    </Block.List>
  ),
};

export const WebProjects = Template.bind({});
WebProjects.args = {
  handleTitleChange: exampleTitleHanlder,
  handleSizeChange: exampleChangeSize,
  title: "Deployed Projects",
  imagePath: "https://avatars.githubusercontent.com/u/24602613?s=200&v=4",
  children: (
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
  ),
};

export const Music = Template.bind({});
Music.args = {
  actions: (
    <Actions>
      <Action.Link url="https://spotify.com" />
    </Actions>
  ),
  handleTitleChange: exampleTitleHanlder,
  handleSizeChange: exampleChangeSize,
  title: "Best Music ever",
  imagePath: "https://avatars.githubusercontent.com/u/251374?s=200&v=4",
  children: (
    <Block.List>
      {spotify.map((track, index) => (
        <Block.List.Item
          type={track.type}
          title={track.title}
          subtitle={track.subtitle}
          image={track.image}
          index={index + 1}
          key={`Block-${index}`}
        />
      ))}
    </Block.List>
  ),
};

export const CV = Template.bind({});
CV.args = {
  actions: (
    <Actions>
      <Action.Link url="https://linkedIn.com" />
    </Actions>
  ),
  handleTitleChange: exampleTitleHanlder,
  handleSizeChange: exampleChangeSize,
  title: "Experience",
  imagePath: "https://avatars.githubusercontent.com/u/357098?s=200&v=4",
  children: (
    <Block.List>
      {experience.map((pos, index) => (
        <Block.List.Item
          type={pos.type}
          title={pos.title}
          subtitle={pos.subtitle}
          image={pos.image}
          additional={pos.additional}
          key={`Block-${index}`}
        />
      ))}
    </Block.List>
  ),
};
