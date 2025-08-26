import Header from "@/components/header"
import VisionMission from "@/components/vision-mission"
import TeamSection from "@/components/team-section"
import Footer from "@/components/footer"

export const metadata = {
  title: "Nosotros - Empresa Innovadora",
  description: "Conoce nuestra misión, visión, valores y el equipo que hace posible nuestros proyectos.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">Sobre Nosotros</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conoce nuestra historia, valores y el equipo que trabaja día a día para hacer realidad nuestros proyectos
            </p>
          </div>
        </div>
      </section>

      <VisionMission />
      <TeamSection />
      <Footer />
    </main>
  )
}
