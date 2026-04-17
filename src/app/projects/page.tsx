import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Evan",
  description: "Selected work across web, mobile, and internal tooling.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          Vol. III — The Catalogue
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-[1.02] text-balance sm:text-7xl">
          A selection of <span className="italic">things</span> I&apos;ve built.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          From internal tooling quietly serving hundreds of users to polished
          consumer-facing storefronts — a taste of recent work.
        </p>
      </Reveal>

      <Reveal className="mt-16 flex flex-col">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
        <div className="border-t border-border" />
      </Reveal>
    </div>
  );
}
