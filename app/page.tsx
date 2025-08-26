import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Users, Target, Briefcase, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-4">Descubre Más Sobre Nosotros</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explora nuestras diferentes secciones para conocer mejor nuestra empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/about" className="group">
              <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-border group-hover:border-primary/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-serif mb-2">Nosotros</h3>
                <p className="text-muted-foreground mb-4">Conoce nuestra misión, visión, valores y equipo</p>
                <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                  <span className="text-sm font-medium">Ver más</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>

            <Link href="/projects" className="group">
              <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-border group-hover:border-primary/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-serif mb-2">Proyectos</h3>
                <p className="text-muted-foreground mb-4">Descubre nuestros proyectos y trabajos realizados</p>
                <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                  <span className="text-sm font-medium">Ver más</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>

            <Link href="/contact" className="group">
              <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-border group-hover:border-primary/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-serif mb-2">Contacto</h3>
                <p className="text-muted-foreground mb-4">Ponte en contacto con nosotros</p>
                <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                  <span className="text-sm font-medium">Ver más</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>

            <Link href="/location" className="group">
              <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-border group-hover:border-primary/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-serif mb-2">Ubicación</h3>
                <p className="text-muted-foreground mb-4">Encuentra nuestra oficina y cómo llegar</p>
                <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                  <span className="text-sm font-medium">Ver más</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
