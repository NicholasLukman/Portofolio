import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — Nicholas Lukman",
  description:
    "A little about me, the principles I design by, and the tools I work with.",
};

const skills = [
  {
    group: "Frontend",
    items: ["CSS"],
  },
  {
    group: "Backend",
    items: ['MySQL','JS','PHP'],
  },
  {
    group: "Mobile",
    items: ["Kotlin", "PHP", " MySQL", "SQLite"],
  },
  { 
    group: "Tooling",
    items: ["Figma","Cisco","Autopsy","Wireshark"],
  },
];

const timeline = [
  {
    year: "2026",
    title: "SIEM Home Lab",
    body: "Support Marketing With Event As Education Conselour Bunda Mulia University",
  },
  {
    year: "2025",
    title: "Journal Publish",
    body: "Publish Journal About Software Development of Motorcycle Repair Shop",
  },
  {
    year: "2023 - Present",
    title: "Campus Representative",
    body: "Support Marketing With Event As Education Conselour Bunda Mulia University",
  },
  {
    year: "2023 - Present",
    title: "University Project",
    body: "Network topology, Mobile App Program, Website",
  },
];

const principles = [
  {
    title: "Ship small, ship often",
    body: "Short feedback loops beat grand plans. Small, reviewable PRs compound over time.",
  },
  {
    title: "Types as a design tool",
    body: "Good types make the right thing easy and the wrong thing loud at compile time.",
  },
  {
    title: "Performance is a feature",
    body: "Speed earns trust. Budgets, profiling, and observability pay back every sprint.",
  },
  {
    title: "Design with the user",
    body: "Prototype in the browser with real data — pixels only tell half the story.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          Vol. II — About
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-[1.02] text-balance sm:text-7xl">
          Hello, I&apos;m <span className="italic">Nicholas</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          An university student who have enthusiast at technology, especially with Networking and
          Cybersecurity domain.
        </p>
      </Reveal>

      <Reveal className="mt-24">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            § I
          </span>
          <h2 className="font-serif text-3xl italic sm:text-4xl">Principles.</h2>
        </div>
        <ol className="mt-10 flex flex-col">
          {principles.map((p, i) => (
            <li
              key={p.title}
              className="flex flex-col gap-3 border-t border-border py-6 md:flex-row md:gap-8"
            >
              <span className="w-16 shrink-0 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                № 0{i + 1}
              </span>
              <div>
                <h3 className="font-serif text-2xl">{p.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
          <div className="border-t border-border" />
        </ol>
      </Reveal>

      <Reveal className="mt-24">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            § II
          </span>
          <h2 className="font-serif text-3xl italic sm:text-4xl">Toolbox.</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group} className="border-t border-border pt-6">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                {s.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-serif text-base">
                {s.items.map((item, i) => (
                  <li key={item} className="flex items-center gap-4">
                    {i > 0 && <span aria-hidden className="text-muted-foreground">·</span>}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-24">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            § III
          </span>
          <h2 className="font-serif text-3xl italic sm:text-4xl">Journey.</h2>
        </div>
        <ol className="mt-10 flex flex-col">
          {timeline.map((t) => (
            <li
              key={t.year + t.title}
              className="flex flex-col gap-3 border-t border-border py-6 md:flex-row md:gap-8"
            >
              <span className="w-24 shrink-0 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                {t.year}
              </span>
              <div>
                <h3 className="font-serif text-2xl">{t.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {t.body}
                </p>
              </div>
            </li>
          ))}
          <div className="border-t border-border" />
        </ol>
      </Reveal>
    </div>
  );
}
