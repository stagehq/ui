import { Story, Meta } from "@storybook/react/types-6-0";
import Action from "../components/Action";
import Cards from "../components/Cards";
import { Header } from "../components/Header";
import List from "../components/List";
import { Page, PageProps } from "../components/Page";
import { Pills } from "../components/Pills";
import { Section } from "../components/Section";
import { blogPosts, music, openSource, personal, projects } from "./_data";

export default {
  title: "Private/Page",
  component: Page,
} as Meta

const Template: Story<PageProps> = (args) => <Page {...args} />;
export const Default = Template.bind({});
Default.args = {
  header: {
    title: personal.name,
    description: personal.description,
    image: personal.image,
    lightMode: true,
    toggleLightMode: () => {'toggle light mode'},
  },
  footer: {
    title: "John Doe",
    location: personal.location,
    privacyPolicy: "https://google.com",
  },
  children: [
    <>
      <Section>
        <Header title="Recent Blogs" icon="ArrowDownCircleIcon" action={<Action.Link url="https://google.com" text="DEV.to"/>}/>
        <List>
          {blogPosts.map((post) => (
            <List.Item type={post.type} title={post.title} additional={post.additional} subtitle={post.subtitle} />
          ))}
        </List>
      </Section>
      <Section>
          <Header title="Open Source" icon="CodeBracketSquareIcon" action={<Action.Link url="https://github.com" text="GitHub profile"/>}/>
          <Pills pills={["react.js",
    "vue.js",
    "angular.js",
    "ember.js",
    "svelte.js"]} />
          <List>
            {openSource.map((project) => (
              <List.Item type={project.type} title={project.title} additional={project.additional} subtitle={project.subtitle} count={project.count && {value: project.count?.value, icon: project.count?.icon}} />
            ))}
          </List>
      </Section>
      <Section>
          <Header title="Web Projects" icon="GlobeAltIcon" />
          <List>
            {projects.map((project) => (
              <List.Item type={project.type} title={project.title} additional={project.additional} subtitle={project.subtitle} image={project.image} />
            ))}
          </List>
      </Section>
      <Section>
          <Header title="My Music" icon="MusicalNoteIcon" action={<Action.Link url="https://github.com" text="Spotify profile"/>}/>
          <Cards>
            <Cards.Item type="horizontal" title="This album title" subtitle="Artist Name" image="https://source.unsplash.com/1000x500/?gradient&backgrounds" icon="" />
          </Cards>
          <List>
            {music.map((album, index) => (
              <List.Item index={index +1} type={album.type} title={album.title} subtitle={album.subtitle} image={album.image} count={album.count && {value: album.count.value, icon: album.count.icon}}/>
            ))}
          </List>
      </Section>
    </>
  ]
};