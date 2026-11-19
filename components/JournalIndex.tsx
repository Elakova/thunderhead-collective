"use client";

import Link from "next/link";
import { useState } from "react";
import { formatDate, journalCategories, type JournalCategory, type Post } from "@/lib/journal";
import Reveal from "./Reveal";

const PAGE = 6;
type Filter = "all" | JournalCategory;

export default function JournalIndex({ posts }: { posts: Post[] }) {
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const [filter, setFilter] = useState<Filter>("all");
  const [count, setCount] = useState(PAGE);

  const rest = posts.filter((p) => p !== featured && (filter === "all" || p.category === filter));
  const shown = rest.slice(0, count);

  return (
    <main className="journal">
      <header className="journal__head">
        <h1 className="sans">Journal</h1>
        <p>Notes from set. Behind every frame.</p>
      </header>

      <Link href={`/journal/${featured.slug}`} className="featured">
        <div className="featured__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={featured.cover} alt="" />
        </div>
        <div className="featured__text">
          <p className="eyebrow">{featured.category}</p>
          <h2 className="featured__title sans">{featured.title}</h2>
          <p className="prose-p muted">{featured.excerpt}</p>
          <span className="btn btn--solid">Read more</span>
        </div>
      </Link>

      <div className="pills" role="tablist" aria-label="Filter posts">
        {(["all", ...journalCategories] as Filter[]).map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={filter === c}
            className={`pill${filter === c ? " is-active" : ""}`}
            onClick={() => {
              setFilter(c);
              setCount(PAGE);
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="posts" key={filter}>
        {shown.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 0.08}>
            <PostCard post={p} />
          </Reveal>
        ))}
        {!shown.length && <p className="muted posts__empty">No posts in this category yet.</p>}
      </div>

      {count < rest.length && (
        <div className="btn-row btn-row--center">
          <button className="btn" onClick={() => setCount((c) => c + PAGE)}>
            Load more
          </button>
        </div>
      )}
    </main>
  );
}

export function PostCard({ post: p }: { post: Post }) {
  return (
    <Link href={`/journal/${p.slug}`} className="post-card">
      <div className="post-card__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.cover} alt="" loading="lazy" />
      </div>
      <p className="eyebrow">
        {p.category} <span className="post-card__date">· {formatDate(p.date)}</span>
      </p>
      <h3 className="post-card__title sans">{p.title}</h3>
    </Link>
  );
}
