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
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "nebula-dashboard",
    title: "SIEM Home Lab",
    tagline: "Realtime Folder Monitoring Dashboard.",
    description:
      "Modern Dashboard that monitor specific folder, calculating risk and log files",
    year: "2026",
    role: "",
    stack: ["Wazuh, Windows as Agent, Ubuntu as Server"],
    highlights: [
      "See the log of the files ( timestamp, rename history, file modification)",
      "Wazuh as Dashboard, Windows Agent, Ubuntu Server",
    ],
    image:"/images/Wazuh.jpeg"
  },
  {
    slug: "pulse-crm",
    title: "Campus Representative",
    tagline: "Support Event Marketing as Education Conselour",
    description:
      "Support Campus Tour, Scholarship Information, Edufair and many",
    year: "2023 - Present",
    role: "Staff",
    stack: [],
    highlights: [
      "Campus Tour",
      "Scholarship Information",
      "Edufair",
    ],
    image:"/images/CR.jpeg",
  },
 
  {
    slug: "cortex-knowledge",
    title: "University Project",
    tagline: "Project Had Been Done While I Pursue My Degree at Bunda Mulia University",
    description:
      "All of my project are local only, never deployed to the internet",
    year: "2023 - Present",
    role: "Student",
    stack: ["Figma, Python, SQL, HTML, CSS, JavaScript, PHP", "Cisco Packet Tracer"],
    highlights: [
    "Figma for prototyping",
    "Python doing data structures, datasets etc",
    "Web using HTML, CSS, JavaScript, PHP, SQL",
    "Mobile Using kotling to develop Androind App",
    "Build Topology with Cisco Packet Tracer"
    ],
    image:"/images/Cisco.png",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
