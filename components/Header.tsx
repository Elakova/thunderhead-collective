"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import Clock from "./Clock";
import Menu from "./Menu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* The mark sits outside the header so the header's colour-inverting blend never recolours it */}
      <Link href="/" className="brandmark" aria-label={`${site.name} — home`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/media/brand/logo-sm.png" alt="" width={44} height={45} />
      </Link>
      <header className="header">
        <Link href="/" className="header__logo sans">
          &ldquo;{site.name}.&rdquo;
        </Link>
        <div className="header__right">
          <div className="header__meta">
            <Clock timezone={site.timezone} />
            <Link href="/work-grid" className="bracket">
              view work
            </Link>
          </div>
          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <span />
            <span />
          </button>
        </div>
      </header>
      <Menu open={open} onNavigate={() => setOpen(false)} />
    </>
  );
}
