import LandingSection from "@/components/LandingSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <main>
      <ScrollAnimations />
      <LandingSection />
      <div className="scroll-fade-in">
        <ProjectsSection />
      </div>
      <div className="scroll-fade-in">
        <ContactSection />
      </div>
    </main>
  );
}
