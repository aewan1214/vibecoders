"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative section-padding">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border/50 p-1"
      >
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-accent to-chart-3 opacity-20 animate-gradient" />

        <div className="relative rounded-[calc(1.5rem-4px)] bg-card/90 backdrop-blur-xl px-8 py-16 text-center sm:px-16 sm:py-20">
          {/* Background orbs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[calc(1.5rem-4px)]">
            <div className="animate-float absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
            <div className="animate-float-delayed absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="relative z-10">
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-1.5 text-xs font-medium uppercase tracking-wider"
            >
              <Mail className="mr-1.5 h-3 w-3" />
              Get in Touch
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Amazing</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s
              collaborate and bring your vision to life with modern web
              technologies.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-8 text-base font-semibold text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center gap-2">
                    Start a Conversation
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-border/60 px-8 text-base transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
              >
                <a href="mailto:troymanuelo@gmail.com">
                  troymanuelo@gmail.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
