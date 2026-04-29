"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  project: {
    title: string
    description: string | string[]
    technologies: string[]
    image: string
    github?: string
    demo?: string
    devpost?: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const description = Array.isArray(project.description) ? project.description.join(" ") : project.description
  const primaryLink = project.demo || project.devpost || project.github
  const hasLinks = Boolean(project.github || project.demo || project.devpost)

  const openPrimaryLink = () => {
    if (primaryLink) {
      window.open(primaryLink, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <motion.div whileHover={{ y: -6 }} className="group relative h-full">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-300/0 via-cyan-300/20 to-rose-300/0 opacity-0 blur-sm transition duration-300 group-hover:opacity-100" />
      <div
        onClick={openPrimaryLink}
        role={primaryLink ? "link" : undefined}
        tabIndex={primaryLink ? 0 : undefined}
        onKeyDown={(event) => {
          if (primaryLink && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault()
            openPrimaryLink()
          }
        }}
        className={`relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur transition group-hover:border-cyan-300/35 group-hover:bg-white/[0.07] ${
          primaryLink ? "cursor-pointer" : ""
        }`}
      >
        <div className="relative mb-5 h-44 overflow-hidden rounded-xl border border-white/10 bg-slate-900">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 to-transparent" />
        </div>
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="secondary" className="border border-white/10 bg-cyan-300/10 text-cyan-200">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-5" onClick={(event) => event.stopPropagation()}>
          {project.github && (
            <Button asChild size="sm" variant="outline" className="rounded-full border-white/15 bg-white/[0.03] text-white hover:bg-white/10">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
          {project.demo && (
            <Button asChild size="sm" className="rounded-full bg-cyan-300 text-slate-950 hover:bg-cyan-200">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </a>
            </Button>
          )}
          {project.devpost && project.devpost !== project.demo && (
            <Button asChild size="sm" variant="outline" className="rounded-full border-white/15 bg-white/[0.03] text-white hover:bg-white/10">
              <a href={project.devpost} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Devpost
              </a>
            </Button>
          )}
          {!hasLinks && (
            <span className="rounded-full border border-white/10 bg-slate-950/45 px-4 py-2 text-sm text-slate-400">
              Link coming soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
