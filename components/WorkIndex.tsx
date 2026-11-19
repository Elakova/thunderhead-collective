"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { Project } from "@/lib/projects";
import { categories, type Category } from "@/lib/site";
import CursorLabel, { follow } from "./CursorLabel";
import Reveal from "./Reveal";

type Filter = "all" | Category;

const Arrow = () => (
  <svg className="arrow" width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden>
    <path d="M0 7h14M8 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export default function WorkIndex({ projects, view }: { projects: Project[]; view: "grid" | "list" }) {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main id="work-top">
      <div className="work-head">
        <div className="filters">
          {(["all", ...categories] as Filter[]).map((f) => (
            <button key={f} className={filter === f ? "is-active" : ""} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
        <div className="work-head__bar">
          <h1 className="work-head__title sans">
            All Work<sup>[{shown.length}]</sup>
          </h1>
          <div className="views">
            <Link href="/work-grid" className={view === "grid" ? "is-active" : ""}>
              grid
            </Link>
            <span className="views__sep">|</span>
            <Link href="/work-list" className={view === "list" ? "is-active" : ""}>
              list
            </Link>
          </div>
        </div>
      </div>
      {view === "grid" ? <Grid projects={shown} key={filter} /> : <List projects={shown} key={filter} />}
    </main>
  );
}

function Grid({ projects }: { projects: Project[] }) {
  const label = useRef<HTMLSpanElement>(null);
  const [hovering, setHovering] = useState(false);

  return (
    <div className="grid" onMouseMove={(e) => follow(label.current, e)}>
      {projects.map((p, i) => (
        <Reveal key={p.slug} className="reveal--zoom" delay={(i % 2) * 0.08}>
          <Card project={p} onHover={setHovering} />
        </Reveal>
      ))}
      <CursorLabel ref={label} text="play" visible={hovering} />
    </div>
  );
}

// Paused on its first frame; plays muted on hover with corner brackets and swapped details.
function Card({ project: p, onHover }: { project: Project; onHover: (v: boolean) => void }) {
  const video = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  const enter = () => {
    setActive(true);
    onHover(true);
    video.current?.play().catch(() => {});
  };
  const leave = () => {
    setActive(false);
    onHover(false);
    video.current?.pause();
  };

  return (
    <Link href={`/works/${p.slug}`} className={`card${active ? " is-active" : ""}`} onMouseEnter={enter} onMouseLeave={leave}>
      <div className="card__media">
        <video ref={video} src={p.preview} poster={p.poster} muted loop playsInline preload="metadata" />
        <span className="corners" aria-hidden>
          <i />
          <i />
          <i />
          <i />
        </span>
      </div>
      <div className="card__info">
        <p className="card__swap">
          <span>
            {p.title}
            <br />
            <span className="muted">{p.client ?? p.category}</span>
          </span>
          <span>
            {p.title}
            <br />
            {p.duration}
          </span>
        </p>
        <p className="card__swap">
          <span>{p.year}</span>
          <span>{p.location ?? p.category}</span>
        </p>
      </div>
    </Link>
  );
}

// Rows dim except the one under the pointer, which indents, gains an underline and tilts its arrow.
function List({ projects }: { projects: Project[] }) {
  return (
    <ul className="list">
      {projects.map((p, i) => (
        <Reveal as="li" key={p.slug} delay={i * 0.04}>
          <Link href={`/works/${p.slug}`}>
            <span>{i + 1}</span>
            <span className="list__title">{p.title}</span>
            <span className="list__client">{p.client ?? p.category}</span>
            <span className="list__end">
              {p.year}
              <Arrow />
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
