import Header from "@/components/header"
import ProjectsSection from "@/components/projects-section"
import Footer from "@/components/footer"

export const metadata = {
  title: "Proyectos - Empresa Innovadora",
  description: "Descubre nuestros proyectos más destacados y los trabajos que hemos realizado para nuestros clientes.",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">Nuestros Proyectos</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explora los proyectos que hemos desarrollado y los resultados que hemos logrado para nuestros clientes
            </p>
          </div>
        </div>
      </section>

      <ProjectsSection />
      <Footer />
    </main>
  )
}
