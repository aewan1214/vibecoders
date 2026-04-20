"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Zap, Target, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Syne, JetBrains_Mono } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-background pt-24 selection:bg-primary selection:text-primary-foreground">
      {/* Noise Texture for atmosphere */}
      <div 
        className="pointer-events-none absolute inset-0 z-50 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Architectural Blueprint Grid */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute left-[8%] top-0 h-full w-[1px] bg-border/40" />
        <div className="absolute left-[50%] top-0 h-full w-[1px] bg-border/20" />
        <div className="absolute right-[8%] top-0 h-full w-[1px] bg-border/40" />
        <div className="absolute top-[25%] left-0 h-[1px] w-full bg-border/20" />
        <div className="absolute top-[75%] left-0 h-[1px] w-full bg-border/20" />
        {/* Subtle glowing orb for depth */}
        <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-between px-6 pb-20 pt-12 md:px-12 lg:flex-row lg:items-center lg:pb-12 lg:pt-24">
        
        {/* Left Column: Huge Typography & Identity */}
        <div className="flex flex-col justify-center lg:w-[55%]">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-muted-foreground sm:text-xs ${mono.className}`}
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-primary/10 border border-primary/20">
              <MapPin className="h-3 w-3 text-primary" />
            </div>
            <span>Based in Philippines</span>
            <span className="h-px w-8 bg-border md:w-16" />
            <span className="text-primary font-bold flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to Work
            </span>
          </motion.div>

          {/* Brutalist Typographic Hero */}
          <div className={`mt-8 flex flex-col ${syne.className}`}>
            <motion.h1 
              initial={{ opacity: 0, y: 100, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-[4.5rem] font-extrabold leading-[0.8] tracking-[-0.04em] text-foreground sm:text-[7.5rem] md:text-[9.5rem] lg:text-[11.5rem]"
            >
              TROY
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 100, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-[4.5rem] font-extrabold leading-[0.8] tracking-[-0.04em] sm:text-[7.5rem] md:text-[9.5rem] lg:text-[11.5rem]"
              style={{ WebkitTextStroke: "1.5px currentColor", color: "transparent" }}
            >
              OLALO
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 max-w-lg lg:max-w-md xl:max-w-lg"
          >
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              I reject generic interfaces. As a <strong className="text-foreground font-semibold">Vibe Coder Specialist</strong>, I architect digital experiences that are visceral, memorable, and meticulously engineered.
            </p>
            
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button 
                asChild 
                size="lg" 
                className={`group rounded-none bg-foreground text-background hover:bg-primary hover:text-primary-foreground h-14 px-8 text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300 ${mono.className}`}
              >
                <Link href="/projects">
                  Explore Work 
                  <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </Button>
              <Link 
                href="/about"
                className={`group flex items-center gap-3 text-xs uppercase tracking-[0.15em] font-bold text-muted-foreground hover:text-foreground transition-colors ${mono.className}`}
              >
                <span>The Architect</span>
                <span className="block h-[1px] w-8 bg-muted-foreground transition-all duration-300 group-hover:w-16 group-hover:bg-foreground" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Architectural Image & Tech Specs */}
        <div className="relative mt-20 flex justify-center lg:mt-0 lg:w-[45%] lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative z-20 aspect-[3/4] w-[85%] max-w-[420px] overflow-hidden border border-border bg-card/10 shadow-2xl backdrop-blur-md sm:w-[60%] lg:w-full"
          >
            {/* Duotone/Harsh Image filter effect */}
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 transition-opacity duration-700 hover:opacity-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
            
            <Image
              src="/avatar.png"
              alt="Troy Olalo"
              fill
              priority
              className="object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
            />

            {/* Technical overlay elements */}
            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center border border-primary/30 bg-background/50 backdrop-blur-sm">
                <div className="h-2 w-2 animate-pulse bg-primary" />
              </div>
              <div className="flex flex-col gap-1">
                <span className={`text-[0.65rem] uppercase tracking-[0.2em] text-primary/80 ${mono.className}`}>System Status</span>
                <span className={`text-sm font-bold uppercase tracking-wider text-foreground ${syne.className}`}>Online & Ready</span>
              </div>
            </div>
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 h-4 w-4 border-l-2 border-t-2 border-primary/50 z-20" />
            <div className="absolute top-0 right-0 h-4 w-4 border-r-2 border-t-2 border-primary/50 z-20" />
            <div className="absolute bottom-0 right-0 h-4 w-4 border-r-2 border-b-2 border-primary/50 z-20" />
          </motion.div>

          {/* Floating Data Modules */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute -right-4 top-10 z-30 hidden flex-col gap-4 lg:flex xl:-right-12"
          >
            {[
              { icon: Zap, label: "Performance", value: "99.9%" },
              { icon: Target, label: "Precision", value: "Pixel-Perfect" },
              { icon: Cpu, label: "Stack", value: "Next.js / TS" }
            ].map((stat, i) => (
              <div key={i} className="group flex items-center gap-4 border border-border/60 bg-background/90 p-3 backdrop-blur-md shadow-2xl transition-transform hover:-translate-x-2">
                <div className="flex h-10 w-10 items-center justify-center bg-primary/10 text-primary border border-primary/20 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className={`flex flex-col pr-6 ${mono.className}`}>
                  <span className="text-[0.65rem] uppercase tracking-wider text-muted-foreground">{stat.label}</span>
                  <span className="text-xs font-bold text-foreground tracking-wide">{stat.value}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Backdrop solid offset shape */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="absolute -bottom-6 -left-6 z-0 aspect-[3/4] w-[85%] max-w-[420px] border border-primary/20 bg-primary/5 sm:w-[60%] lg:w-full"
          />
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className={`absolute bottom-0 left-0 flex w-full overflow-hidden border-t border-border/40 bg-background/80 py-4 backdrop-blur-md ${mono.className}`}>
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex whitespace-nowrap text-[0.7rem] uppercase tracking-[0.2em] text-foreground/70"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <span>Frontend Architect</span>
              <span className="h-1 w-1 rounded-none bg-primary" />
              <span>React Specialist</span>
              <span className="h-1 w-1 rounded-none bg-primary" />
              <span>Creative Developer</span>
              <span className="h-1 w-1 rounded-none bg-primary" />
              <span>Web Animation</span>
              <span className="h-1 w-1 rounded-none bg-primary" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
