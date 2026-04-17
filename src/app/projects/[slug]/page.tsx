import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { getProject, projects } from "@/lib/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — Evan`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <Link
          href="/projects"
          className="font-serif text-sm italic text-muted-foreground transition hover:text-foreground"
        >
          ← Back to catalogue
        </Link>

        <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          <span>№ {String(currentIndex + 1).padStart(2, "0")}</span>
          <span aria-hidden>·</span>
          <span>{project.year}</span>
          <span aria-hidden>·</span>
          <span>{project.role}</span>
        </div>
        <h1 className="mt-4 font-serif text-5xl leading-[1.02] text-balance sm:text-7xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl font-serif text-lg italic leading-relaxed text-muted-foreground sm:text-xl">
          {project.tagline}
        </p>
      </Reveal>

      <Reveal className="mt-14 border-t border-border pt-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          Overview
        </p>
        <p className="mt-4 text-base leading-relaxed">{project.description}</p>
      </Reveal>

      <Reveal className="mt-14 grid grid-cols-1 gap-10 border-t border-border pt-8 sm:grid-cols-2">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Stack
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2 font-serif text-base">
            {project.stack.map((t, i) => (
              <li key={t} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="text-muted-foreground">·</span>}
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Highlights
          </p>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex gap-3 font-serif text-base leading-relaxed"
              >
                <span aria-hidden className="mt-1 text-accent">◆</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {project.links && project.links.length > 0 && (
        <Reveal className="mt-14 flex flex-wrap gap-6 border-t border-border pt-8">
          {project.links.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group font-serif text-base italic transition hover:text-accent"
            >
              {l.label}
              <span
                aria-hidden
                className="ml-1 inline-block transition-transform group-hover:translate-x-1"
              >
                ↗
              </span>
            </a>
          ))}
        </Reveal>
      )}

      <Reveal className="mt-24 border-t border-border pt-10">
        <Link
          href={`/projects/${next.slug}`}
          className="group flex flex-col gap-3"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Next chapter
          </span>
          <span className="flex items-baseline gap-4 font-serif text-4xl leading-tight transition group-hover:text-accent sm:text-5xl">
            {next.title}
            <span
              aria-hidden
              className="text-2xl transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </Link>
      </Reveal>
    </article>
  );
}
