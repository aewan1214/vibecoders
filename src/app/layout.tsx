import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Troy Olalo — Vibe Coder Specialist",
  description:
    "Personal portfolio of Troy Olalo, a Vibe Coder Specialist building modern, scalable, and beautifully crafted web experiences with TypeScript, Next.js, and shadcn/ui.",
  keywords: [
    "Troy Olalo",
    "Vibe Coder",
    "Web Developer",
    "TypeScript",
    "Next.js",
    "React",
    "shadcn/ui",
    "Portfolio",
  ],
  authors: [{ name: "Troy Olalo" }],
  openGraph: {
    title: "Troy Olalo — Vibe Coder Specialist",
    description:
      "Building modern, scalable, and beautifully crafted web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
