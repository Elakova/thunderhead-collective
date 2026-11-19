// Journal (blog) posts. Placeholder writing — replace with your own posts.
// Add a post by adding an object below and a cover image at /public/media/journal/<slug>.jpg.

import { asset } from "./asset";

export const journalCategories = ["Behind the Scenes", "Process", "Gear", "Locations", "Notes"] as const;
export type JournalCategory = (typeof journalCategories)[number];

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "img"; src: string; caption?: string };

export type Post = {
  slug: string;
  title: string;
  category: JournalCategory;
  date: string; // ISO yyyy-mm-dd
  excerpt: string;
  cover: string;
  featured?: boolean;
  body: Block[];
};

const cover = (slug: string) => asset(`/media/journal/${slug}.jpg`);

const posts: Omit<Post, "cover">[] = [
  {
    slug: "on-set-lisbon",
    title: "Five days on the water: making After the Tide",
    category: "Behind the Scenes",
    date: "2026-09-28",
    featured: true,
    excerpt: "How a four-person crew, one fishing boat and a forecast we couldn't trust turned into our favourite short so far.",
    body: [
      { type: "p", text: "We had five shooting days and a weather window that changed every morning. The plan was simple on paper: follow one family through the week after a storm, and let the sea decide the schedule." },
      { type: "h2", text: "Planning for the unplannable" },
      { type: "p", text: "Instead of a fixed shot list we built three versions of every day — calm, rough and grounded — so the crew always knew the next move when conditions changed." },
      { type: "quote", text: "The best scene in the film happened while we were waiting for the light to come back." },
      { type: "img", src: asset("/media/bts-crew.jpg"), caption: "Behind the scenes on an interview shoot." },
      { type: "p", text: "We shot almost everything handheld on a single zoom, which kept us light enough to move with the family instead of asking them to wait for us." },
      { type: "h2", text: "What we'd do again" },
      { type: "p", text: "Spend the first day without a camera. The trust we built on that day showed up in every frame afterwards." },
    ],
  },
  {
    slug: "lens-choices",
    title: "Why we keep coming back to one lens",
    category: "Gear",
    date: "2026-09-10",
    excerpt: "Limiting ourselves to a single focal length made us better storytellers. Here's how we choose it per project.",
    body: [
      { type: "p", text: "For years we carried a full set of primes to every job. These days, most projects get one lens chosen in prep, and we stick with it unless the story forces a change." },
      { type: "h2", text: "A point of view, not a menu" },
      { type: "p", text: "One focal length gives the audience a consistent relationship with the subject. It also speeds up the set, because nobody waits for lens changes." },
      { type: "p", text: "We choose by asking how close the audience should feel to the people on screen, then test that distance in the location before we shoot." },
    ],
  },
  {
    slug: "color-notes",
    title: "Grading notes: building a look that lasts",
    category: "Process",
    date: "2026-08-22",
    excerpt: "Our approach to colour starts before the shoot. A few notes on references, restraint and working with a colourist.",
    body: [
      { type: "p", text: "A grade can't rescue a look that wasn't planned. We build a small reference board in prep and share it with the colourist before we roll." },
      { type: "h2", text: "Restraint over effects" },
      { type: "p", text: "The looks that age well are the quiet ones: controlled contrast, honest skin tones, and colour used to guide attention rather than decorate." },
    ],
  },
  {
    slug: "night-shoots",
    title: "Shooting at night with almost no lights",
    category: "Process",
    date: "2026-08-03",
    excerpt: "Practical lights, fast lenses and a lot of scouting — how we lit Midnight Transit with a two-light kit.",
    body: [
      { type: "p", text: "The city already had the light we wanted. Our job was to find it, add a touch where faces needed it, and keep the kit small enough to move between trains." },
      { type: "p", text: "We scouted every location at the exact hour we'd shoot, mapping which practicals we could control and which we had to work around." },
    ],
  },
  {
    slug: "sound-first",
    title: "Sound is half the picture",
    category: "Notes",
    date: "2026-07-18",
    excerpt: "Audiences forgive soft focus; they don't forgive bad sound. A few habits we bring to every shoot.",
    body: [
      { type: "p", text: "Room tone on every setup, wild lines when there's time, and a sound recordist who's involved from the first recce." },
      { type: "quote", text: "If a scene feels flat, try fixing the sound before you touch the picture." },
    ],
  },
  {
    slug: "storyboards",
    title: "Storyboards we actually use on set",
    category: "Process",
    date: "2026-07-02",
    excerpt: "Rough thumbnails beat pretty frames. How we sketch a sequence so the whole crew can read it at a glance.",
    body: [
      { type: "p", text: "Our boards are fast and ugly on purpose: stick figures, arrows for movement and one line about the intention of each shot." },
      { type: "p", text: "They fit on a single sheet per scene, which means the whole crew can carry the plan in a pocket." },
    ],
  },
  {
    slug: "gear-bag",
    title: "What's in our bag for a one-person shoot",
    category: "Gear",
    date: "2026-06-14",
    excerpt: "The compact kit we take when it's just one of us, a subject and a story — and what we've stopped bringing.",
    body: [
      { type: "p", text: "One body, two lenses, a small LED panel, a shotgun mic and a lav. Everything else is optional and usually stays home." },
      { type: "p", text: "The less we carry, the more attention we have left for the person in front of the camera." },
    ],
  },
  {
    slug: "location-scouting",
    title: "Scouting Essaouira for Salt & Iron",
    category: "Locations",
    date: "2026-05-29",
    excerpt: "Three days walking the medina before we shot a single frame, and why it was the best time we spent.",
    body: [
      { type: "p", text: "We spent the scout meeting the smiths, learning their routines and finding where the light entered each workshop through the day." },
      { type: "img", src: asset("/media/bai-world-kitchen.jpg"), caption: "A frame from Bai World Kitchen." },
      { type: "p", text: "By the time we filmed, the schedule followed the sun rather than a call sheet." },
    ],
  },
  {
    slug: "first-short",
    title: "Notes to ourselves before our first short",
    category: "Notes",
    date: "2026-05-08",
    excerpt: "Advice we wish we'd had when we started — written for anyone about to make their first film.",
    body: [
      { type: "p", text: "Finish it. A finished imperfect film teaches you more than a perfect one that lives in your head." },
      { type: "p", text: "Feed your crew well, protect your actors' time, and always shoot one more take for safety." },
    ],
  },
];

export const journal: Post[] = posts
  .map((p) => ({ ...p, cover: cover(p.slug) }))
  .sort((a, b) => b.date.localeCompare(a.date));

export const getPost = (slug: string) => journal.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

export const readingTime = (post: Post) => {
  const words = post.body.reduce((n, b) => n + ("text" in b ? b.text.split(/\s+/).length : 0), post.excerpt.split(/\s+/).length);
  return Math.max(1, Math.round(words / 200));
};
