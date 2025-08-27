"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Users, TrendingUp } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Plataforma E-Commerce Avanzada",
    description:
      "Desarrollo de una plataforma de comercio electrónico con IA integrada para personalización de experiencias de usuario.",
    image: "/placeholder-psyiu.png",
    category: "Desarrollo Web",
    status: "Completado",
    year: "2024",
    team: "8 personas",
    impact: "+150% ventas",
  },
  {
    id: 2,
    title: "Sistema de Gestión Empresarial",
    description:
      "ERP completo para optimización de procesos empresariales con módulos de inventario, finanzas y recursos humanos.",
    image: "/placeholder-amdc5.png",
    category: "Software Empresarial",
    status: "En Desarrollo",
    year: "2024",
    team: "12 personas",
    impact: "40% eficiencia",
  },
  {
    id: 3,
    title: "App Móvil de Salud Digital",
    description: "Aplicación móvil para monitoreo de salud con integración IoT y análisis predictivo de datos médicos.",
    image: "/placeholder-ivf7h.png",
    category: "Salud Digital",
    status: "Completado",
    year: "2023",
    team: "6 personas",
    impact: "50K usuarios",
  },
  {
    id: 4,
    title: "Solución de Automatización Industrial",
    description:
      "Sistema de automatización para industria manufacturera con sensores IoT y control inteligente de procesos.",
    image: "/placeholder-86p1v.png",
    category: "IoT Industrial",
    status: "Completado",
    year: "2023",
    team: "10 personas",
    impact: "30% productividad",
  },
]

export default function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const projectRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = Number.parseInt(entry.target.getAttribute("data-project-id") || "0")
            setVisibleProjects((prev) => [...prev, projectId])
          }
        })
      },
      { threshold: 0.3 },
    )

    Object.values(projectRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="proyectos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">Nuestros Proyectos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre algunos de nuestros proyectos más destacados que han transformado la manera en que nuestros
            clientes operan y crecen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[project.id] = el)}
              data-project-id={project.id}
              className={`transition-all duration-700 ${
                visibleProjects.includes(project.id) ? "animate-on-scroll visible" : "animate-on-scroll"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-blue-800 hover:border-primary/30">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant={project.status === "Completado" ? "default" : "secondary"}
                      className={project.status === "Completado" ? "bg-blue-900" : "bg-blue-800"}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-bold font-serif text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{project.team}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="h-4 w-4" />
                      <span>{project.impact}</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all bg-transparent"
                  >
                    Ver Detalles
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
