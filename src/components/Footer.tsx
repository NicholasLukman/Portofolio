import Link from "next/link";
import { navLinks } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              Colophon
            </p>
            <p className="mt-4 font-serif text-2xl italic leading-snug">
              Typeset in Fraunces &amp; Geist. Tended by a small brown dog.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-serif text-sm italic text-muted-foreground">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 px-5 py-5 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground sm:flex-row sm:items-center sm:px-8">
          <span>© MMXX – MMXXVI · Nicholas Lukman</span>
          <span>Next.js · Tailwind · GSAP</span>
        </div>
      </div>
    </footer>
  );
}
