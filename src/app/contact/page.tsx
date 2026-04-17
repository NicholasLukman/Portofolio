import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Evan",
  description: "Say hi — open for freelance, full time, and collaborations.",
};

const socials = [
  { label: "Email", value: "hello@evan.dev", href: "mailto:hello@evan.dev" },
  { label: "GitHub", value: "github.com/evanstef", href: "https://github.com/evanstef" },
  { label: "LinkedIn", value: "linkedin.com/in/evanstef", href: "https://linkedin.com/in/evanstef" },
  { label: "Twitter", value: "@evanstef", href: "https://twitter.com/evanstef" },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          Vol. IV — Correspondence
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-[1.02] text-balance sm:text-7xl">
          Let&apos;s build <span className="italic">something</span> worth
          shipping.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Tell me a little about your project, team, or problem — I usually
          reply within a day or two.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="border-t border-border pt-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Write a letter
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal className="flex flex-col gap-12 border-t border-border pt-10">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              Elsewhere
            </p>
            <ul className="mt-6 flex flex-col">
              {socials.map((s) => (
                <li key={s.label} className="border-t border-border first:border-t-0">
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between gap-3 py-4 transition"
                  >
                    <span className="font-serif text-base italic text-muted-foreground transition group-hover:text-foreground">
                      {s.label}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground transition group-hover:text-foreground">
                      {s.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              Availability
            </p>
            <p className="mt-4 font-serif text-lg leading-relaxed">
              Currently booking engagements for{" "}
              <span className="italic">Q3 MMXXVI</span>. Short waitlist kept for
              urgent work — reach out and we&apos;ll figure it out.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
