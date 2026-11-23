// Journal (blog) posts: our thinking on video production, startups and ideas, illustrated with our own photography.
// Add a post by adding an object below and a cover image at /public/media/journal/<slug>.jpg.

import { asset } from "./asset";

export const journalCategories = ["Agency", "Startups", "Ideation", "Process", "Notes"] as const;
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
  excerpt: string;
  cover: string;
  featured?: boolean;
  body: Block[];
};

const cover = (slug: string) => asset(`/media/journal/${slug}.jpg`);

const img = (name: string, caption: string): Block => ({ type: "img", src: asset(`/media/journal/${name}.jpg`), caption });

const posts: Omit<Post, "cover">[] = [
  {
    slug: "collective-not-production-house",
    title: "Why we built a collective, not a production house",
    category: "Agency",
    featured: true,
    excerpt: "No fixed headcount, no overheads to feed, and the right crew for every job. How we're set up, and why it makes better films.",
    body: [
      { type: "p", text: "A traditional production house has to keep its people busy and its studio paid for. Over time that shapes the work: you pitch what your team already does and your kit already shoots. We wanted the opposite. Every project starts with the story, and the crew is built around it." },
      { type: "h2", text: "A small core, a wide network" },
      { type: "p", text: "Thunderhead is a small core that directs, shoots and edits, with a trusted network of specialists who come in when the work calls for them: sound recordists, gaffers, drone operators, colourists, motion designers. A fight film and a corporate documentary need very different people. Now neither has to settle for the wrong ones." },
      img("miyajima-ferry", "Miyajima, Japan."),
      { type: "h2", text: "What clients actually get" },
      { type: "p", text: "Fewer layers between the idea and the camera. The person who hears your brief is the person who directs the shoot and sits in the edit. Nothing gets lost in a handover, because there isn't one." },
      { type: "p", text: "It's also leaner. Without a building and a payroll to cover, more of the budget ends up on screen, which is where it should be." },
      { type: "quote", text: "The crew should fit the story. Never the other way round." },
      { type: "h2", text: "The trade-off" },
      { type: "p", text: "A collective only works if the network is genuinely good and genuinely trusted. That takes years of shooting together, and we protect it carefully. New collaborators start on smaller jobs, and the standard doesn't move." },
      img("miyajima-torii", "Itsukushima Shrine, Miyajima."),
    ],
  },
  {
    slug: "startup-first-brand-film",
    title: "Your first brand film: what a startup actually needs",
    category: "Startups",
    excerpt: "Not a sizzle reel, not a 30-second ad. The one film an early-stage company should make first, and how to brief it.",
    body: [
      { type: "p", text: "Most founders come to us asking for an \"explainer\" or a \"hype video\". Usually what they need is simpler and much more useful: a short film that shows who's behind the company and why they're doing it." },
      { type: "h2", text: "Sell the founders before the features" },
      { type: "p", text: "At the early stage, your product will change. Your pricing will change. Your deck will change every week. What won't change is the people and the problem they can't stop thinking about. A film built on that stays true long after the feature list is out of date." },
      { type: "p", text: "It works across every audience a startup has: investors deciding whether to back you, early hires deciding whether to join you, and first customers deciding whether to trust you." },
      { type: "h2", text: "How to brief it" },
      { type: "p", text: "Skip the mood board. Tell us three things: the moment you knew this had to exist, who you're building it for, and what the world looks like if you win. Everything else, we can find on the day." },
      { type: "quote", text: "Your product will change. Your reason for building it won't. Film that." },
      { type: "p", text: "Keep it under two minutes, make sure it works with the sound off, and cut a 30-second version for social from the same footage. That's one shoot doing the work of three." },
    ],
  },
  {
    slug: "testing-ideas",
    title: "Ideas are cheap. Here's how we test ours",
    category: "Ideation",
    excerpt: "Every pitch starts with too many ideas. Four questions we use to kill most of them before a client ever sees them.",
    body: [
      { type: "p", text: "Coming up with ideas isn't the hard part. A good session leaves us with twenty. The hard part is knowing which two deserve a client's money, so every idea goes through the same four questions before it leaves the room." },
      { type: "h2", text: "1. Can we say it in one sentence?" },
      { type: "p", text: "If the idea needs a paragraph, it isn't an idea yet, it's a mood. \"A boxer's last training camp, told only through his corner team\" is an idea. \"Gritty, emotional, real\" is not." },
      img("aso-horses", "Aso, Japan."),
      { type: "h2", text: "2. Would anyone watch it if it weren't an ad?" },
      { type: "p", text: "This is the bar for sport and documentary. If the story only works because a brand paid for it, the audience will feel it in the first five seconds." },
      { type: "h2", text: "3. Can we actually shoot it?" },
      { type: "p", text: "Budget, access, schedule, weather. A brilliant idea that needs a stadium we can't get is worth less than a good one we can deliver perfectly. We'd rather say so in the pitch than on the shoot day." },
      img("aso-ridge", "Aso, Japan."),
      { type: "h2", text: "4. Does it get better when we cut it down?" },
      { type: "p", text: "Strong ideas survive the 15-second cutdown. Weak ones only work at full length, with everything explained. If the core image still lands in a single frame, we keep it." },
      img("aso-grass", "Aso, Japan."),
    ],
  },
  {
    slug: "pre-production",
    title: "Pre-production is where films are won",
    category: "Process",
    excerpt: "The shoot day gets the attention, but the film is decided weeks earlier. What we lock down before a camera comes out of its case.",
    body: [
      { type: "p", text: "Clients often see the shoot day as the main event. For us, it's mostly execution. By the time we roll, the important decisions should already be made." },
      { type: "h2", text: "What we lock before the shoot" },
      { type: "p", text: "The one-line idea, agreed in writing. The audience and where they'll watch: phone, cinema screen or conference hall. A shot list ranked by priority, so we know what to drop if the day runs short. Every location scouted at the hour we'll shoot it. And a plan B for anything outdoors." },
      { type: "p", text: "For documentary and sport, add one more: time with the people on camera before the camera is there. The trust you build in that conversation shows up in every frame." },
      img("cedar-forest", "Japan."),
      { type: "quote", text: "Every hour of prep saves three on set and five in the edit." },
      { type: "h2", text: "Why it saves money" },
      { type: "p", text: "Shoot days are the most expensive days in any production: crew, kit, locations and talent all on the clock at once. Prep is cheap. It's just a few of us with a calendar and a map. Moving problems from the shoot day into prep is the single best way to protect a budget." },
    ],
  },
  {
    slug: "video-on-a-seed-budget",
    title: "Video on a seed budget: spend where it shows",
    category: "Startups",
    excerpt: "When every dollar counts, production value isn't about more kit. Where we put a small budget, and where we cut.",
    body: [
      { type: "p", text: "Early-stage companies rarely have big video budgets, and they shouldn't. The good news is that what makes a film feel expensive is rarely the camera." },
      { type: "h2", text: "Spend on these" },
      { type: "p", text: "Sound, first and always. Audiences forgive soft focus; they don't forgive bad audio. Then the edit: pacing, music and colour are where an ordinary shoot becomes a film. Then one great location over three average ones." },
      img("volcano-road", "Aso, Japan."),
      { type: "h2", text: "Cut these" },
      { type: "p", text: "Extra shoot days, which a tighter plan usually removes. Big crews, because a small team moves faster and makes people on camera more relaxed. Visual effects the story doesn't need." },
      { type: "h2", text: "Plan for reuse" },
      { type: "p", text: "Shoot with the cutdowns in mind: vertical framings, clean B-roll, lines that stand on their own. A single well-planned day can feed a launch film, a recruiting video and months of social content." },
      { type: "quote", text: "Production value comes from decisions, not equipment." },
    ],
  },
  {
    slug: "the-brief-behind-the-brief",
    title: "The brief behind the brief",
    category: "Ideation",
    excerpt: "Clients ask for a video. What they need is a result. How we get from one to the other in the first conversation.",
    body: [
      { type: "p", text: "\"We need a 60-second video for our launch.\" That's a format, not a brief. Before we talk about cameras or concepts, we try to find the business problem the video is meant to solve." },
      { type: "h2", text: "Questions we always ask" },
      { type: "p", text: "What should someone do after watching? Who has to approve this, and what are they worried about? What have you made before, and why didn't it work? If this video does its job, what changes in six months?" },
      { type: "p", text: "The answers often change the project completely. A launch video becomes a customer documentary. A brand film becomes a series of short interviews. Sometimes the honest answer is that video isn't the right tool, and we'll say so." },
      { type: "quote", text: "The first brief is a starting point, not a specification." },
      { type: "h2", text: "Write it back" },
      { type: "p", text: "We always finish by writing the brief back in our own words, one page with one idea on it. If the client reads it and says \"yes, exactly\", we're ready to start. If they hesitate, we've saved everyone weeks." },
    ],
  },
  {
    slug: "documentary-thinking",
    title: "Documentary thinking for brand stories",
    category: "Process",
    excerpt: "Scripts make brands sound like brands. What changes when you approach a commercial project the way you'd approach a documentary.",
    body: [
      { type: "p", text: "Most brand videos are written first and filmed second. The script is approved, then people on camera are asked to say it convincingly. It rarely works, because real people aren't actors and audiences can tell." },
      { type: "h2", text: "Find the story, don't write it" },
      { type: "p", text: "We flip the order. We research, interview and observe first, then build the story from what's actually there. The structure is planned. The words belong to the people saying them." },
      img("nagasaki-bench", "Nagasaki, Japan."),
      { type: "h2", text: "Respect comes first" },
      { type: "p", text: "Documentary methods come with documentary responsibilities. People should know how they'll be portrayed, see their part before it goes public, and never be made to look smaller for the sake of a cut." },
      { type: "quote", text: "Real people saying real things will always beat a perfect script." },
      { type: "p", text: "It takes more trust from the client, because the final words aren't known on day one. In return they get a film people believe, and that's the whole point of making one." },
    ],
  },
  {
    slug: "one-shoot-many-assets",
    title: "One shoot, many assets",
    category: "Notes",
    excerpt: "A hero film is only the beginning. How we plan a single production day so it keeps paying off for months.",
    body: [
      { type: "p", text: "Most brands commission one video and then wonder why their channels go quiet a week later. The shoot day is the most expensive part of any production, so we plan every one to deliver far more than a single film." },
      img("midday-stop", "Japan."),
      { type: "h2", text: "Plan the whole family" },
      { type: "p", text: "Before the shoot we map everything the footage needs to become: the hero film, a 30-second cutdown, vertical edits for social, stills for press and the website, and a set of clean B-roll the client can use for the rest of the year." },
      img("unzen-hillside", "Unzen, Japan."),
      { type: "h2", text: "Shoot for every format" },
      { type: "p", text: "That changes how we work on the day. We frame with room for vertical crops, record interview answers that stand on their own, and take stills between setups. It costs a little more time on set and saves a second shoot later." },
      img("unzen-street", "Unzen, Japan."),
      { type: "quote", text: "Don't make a video. Make a library." },
    ],
  },
];

export const journal: Post[] = posts
  .map((p) => ({ ...p, cover: cover(p.slug) })); // shown in the order listed above

export const getPost = (slug: string) => journal.find((p) => p.slug === slug);

export const readingTime = (post: Post) => {
  const words = post.body.reduce((n, b) => n + ("text" in b ? b.text.split(/\s+/).length : 0), post.excerpt.split(/\s+/).length);
  return Math.max(1, Math.round(words / 200));
};
