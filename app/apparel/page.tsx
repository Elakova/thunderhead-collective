import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { asset } from "@/lib/asset";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apparel — Coming soon",
  description: `${site.name} apparel. The first drop is in the works.`,
};

const notify = `mailto:${site.email}?subject=${encodeURIComponent("Notify me — Thunderhead apparel")}&body=${encodeURIComponent("Let me know when the first drop is live.")}`;
const instagram = site.socials.find((s) => s.label === "instagram");

export default function Apparel() {
  return (
    <>
      <main className="apparel">
        <section className="apparel__hero">
          <video src={asset("/media/fight-film-loop.mp4")} poster={asset("/media/fight-film.jpg")} muted loop playsInline autoPlay preload="auto" aria-hidden />
          <div className="apparel__content">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/media/brand/logo.png")} alt={`${site.name} logo`} className="apparel__logo" />
            <p className="apparel__eyebrow">Thunderhead Apparel · Drop 01</p>
            <h1 className="apparel__title sans">Coming soon.</h1>
            <p className="apparel__lede">Built in the gym, made for the street. The first drop is in production.</p>
            <div className="btn-row btn-row--center">
              <a href={notify} className="btn btn--solid">
                Notify me
              </a>
              {instagram && (
                <a href={instagram.href} target="_blank" rel="noreferrer" className="btn">
                  Follow on Instagram
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Scrolling ticker */}
        <div className="ticker" aria-hidden>
          <div className="ticker__track">
            {Array.from({ length: 2 }).map((_, k) => (
              <span key={k}>
                {Array.from({ length: 6 }).map((__, i) => (
                  <span key={i}>
                    Coming soon <i>⚡</i> Thunderhead Apparel <i>⚡</i>{" "}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <Reveal className="apparel__note">
          <p className="eyebrow">What to expect</p>
          <p className="prose-p">
            Limited runs designed by the same team behind our films — heavyweight tees, hoodies and training gear that carry the Thunderhead mark. Sign up to hear first when the drop goes live.
          </p>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
