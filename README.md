# contoh_portofolio

Portfolio web minimalist bertema vintage 24fps — dark/light mode, custom cursor, dan seekor anjing pixel yang ngikutin cursor.

## Stack

- **Next.js 16** (App Router, Turbopack) + **TypeScript**
- **Tailwind CSS v4** + **next-themes** (dark/light mode)
- **GSAP** (`@gsap/react`) dengan stepped easing buat vintage cinematic feel
- **Fraunces** serif display + **Geist** sans/mono
- **Bun** sebagai package manager

## Struktur

```
src/
├── app/
│   ├── layout.tsx          # Root layout + theme + font
│   ├── page.tsx            # Home (hero + services + featured + CTA)
│   ├── globals.css         # Tailwind + CSS vars + grain + cursor + dog
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── projects/[slug]/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navbar.tsx          # Sticky nav + mobile menu
│   ├── Footer.tsx
│   ├── ThemeProvider.tsx   # Wrapper next-themes
│   ├── ThemeToggle.tsx     # Sun/moon toggle
│   ├── Hero.tsx            # GSAP timeline stepped 24fps
│   ├── Reveal.tsx          # GSAP ScrollTrigger wrapper
│   ├── ProjectCard.tsx
│   ├── ContactForm.tsx
│   ├── GrainOverlay.tsx    # Film grain + vignette
│   ├── Cursor.tsx          # Custom cursor 24fps
│   └── DogCompanion.tsx    # Anjing pixel ngikutin cursor
└── lib/
    ├── nav.ts
    └── projects.ts         # Placeholder projects data
```

## Development

```bash
bun install
bun dev          # http://localhost:3000
```

## Script

```bash
bun dev          # dev server
bun run build    # production build
bun run start    # serve hasil build
bun run lint     # ESLint check
bunx tsc --noEmit  # type check
```

## Deploy

Cara deploy ke Vercel — lihat **[DEPLOY.md](./DEPLOY.md)** buat panduan step-by-step dalam Bahasa Indonesia.

Singkatnya: import repo ini di [vercel.com/new](https://vercel.com/new), klik **Deploy**, selesai. Auto deploy tiap `git push origin main`.

## Ubah Konten

- **Data projects**: edit `src/lib/projects.ts`
- **Nama & bio**: edit `src/app/about/page.tsx`
- **Kontak & social**: edit `src/app/contact/page.tsx`
- **Hero copy**: edit `src/components/Hero.tsx`
- **Palette warna**: edit CSS vars di `src/app/globals.css` (bagian `:root` dan `.dark`)

## Lisensi

MIT.
