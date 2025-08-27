"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl font-serif">E</span>
            </div>
            <span className="text-xl font-bold font-serif text-foreground">Empresa</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("vision")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Visión
            </button>
            <button
              onClick={() => scrollToSection("mision")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Misión
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("equipo")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Equipo
            </button>
            <Button onClick={() => scrollToSection("contacto")} className="bg-blue-800 hover:bg-blue-700">
              Contacto
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-blue-800">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("vision")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Visión
              </button>
              <button
                onClick={() => scrollToSection("mision")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Misión
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("equipo")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Equipo
              </button>
              <Button onClick={() => scrollToSection("contacto")} className="bg-blue-800 hover:bg-blue-700 w-full">
                Contacto
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
