"use client";

import Link from "next/link";
import { Code2, Briefcase, MessageCircle, Mail, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  { icon: Code2, href: "https://github.com/aewan1214", label: "GitHub" },
  { icon: Briefcase, href: "https://www.linkedin.com/in/taolalo1214/", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://x.com/trulaloooo", label: "Twitter" },
  { icon: Mail, href: "mailto:troymanuelo@gmail.com", label: "Email" },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-border/50">
      {/* Gradient glow top edge */}
      <div className="absolute -top-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Troy.</h3>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Mining Engineer, GIS Analyst, and Aspiring AI Specialist
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} Troy Olalo. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-3 w-3 fill-red-500 text-red-500" />{" "}
            using Next.js &amp; shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
