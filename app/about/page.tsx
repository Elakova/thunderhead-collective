import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { clients } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

const Column = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h4>{title}</h4>
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  </div>
);

export default function About() {
  const { about } = site;
  return (
    <>
      <main className="about">
        <section className="about-head">
          <h1 className="sans">Info</h1>
          <Reveal>
            {about.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </section>
        <Reveal className="about-cols">
          <Column title="services" items={about.services} />
          <Column title="clients & agencies" items={clients} />
          {about.awards.length > 0 && <Column title="awards" items={about.awards} />}
          <div>
            <h4>get in touch</h4>
            <ul className="stack">
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
        </Reveal>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="portrait" src={about.portrait} alt={`Portrait of ${site.name}`} />
      </main>
      <Footer />
    </>
  );
}
