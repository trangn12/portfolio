"use client"

import { Header } from "../components/header"
import { TechBackground } from "../components/tech-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Briefcase,
  Code,
  Cpu,
  Database,
  Github,
  Layers,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowRight,
  FileText,
  Users,
} from "lucide-react"
import { portfolioConfig } from "../config/portfolio-config"
import Image from "next/image"
import { ProjectCard } from "@/components/project-card"
import { useRouter } from "next/navigation"

const icons = {
  BarChart3,
  Briefcase,
  Cpu,
  Code,
  Database,
  Layers,
  Users,
} as const

const sectionLabel = "text-sm font-medium uppercase tracking-[0.22em] text-cyan-300/80"
const sectionTitle = "mt-3 text-3xl font-bold text-white md:text-5xl"
const sectionCopy = "mt-4 max-w-2xl text-base leading-7 text-slate-300"

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <TechBackground />
      <Header />

      <main className="relative z-10">
        <section id="home" className="relative flex min-h-screen items-center px-6 pb-24 pt-32">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/[0.04] px-4 py-2 text-sm text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.12)] backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
                Computer Engineering at UCI
              </div>
              <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] text-white md:text-7xl lg:text-8xl">
                {portfolioConfig.name}
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300 md:text-2xl">{portfolioConfig.title}</p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
                Building hardware-aware software, AI-assisted study tools, and interactive systems with a clean,
                curious engineering style.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="h-12 rounded-full bg-cyan-300 px-6 text-slate-950 hover:bg-cyan-200">
                  <a href="#projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="h-12 rounded-full border-white/15 bg-white/[0.03] px-6 text-white hover:bg-white/10"
                >
                  <a href={portfolioConfig.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="h-12 rounded-full border-white/15 bg-white/[0.03] px-6 text-white hover:bg-white/10"
                >
                  <a href={portfolioConfig.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
              <div className="mt-8 flex items-center text-sm text-slate-400">
                <MapPin className="mr-2 h-4 w-4 text-rose-300" />
                {portfolioConfig.location}
              </div>
            </div>

            <div className="relative min-h-[460px]">
              <div className="absolute inset-x-8 top-0 h-32 rounded-[100%] bg-cyan-300/10 blur-3xl" />
              <div className="absolute left-0 top-10 h-72 w-72 rounded-full border border-cyan-300/15" />
              <div className="absolute right-4 top-4 h-80 w-80 rounded-full border border-fuchsia-300/10" />
              <div className="relative mx-auto flex aspect-square max-w-[460px] items-center justify-center rounded-[2rem] border border-white/10 bg-slate-950/45 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
                <div className="absolute inset-5 rounded-[1.5rem] border border-cyan-300/20" />
                <div className="absolute inset-10 rounded-[1.2rem] border border-emerald-300/10" />
                <div className="relative h-full w-full overflow-hidden rounded-[1.2rem] border border-white/10 bg-slate-900">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tMsbAIeci7AoDNHxwuNJeAevqlJgnx.png"
                    alt="Trang Nguyen"
                    fill
                    className="object-cover opacity-90"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur">
                    <div className="text-sm text-cyan-200">Current Focus</div>
                    <div className="mt-1 text-lg font-semibold text-white">Full-stack systems with hardware roots</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="relative px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className={sectionLabel}>About</div>
              <h2 className={sectionTitle}>I like making technical ideas feel usable.</h2>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-xl shadow-slate-950/30 backdrop-blur">
              <p className="text-lg leading-8 text-slate-200">{portfolioConfig.about}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {["Embedded thinking", "AI workflows", "Product polish"].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="relative px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className={sectionLabel}>Skills</div>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className={sectionTitle}>A practical engineering toolkit.</h2>
              <p className={sectionCopy}>From low-level hardware constraints to interactive web experiences.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {portfolioConfig.skills.map((skill) => {
                const Icon = icons[skill.icon as keyof typeof icons]
                return (
                  <Card key={skill.title} className="group border-white/10 bg-white/[0.045] backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]">
                    <CardContent className="flex min-h-64 flex-col p-6">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                      <p className="mt-4 line-clamp-2 leading-7 text-slate-300">{skill.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {skill.targets.map((target) => (
                          <Badge key={target} variant="secondary" className="border border-emerald-300/15 bg-emerald-300/10 text-emerald-200">
                            {target}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-auto pt-5">
                        <div className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Tools</div>
                        <div className="flex flex-wrap gap-2">
                          {skill.tools.slice(0, 5).map((tool) => (
                            <span key={tool} className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-1 text-xs text-slate-300">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="relative px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className={sectionLabel}>Projects</div>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className={sectionTitle}>Interfaces, tools, and systems.</h2>
              <p className={sectionCopy}>A mix of software products, game logic, hardware design, and signal processing.</p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {portfolioConfig.projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="relative px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className={sectionLabel}>Experience</div>
            <h2 className={sectionTitle}>Where engineering meets people.</h2>
            <div className="mt-12 grid gap-5">
              {portfolioConfig.experience.map((exp) => (
                <Card
                  key={exp.title}
                  onClick={() => router.push(`/experience/${exp.title.toLowerCase().replace(/ /g, "-")}`)}
                  className="cursor-pointer border-white/10 bg-white/[0.045] backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/35 hover:bg-white/[0.07]"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                        <div className="mt-1 text-cyan-200">{exp.company}</div>
                      </div>
                      <div className="text-sm text-slate-400">{exp.duration}</div>
                    </div>
                    <p className="mt-5 leading-7 text-slate-300 line-clamp-3">{exp.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="border border-white/10 bg-emerald-300/10 text-emerald-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {exp.moreInfo && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="mt-5 border-white/15 bg-white/[0.03] text-white hover:bg-white/10"
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
              ))}
            </div>
          </div>
        </section>

        <section id="recommendations" className="relative px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className={sectionLabel}>Recommendations</div>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className={sectionTitle}>Letters from people I&apos;ve worked with.</h2>
              <p className={sectionCopy}>
                A short place for references that adds credibility without interrupting the project flow.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {portfolioConfig.recommendations.map((letter) => (
                <Card
                  key={letter.title}
                  className="group border-white/10 bg-white/[0.045] backdrop-blur transition hover:-translate-y-1 hover:border-rose-300/35 hover:bg-white/[0.07]"
                >
                  <CardContent className="p-6">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-rose-300/20 bg-rose-300/10 text-rose-200">
                      <FileText className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{letter.title}</h3>
                    <div className="mt-2 text-cyan-200">{letter.author}</div>
                    <p className="mt-4 leading-7 text-slate-300">{letter.description}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="mt-6 h-11 rounded-full border-white/15 bg-white/[0.03] text-white hover:bg-white/10"
                    >
                      <a href={letter.file} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Letter
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className={sectionLabel}>Contact</div>
            <h2 className={sectionTitle}>Let&apos;s build something sharp.</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-[0.85fr_1.15fr]">
              <Card className="border-white/10 bg-white/[0.045] backdrop-blur">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white">Contact Information</h3>
                  <div className="mt-5 space-y-4 text-slate-300">
                    <p className="flex items-center">
                      <Mail className="mr-3 h-4 w-4 text-cyan-200" />
                      <a href={`mailto:${portfolioConfig.email}`} className="hover:text-cyan-200">
                        {portfolioConfig.email}
                      </a>
                    </p>
                    <p className="flex items-center">
                      <Phone className="mr-3 h-4 w-4 text-cyan-200" />
                      <a href={`tel:${portfolioConfig.phone}`} className="hover:text-cyan-200">
                        {portfolioConfig.phone}
                      </a>
                    </p>
                    <p className="flex items-center">
                      <MapPin className="mr-3 h-4 w-4 text-rose-300" />
                      {portfolioConfig.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-white/10 bg-white/[0.045] backdrop-blur">
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Find Me Online</h3>
                    <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                      I&apos;m always happy to connect about engineering projects, technical roles, student leadership,
                      and collaborative builds.
                    </p>
                  </div>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <Button
                      variant="outline"
                      asChild
                      className="h-12 rounded-full border-white/15 bg-white/[0.03] text-white hover:bg-white/10"
                    >
                      <a href={portfolioConfig.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="h-12 rounded-full border-white/15 bg-white/[0.03] text-white hover:bg-white/10"
                    >
                      <a href={portfolioConfig.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button asChild className="h-12 rounded-full bg-cyan-300 text-slate-950 hover:bg-cyan-200 sm:col-span-2">
                      <a href={`mailto:${portfolioConfig.email}`}>
                        <Mail className="mr-2 h-4 w-4" />
                        Email Me
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8">
        <div className="mx-auto max-w-7xl text-center text-sm text-slate-400">
          Made with Next, Tailwind, and AOS -{" "}
          <a href={portfolioConfig.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-200">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}
