import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata = {
  title: "Ubicación - Empresa Innovadora",
  description: "Encuentra nuestra oficina y conoce cómo llegar. Información de contacto y horarios de atención.",
}

export default function LocationPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">Nuestra Ubicación</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visítanos en nuestra oficina o contáctanos para coordinar una reunión
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-serif text-foreground">Cómo Llegar</h2>

              {/* Google Maps Embed */}
              <div className="w-full h-96 bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8159!2d-74.0817!3d4.6097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMzYnMzUuMCJOIDc0wrAwNCc1NC4wIlc!5e0!3m2!1sen!2sco!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de la empresa"
                />
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold font-serif mb-4">Información de Transporte</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong>Metro:</strong> Estación Universidad (Línea Amarilla)
                  </p>
                  <p>
                    <strong>Bus:</strong> Rutas 15, 23, 45 - Parada Centro Empresarial
                  </p>
                  <p>
                    <strong>Parqueadero:</strong> Disponible en el edificio
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-serif text-foreground">Información de Contacto</h2>

              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Dirección</h3>
                      <p className="text-muted-foreground">
                        Carrera 15 #93-47
                        <br />
                        Oficina 501
                        <br />
                        Bogotá, Colombia
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
                      <p className="text-muted-foreground">
                        +57 (1) 234-5678
                        <br />
                        +57 300 123 4567
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        info@empresa.com
                        <br />
                        contacto@empresa.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Horarios de Atención</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>
                          <strong>Lunes - Viernes:</strong> 8:00 AM - 6:00 PM
                        </p>
                        <p>
                          <strong>Sábados:</strong> 9:00 AM - 1:00 PM
                        </p>
                        <p>
                          <strong>Domingos:</strong> Cerrado
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
