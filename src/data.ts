import * as flowstack from "./assets/flow-stack";
import * as mercado from "./assets/mercado";
import * as pulsevr from "./assets/pulsevr";

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
    images: Object.values(flowstack),
    description:
      "FlowStack is a modern StackOverflow clone built with Next.js. It offers posting, searching, commenting, and analytics. Powered by NextAuth for authentication.",
  },
  {
    title: "PulseVR",
    tools: ["TypeScript", "React.js", "Tailwind"],
    repoHref: "https://github.com/janrizmlibres/pulse-vr",
    demoHref: "https://pulse-vr.vercel.app/",
    images: Object.values(pulsevr),
    description:
      "PulseVR is a responsive landing page for a fictional VR startup, built with React.js and Tailwind CSS. It showcases modern UI/UX design with a clean and mobile-friendly layout.",
  },
  {
    title: "Mercado",
    tools: [
      "TypeScript",
      "TanStack",
      "Nest.js",
      "Postgres",
      "Docker",
    ],
    repoHref: "https://github.com/janrizmlibres/mercado-front/",
    demoHref: "https://mercado-front-production.up.railway.app/",
    images: Object.values(mercado),
    description:
      "A modern, type-safe e-commerce frontend built with React, Vite, TanStack Router, and GraphQL. Features product browsing, cart management, checkout, and an admin dashboard.",
  },
];
