import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

const services = [
  {
    num: "i.",
    title: "Socialize",
    description:
      "Communicate with the team and making new friends",
  },
  {
    num: "ii.",
    title: "Prototype Design",
    description:
      "Making the design standout, eye-catching, and easy to use",
  },
  {
    num: "iii.",
    title: "Problem Solving",
    description:
      "Thinking outside the box for the solution to the problem",
  },
];

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero />

      <Reveal
        as="section"
        className="mx-auto max-w-5xl px-5 py-24 sm:px-8"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Ch. 01 — Practice
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.05] sm:text-5xl">
              Three things I do{" "}
              <span className="italic">well</span>.
            </h2>
          </div>
          <ol className="flex flex-col">
            {services.map((s) => (
              <li
                key={s.title}
                className="flex flex-col gap-3 border-t border-border py-6 md:flex-row md:gap-8"
              >
                <span className="w-16 shrink-0 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                  {s.num}
                </span>
                <div>
                  <h3 className="font-serif text-2xl italic">{s.title}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Ch. 02 — Selected Works
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.05] sm:text-5xl">
              Experience
            </h2>
              
          </div>
          <Link
            href="/projects"
            className="hidden font-serif text-sm italic text-muted-foreground transition hover:text-foreground sm:inline-flex"
          >
            See the catalogue →
          </Link>
        </div>
        <div className="flex flex-col">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
          <div className="border-t border-border" />
        </div>
        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="/projects"
            className="font-serif text-sm italic text-muted-foreground"
          >
            See the catalogue →
          </Link>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
        <div className="border-y border-border py-16 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Correspondence
          </p>
          <h2 className="mx-auto mt-6 max-w-2xl font-serif text-4xl leading-[1.05] text-balance sm:text-5xl">
            Got a project in mind? <span className="italic">Let&apos;s talk.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Taking on a small number of engagements for 2026 — from feature
            sprints to long partnerships.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 border border-foreground bg-foreground px-6 text-sm text-background transition hover:bg-transparent hover:text-foreground"
            >
              <span className="font-serif italic">Begin a letter</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex h-11 items-center gap-2 border border-border px-6 text-sm transition hover:border-foreground"
            >
              <span className="font-serif italic">More about me</span>
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}
