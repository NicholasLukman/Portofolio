import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Nicholas",
  description: "Say hi — open for freelance, full time, and collaborations.",
};

const socials = [
  { label: "Email", value: "nicholaslukman87@gmail.com", href: "mailto:nicholaslukman87@gmail.com" },
  { label: "GitHub", value: "github.com/nicholaslukman", href: "https://github.com/nicholaslukman" },
  { label: "LinkedIn", value: "linkedin.com/in/nicholaslukman", href: "https://www.linkedin.com/in/nicholas-lukman-075532365"},
];

export default function ContactPage() { 
  return (
    <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          Vol. IV — Correspondence
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-[1.02] text-balance sm:text-7xl">
         Contact Me
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Contact Me with the contact below
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
              
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
