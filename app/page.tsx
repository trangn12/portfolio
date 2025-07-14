import { Header } from "../components/header"
import { TechBackground } from "../components/tech-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Code, Wrench, Layers, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { portfolioConfig } from "../config/portfolio-config"
import Image from "next/image"
import { ProjectCard } from "@/components/project-card"
import { ContactForm } from "./components/contact-form"
import { ExperienceCard } from "@/components/experience-card"
import Link from "next/link"

const icons = {
  Cpu,
  Code,
  Wrench,
  Layers,
} as const

export default function Home() {
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
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioConfig.projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={`${project.title}-${index}`} project={project} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/projects">View All Projects ({portfolioConfig.projects.length})</Link>
            </Button>
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
              <Link
                href={`/experience/${encodeURIComponent(exp.title.toLowerCase().replace(/ /g, "-"))}`}
                key={exp.title}
              >
                <ExperienceCard experience={exp} />
              </Link>
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
            <ContactForm />
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
