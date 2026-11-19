import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { label: "home", href: "/" },
  { label: "work", href: "/work-grid" },
  { label: "story", href: "/story" },
  { label: "journal", href: "/journal" },
  { label: "about", href: "/about" },
  { label: "contact", href: `mailto:${site.email}` },
];

// Full-screen overlay: blurred page behind, oversized numbered links in the centre.
export default function Menu({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  const tab = open ? 0 : -1;
  return (
    <div className={`menu${open ? " is-open" : ""}`} aria-hidden={!open}>
      <nav className="menu__nav">
        {links.map((l, i) => (
          <div className="menu__item" key={l.label}>
            <Link href={l.href} onClick={onNavigate} tabIndex={tab} style={{ transitionDelay: open ? `${0.1 + i * 0.07}s` : "0s" }}>
              <span className="menu__num">[{String(i + 1).padStart(2, "0")}]</span>
              {l.label}
            </Link>
          </div>
        ))}
      </nav>
      <div className="menu__bar">
        <span>
          ®{new Date().getFullYear()} All Rights Reserved | &ldquo;{site.name}.&rdquo;
        </span>
        <span className="menu__legal">
          <Link href="/privacy-policy" onClick={onNavigate} className="wipe" tabIndex={tab}>
            privacy policy
          </Link>
          <Link href="/terms-of-use" onClick={onNavigate} className="wipe" tabIndex={tab}>
            terms of use
          </Link>
        </span>
        <span className="menu__loc">{site.location}</span>
      </div>
    </div>
  );
}
