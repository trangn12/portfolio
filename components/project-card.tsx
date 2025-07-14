"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    technologies: string[]
    image: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const slug = project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

  return (
    <motion.div whileHover={{ scale: 1.05 }} className="relative group">
      <div className="absolute -inset-0.5 bg-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
      <Link href={`/projects/${slug}`}>
        <div className="relative bg-black/50 rounded-lg p-4 h-full backdrop-blur-sm">
          <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 text-cyan-400">{project.title}</h3>
          <p className="text-sm text-gray-300 mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-cyan-500/20 text-cyan-300">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
