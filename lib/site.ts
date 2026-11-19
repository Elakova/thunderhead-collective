// Everything personal about the site lives here. Edit these values to make it yours.
export const site = {
  name: "Thunderhead Collective",
  role: ["Director &", "Cinematographer"],
  description: "Director & cinematographer — films, commercials and music videos.",
  timezone: "Asia/Singapore", // IANA zone shown in the header clock
  location: "Singapore", // shown at the bottom of the menu
  email: "chrishor988@gmail.com",
  phone: "", // leave empty to hide the phone number everywhere
  socials: [
    { label: "instagram", href: "https://instagram.com/" },
    { label: "vimeo", href: "https://vimeo.com/" },
    { label: "linkedin", href: "https://linkedin.com/" },
  ],
  about: {
    intro: [
      "Thunderhead Collective is a sport and documentary film collective based in Singapore, crafting cinematic stories and visual experiences. We make commercials, brand films and music videos that connect with people through emotion and craft.",
      "Currently available for both short- and long-term collaborations.",
    ],
    portrait: "/media/portrait.jpg",
    services: [
      "Sport films",
      "Documentaries",
      "Commercials",
      "Event coverage",
      "Motion graphics",
      "Social content",
      "Creative direction",
      "Cinematography",
      "Color grading",
    ],
    // Clients are pulled from lib/projects.ts automatically.
    awards: [] as string[], // add real awards here, e.g. "Festival name — Award, 2025"; the section hides while empty
  },
};

export const categories = ["Sport", "Documentary", "Commercial", "Event", "Motion"] as const;
export type Category = (typeof categories)[number];
