import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl font-serif">E</span>
              </div>
              <span className="text-xl font-bold font-serif">Empresa</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Innovación que transforma. Soluciones que impulsan el crecimiento sostenible de nuestros clientes.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="h-4 w-4 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Twitter className="h-4 w-4 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="h-4 w-4 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-serif mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-background/80 hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#vision" className="text-background/80 hover:text-primary transition-colors">
                  Visión
                </a>
              </li>
              <li>
                <a href="#mision" className="text-background/80 hover:text-primary transition-colors">
                  Misión
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-background/80 hover:text-primary transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#equipo" className="text-background/80 hover:text-primary transition-colors">
                  Equipo
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold font-serif mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Apps Móviles
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Consultoría
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Automatización
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Soporte
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold font-serif mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-background/80 text-sm">
                  Av. Innovación 123, Piso 15
                  <br />
                  Ciudad Empresarial, CP 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-background/80 text-sm">+52 (55) 1234-5678</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-background/80 text-sm">contacto@empresa.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Empresa. Todos los derechos reservados. |
            <a href="#" className="hover:text-primary transition-colors ml-1">
              Política de Privacidad
            </a>{" "}
            |
            <a href="#" className="hover:text-primary transition-colors ml-1">
              Términos de Servicio
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
