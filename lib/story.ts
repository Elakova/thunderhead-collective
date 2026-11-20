import { asset } from "./asset";

// Copy and media for the /story page. Every line here is placeholder — rewrite it in your own voice.

export type Chapter = {
  eyebrow: string;
  title: string;
  body: string[];
  image: string;
  side: "left" | "right"; // which side the image sits on
  ctas?: { label: string; href: string }[];
};

export const story = {
  hero: {
    video: asset("/media/fight-film-loop.mp4"),
    poster: asset("/media/fight-film.jpg"),
    statement: "Every frame is a decision. We make each one for the story.",
  },

  vision: {
    eyebrow: "Our approach",
    title: "Images that feel lived in, not staged",
    body: [
      "We started with a borrowed camera and a habit of filming the people around us. That instinct never left: the best shots usually happen in the gaps between takes, when nobody is performing.",
      "Today we direct and shoot sport films, documentaries and commercials, but the goal is the same on every set — find the honest moment, light it with care, and get out of its way.",
    ],
  },

  chapters: [
    {
      eyebrow: "The craft",
      title: "Light first, then everything else",
      body: [
        "Most of our prep happens before a camera is unpacked. We scout at the hour we'll shoot, study how the light falls, and build the plan around it rather than against it.",
        "On the day that means fewer lights, faster setups and more time for the people in front of the lens.",
      ],
      image: asset("/media/allianz-cyber-protect.jpg"),
      side: "right",
      ctas: [
        { label: "View work", href: "/work-grid" },
        { label: "Read the journal", href: "/journal" },
      ],
    },
    {
      eyebrow: "Collaboration",
      title: "Small crews, clear roles, no egos",
      body: [
        "We like working as a tight team that trusts each other. Everyone knows the intention behind a shot, so decisions on set are quick and the energy stays on the work.",
        "Whether it's a two-person documentary or a full commercial crew, we bring the same calm, prepared approach.",
      ],
      image: asset("/media/bts-crew.jpg"),
      side: "left",
    },
  ] satisfies Chapter[],

  values: {
    title: "What we stand for",
    intro: "Three principles shape how we prepare, how we run a set and how we treat the people we work with.",
    items: [
      { icon: "eye", title: "Patience", body: "Wait for the light, wait for the moment, and never rush a performance. Good images reward the people who stay." },
      { icon: "lens", title: "Honesty", body: "Tell the story that's really there. Clear about budgets, clear about what's possible, clear in feedback." },
      { icon: "frame", title: "Craft", body: "Sweat the details nobody notices — the cut point, the grade, the sound bed — because together they're what people feel." },
    ],
  },

  feature: {
    eyebrow: "Giving back",
    title: "Free workshops for first-time filmmakers",
    body: [
      "A few times a year we run hands-on weekend workshops for young people who want to make films but have never had access to equipment.",
      "We cover the basics of camera, light and sound, then everyone leaves having shot and cut a short piece of their own.",
    ],
    image: asset("/media/awe-programme.jpg"),
    side: "right",
    ctas: [{ label: "Get in touch", href: "mailto:" }],
  } satisfies Chapter,

  closing: {
    video: asset("/media/southern-invasion-loop.mp4"),
    poster: asset("/media/southern-invasion.jpg"),
    statement: "Let's make something worth watching",
    ctas: [
      { label: "View work", href: "/work-grid" },
      { label: "Get in touch", href: "mailto:" },
    ],
  },
};
