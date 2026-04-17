# Cara Deploy ke Vercel

Panduan langkah demi langkah untuk deploy portfolio ini ke Vercel. Ada 2 cara: lewat **website Vercel** (paling gampang) atau lewat **Vercel CLI** (buat yang lebih suka terminal).

---

## Yang Perlu Disiapkan

1. **Akun GitHub** — udah ada, repo udah di push ke `https://github.com/evanstef/contoh_portofolio`
2. **Akun Vercel** — kalau belum punya, daftar gratis di [vercel.com/signup](https://vercel.com/signup). Login pake GitHub biar langsung ke-connect.

---

## Cara 1 — Deploy Lewat Website (Recommended)

Cara paling gampang, tinggal klik-klik.

### Langkah 1: Buka Vercel Dashboard

- Masuk ke [vercel.com/new](https://vercel.com/new)
- Login kalau belum

### Langkah 2: Import Repo dari GitHub

- Klik tombol **"Import Git Repository"**
- Kalau pertama kali, Vercel minta akses ke GitHub — klik **"Install"** dan pilih repo yang mau dikasih akses (bisa pilih All atau Only Select Repositories → `contoh_portofolio`)
- Cari `contoh_portofolio` di list, klik **"Import"**

### Langkah 3: Konfigurasi Project

Vercel biasanya auto-detect Next.js. Yang perlu dicek:

| Field | Isi |
|-------|-----|
| **Framework Preset** | `Next.js` (otomatis) |
| **Root Directory** | `.` (biarin default) |
| **Build Command** | `next build` (otomatis) |
| **Output Directory** | `.next` (otomatis) |
| **Install Command** | `bun install` atau `npm install` (otomatis) |
| **Environment Variables** | Kosongin aja — project ini nggak butuh env vars |

### Langkah 4: Deploy

- Klik tombol **"Deploy"** (warna hitam, pojok bawah)
- Tunggu sekitar 1–2 menit
- Kalau sukses, muncul confetti + preview situs
- URL otomatis dikasih: `contoh-portofolio.vercel.app` (atau variasi lain kalau udah diambil)

**Selesai.** Portfolio lu udah live.

---

## Cara 2 — Deploy Lewat Vercel CLI

Cocok kalau males buka browser.

### Langkah 1: Install Vercel CLI

```bash
bun add -g vercel
# atau
npm i -g vercel
```

### Langkah 2: Login

```bash
vercel login
```

Pilih **Continue with GitHub**, browser kebuka, klik authorize.

### Langkah 3: Deploy dari Folder Project

```bash
cd /home/serup/Projects/portfolio-web
vercel
```

Pertama kali, Vercel nanya beberapa hal — jawab default aja:

```
? Set up and deploy "portfolio-web"? [Y/n]  y
? Which scope should contain your project? [pilih akun lu]
? Link to existing project? [N/y]  n
? What's your project's name? contoh-portofolio
? In which directory is your code located? ./
? Want to modify these settings? [y/N]  n
```

Tunggu build selesai. Nanti keluar URL preview.

### Langkah 4: Deploy ke Production

Command `vercel` di atas itu deploy ke **preview** (URL unik per deploy). Kalau mau ke production URL (yang `.vercel.app` utama):

```bash
vercel --prod
```

---

## Auto Deploy Setiap Git Push

Ini **otomatis** kalau lu pakai Cara 1 (import dari GitHub).

- Setiap `git push origin main` → Vercel otomatis build & deploy ke production
- Setiap `git push` ke branch lain atau PR → Vercel bikin **preview URL** terpisah (buat testing sebelum merge)

Nggak perlu setting apa-apa lagi.

---

## Custom Domain (Opsional)

Kalau mau pake domain sendiri (misal `evan.dev`):

1. Masuk ke Vercel dashboard → project `contoh-portofolio` → tab **Settings** → **Domains**
2. Masukin nama domain → klik **Add**
3. Vercel kasih instruksi DNS (biasanya `A record` atau `CNAME`)
4. Buka registrar domain lu (Niagahoster, Cloudflare, Namecheap, dll) → tambahin record sesuai instruksi
5. Tunggu propagasi DNS (biasanya 5 menit – 1 jam)
6. Vercel auto-provision SSL (HTTPS gratis)

---

## Troubleshooting

### Build gagal di Vercel tapi lokal sukses

Cek log build di Vercel dashboard. Kasus umum:
- **TypeScript error**: jalanin `bunx tsc --noEmit` di lokal, fix semua error
- **Lint error**: jalanin `bun run lint`, fix semua error
- **Missing dep**: pastiin semua package yang dipake ada di `package.json` (bukan cuma di `node_modules` lokal)

### Halaman 404 di production tapi jalan di lokal

- Cek case-sensitive filename (Linux server beda sama Mac/Windows)
- `Component.tsx` ≠ `component.tsx` di Vercel server

### Font atau grain overlay nggak muncul

- Pastiin `next/font` (Fraunces, Geist) bisa akses `fonts.googleapis.com` — biasanya otomatis work di Vercel
- Kalau masih kosong, clear cache: Vercel dashboard → Settings → General → scroll ke **Clear Cache**

### Custom cursor atau anjing nggak muncul

- Normal di device touch (HP, tablet) — memang di-disable via CSS `@media (hover: hover)`
- Di desktop harus muncul; kalau nggak, cek browser console ada error JS

---

## Update Deployment

Tiap mau update situs:

```bash
# edit file di lokal
bun dev  # test dulu

# commit
git add .
git commit -m "update: deskripsi perubahan"

# push — otomatis trigger deploy
git push origin main
```

Vercel otomatis build + deploy dalam 1–2 menit. Notif bisa dapet via email atau di Vercel dashboard.

---

## Referensi

- Vercel Docs: https://vercel.com/docs
- Next.js on Vercel: https://vercel.com/docs/frameworks/nextjs
- Domain setup: https://vercel.com/docs/domains
