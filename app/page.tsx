import {
  Header,
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  CTASection,
  Footer,
} from "@/components/sections";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
