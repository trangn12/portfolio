"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { ParallaxBackground } from "./parallax-background"

interface ExperienceCardProps {
  experience: {
    title: string
    company: string
    duration: string
    description: string
    technologies: string[]
    moreInfo?: string
  }
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative group cursor-pointer">
      <ParallaxBackground className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100" />
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold">{experience.title}</h3>
              <div className="text-primary">{experience.company}</div>
            </div>
            <div className="text-muted-foreground">{experience.duration}</div>
          </div>
          <p className="text-muted-foreground line-clamp-3">{experience.description}</p>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-blue-500/20 text-blue-300">
                {tech}
              </Badge>
            ))}
          </div>
          {experience.moreInfo && (
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.preventDefault()
                window.open(experience.moreInfo, "_blank", "noopener,noreferrer")
              }}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              More Information
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
