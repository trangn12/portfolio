"use client"
import { Header } from "../components/header"
import { TechBackground } from "../components/tech-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Code, Wrench, Layers, Github, Linkedin, Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react"
import { portfolioConfig } from "../config/portfolio-config"
import Image from "next/image"
import { ParallaxBackground } from "@/components/parallax-background"
import { ProjectCard } from "@/components/project-card"
import { useRouter } from "next/navigation"
import { sendEmail } from "@/app/actions"

const icons = {
  Cpu,
  Code,
  Wrench,
  Layers,
} as const

export default function Home() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TechBackground />
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TFDkoj0YhhkT2cuUpciLKz8tsBbiW1.png"
            alt="Tech background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{portfolioConfig.name}</h1>
          <p className="text-xl md:text-2xl mb-8">{portfolioConfig.title}</p>
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" asChild>
              <a href={portfolioConfig.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={portfolioConfig.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
          <div className="flex items-center justify-center text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4" />
            {portfolioConfig.location}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u6LGmOZMMN99pjQiZuaehzIoMgoiLE.png"
            alt="Network background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-48 h-48 relative rounded-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tMsbAIeci7AoDNHxwuNJeAevqlJgnx.png"
                alt="Trang Nguyen"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="max-w-2xl">
              <p className="text-lg">{portfolioConfig.about}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 pt-20 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.vecteezy.com/system/resources/previews/000/518/751/original/vector-black-triangular-abstract-texture-low-light-background.jpg"
            alt="Computer Engineering background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioConfig.skills.map((skill) => {
              const Icon = icons[skill.icon as keyof typeof icons]
              return (
                <Card key={skill.title}>
                  <CardContent className="flex flex-col items-center p-6 h-64">
                    <Icon className="w-12 h-12 mb-2 text-primary" />
                    <h3 className="text-xl font-semibold mb-4 text-center">{skill.title}</h3>
                    <div className="overflow-y-auto flex-grow">
                      <p className="text-center text-muted-foreground">{skill.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 pt-20 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://th.bing.com/th/id/OIP.HDJqF8o5q0e8KlnbkuzxGQHaFj?w=221&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="Cyberpunk background"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-cyan-200 text-transparent bg-clip-text">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioConfig.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 pt-20 relative">
        <div className="container mx-auto px-6">
          <Image
            src="https://th.bing.com/th/id/OIP.ppswW7_dDi_Fde9GaEZFNQHaEK?w=293&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="Computer Engineering background"
            fill
            className="object-cover opacity-10"
          />
          <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>
          <div className="grid gap-8">
            {portfolioConfig.experience.map((exp) => (
              <div key={exp.title} className="relative group">
                <ParallaxBackground className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100" />
                <Card
                  onClick={() => router.push(`/experience/${exp.title.toLowerCase().replace(/ /g, "-")}`)}
                  className="cursor-pointer"
                >
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
                    {exp.moreInfo && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(exp.moreInfo, "_blank", "noopener,noreferrer")
                        }}
                      >
                        <span>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          More Information
                        </span>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 pt-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    <a href={`mailto:${portfolioConfig.email}`} className="hover:text-primary">
                      {portfolioConfig.email}
                    </a>
                  </p>
                  <p className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    <a href={`tel:${portfolioConfig.phone}`} className="hover:text-primary">
                      {portfolioConfig.phone}
                    </a>
                  </p>
                  <p className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    {portfolioConfig.location}
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <form action={sendEmail} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-2 bg-input text-foreground rounded"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-2 bg-input text-foreground rounded"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full p-2 bg-input text-foreground rounded"
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 pt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            Made with Next, Tailwind, and AOS •{" "}
            <a
              href="https://github.com/trangn12"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              Github
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

