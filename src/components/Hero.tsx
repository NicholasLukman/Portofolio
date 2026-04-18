"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const selectors = [
        ".hero-eyebrow",
        ".hero-title-line",
        ".hero-subtitle",
        ".hero-cta > *",
        ".hero-meta > *",
      ];
      gsap.set(selectors, { opacity: 0, y: 18 });

      const tl = gsap.timeline({
        defaults: { ease: "steps(8)" },
        onComplete: () => {
          gsap.set(selectors, { clearProps: "transform,opacity" });
        },
      });
      tl.to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.45 })
        .to(
          ".hero-title-line",
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
          "-=0.15"
        )
        .to(
          ".hero-subtitle",
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.2"
        )
        .to(
          ".hero-cta > *",
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
          "-=0.2"
        )
        .to(
          ".hero-meta > *",
          { opacity: 1, y: 0, duration: 0.35, stagger: 0.08 },
          "-=0.15"
        );
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden px-5 pb-20 pt-28 sm:px-8 sm:pt-36"
    >
      <div className="mx-auto flex max-w-4xl flex-col text-center">
        <div className="hero-eyebrow mx-auto flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          <span className="h-px w-10 bg-border" />
          <span>Portfolio · Vol. 01</span>
          <span className="h-px w-10 bg-border" />
        </div>

        <h1 className="mt-8 font-serif text-5xl font-light leading-[1.02] text-balance sm:text-7xl md:text-[88px]">
          <span className="hero-title-line block">Simple interfaces,</span>
          <span className="hero-title-line block italic">
            crafted with care.
          </span>
        </h1>

        <p className="hero-subtitle mx-auto mt-8 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
          I&apos;m <span className="font-serif italic text-foreground">Nicholas Lukman</span>
          {" "}— Bunda Mulia University Third Year Student, Information Technology Major, Cybersecurity and Networking 
        </p>

        <div className="hero-cta mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/projects"
            className="group inline-flex h-11 items-center gap-2 border border-foreground bg-foreground px-6 text-sm text-background transition hover:bg-transparent hover:text-foreground"
          >
            <span className="font-serif italic">View the work</span>
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center gap-2 border border-border px-6 text-sm transition hover:border-foreground"
          >
            <span className="font-serif italic">Say hello</span>
          </Link>
        </div>

        <dl className="hero-meta mx-auto mt-20 grid w-full max-w-3xl grid-cols-2 gap-y-6 text-left sm:grid-cols-4">
          {}
        </dl>
      </div>
    </section>
  );
}
