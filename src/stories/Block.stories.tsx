// Block Story

import { Story, Meta } from "@storybook/react/types-6-0";
import { Action } from "../components/Action";
import { Actions } from "../components/Actions";
import { Block, BlockProps } from "../components/Block";

export default {
  title: "UI/Block",
  component: Block,
} as Meta;

const exampleTitleHanlder = (title: string) => {
  console.log(title);
}

const Template: Story<BlockProps> = (args) => {
  return <Block {...args}/>
}

export const Default = Template.bind({});
Default.args = {
  actions: (
    <Actions>
      <Action.Link url="www.google.com" />
    </Actions>
  ),
  handleTitleChange: exampleTitleHanlder,
  title: "Open Source",
  children: <div className="p-4 bg-zinc-100 border border-zinc-200 flex items-center justify-center rounded-md h-32">Body</div>
};

export const Blogs = Template.bind({});
Blogs.args = {
  actions: (
    <Actions>
      <Action.Link url="https://dev.to" />
    </Actions>
  ),
  handleTitleChange: exampleTitleHanlder,
  title: "Open Source",
  imagePath: "https://avatars.githubusercontent.com/u/65030610?s=200&v=4",
  children: <Block.List>
    <Block.List.Item
      type="text"
      title="Crafting a design system for a multiplanetary future"
      additional="September 5, 2022"
      subtitle="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system."
    />
    <Block.List.Item
      type="text"
      title="Introducing Animaginary: High performance web animations"
      additional="September 2, 2022"
      subtitle="When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself."
    />
    <Block.List.Item
      type="text"
      title="Rewriting the cosmOS kernel in Rust"
      additional="July 14, 2022"
      subtitle="When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language with a lot of benefits, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week."
    />
  </Block.List>
};

export const Repos = Template.bind({});
Repos.args = {
  actions: (
    <Actions>
      <Action.Link url="https://github.com" />
    </Actions>
  ),
  handleTitleChange: exampleTitleHanlder,
  title: "My Repositories",
  imagePath: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
  children: <Block.List>
    <Block.List.Item
      type="card"
      title="spectrum"
      additional="withspectrum/spectrum"
      subtitle="Simple, powerful online communities."
      count={{ value: 10530, icon: "StarIcon" }}
    />
    <Block.List.Item
      type="card"
      title="styled-components"
      additional="styled-components/sytled-components"
      subtitle="Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅"
      count={{ value: 37753, icon: "StarIcon" }}
    />
    <Block.List.Item
      type="card"
      title="react-boilerplate"
      additional="react-boilerplate/react-boilerplate"
      subtitle="🔥 A highly scalable, offline-first foundation with the best developer experience and a focus on performance and best practices."
      count={{ value: 28831, icon: "StarIcon" }}
    />
  </Block.List>
};

export const WebProjects = Template.bind({});
WebProjects.args = {
  handleTitleChange: exampleTitleHanlder,
  title: "Deployed Projects",
  imagePath: "https://avatars.githubusercontent.com/u/24602613?s=200&v=4",
  children: <Block.List>
    <Block.List.Item
      type="card"
      title="Splitbee – Your all-in-one analytics and conversion platform"
      additional="2021"
      subtitle="Track and optimize your online business with Splitbee. Your friendly analytics & conversion platform. · Get to know your Traffic · Understand their journey"
      image= "https://source.unsplash.com/1000x500/?architecture-concrete"
    />
    <Block.List.Item
      type="card"
      title="Zirkular – Open source made easy."
      additional="2020"
      subtitle="Zirkular connects contributors and maintainers in a community-first workspace with goal-oriented communication, efficient workflows and smart automations."
      image= "https://source.unsplash.com/1000x500/?architecture-white"
    />
    <Block.List.Item
      type="card"
      title="Melo – The Sound Experience Platform"
      additional="2019"
      subtitle="Until now, this discipline of designing and developing sounds in digital products has been reserved for those with a high level of technical understanding."
      image= "https://source.unsplash.com/1000x500/?architecture-clean"
    />
  </Block.List>
};

export const Music = Template.bind({});
Music.args = {
  actions: (
    <Actions>
      <Action.Link url="https://spotify.com" />
    </Actions>
  ),
  handleTitleChange: exampleTitleHanlder,
  title: "Best Music ever",
  imagePath: "https://avatars.githubusercontent.com/u/251374?s=200&v=4",
  children: <Block.List>
    <Block.List.Item
      type="cover"
      title="You're the one that I want - From 'Grease'"
      subtitle="John Travolta, Olivia Newton-John"
      image= "https://source.unsplash.com/1000x500/?architecture-concrete"
      index={1}
    />
    <Block.List.Item
      type="cover"
      title="Wild World"
      subtitle="Jusuf / Cat Ctevens"
      image= "https://source.unsplash.com/1000x500/?architecture-white"
      index={2}
    />
    <Block.List.Item
      type="cover"
      title="Easy"
      subtitle="Comodores"
      image= "https://source.unsplash.com/1000x500/?architecture-clean"
      index={3}
    />
  </Block.List>
};

export const CV = Template.bind({});
CV.args = {
  actions: (
    <Actions>
      <Action.Link url="https://linkedIn.com" />
    </Actions>
  ),
  handleTitleChange: exampleTitleHanlder,
  title: "Experience",
  imagePath: "https://avatars.githubusercontent.com/u/357098?s=200&v=4",
  children: <Block.List>
    <Block.List.Item
      type="bullet"
      title="Google"
      subtitle="Software Engineer"
      image= "https://source.unsplash.com/1000x500/?architecture-concrete"
      additional="2019 - today"
    />
    <Block.List.Item
      type="bullet"
      title="Meta"
      subtitle="Software Accessability Manager"
      image= "https://source.unsplash.com/1000x500/?architecture-white"
      additional="2018 - 2019"
    />
    <Block.List.Item
      type="bullet"
      title="Digital Agency Z"
      subtitle="Intern Software Engineering"
      image= "https://source.unsplash.com/1000x500/?architecture-clean"
      additional="2016 - 2018"
    />
  </Block.List>
};