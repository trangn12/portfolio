import { portfolioConfig } from "@/config/portfolio-config"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Globe, Presentation } from "lucide-react"
import Image from "next/image"
import { BackButton } from "@/components/back-button"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = portfolioConfig.projects.find((p) => p.title.toLowerCase().replace(/ /g, "-") === params.slug)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BackButton section="projects" />
      <Card>
        <CardContent className="p-6">
          <div className="relative h-64 mb-6">
            <Image
              src={project.image || (project.images && project.images[0]?.url) || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-cyan-500/20 text-cyan-300">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mb-6">
            <Button asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
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
          {Array.isArray(project.description) ? (
            project.description.map((paragraph, index) => (
              <p key={index} className="text-lg mb-4">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-lg mb-4">{project.description}</p>
          )}
          {project.images && project.images.length > 1 && (
            <div className="mt-8 space-y-8">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="space-y-2">
                  <div className="relative h-64 w-full">
                    <Image
                      src={image.url || "/placeholder.svg"}
                      alt={image.caption || `${project.title} image ${index + 2}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  {image.caption && <p className="text-sm text-center text-muted-foreground">{image.caption}</p>}
                </div>
              ))}
            </div>
          )}
          {project.video && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Project Demo</h2>
              <div className="relative pt-[56.25%] rounded-lg overflow-hidden">
                <iframe
                  src={project.video}
                  title={`${project.title} demo video`}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

