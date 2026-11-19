"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Project } from "@/lib/projects";
import MetaRow from "./MetaRow";

// Stack of full-bleed, muted, looping videos. Each video drifts against the scroll (parallax)
// while its title row stays pinned near the middle.
export default function Reel({ projects }: { projects: Project[] }) {
  const sections = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const phone = window.matchMedia("(max-width: 809px)"); // phones show a static 3:2 frame
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      if (phone.matches) return;
      for (const s of sections.current) {
        if (!s) continue;
        const r = s.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) continue;
        const progress = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height))); // 0 entering → 1 leaving
        const range = r.height * 0.03; // max drift either way; matches the 3% of extra height in CSS
        const media = s.querySelector<HTMLElement>(".slide__media");
        if (media) media.style.transform = `translate3d(0, ${reduce ? 0 : (progress * 2 - 1) * range}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Only decode what's on screen.
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          const v = e.target.querySelector("video");
          if (!v) return;
          if (e.isIntersecting) v.play().catch(() => {});
          else v.pause();
        }),
      { rootMargin: "20% 0px" }
    );
    sections.current.forEach((s) => s && io.observe(s));

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <main className="reel">
      {projects.map((p, i) => (
        <section
          key={p.slug}
          ref={(el) => {
            sections.current[i] = el;
          }}
          className="slide"
        >
          <Link href={`/works/${p.slug}`} className="slide__link" aria-label={`${p.title} — ${p.client ?? p.category}`}>
            <video className="slide__media" src={p.preview} poster={p.poster} muted loop playsInline autoPlay={i === 0} preload={i < 2 ? "auto" : "metadata"} />
            <div className="slide__sticky">
              <MetaRow project={p} as={i === 0 ? "h1" : "h2"} />
            </div>
          </Link>
        </section>
      ))}
    </main>
  );
}
