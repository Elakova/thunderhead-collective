"use client";

import { forwardRef } from "react";

// Small bracketed label ("[PLAY]" / "[PAUSE]") that trails the pointer over media.
// The parent moves it by writing left/top on the forwarded ref.
const CursorLabel = forwardRef<HTMLSpanElement, { text: string; visible: boolean }>(function CursorLabel({ text, visible }, ref) {
  return (
    <span ref={ref} className={`cursor-label${visible ? " is-visible" : ""}`} aria-hidden>
      [{text}]
    </span>
  );
});

export default CursorLabel;

// Shared mouse-move handler: positions the label at the pointer.
export function follow(label: HTMLElement | null, e: React.MouseEvent) {
  if (!label) return;
  label.style.left = `${e.clientX}px`;
  label.style.top = `${e.clientY}px`;
}
