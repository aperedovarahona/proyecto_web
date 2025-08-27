"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, Github } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Ana García",
    position: "CEO & Fundadora",
    description: "Líder visionaria con más de 15 años de experiencia en tecnología e innovación empresarial.",
    image: "/placeholder-8f82q.png",
    skills: ["Liderazgo", "Estrategia", "Innovación"],
    social: {
      linkedin: "#",
      email: "ana@empresa.com",
    },
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    position: "CTO",
    description: "Experto en arquitectura de software y tecnologías emergentes con pasión por la excelencia técnica.",
    image: "/placeholder-3m8hm.png",
    skills: ["Arquitectura", "Cloud", "DevOps"],
    social: {
      linkedin: "#",
      email: "carlos@empresa.com",
      github: "#",
    },
  },
  {
    id: 3,
    name: "María López",
    position: "Directora de Diseño",
    description: "Diseñadora creativa especializada en experiencias de usuario que conectan emocionalmente.",
    image: "/placeholder-8p1bp.png",
    skills: ["UX/UI", "Branding", "Creatividad"],
    social: {
      linkedin: "#",
      email: "maria@empresa.com",
    },
  },
  {
    id: 4,
    name: "David Chen",
    position: "Lead Developer",
    description: "Desarrollador full-stack apasionado por crear soluciones elegantes y escalables.",
    image: "/placeholder-jr26p.png",
    skills: ["React", "Node.js", "Python"],
    social: {
      linkedin: "#",
      email: "david@empresa.com",
      github: "#",
    },
  },
]

export default function TeamSection() {
  const [visibleMembers, setVisibleMembers] = useState<number[]>([])
  const memberRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const memberId = Number.parseInt(entry.target.getAttribute("data-member-id") || "0")
            setVisibleMembers((prev) => [...prev, memberId])
          }
        })
      },
      { threshold: 0.3 },
    )

    Object.values(memberRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="equipo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">Nuestro Equipo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce a los profesionales apasionados que hacen posible nuestra visión y trabajan incansablemente para
            superar expectativas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              ref={(el) => (memberRefs.current[member.id] = el)}
              data-member-id={member.id}
              className={`transition-all duration-700 ${
                visibleMembers.includes(member.id) ? "animate-on-scroll visible" : "animate-on-scroll"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-blue-800 hover:border-primary/30">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-6 h-6 bg-blue-900 rounded-full border-4 border-background"></div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>

                  <p className="text-accent font-semibold mb-3">{member.position}</p>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.description}</p>

                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-muted hover:bg-blue-900 hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-primary-foreground transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-primary-foreground transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
