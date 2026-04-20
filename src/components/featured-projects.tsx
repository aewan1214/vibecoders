"use client";

import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

interface FeaturedProjectsProps {
  projects: Project[];
  showViewAll?: boolean;
}

export default function FeaturedProjects({
  projects,
  showViewAll = true,
}: FeaturedProjectsProps) {
  return (
    <section className="relative section-padding">
      {/* Subtle gradient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-6xl text-center"
      >
        <Badge
          variant="secondary"
          className="mb-4 px-4 py-1.5 text-xs font-medium uppercase tracking-wider"
        >
          Portfolio
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Featured{" "}
          <span className="gradient-text">Projects</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          A selection of projects that showcase my passion for building
          exceptional digital products.
        </p>
      </motion.div>

      {/* Projects grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={itemVariants}>
            <Card className="group relative h-full overflow-hidden border-border/50 bg-card/50 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Hover overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-background/60 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-200 hover:scale-110"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-foreground shadow-lg transition-transform duration-200 hover:scale-110"
                    >
                      <Code2 className="h-5 w-5" />
                    </a>
                  )}
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute left-4 top-4">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary/50 px-2.5 py-1 text-xs font-medium text-muted-foreground"
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

      {/* View All Button */}
      {showViewAll && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative z-10 mt-12 text-center"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group rounded-full border-border/60 px-8 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      )}
    </section>
  );
}
