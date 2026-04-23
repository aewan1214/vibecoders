import type { Project } from "@/components/featured-projects";

export const projects: Project[] = [
  {
    title: "TactiChess",
    description:
      "A hybrid chess and tic-tac-toe web game featuring deployment and movement phases, with custom win conditions and animated mechanics.",
    image: "/project-tactichess.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    liveUrl: "https://tactichess.vercel.app/",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    description:
      "A real-time analytics dashboard for SaaS products with interactive charts, data visualization, and team collaboration features.",
    image: "/project-dashboard.png",
    tags: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "LuxeCart — E-Commerce",
    description:
      "A premium e-commerce platform with product filtering, cart management, Stripe checkout, and admin dashboard.",
    image: "/project-ecommerce.png",
    tags: ["React", "Node.js", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Vibe Social",
    description:
      "A social media platform with real-time messaging, story features, and an AI-powered content recommendation engine.",
    image: "/project-social.png",
    tags: ["Next.js", "Socket.io", "Redis", "OpenAI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "NeuralChat AI",
    description:
      "An AI-powered chat application with multi-model support, conversation memory, and rich media generation capabilities.",
    image: "/project-ai.png",
    tags: ["TypeScript", "LangChain", "Vercel AI SDK", "Prisma"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
];

export const experience = [
  {
    role: "Vibe Coder Specialist",
    company: "Freelance",
    period: "2024 — Present",
    description:
      "Building modern, scalable web applications for clients worldwide using Next.js, TypeScript, and shadcn/ui. Specializing in premium UI/UX and performance optimization.",
  },
  {
    role: "Frontend Developer",
    company: "Tech Startup",
    period: "2023 — 2024",
    description:
      "Led the frontend team in building a SaaS analytics platform. Implemented design systems, improved Core Web Vitals by 40%, and mentored junior developers.",
  },
  {
    role: "Web Developer",
    company: "Digital Agency",
    period: "2022 — 2023",
    description:
      "Developed responsive websites and web applications for diverse clients. Gained expertise in React, TypeScript, and modern CSS frameworks.",
  },
];

export const techStack = [
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "shadcn/ui", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Prisma", category: "Backend" },
  { name: "Redis", category: "Backend" },
  { name: "Vercel", category: "DevOps" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "DevOps" },
  { name: "Figma", category: "Design" },
];
