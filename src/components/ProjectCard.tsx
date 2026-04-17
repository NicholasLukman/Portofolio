import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col gap-6 border-t border-border py-8 transition-colors hover:border-foreground"
    >
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          {typeof index === "number" ? `№ ${String(index + 1).padStart(2, "0")}` : project.year}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          {project.year}
        </span>
      </div>

      <div>
        <h3 className="font-serif text-3xl leading-[1.1] transition-colors group-hover:text-accent sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {project.stack.slice(0, 4).map((tech, i) => (
            <li key={tech} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden>·</span>}
              <span>{tech}</span>
            </li>
          ))}
        </ul>
        <span className="inline-flex items-center gap-2 font-serif text-sm italic text-foreground/70 transition group-hover:text-foreground">
          Read more
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
