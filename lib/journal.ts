// Journal (blog) posts, illustrated with our own photography.
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

const img = (name: string, caption: string): Block => ({ type: "img", src: asset(`/media/journal/${name}.jpg`), caption });

const posts: Omit<Post, "cover">[] = [
  {
    slug: "eight-days-in-japan",
    title: "Eight days, two bikes: Kyushu to Miyajima",
    category: "Behind the Scenes",
    date: "2026-10-15",
    featured: true,
    excerpt: "Grasslands, steam vents, shrine gates and a ferry to finish. A week on the road with one camera and no shot list.",
    body: [
      { type: "p", text: "From 7 to 14 October we rode across Kyushu and finished at Miyajima. There was no client, no brief and no shot list, just two bikes, one camera and whatever the road gave us each day." },
      { type: "p", text: "We do this on purpose. Commissioned work teaches you to deliver; trips like this teach you to see. Every photo in this journal comes from those eight days." },
      { type: "h2", text: "The route" },
      { type: "p", text: "A summit shrine above the islands. The grasslands of Aso and a shrine gate at dusk. The steam fields of Unzen. A slow day in Nagasaki. A gate on the shore. Then the ferry across to Miyajima for the last frames of the trip." },
      img("miyajima-ferry", "The Misen Maru, crossing to Miyajima."),
      { type: "h2", text: "Ending at the gate" },
      { type: "p", text: "Everyone photographs the great torii. We gave ourselves one rule: shoot it twice, once tight at 70mm and once wide, and keep only what told us something new. The tight frame isolates the gate; the wide one gives it back its sea and mountains." },
      img("miyajima-torii", "Itsukushima's torii at 70mm."),
      { type: "quote", text: "Commissioned work teaches you to deliver. Trips like this teach you to see." },
      { type: "p", text: "We came home with fewer photos than we expected and more ideas than we can use. That's usually the sign a trip worked." },
    ],
  },
  {
    slug: "two-lenses-one-bike",
    title: "Two lenses, one bike: our travel kit",
    category: "Gear",
    date: "2026-10-16",
    excerpt: "Everything we shot in Japan came from one body and two lenses. What we packed, and why we'd pack it again.",
    body: [
      { type: "p", text: "On a motorbike every gram counts and every minute spent unpacking is a minute the light keeps moving. So the kit was simple: a Sony A7 IV, a 24mm f/2.8 prime and a Sigma 28–70mm f/2.8." },
      { type: "h2", text: "The 24mm for the open road" },
      { type: "p", text: "The first days, from the summit shrine to the Aso grasslands, were shot almost entirely on the 24mm. It's small enough to live on the camera inside a tank bag, and wide enough to put the bike, the road and the mountain in one frame." },
      img("volcano-road", "On the road through Aso, 24mm."),
      { type: "h2", text: "The zoom for towns and details" },
      { type: "p", text: "In Unzen, Nagasaki and Miyajima we switched to the 28–70. Streets and crowds need reach: a step closer to a doorway, a step back from a stranger. A zoom does that without asking anyone to wait." },
      { type: "p", text: "What we left at home: a tripod, a second body and anything that needed charging every night. We didn't miss any of it." },
    ],
  },
  {
    slug: "above-the-islands",
    title: "A shrine above the islands",
    category: "Locations",
    date: "2026-10-07",
    excerpt: "Day one: a climb to a summit torii, islands scattered below, and the walk back down through the cedars.",
    body: [
      { type: "p", text: "The trip started with a climb. At the top, a stone torii with a straw rope frames the whole bay: islands scattered across blue water, as far as the haze allows." },
      { type: "p", text: "Midday light is usually something we avoid. Here it worked. Hard sun on the stone, deep shadows in the hills, and colour that didn't need any help. We stopped down to f/8 and let the scene do the work." },
      { type: "h2", text: "The way down" },
      { type: "p", text: "The path back ran through tall cedar. Under the canopy the light dropped by several stops, and the only bright thing left was the sun catching the trunks from the side." },
      img("cedar-forest", "Cedar forest on the way down."),
      { type: "p", text: "Two frames, forty minutes apart, with completely different light. A good reminder to keep the camera out after the shot you came for." },
    ],
  },
  {
    slug: "aso-grasslands",
    title: "Forty minutes in the Aso grasslands",
    category: "Locations",
    date: "2026-10-08",
    excerpt: "Horses, volcanic cones and pampas grass catching the late sun. How we worked a single afternoon in one place.",
    body: [
      { type: "p", text: "We reached the grasslands of Aso late in the afternoon and stayed as the light came down. Every frame in this post was taken within about forty minutes." },
      img("aso-horses", "The horses of Aso, lined up for feed."),
      { type: "p", text: "We started with the horses lined up at their feed buckets, then walked out into the grass. With nothing tall in the landscape, the clouds became the subject, and we shot wide to give them room." },
      img("aso-ridge", "The volcanic ridge under a big sky."),
      { type: "h2", text: "Turning into the sun" },
      { type: "p", text: "As the sun dropped we turned around and shot into it. Backlit pampas grass glows in a way front light never gives you, and the small cone on the horizon became a silhouette instead of a postcard." },
      img("aso-grass", "Pampas grass, backlit, with a cone on the horizon."),
      { type: "quote", text: "When you think you've finished with a place, turn around." },
    ],
  },
  {
    slug: "the-gate-at-dusk",
    title: "The gate at dusk",
    category: "Process",
    date: "2026-10-08",
    excerpt: "Arriving as the light was going, with no tripod. Why we shot it anyway, and what we exposed for.",
    body: [
      { type: "p", text: "We reached the shrine as the evening light was fading. The sky still held some brightness, the gate was in shadow and a few lamps glowed through the entrance." },
      { type: "p", text: "No tripod, so we held the camera at 1/100, opened up to f/3.5 and let the ISO climb to 1000. A modern sensor handles that easily; a blurred frame is much harder to rescue than a little noise." },
      { type: "h2", text: "Expose for the sky, protect the lamps" },
      { type: "p", text: "The temptation is to brighten the whole frame until the wood shows every detail. We did the opposite: kept the sky right, let the building fall dark and trusted the warm light in the doorway to lead the eye." },
      { type: "p", text: "It's the same thinking we use on night shoots for film. Decide which light matters, protect it, and let the rest go." },
    ],
  },
  {
    slug: "chasing-steam-in-unzen",
    title: "Chasing steam in Unzen",
    category: "Process",
    date: "2026-10-10",
    excerpt: "Volcanic vents, a walkway through the steam and an onsen town in late light. Notes on shooting something that won't hold still.",
    body: [
      { type: "p", text: "Unzen's steam fields change by the second. A vent that fills the frame one moment is gone the next, so we stopped trying to wait for the perfect plume and started shooting in short bursts." },
      img("midday-stop", "A midday stop on the way in."),
      { type: "h2", text: "Give the steam something to cross" },
      { type: "p", text: "Steam on its own reads as haze. It needs a hard edge behind it: the wooden walkway, a dark hillside, a line of autumn trees. We framed those first and let the steam move through." },
      img("unzen-hillside", "Autumn colour above the vents."),
      { type: "p", text: "Late afternoon helped. Low sun from the side picks out every curl of vapour; overhead light flattens it into fog." },
      { type: "h2", text: "Into town" },
      { type: "p", text: "Down in the onsen town, the late sun was catching one narrow street. We switched to the long end of the zoom and flattened the buildings together." },
      img("unzen-street", "Late light in the onsen town."),
    ],
  },
  {
    slug: "nagasaki-slowly",
    title: "Nagasaki, slowly",
    category: "Notes",
    date: "2026-10-11",
    excerpt: "Midday at the Peace Statue, and a photo of two strangers on a bench that we almost didn't take.",
    body: [
      { type: "p", text: "Some places ask for a slower camera. In Nagasaki we took our time at the Peace Park and put the camera down more often than we picked it up." },
      { type: "p", text: "The Peace Statue is a landmark, and landmarks are easy to photograph badly. We shot it in its setting instead: the trees, the visitors, a big sky. That says more about how the place feels than a tight portrait of the statue." },
      { type: "h2", text: "The bench" },
      { type: "p", text: "A few minutes' walk away, two people sat on a bench looking out over the city. We took one frame from behind, kept them small, and moved on." },
      img("nagasaki-bench", "Looking out over the city, a few minutes from the Peace Park."),
      { type: "quote", text: "Documentary work starts with respect. Take less, and make what you take count." },
    ],
  },
  {
    slug: "a-gate-on-the-shore",
    title: "A gate on the shore",
    category: "Notes",
    date: "2026-10-12",
    excerpt: "One frame, one rule: put the path in the middle. A short note on symmetry and when to use it.",
    body: [
      { type: "p", text: "A stone path runs across the rocks to a torii standing at the water's edge. Composition doesn't get much simpler than that, so we didn't try to be clever." },
      { type: "p", text: "Symmetry is often called boring. Used on purpose, it's calm and deliberate, and it draws the eye straight down the path to the gate and the island behind it. We centred the frame, went wide on the 24mm and kept the horizon level." },
      { type: "p", text: "In our film work we save symmetrical frames for moments that need weight: an arrival, a decision, an ending. Here the whole scene was that moment." },
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
