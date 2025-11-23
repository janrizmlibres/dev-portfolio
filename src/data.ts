import projectOneFour from "./assets/project-one/four.jpg";
import projectOne from "./assets/project-one/one.jpg";
import projectOneThree from "./assets/project-one/three.jpg";
import projectOneTwo from "./assets/project-one/two.jpg";
import projectThreeFour from "./assets/project-three/four.jpg";
import projectThree from "./assets/project-three/one.jpg";
import projectThreeThree from "./assets/project-three/three.jpg";
import projectThreeTwo from "./assets/project-three/two.jpg";
import projectTwo from "./assets/project-two/one.jpg";
import projectTwoThree from "./assets/project-two/three.jpg";
import projectTwoTwo from "./assets/project-two/two.jpg";

export interface Social {
  name: string;
  url: string;
}

export const socials: Social[] = [
  {
    name: "Github",
    url: "https://github.com/janrizmlibres/",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/janrizlibres/",
  },
  {
    name: "Telegram",
    url: "https://t.me/janrizlibres",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/janrizlibs",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/janrizlibs/",
  },
];

export const socialsPlusEmail: Social[] = [
  ...socials.slice(0, 2),
  {
    name: "Email",
    url: "mailto:libres.janriz@gmail.com",
  },
  ...socials.slice(2),
];

// Projects Data

export interface Project {
  title: string;
  tools: string[];
  repoHref: string;
  demoHref: string;
  images: string[];
  description: string;
}

export const projects: Project[] = [
  {
    title: "FlowStack",
    tools: ["TypeScript", "Nextjs", "MongoDB", "Tailwind"],
    repoHref: "https://github.com/janrizmlibres/devflow-clone-app",
    demoHref: "https://devflow-clone-app.vercel.app/",
    images: [projectOne, projectOneTwo, projectOneThree, projectOneFour],
    description:
      "FlowStack is a modern StackOverflow clone built with Next.js. It offers posting, searching, commenting, and analytics. Powered by NextAuth for authentication.",
  },
  {
    title: "PulseVR",
    tools: ["TypeScript", "React.js", "Tailwind"],
    repoHref: "https://github.com/janrizmlibres/pulse-vr",
    demoHref: "https://pulse-vr.vercel.app/",
    images: [projectTwo, projectTwoTwo, projectTwoThree],
    description:
      "PulseVR is a responsive landing page for a fictional VR startup, built with React.js and Tailwind CSS. It showcases modern UI/UX design with a clean and mobile-friendly layout.",
  },
  {
    title: "Mercado",
    tools: [
      "TypeScript",
      "Nest.js",
      "GraphQL",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Prisma",
    ],
    repoHref: "https://github.com/janrizmlibres/mercado-ecommerce/",
    demoHref: "https://github.com/janrizmlibres/mercado-ecommerce/",
    images: [projectThree, projectThreeTwo, projectThreeThree, projectThreeFour],
    description:
      "Mercado is a scalable, 8-service e-commerce backend built with NestJS to demonstrate a production-ready microservices architecture using GraphQL, Docker, and Prisma.",
  },
];
