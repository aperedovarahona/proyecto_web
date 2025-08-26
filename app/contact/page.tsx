import Header from "@/components/header"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export const metadata = {
  title: "Contacto - Empresa Innovadora",
  description:
    "Ponte en contacto con nosotros. Estamos aquí para ayudarte con tus proyectos y responder tus preguntas.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">Contáctanos</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros y conversemos sobre tu próximo proyecto
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
