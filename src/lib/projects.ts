export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  stack: string[];
  highlights: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "nebula-dashboard",
    title: "Nebula Dashboard",
    tagline: "Realtime analytics cockpit for SaaS teams.",
    description:
      "A modern observability dashboard with streaming charts, cohort analysis, and multi-workspace support.",
    year: "2025",
    role: "Full stack lead",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket", "Tailwind"],
    highlights: [
      "P95 render under 120ms with virtualized tables",
      "Streaming architecture using server actions",
      "Role-based workspaces and audit logs",
    ],
    links: [
      { label: "Live", href: "#" },
      { label: "Case study", href: "#" },
    ],
  },
  {
    slug: "orbit-commerce",
    title: "Orbit Commerce",
    tagline: "Headless storefront with edge rendering.",
    description:
      "Ultra fast commerce storefront shipped on the edge with a unified content and product API.",
    year: "2025",
    role: "Frontend architect",
    stack: ["Next.js", "GraphQL", "Stripe", "Sanity", "Edge"],
    highlights: [
      "Lighthouse 100 across mobile and desktop",
      "Global checkout under 1.8s TTFB",
      "Cart, wishlist, and PDP driven by a single schema",
    ],
  },
  {
    slug: "pulse-crm",
    title: "Pulse CRM",
    tagline: "Sales pipeline for high velocity teams.",
    description:
      "Kanban-first CRM with automation rules, call logs, and lightweight quotation builder.",
    year: "2024",
    role: "Co-founder / Engineer",
    stack: ["React", "Node.js", "Prisma", "PostgreSQL"],
    highlights: [
      "Drag and drop pipeline with optimistic updates",
      "Templated quotations export to PDF",
      "Email and WhatsApp automation hooks",
    ],
  },
  {
    slug: "atlas-mobile",
    title: "Atlas Mobile",
    tagline: "Field service companion app.",
    description:
      "Offline-first mobile app for field technicians with photo capture, geo check-in, and sync.",
    year: "2024",
    role: "Mobile engineer",
    stack: ["Next.js", "Capacitor", "SQLite", "Zustand"],
    highlights: [
      "Offline queue with conflict-free sync",
      "Camera and QR workflows for spare parts",
      "Shipped to 4 factories across 2 provinces",
    ],
  },
  {
    slug: "prism-design-system",
    title: "Prism Design System",
    tagline: "Themeable components for scale.",
    description:
      "Component library powering 6 internal apps with dark mode, tokens, and Storybook documentation.",
    year: "2024",
    role: "Design engineer",
    stack: ["React", "Radix UI", "Tailwind", "Storybook"],
    highlights: [
      "Unified token pipeline for light and dark",
      "A11y audited and WCAG AA compliant",
      "Adopted across 6 product squads",
    ],
  },
  {
    slug: "cortex-knowledge",
    title: "Cortex Knowledge",
    tagline: "AI powered internal knowledge base.",
    description:
      "Retrieval augmented search across wikis, tickets, and repos with streaming answers and citations.",
    year: "2025",
    role: "AI engineer",
    stack: ["Next.js", "pgvector", "OpenAI", "Bun"],
    highlights: [
      "Hybrid keyword and vector search ranking",
      "Inline citations and click-to-source",
      "Sub 2s cold query latency",
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
