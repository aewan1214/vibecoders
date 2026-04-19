import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import FeaturedProjects from "@/components/featured-projects";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SkillsSection />
        <FeaturedProjects projects={projects.slice(0, 4)} showViewAll />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
