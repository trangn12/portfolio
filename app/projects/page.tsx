import { Header } from "@/components/header"
import { ProjectCard } from "@/components/project-card"
import { portfolioConfig } from "@/config/portfolio-config"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ParallaxBackground } from "@/components/parallax-background"
import Link from "next/link"

export default function ProjectsPage() {
  console.log("Total projects:", portfolioConfig.projects.length)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        {/* Projects Section */}
        <section id="projects" className="py-20 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cyberpunk-background-zFXoj0YhhkT2cuUpciLKz8tsBbiW1.jpg"
              alt="Cyberpunk background"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-cyan-200 text-transparent bg-clip-text">
              All Projects ({portfolioConfig.projects.length})
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioConfig.projects.map((project, index) => (
                <ProjectCard key={`${project.title}-${index}`} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section (Partial) */}
        <section id="experience" className="py-20 relative">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>
            <div className="grid gap-8">
              {portfolioConfig.experience.map((exp) => (
                <Link href={`/experience/${exp.title.toLowerCase().replace(/ /g, "-")}`} key={exp.title}>
                  <div className="relative group">
                    <ParallaxBackground className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100" />
                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-2xl font-bold">{exp.title}</h3>
                            <div className="text-primary">{exp.company}</div>
                          </div>
                          <div className="text-muted-foreground">{exp.duration}</div>
                        </div>
                        <p className="text-muted-foreground line-clamp-3">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-blue-500/20 text-blue-300">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6">
          <div className="container mx-auto px-6 text-center">
            <p>
              &copy; {new Date().getFullYear()} {portfolioConfig.name}. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
