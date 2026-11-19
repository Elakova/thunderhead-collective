import type { Project } from "@/lib/projects";

// "Title | Client" followed by location, agency (or category) + duration, and year — each cell underlined.
// Missing details leave their cell empty so the row keeps its shape.
export default function MetaRow({ project, as: Tag = "h2" }: { project: Project; as?: "h1" | "h2" }) {
  return (
    <div className="meta-row">
      <Tag className="meta-row__title sans">
        <span>{project.title}</span>
        {project.client && (
          <>
            <span className="sep" aria-hidden>
              |
            </span>
            <span>{project.client}</span>
          </>
        )}
      </Tag>
      <div className="meta-row__loc">{project.location}</div>
      <div>
        <span>{project.agency ?? project.category}</span>
        <span>{project.duration}</span>
      </div>
      <div className="meta-row__year">{project.year}</div>
    </div>
  );
}
