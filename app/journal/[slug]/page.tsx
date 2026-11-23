import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { PostCard } from "@/components/JournalIndex";
import { getPost, journal, readingTime } from "@/lib/journal";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return journal.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getPost((await params).slug);
  return p ? { title: p.title, description: p.excerpt, openGraph: { images: [p.cover] } } : {};
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  // Same category first, then the most recent others.
  const more = [...journal.filter((p) => p !== post && p.category === post.category), ...journal.filter((p) => p !== post && p.category !== post.category)].slice(0, 3);

  return (
    <>
      <main className="article">
        <header className="article__head">
          <Link href="/journal" className="bracket">
            journal
          </Link>
          <p className="eyebrow">
            {post.category} · {readingTime(post)} min read
          </p>
          <h1 className="article__title sans">{post.title}</h1>
          <p className="article__lede">{post.excerpt}</p>
        </header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="article__cover" src={post.cover} alt="" />
        <div className="article__body">
          {post.body.map((b, i) => {
            if (b.type === "h2")
              return (
                <h2 key={i} className="sans">
                  {b.text}
                </h2>
              );
            if (b.type === "quote")
              return (
                <blockquote key={i} className="sans">
                  {b.text}
                </blockquote>
              );
            if (b.type === "img")
              return (
                <figure key={i}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.src} alt={b.caption ?? ""} loading="lazy" />
                  {b.caption && <figcaption className="muted">{b.caption}</figcaption>}
                </figure>
              );
            return <p key={i}>{b.text}</p>;
          })}
        </div>
        <section className="article__more">
          <div className="article__more-head">
            <h2 className="sans">More from the journal</h2>
            <Link href="/journal" className="bracket">
              all posts
            </Link>
          </div>
          <div className="posts">
            {more.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
