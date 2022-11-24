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
    title: "Crafting a design system for a multiplanetary future",
    additional: "September 1, 2022",
    subtitle: "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80",
  },
  {
    type: "text",
    title: "Introducing Animaginary: High performance web animations",
    additional: "August 17, 2022",
    subtitle: "When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80",
  },
  {
    type: "text",
    title: "Rewriting the cosmOS kernel in Rust",
    additional: "July 2, 2022",
    subtitle: "When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language with a lot of benefits, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80",
  },
];

export const projects: ItemProps[] = [
  {
    type: "card",
    title: "Splitbee – Your all-in-one analytics and conversion platform",
    subtitle: "Track and optimize your online business with Splitbee. Your friendly analytics & conversion platform. · Get to know your Traffic · Understand their journey",
    additional: "2021",
    image:
      "https://source.unsplash.com/1000x500/?analytics",
  },
  {
    type: "card",
    title: "Zirkular – Open source made easy.",
    subtitle: "Zirkular connects contributors and maintainers in a community-first workspace with goal-oriented communication, efficient workflows and smart automations.",
    additional: "2020",
    image:
    "https://source.unsplash.com/1000x500/?management",
  },
  {
    type: "card",
    title: "Melo – The Sound Experience Platform",
    subtitle: "Until now, this discipline of designing and developing sounds in digital products has been reserved for those with a high level of technical understanding.",
    additional: "2019",
    image:
    "https://source.unsplash.com/1000x500/?music",
  },
];

export const openSource: ItemProps[] = [
  {
    type: "card",
    title: "Spectrum",
    subtitle: "A simple and beautiful community platform.",
    additional: "withspectrum/spectrum",
    count: {
      value: 3214,
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
      value: 1720,
      icon: "StarIcon",
    },
  },
  {
    type: "card",
    title: "react-three-fiber",
    subtitle: "A React renderer for ThreeJS",
    additional: "pmndrs/react-three-fiber",
    count: {
      value: 879,
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
    image: "https://img.icons8.com/color/512/google-logo.png"
  },
  {
    type: "bullet",
    title: "Software Engineer",
    subtitle: "Facebook",
    additional: "2019 - 2020",
    image: "https://img.icons8.com/color/512/meta--v1.png"
  },
  {
    type: "bullet",
    title: "Software Engineer",
    subtitle: "Twitter",
    additional: "2018 - 2019",
    image: "https://img.icons8.com/color/512/twitter--v1.png"
  },
];

// export spotify array with 10 objects of type ItemProps and music data of most listened songs

export const spotify: ItemProps[] = [
  {
    type: "cover",
    title: "The Less I Know The Better",
    subtitle: "Tame Impala",
    additional: "2015",
    image: "https://i.scdn.co/image/ab67616d0000b273d8b3b8f4f9f9f9f9f9f9f9f9",
  },
  {
    type: "cover",
    title: "Sorry",
    subtitle: "Justin Bieber",
    additional: "2015",
    image: "https://i.scdn.co/image/ab67616d0000b273d8b3b8f4f9f9f9f9f9f9f9f9",
  },
  {
    type: "cover",
    title: "I Need A Dollar",
    subtitle: "Aloe Blacc",
    additional: "2015",
    image: "https://i.scdn.co/image/ab67616d0000b273d8b3b8f4f9f9f9f9f9f9f9f9",
  },
  {
    type: "cover",
    title: "STAY",
    subtitle: "The Kid LAROI",
    additional: "2021",
    image: "https://i.scdn.co/image/ab67616d0000b273d8b3b8f4f9f9f9f9f9f9f9f9",
  },
  {
    type: "cover",
    title: "good 4 u",
    subtitle: "Olivia Rodrigo",
    additional: "2021",
    image: "https://i.scdn.co/image/ab67616d0000b273d8b3b8f4f9f9f9f9f9f9f9f9",
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

export const university: ItemProps[] = [
  {
    type: "bullet",
    title: "UC Berkeley",
    subtitle: "M.Sc. Computer Science",
    additional: "2015 - 2019",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/640px-Seal_of_University_of_California%2C_Berkeley.svg.png"
  },
  {
    type: "bullet",
    title: "MIT",
    subtitle: "B.Sc. Computer Science",
    additional: "2010 - 2014",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/642px-MIT_logo.svg.png"
  },
];