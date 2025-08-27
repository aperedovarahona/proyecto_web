"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Target, Lightbulb, Users } from "lucide-react"

export default function VisionMission() {
  const [visibleSections, setVisibleSections] = useState<string[]>([])
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...prev, entry.target.id])
          }
        })
      },
      { threshold: 0.3 },
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Vision Section */}
      <section id="vision" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div
            ref={(el) => (sectionRefs.current["vision-content"] = el)}
            id="vision-content"
            className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              visibleSections.includes("vision-content") ? "animate-on-scroll visible" : "animate-on-scroll"
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground">Nuestra Visión</h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser la empresa líder en innovación tecnológica, reconocida mundialmente por nuestras soluciones
                transformadoras que impulsan el crecimiento sostenible y generan valor duradero para nuestros clientes y
                la sociedad.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="border-primary/20">
                  <CardContent className="p-4 text-center">
                    <Lightbulb className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-foreground">Innovación</h3>
                    <p className="text-sm text-muted-foreground">Constante</p>
                  </CardContent>
                </Card>
                <Card className="border-primary/20">
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-foreground">Impacto</h3>
                    <p className="text-sm text-muted-foreground">Global</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img src="/placeholder-0npwf.png" alt="Visión empresarial" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-800 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-accent-foreground">2030</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mision" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div
            ref={(el) => (sectionRefs.current["mission-content"] = el)}
            id="mission-content"
            className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              visibleSections.includes("mission-content") ? "animate-on-scroll visible" : "animate-on-scroll"
            }`}
          >
            <div className="relative order-2 md:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/collaborative-tech-solutions.png"
                  alt="Misión empresarial"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center shadow-lg">
                <Target className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-accent-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground">Nuestra Misión</h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Desarrollar y entregar soluciones tecnológicas innovadoras que superen las expectativas de nuestros
                clientes, fomentando un ambiente de trabajo colaborativo y sostenible que impulse el crecimiento mutuo.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Excelencia:</span>
                    Comprometidos con la calidad en cada proyecto
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Colaboración:</span>
                    Trabajamos en equipo para lograr objetivos comunes
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Sostenibilidad:</span>
                    Responsables con el medio ambiente y la sociedad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
