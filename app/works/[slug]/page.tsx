import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectPlayer from "@/components/ProjectPlayer";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  return p ? { title: p.client ? `${p.title} — ${p.client}` : p.title, description: p.description ?? `${p.title} · ${p.category}`, openGraph: { images: [p.poster] } } : {};
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return (
    <main>
      <ProjectPlayer project={project} />
    </main>
  );
}
