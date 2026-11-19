import Link from "next/link";
import { asset } from "@/lib/asset";
import { site } from "@/lib/site";
import BackToTop from "./BackToTop";

const links = [
  { label: "home", href: "/" },
  { label: "work", href: "/work-grid" },
  { label: "story", href: "/story" },
  { label: "journal", href: "/journal" },
  { label: "apparel", href: "/apparel" },
  { label: "about", href: "/about" },
  { label: "contact", href: `mailto:${site.email}` },
];

// Full-height closing screen: role on the left, menu / socials / contact on the right, legal bar at the bottom.
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/media/brand/logo.png")} alt={`${site.name} logo`} className="footer__logo" loading="lazy" />
          <h2 className="footer__role sans">
          {site.role.map((line) => (
            <span key={line}>{line}</span>
          ))}
          </h2>
        </div>
        <div className="footer__cols">
          <div>
            <h4>menu</h4>
            <ul>
              {links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="bracket">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>socials</h4>
            <ul>
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="bracket">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__contact">
            <h4>get in touch</h4>
            <ul>
              <li>
                <a href={`mailto:${site.email}`} className="wipe">
                  {site.email}
                </a>
              </li>
              {site.phone && (
                <li>
                  <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="wipe">
                    {site.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        <span>
          ®{new Date().getFullYear()} All Rights Reserved | &ldquo;{site.name}.&rdquo;
        </span>
        <span className="footer__legal">
          <Link href="/privacy-policy" className="wipe">
            privacy policy
          </Link>
          <Link href="/terms-of-use" className="wipe">
            terms of use
          </Link>
        </span>
        <BackToTop />
      </div>
    </footer>
  );
}
