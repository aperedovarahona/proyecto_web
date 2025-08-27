import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import VisionMission from "@/components/vision-mission"
import ProjectsSection from "@/components/projects-section"
import TeamSection from "@/components/team-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <VisionMission />
      <ProjectsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
