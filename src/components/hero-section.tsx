"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const statusItems = [
  { icon: MapPin, text: "Philippines" },
  { icon: Briefcase, text: "Open to Work" },
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden section-padding pt-32">
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/20 animate-pulse-glow" />
        <div className="animate-float-delayed absolute right-1/4 bottom-1/3 h-96 w-96 rounded-full bg-accent/15 animate-pulse-glow" />
        <div className="animate-float absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-chart-3/10 animate-pulse-glow" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, oklch(0.95 0 0) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row lg:gap-20">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left"
        >
          {/* Status Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 flex flex-wrap gap-2"
          >
            {statusItems.map((item) => (
              <Badge
                key={item.text}
                variant="secondary"
                className="gap-1.5 px-3 py-1.5 text-xs font-medium"
              >
                <item.icon className="h-3 w-3" />
                {item.text}
              </Badge>
            ))}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Troy Olalo</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl"
          >
            Vibe Coder Specialist
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I craft modern, scalable, and beautifully designed web experiences
            using TypeScript, Next.js, and cutting-edge tools. Turning ideas
            into pixel-perfect reality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-8 text-base font-semibold text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
            >
              <Link href="/projects">
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-border/60 px-8 text-base font-medium transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
            >
              <Link href="/about">
                <Download className="mr-2 h-4 w-4" />
                About Me
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12 flex gap-8 sm:gap-12"
          >
            {[
              { value: "3+", label: "Years Exp." },
              { value: "20+", label: "Projects" },
              { value: "100%", label: "Passion" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-2xl font-bold gradient-text sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Avatar / Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-shrink-0"
        >
          {/* Glow behind avatar */}
          <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-chart-3/20 blur-3xl" />

          {/* Avatar ring */}
          <div className="relative h-64 w-64 rounded-full p-1 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-chart-3 animate-gradient" />
            <div className="relative h-full w-full overflow-hidden rounded-full bg-background p-1">
              <Image
                src="/avatar.png"
                alt="Troy Olalo — Vibe Coder Specialist"
                width={400}
                height={400}
                className="h-full w-full rounded-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5, type: "spring" }}
            className="absolute -bottom-2 -right-2 sm:bottom-2 sm:right-2"
          >
            <div className="glass rounded-full px-4 py-2 text-sm font-medium shadow-xl glow-violet">
              <span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Available
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
