"use client";

import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Palette,
  Zap,
  Globe,
  Layers,
  Terminal,
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive, performant UIs with React, Next.js, and TypeScript.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive, beautiful interfaces with modern design principles and shadcn/ui.",
    tags: ["Figma", "shadcn/ui", "Tailwind"],
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimizing web vitals, lazy loading, and bundle splitting for blazing-fast experiences.",
    tags: ["Core Web Vitals", "Lighthouse", "SEO"],
  },
  {
    icon: Globe,
    title: "Full Stack",
    description:
      "End-to-end development with APIs, databases, and cloud services.",
    tags: ["Node.js", "PostgreSQL", "Vercel"],
  },
  {
    icon: Layers,
    title: "Architecture",
    description:
      "Designing scalable, maintainable codebases with clean architecture patterns.",
    tags: ["Clean Code", "Design Patterns", "Testing"],
  },
  {
    icon: Terminal,
    title: "DevOps & Tooling",
    description:
      "CI/CD pipelines, containerization, and developer experience optimization.",
    tags: ["Git", "Docker", "CI/CD"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SkillsSection() {
  return (
    <section className="relative section-padding">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl text-center"
      >
        <Badge
          variant="secondary"
          className="mb-4 px-4 py-1.5 text-xs font-medium uppercase tracking-wider"
        >
          What I Do
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Skills &amp;{" "}
          <span className="gradient-text">Expertise</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          A versatile toolkit honed through years of building modern web
          applications and delivering premium digital experiences.
        </p>
      </motion.div>

      {/* Skills grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((skill) => (
          <motion.div key={skill.title} variants={itemVariants}>
            <Card className="group relative h-full overflow-hidden border-border/50 bg-card/50 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 glass-hover">
              {/* Gradient hover accent */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <CardContent className="p-6">
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-all duration-300 group-hover:from-primary/20 group-hover:to-accent/20 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <skill.icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold tracking-tight">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {skill.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary/50 px-2 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
