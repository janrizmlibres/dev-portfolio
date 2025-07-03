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
    url: "https://t.me/janrizmlibres", // TODO: To be updated
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
