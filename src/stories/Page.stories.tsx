import { Story, Meta } from "@storybook/react/types-6-0";
import Action from "../components/Action";
import Cards from "../components/Cards";
import { Header } from "../components/Header";
import List from "../components/List";
import { Page, PageProps } from "../components/Page";
import { Pills } from "../components/Pills";
import { Section } from "../components/Section";
import { Seperator } from "../components/Seperator";
import { blogPosts, experience, music, openSource, personal, projects, spotify, university } from "./_data";

export default {
  title: "Private/Page",
  component: Page,
} as Meta;

const Template: Story<PageProps> = (args) => <Page {...args} />;
export const Default = Template.bind({});
Default.args = {
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
      <Section>
        <Header
          title="Recent Blogs"
          icon="BookOpenIcon"
          action={<Action.Link url="https://google.com" text="DEV.to" />}
        />
        <List>
          {blogPosts.map((post) => (
            <List.Item
              type={post.type}
              title={post.title}
              additional={post.additional}
              subtitle={post.subtitle}
              actions={<Action.Link url="https://google.com" text="Read article" />}
            />
          ))}
        </List>
      </Section>
      <Section>
        <Header
          title="Open Source"
          icon="CodeBracketSquareIcon"
          action={<Action.Link url="https://github.com" text="GitHub profile" />}
        />
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
      </Section>
      <Section>
        <Header title="Web Projects" icon="GlobeAltIcon" />
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
      </Section>
      <Section>
        <Header
          title="My Music"
          icon="MusicalNoteIcon"
          action={<Action.Link url="https://github.com" text="Spotify profile" />}
        />
        <Cards>
          <Cards.Item
            type="horizontal"
            title="This album title"
            subtitle="Artist Name"
            image="https://source.unsplash.com/1000x500/?gradient&backgrounds"
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
      </Section>
    </>,
  ],
  aside: [
    <>
      <Section>
        <Cards>
          <Cards.Item
            type="vertical"
            title="Hire me!"
            subtitle="I build web apps for startups, businesses and public institutions as a freelance web developer and designer. Let's discuss your needs and see how I can help."
            icon="BoltIcon"
            action={<Action.Button link="https://google.com" text="Contact me" icon="EnvelopeIcon" primary />}
          />
        </Cards>
      </Section>
      <Section>
        <Header title="Experience" icon="BriefcaseIcon" />
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
      </Section>
    </>,
  ],
};
