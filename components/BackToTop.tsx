"use client";

export default function BackToTop() {
  return (
    <button className="back-to-top wipe" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <svg width="7" height="6" viewBox="0 0 7 6" aria-hidden>
        <path d="M3.5 0 7 6H0z" fill="currentColor" />
      </svg>
      back to top
    </button>
  );
}
