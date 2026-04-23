"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Send,
  MapPin,
  Clock,
  Code2,
  Briefcase,
  MessageCircle,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "troymanuelo@gmail.com",
    href: "mailto:troymanuelo@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Philippines",
    href: null,
  },
  {
    icon: Clock,
    label: "Timezone",
    value: "UTC+8 (PHT)",
    href: null,
  },
];

const socialLinks = [
  { icon: Code2, label: "GitHub", href: "https://github.com/aewan1214" },
  { icon: Briefcase, label: "LinkedIn", href: "https://www.linkedin.com/in/taolalo1214/" },
  { icon: MessageCircle, label: "Twitter / X", href: "https://x.com/trulaloooo" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, wire this to an API route or service like Resend
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative section-padding pt-32">
          {/* Background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="animate-float absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="animate-float-delayed absolute right-1/4 bottom-1/4 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <Badge
                variant="secondary"
                className="mb-4 px-4 py-1.5 text-xs font-medium uppercase tracking-wider"
              >
                <MessageSquare className="mr-1.5 h-3 w-3" />
                Contact
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Get in{" "}
                <span className="gradient-text">Touch</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
                Have a project idea, a question, or just want to say hi? I&apos;d
                love to hear from you. Fill out the form or reach out directly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="lg:col-span-3"
              >
                <Card className="border-border/50 bg-card/50 overflow-hidden">
                  <CardContent className="p-8">
                    {submitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-16 text-center"
                      >
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                          <CheckCircle2 className="h-8 w-8 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-semibold">
                          Message Sent!
                        </h3>
                        <p className="mt-2 max-w-sm text-muted-foreground">
                          Thanks for reaching out! I&apos;ll get back to you as
                          soon as possible.
                        </p>
                        <Button
                          variant="outline"
                          className="mt-6 rounded-full"
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({
                              name: "",
                              email: "",
                              subject: "",
                              message: "",
                            });
                          }}
                        >
                          Send Another
                        </Button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label
                              htmlFor="name"
                              className="text-sm font-medium"
                            >
                              Name
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your name"
                              className="w-full rounded-xl border border-border/50 bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="email"
                              className="text-sm font-medium"
                            >
                              Email
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="you@example.com"
                              className="w-full rounded-xl border border-border/50 bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="subject"
                            className="text-sm font-medium"
                          >
                            Subject
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-border/50 bg-secondary/30 px-4 py-3 text-sm text-foreground transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                          >
                            <option value="" disabled>
                              Select a topic
                            </option>
                            <option value="project">
                              Project Collaboration
                            </option>
                            <option value="freelance">Freelance Work</option>
                            <option value="job">Job Opportunity</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="message"
                            className="text-sm font-medium"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell me about your project..."
                            className="w-full resize-none rounded-xl border border-border/50 bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent text-base font-semibold text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 sm:w-auto sm:px-10"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            Send Message
                            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-6 lg:col-span-2"
              >
                {/* Contact Info */}
                <Card className="border-border/50 bg-card/50">
                  <CardContent className="p-6 space-y-5">
                    <h3 className="text-lg font-semibold">Contact Info</h3>
                    {contactInfo.map((info) => (
                      <div key={info.label} className="flex items-start gap-3">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <info.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-sm font-medium transition-colors hover:text-primary"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card className="border-border/50 bg-card/50">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold">Follow Me</h3>
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-secondary hover:text-foreground"
                      >
                        <social.icon className="h-5 w-5" />
                        {social.label}
                      </a>
                    ))}
                  </CardContent>
                </Card>

                {/* Availability */}
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />
                      <h3 className="text-lg font-semibold">
                        Currently Available
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      I&apos;m open to freelance projects, collaborations, and
                      full-time opportunities. Let&apos;s connect!
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
