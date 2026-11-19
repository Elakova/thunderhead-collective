"use client";

import { useEffect, useRef, useState } from "react";
import { hasCredits, type Project } from "@/lib/projects";
import CursorLabel, { follow } from "./CursorLabel";
import MetaRow from "./MetaRow";

const fmt = (s: number) => {
  if (!Number.isFinite(s)) return "00:00";
  const m = Math.floor(s / 60);
  return `${String(m).padStart(2, "0")}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
};

// Full-screen film with sound. Click anywhere to play/pause; the title row steps aside while
// it plays and a minimal control bar (play, time, scrubber, fullscreen) takes over.
export default function ProjectPlayer({ project: p }: { project: Project }) {
  const root = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const label = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hover, setHover] = useState(false);
  const [credits, setCredits] = useState(false);
  const [vimeoOn, setVimeoOn] = useState(false); // full film playing from Vimeo
  const vimeoSrc = p.vimeo
    ? `https://player.vimeo.com/video/${p.vimeo}?autoplay=1&title=0&byline=0&portrait=0&dnt=1&color=f5d000`
    : null;

  const toggle = () => {
    // Vimeo films open the full-HD player; the local loop behind the title is only a preview
    if (vimeoSrc) {
      setVimeoOn(true);
      return;
    }
    const v = video.current;
    if (!v) return;
    if (v.paused) {
      v.muted = false;
      v.play().catch(() => {});
    } else v.pause();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCredits(false);
        setVimeoOn(false);
      }
      if (e.key === " " && !credits && document.activeElement === document.body) {
        e.preventDefault();
        toggle();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [credits]);

  const openCredits = () => {
    video.current?.pause();
    setCredits(true);
  };

  const seek = (clientX: number) => {
    const v = video.current;
    const el = bar.current;
    if (!v || !el || !duration) return;
    const r = el.getBoundingClientRect();
    v.currentTime = Math.min(1, Math.max(0, (clientX - r.left) / r.width)) * duration;
  };

  const startScrub = (e: React.PointerEvent) => {
    e.stopPropagation();
    seek(e.clientX);
    const move = (ev: PointerEvent) => seek(ev.clientX);
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  const fullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = root.current;
    if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else if (el.requestFullscreen) el.requestFullscreen();
    else (video.current as HTMLVideoElement & { webkitEnterFullscreen?: () => void })?.webkitEnterFullscreen?.();
  };

  return (
    <section ref={root} className={`player${playing ? " is-playing" : ""}${started ? " is-started" : ""}${credits ? " is-credits" : ""}${vimeoOn ? " is-vimeo" : ""}`}>
      <video
        ref={video}
        className="player__video"
        src={vimeoSrc ? p.preview : p.video}
        poster={p.poster}
        loop
        playsInline
        muted={!!vimeoSrc}
        autoPlay={!!vimeoSrc}
        preload="auto"
        onPlay={() => {
          if (vimeoSrc) return; // background preview, not the film
          setPlaying(true);
          setStarted(true);
        }}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      />
      <button
        className="player__hit"
        aria-label={playing ? "Pause" : "Play with sound"}
        onClick={toggle}
        onMouseMove={(e) => follow(label.current, e)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      <CursorLabel ref={label} text={playing ? "pause" : "play"} visible={hover && !credits && !vimeoOn} />

      {vimeoOn && vimeoSrc && (
        <div className="player__vimeo">
          <iframe src={vimeoSrc} title={p.title} allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
          <button className="player__close bracket" onClick={() => setVimeoOn(false)}>
            close
          </button>
        </div>
      )}

      <div className="player__meta">
        <MetaRow project={p} as="h1" />
      </div>
      {hasCredits(p) && (
        <button className="player__credits-btn wipe" onClick={openCredits}>
          credits
        </button>
      )}

      <div className="player__controls">
        <button className="player__icon" onClick={toggle} aria-label={playing ? "Pause" : "Play"}>
          {playing ? (
            <svg width="10" height="12" viewBox="0 0 10 12" aria-hidden>
              <rect width="3" height="12" fill="currentColor" />
              <rect x="7" width="3" height="12" fill="currentColor" />
            </svg>
          ) : (
            <svg width="10" height="12" viewBox="0 0 10 12" aria-hidden>
              <path d="M0 0l10 6-10 6z" fill="currentColor" />
            </svg>
          )}
        </button>
        <span className="player__time">{fmt(time)}</span>
        <div ref={bar} className="player__bar" onPointerDown={startScrub} role="slider" aria-label="Seek" aria-valuemin={0} aria-valuemax={Math.round(duration)} aria-valuenow={Math.round(time)}>
          <div className="player__fill" style={{ width: `${duration ? (time / duration) * 100 : 0}%` }} />
        </div>
        <button className="player__icon" onClick={fullscreen} aria-label="Fullscreen">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
            <path d="M1 4V1h3M8 1h3v3M11 8v3H8M4 11H1V8" />
          </svg>
        </button>
      </div>

      <div className={`credits${credits ? " is-open" : ""}`} role="dialog" aria-modal="true" aria-hidden={!credits} aria-label={`${p.title} credits`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="credits__blur" src={p.poster} alt="" aria-hidden />
        <div className="credits__head">
          <h2 className="sans">About</h2>
          {p.description && <p>{p.description}</p>}
        </div>
        <div className="credits__cols">
          {!!p.deliverables?.length && (
            <div>
              <h4>deliverables</h4>
              <ul>
                {p.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          )}
          {!!p.production?.length && (
            <div>
              <h4>production</h4>
              <ul>
                {p.production.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          )}
          {!!p.credits?.length && (
            <div className="credits__crew">
              <h4>credits</h4>
              <ul>
                {p.credits.map((c) => (
                  <li key={c.role}>
                    <span>{c.role}</span>
                    <span>{c.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button className="credits__back" onClick={() => setCredits(false)} tabIndex={credits ? 0 : -1}>
          back to video
        </button>
      </div>
    </section>
  );
}
