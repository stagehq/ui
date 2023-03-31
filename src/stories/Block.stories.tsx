// Block Story

import { Story, Meta } from "@storybook/react/types-6-0";
import { Block, BlockProps } from "../components/Block";
import { Card } from "../components/Card";
import { Image } from "../components/Image";
import { List } from "../components/List";
import { Button } from "../components/Button";
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
    <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-24">
      <span className="text-2xl font-bold">Breakpoint: lg</span>
      <div className="w-full">
        <Block {...args} size={3} breakpoint={"lg"} />
      </div>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="w-full md:w-[calc((100%_-_32px)_/_2_*_1)] xl:w-[calc((100%_-_64px)_/_3_*_2_+_32px)]">
          <Block {...args} size={2} breakpoint={"lg"} />
        </div>
        <div className="w-full md:w-[calc((100%_-_32px)_/_2_*_1)] xl:w-[calc((100%_-_64px)_/_3_*_1)]">
          <Block {...args} size={1} breakpoint={"lg"} />
        </div>
      </div>
      <span className="text-2xl font-bold">Breakpoint: sm</span>
      <div className="flex flex-col gap-8 md:flex-row">
        <Block {...args} size={1} breakpoint={"sm"} />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  actions: { link: { url: "https://www.google.com" } },
  handleTitleChange: exampleTitleHanlder,
  handleSizeChange: exampleChangeSize,
  handleDelete: () => console.log("delete this block"),
  title: "Title",
  children: (
    <div className="flex h-32 items-center justify-center rounded-md border border-zinc-300 bg-zinc-100 p-4">Body</div>
  ),
  breakpoint: "lg",
};

export const Funnel = Template.bind({});
Funnel.args = {
  handleTitleChange: exampleTitleHanlder,
  handleSizeChange: exampleChangeSize,
  handleDelete: () => console.log("delete this block"),
  title: "Hire me!",
  enableDescription: true,
  description:
    "I build web apps for startups, businesses and public institutions as a freelance web developer and designer. Let's discuss your needs and see how I can help.",
  children: <Button primary icon={"EnvelopeIcon"} text={"Contact me"} url={"https://google.com"} />,
  breakpoint: "lg",
};

export const Blogs = Template.bind({});
Blogs.args = {
  actions: { link: { url: "https://www.google.com" } },
  handleTitleChange: exampleTitleHanlder,
  handleSizeChange: exampleChangeSize,
  handleDelete: () => console.log("delete this block"),
  title: "Open Source",
  image: "https://avatars.githubusercontent.com/u/65030610?s=200&v=4",
  imageAlt: "Dev.to Logo",
  children: (
    <List>
      {blogPosts.map((post, index) => (
        <List.Item
          type={post.type}
          title={post.title}
          additional={post.additional}
          subtitle={post.subtitle}
          key={`Block-${index}`}
          actions={{ open: { url: "https://dev.to" } }}
        />
      ))}
    </List>
  ),
  breakpoint: "lg",
};

export const ImageBlock = Template.bind({});
ImageBlock.args = {
  handleTitleChange: exampleTitleHanlder,
  handleSizeChange: exampleChangeSize,
  handleDelete: () => console.log("delete this block"),
  children: <Image src="https://avatars.githubusercontent.com/u/65030610?s=200&v=4" alt="Profile Image" />,
  breakpoint: "lg",
};

export const Repos = Template.bind({});
Repos.args = {
  actions: { link: { url: "https://www.google.com" } },
  handleTitleChange: exampleTitleHanlder,
  handleSizeChange: exampleChangeSize,
  handleDelete: () => console.log("delete this block"),
  title: "My Repositories",
  image: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
  imageAlt: "GitHub Logo",
  children: (
    <List>
      {openSource.map((project, index) => (
        <List.Item
          type={project.type}
          title={project.title}
          additional={project.additional}
          subtitle={project.subtitle}
          count={project.count}
          key={`Block-${index}`}
          actions={{ open: { url: "https://github.com" } }}
        />
      ))}
    </List>
  ),
  breakpoint: "lg",
};

export const WebProjects = Template.bind({});
WebProjects.args = {
  handleTitleChange: exampleTitleHanlder,
  handleSizeChange: exampleChangeSize,
  handleDelete: () => console.log("delete this block"),
  title: "Deployed Projects",
  image: "https://avatars.githubusercontent.com/u/24602613?s=200&v=4",
  imageAlt: "Logo",
  children: (
    <List>
      {projects.map((project, index) => (
        <List.Item
          type={project.type}
          title={project.title}
          additional={project.additional}
          subtitle={project.subtitle}
          image={project.image}
          imageAlt={project.imageAlt}
          key={`Block-${index}`}
          actions={{ open: { url: "https://vercel.com" } }}
        />
      ))}
    </List>
  ),
  breakpoint: "lg",
};

export const Music = Template.bind({});
Music.args = {
  actions: { link: { url: "https://www.google.com" } },
  handleTitleChange: exampleTitleHanlder,
  handleSizeChange: exampleChangeSize,
  handleDelete: () => console.log("delete this block"),
  title: "Best Music ever",
  image: "https://avatars.githubusercontent.com/u/251374?s=200&v=4",
  imageAlt: "Spotify Logo",
  children: (
    <>
      <Card
        title="jo"
        type="vertical"
        image="https://avatars.githubusercontent.com/u/251374?s=200&v=4"
        imageAlt="Spotify Logo"
        actions={{ button: { text: "Test", url: "https://test.com" } }}
      />
      <List>
        {spotify.map((track, index) => (
          <List.Item
            type={track.type}
            title={track.title}
            subtitle={track.subtitle}
            image={track.image}
            imageAlt={track.imageAlt}
            index={index + 1}
            key={`Block-${index}`}
            actions={{ open: { url: "https://spotify.com" } }}
          />
        ))}
      </List>
    </>
  ),
  breakpoint: "lg",
};

export const CV = Template.bind({});
CV.args = {
  actions: { link: { url: "https://www.google.com" } },
  handleTitleChange: exampleTitleHanlder,
  handleSizeChange: exampleChangeSize,
  handleDelete: () => console.log("delete this block"),
  title: "Experience",
  image: "https://avatars.githubusercontent.com/u/357098?s=200&v=4",
  imageAlt: "LinkedIn Logo",
  children: (
    <List>
      {experience.map((pos, index) => (
        <List.Item
          type={pos.type}
          title={pos.title}
          subtitle={pos.subtitle}
          image={pos.image}
          imageAlt={pos.imageAlt}
          additional={pos.additional}
          key={`Block-${index}`}
          actions={{ open: { url: "https://linkedin.com" } }}
        />
      ))}
    </List>
  ),
  breakpoint: "lg",
};
