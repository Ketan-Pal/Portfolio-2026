import LandingSection from "@/components/LandingSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ScrollAnimations from "@/components/ScrollAnimations";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <ScrollAnimations />
      <Navbar />
      <div id="home">
        <LandingSection />
      </div>
      <div className="scroll-fade-in" id="projects">
        <ProjectsSection />
      </div>
      <div className="scroll-fade-in" id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
