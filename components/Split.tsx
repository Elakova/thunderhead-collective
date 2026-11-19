import Link from "next/link";
import type { Chapter } from "@/lib/story";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

// Image on one side, eyebrow + heading + copy (+ optional buttons) on the other.
export default function Split({ chapter: c }: { chapter: Chapter }) {
  return (
    <section className={`split split--${c.side}`}>
      <Reveal className="split__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={c.image} alt="" loading="lazy" />
      </Reveal>
      <Reveal className="split__text" delay={0.1}>
        <p className="eyebrow">{c.eyebrow}</p>
        <h2 className="split__title sans">{c.title}</h2>
        {c.body.map((p) => (
          <p key={p} className="prose-p">
            {p}
          </p>
        ))}
        {c.ctas && (
          <div className="btn-row">
            {c.ctas.map((b) => (
              <CTA key={b.label} {...b} />
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}

export function CTA({ label, href, solid = false }: { label: string; href: string; solid?: boolean }) {
  const resolved = href === "mailto:" ? `mailto:${site.email}` : href;
  const cls = `btn${solid ? " btn--solid" : ""}`;
  return resolved.startsWith("/") ? (
    <Link href={resolved} className={cls}>
      {label}
    </Link>
  ) : (
    <a href={resolved} className={cls}>
      {label}
    </a>
  );
}
