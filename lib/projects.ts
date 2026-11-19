import { asset } from "./asset";
import type { Category } from "./site";

export type Project = {
  slug: string;
  title: string;
  category: Category;
  duration: string; // mm:ss of the full film
  // Optional details — leave out what you don't want shown; empty cells simply stay blank.
  client?: string;
  location?: string;
  agency?: string; // shown next to the duration; falls back to the category
  year?: number;
  description?: string; // "About" paragraph in the credits panel
  deliverables?: string[];
  production?: string[];
  credits?: { role: string; name: string }[];
  // Media (generated from source-videos/ — see README):
  poster: string; // /media/<slug>.jpg
  preview: string; // /media/<slug>-loop.mp4 — 8s silent loop for the home reel and grid
  video?: string; // /media/<slug>.mp4 — full film with sound, for films not hosted on Vimeo
  vimeo?: string; // Vimeo video ID — when set, the project page plays the full-HD film from Vimeo
};

const media = (slug: string, vimeo?: string) => ({
  poster: asset(`/media/${slug}.jpg`),
  preview: asset(`/media/${slug}-loop.mp4`),
  // Vimeo-hosted films have no local full-length file
  video: vimeo ? undefined : asset(`/media/${slug}.mp4`),
});

type Base = Omit<Project, "poster" | "preview" | "video">;

// Order here = order on the home reel and work pages.
const base: Base[] = [
  { slug: "fight-film", title: "Fight Film", category: "Sport", duration: "00:46" },
  { slug: "southern-invasion", title: "Southern Invasion", category: "Sport", duration: "00:52", vimeo: "1248380868" },
  { slug: "bai-world-kitchen", title: "Bai World Kitchen", client: "Shopee", category: "Documentary", duration: "05:00" },
  { slug: "awe-programme", title: "AWE Programme", client: "NUS", category: "Documentary", duration: "05:58" },
  { slug: "allianz-cyber-protect", title: "360 Cyber Protect", client: "Allianz", category: "Documentary", duration: "03:09", vimeo: "1248379783" },
  { slug: "banking-circle-interview", title: "Banking Circle Interview", client: "Banking Circle", category: "Documentary", duration: "01:19", vimeo: "1248379781" },
  { slug: "raya-abang-garang", title: "3 Abang Garang", client: "Shopee", category: "Commercial", duration: "06:44", vimeo: "1248379848" },
  { slug: "dodol-pak-dollah", title: "Dodol Pak Dollah", client: "Shopee", category: "Commercial", duration: "07:55", vimeo: "1248379812" },
  { slug: "celine", title: "Celine", category: "Commercial", duration: "00:39", vimeo: "1248379780" },
  { slug: "sans-and-sans", title: "Sans & Sans", category: "Commercial", duration: "00:50", vimeo: "1248379782" },
  { slug: "volvo-s60", title: "S60 R-Design", client: "Volvo", category: "Commercial", duration: "01:46", vimeo: "1248379889" },
  { slug: "kensington", title: "Kensington", category: "Documentary", duration: "04:24" },
  { slug: "tian-si-jewellery", title: "Tian Si Jewellery", category: "Commercial", duration: "00:30" },
  { slug: "genting-skyworlds", title: "SkyWorlds & Skytropolis", client: "Shopee", category: "Commercial", duration: "02:57" },
  { slug: "token2049", title: "Token2049 Highlights", client: "Token2049", category: "Event", duration: "01:27", vimeo: "1248379843" },
  { slug: "bc-now", title: "BC Now", client: "Banking Circle", category: "Motion", duration: "00:39", vimeo: "1248380443" },
];

export const projects: Project[] = base.map((p) => ({ ...p, ...media(p.slug, p.vimeo) }));

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

// Distinct clients across the work, in reel order — used for the client roll.
export const clients = [...new Set(projects.map((p) => p.client).filter(Boolean))] as string[];

// True when the credits panel has something to show.
export const hasCredits = (p: Project) =>
  Boolean(p.description || p.deliverables?.length || p.production?.length || p.credits?.length);
