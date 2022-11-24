import { ItemProps } from "../components/List/Item";

export const personal = {
  name: "Software designer, founder and amateur astronaut.",
  description:
    "I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.",
  email: "johhn@doe.com",
  location: "New York, NY",
  image:
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80",
};

export const blogPosts: ItemProps[] = [
  {
    type: "text",
    title: "My first blog post",
    additional: "2021-01-01",
    subtitle: "This is my first blog post. I'm so excited to write this.",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80",
  },
  {
    type: "text",
    title: "My second blog post",
    additional: "2021-01-02",
    subtitle: "This is my second blog post. I'm so excited to write this.",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80",
  },
  {
    type: "text",
    title: "My third blog post",
    additional: "2021-01-03",
    subtitle: "This is my third blog post. I'm so excited to write this.",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80",
  },
];

export const projects: ItemProps[] = [
  {
    type: "card",
    title: "My first project",
    subtitle: "This is my first project. I'm so excited to build this.",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80",
  },
  {
    type: "card",
    title: "My second project",
    subtitle: "This is my second project. I'm so excited to build this.",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80",
  },
  {
    type: "card",
    title: "My third project",
    subtitle: "This is my third project. I'm so excited to build this.",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80",
  },
];

export const openSource: ItemProps[] = [
  {
    type: "card",
    title: "Spectrum",
    subtitle: "A simple and beautiful community platform.",
    additional: "withspectrum/spectrum",
    count: {
      value: 1000,
      icon: "StarIcon",
    },
  },
  {
    type: "card",
    title: "styled-components",
    subtitle:
      "Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅",
    additional: "styled-components/styled-components",
    count: {
      value: 1000,
      icon: "StarIcon",
    },
  },
  {
    type: "card",
    title: "react-three-fiber",
    subtitle: "A React renderer for ThreeJS",
    additional: "pmndrs/react-three-fiber",
    count: {
      value: 1000,
      icon: "StarIcon",
    },
  },
];

export const experience: ItemProps[] = [
  {
    type: "bullet",
    title: "Software Engineer",
    subtitle: "Google",
    additional: "2020 - Present",
  },
  {
    type: "bullet",
    title: "Software Engineer",
    subtitle: "Facebook",
    additional: "2019 - 2020",
  },
  {
    type: "bullet",
    title: "Software Engineer",
    subtitle: "Twitter",
    additional: "2018 - 2019",
  },
];

export const music: ItemProps[] = [
  {
    type: "cover",
    title: "My first song",
    subtitle: "Artist name",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80",
    count: {
      value: 100,
      icon: "PlayIcon",
    },
  },
  {
    type: "cover",
    title: "My second song",
    subtitle: "Artist name",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80",
    count: {
      value: 100,
      icon: "PlayIcon",
    },
  },
  {
    type: "cover",
    title: "My third song",
    subtitle: "Artist name",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80",
    count: {
      value: 100,
      icon: "PlayIcon",
    },
  },
  {
    type: "cover",
    title: "My fourth song",
    subtitle: "Artist name",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80",
    count: {
      value: 100,
      icon: "PlayIcon",
    },
  },
  {
    type: "cover",
    title: "My fifth song",
    subtitle: "Artist name",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80",
    count: {
      value: 100,
      icon: "PlayIcon",
    },
  },
];
