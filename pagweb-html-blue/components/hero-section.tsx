"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/modern-office-glass-green.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-foreground mb-6">
            Innovación que
            <span className="text-primary block">Transforma</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Somos una empresa líder en soluciones innovadoras, comprometida con la excelencia y el crecimiento
            sostenible de nuestros clientes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 text-primary-foreground px-8 py-3"
              onClick={() => scrollToSection("proyectos")}
            >
              Ver Proyectos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-blue-900 hover:text-primary-foreground px-8 py-3 bg-transparent"
              onClick={() => scrollToSection("vision")}
            >
              <Play className="mr-2 h-5 w-5" />
              Conoce Más
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-800/20 rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-blue-900/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-12 h-12 bg-blue-800/30 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </section>
  )
}
