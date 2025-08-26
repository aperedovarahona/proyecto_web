"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActivePage = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
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
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl font-serif">E</span>
            </div>
            <span className="text-xl font-bold font-serif text-foreground">Empresa</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors ${
                isActivePage("/") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${
                isActivePage("/about") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Nosotros
            </Link>
            <Link
              href="/projects"
              className={`transition-colors ${
                isActivePage("/projects") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Proyectos
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${
                isActivePage("/contact") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Contacto
            </Link>
            <Link href="/location">
              <Button
                className={`bg-accent hover:bg-accent/90 ${isActivePage("/location") ? "ring-2 ring-primary" : ""}`}
              >
                Ubicación
              </Button>
            </Link>
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
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                href="/"
                className={`text-left transition-colors ${
                  isActivePage("/") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/about"
                className={`text-left transition-colors ${
                  isActivePage("/about") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="/projects"
                className={`text-left transition-colors ${
                  isActivePage("/projects") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                href="/contact"
                className={`text-left transition-colors ${
                  isActivePage("/contact") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <Link href="/location" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  className={`bg-accent hover:bg-accent/90 w-full ${
                    isActivePage("/location") ? "ring-2 ring-primary" : ""
                  }`}
                >
                  Ubicación
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
