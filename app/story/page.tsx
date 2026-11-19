import type { Metadata } from "next";
import BackgroundVideo from "@/components/BackgroundVideo";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Split, { CTA } from "@/components/Split";
import ValueIcon from "@/components/ValueIcon";
import { story } from "@/lib/story";

export const metadata: Metadata = { title: "Story", description: story.vision.title };

export default function Story() {
  const { hero, vision, chapters, values, feature, closing } = story;
  return (
    <>
      <main className="story">
        <BackgroundVideo video={hero.video} poster={hero.poster} className="bg-video--hero">
          <h1 className="statement sans">{hero.statement}</h1>
        </BackgroundVideo>

        <section className="vision">
          <Reveal>
            <p className="eyebrow">{vision.eyebrow}</p>
            <h2 className="vision__title sans">{vision.title}</h2>
            {vision.body.map((p) => (
              <p key={p} className="prose-p">
                {p}
              </p>
            ))}
          </Reveal>
        </section>

        {chapters.map((c) => (
          <Split key={c.title} chapter={c} />
        ))}

        <section className="values">
          <Reveal className="values__head">
            <h2 className="vision__title sans">{values.title}</h2>
            <p className="prose-p">{values.intro}</p>
          </Reveal>
          <div className="values__grid">
            {values.items.map((v, i) => (
              <Reveal key={v.title} className="value" delay={i * 0.1}>
                <ValueIcon name={v.icon} />
                <h3 className="sans">{v.title}</h3>
                <p className="prose-p">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <Split chapter={feature} />

        <BackgroundVideo video={closing.video} poster={closing.poster} className="bg-video--closing">
          <h2 className="statement statement--caps sans">{closing.statement}</h2>
          <div className="btn-row btn-row--center">
            {closing.ctas.map((b) => (
              <CTA key={b.label} {...b} solid />
            ))}
          </div>
        </BackgroundVideo>
      </main>
      <Footer />
    </>
  );
}
