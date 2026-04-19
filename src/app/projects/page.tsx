import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FeaturedProjects from "@/components/featured-projects";
import CTASection from "@/components/cta-section";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects — Troy Olalo",
  description:
    "Explore my portfolio of modern web applications built with TypeScript, Next.js, React, and cutting-edge technologies.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <FeaturedProjects projects={projects} showViewAll={false} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
