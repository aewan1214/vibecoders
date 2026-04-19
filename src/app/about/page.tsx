"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  GraduationCap,
  Briefcase,
  Code2,
  Heart,
  Coffee,
  Gamepad2,
} from "lucide-react";
import { experience, techStack } from "@/lib/data";

const interests = [
  { icon: Code2, label: "Open Source" },
  { icon: Coffee, label: "Coffee" },
  { icon: Gamepad2, label: "Gaming" },
  { icon: Heart, label: "Community" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutPage() {
  const categories = [...new Set(techStack.map((t) => t.category))];

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative section-padding pt-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="animate-float absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="animate-float-delayed absolute right-1/4 bottom-1/3 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="absolute inset-0 scale-105 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-border/50 p-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-chart-3/10 animate-gradient" />
                <div className="relative overflow-hidden rounded-[calc(1.5rem-4px)]">
                  <Image
                    src="/avatar.png"
                    alt="Troy Olalo"
                    width={500}
                    height={600}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <Badge
                variant="secondary"
                className="mb-4 px-4 py-1.5 text-xs font-medium uppercase tracking-wider"
              >
                About Me
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Crafting Digital{" "}
                <span className="gradient-text">Experiences</span>
              </h1>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  I&apos;m Troy Olalo, a passionate Vibe Coder Specialist based
                  in the Philippines. I specialize in building modern,
                  performant, and beautifully designed web applications that
                  deliver exceptional user experiences.
                </p>
                <p>
                  My journey in web development started with a fascination for
                  how technology can transform ideas into reality. Today, I work
                  with cutting-edge tools like TypeScript, Next.js, and
                  shadcn/ui to create solutions that are both functional and
                  visually stunning.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring open
                  source projects, sipping coffee, or diving into the latest
                  tech trends. I believe in continuous learning and sharing
                  knowledge with the community.
                </p>
              </div>

              {/* Interests */}
              <div className="mt-8 flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <div
                    key={interest.label}
                    className="flex items-center gap-2 rounded-full border border-border/50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                  >
                    <interest.icon className="h-4 w-4" />
                    {interest.label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <Separator className="mx-auto max-w-6xl bg-border/30" />

        {/* Experience */}
        <section className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-6xl"
          >
            <div className="mb-12 text-center">
              <Badge
                variant="secondary"
                className="mb-4 px-4 py-1.5 text-xs font-medium uppercase tracking-wider"
              >
                <Briefcase className="mr-1.5 h-3 w-3" />
                Experience
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                My{" "}
                <span className="gradient-text">Journey</span>
              </h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative space-y-8"
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 hidden w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent md:block" />

              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="relative md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[1.65rem] top-6 hidden h-3 w-3 rounded-full border-2 border-primary bg-background md:block" />

                  <Card className="border-border/50 bg-card/50 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">{exp.role}</h3>
                          <p className="text-sm text-primary">{exp.company}</p>
                        </div>
                        <Badge variant="outline" className="w-fit text-xs">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <Separator className="mx-auto max-w-6xl bg-border/30" />

        {/* Tech Stack */}
        <section className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-6xl"
          >
            <div className="mb-12 text-center">
              <Badge
                variant="secondary"
                className="mb-4 px-4 py-1.5 text-xs font-medium uppercase tracking-wider"
              >
                <GraduationCap className="mr-1.5 h-3 w-3" />
                Tech Stack
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Tools &amp;{" "}
                <span className="gradient-text">Technologies</span>
              </h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              {categories.map((category) => (
                <motion.div key={category} variants={itemVariants}>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {techStack
                      .filter((t) => t.category === category)
                      .map((tech) => (
                        <div
                          key={tech.name}
                          className="rounded-xl border border-border/50 bg-card/50 px-5 py-3 text-sm font-medium transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/5"
                        >
                          {tech.name}
                        </div>
                      ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
