"use client"

import { Button } from "@/components/ui/button"
import { Github, Globe, Presentation } from "lucide-react"

interface ProjectButtonsProps {
  project: {
    title: string
    github?: string
    devpost?: string
    demo?: string
  }
}

export function ProjectButtons({ project }: ProjectButtonsProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {project.github && project.title !== "Chess Game Using C" && project.title !== "Tic-Tac-Toe" && (
        <Button asChild>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </a>
        </Button>
      )}
      {project.devpost && (
        <Button asChild variant="secondary">
          <a href={project.devpost} target="_blank" rel="noopener noreferrer">
            <Globe className="mr-2 h-4 w-4" />
            View on Devpost
          </a>
        </Button>
      )}
      {project.demo && (
        <Button asChild variant="secondary">
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <Presentation className="mr-2 h-4 w-4" />
            View Demo
          </a>
        </Button>
      )}
    </div>
  )
}
