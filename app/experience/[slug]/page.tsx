import { portfolioConfig } from "@/config/portfolio-config"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { BackButton } from "@/components/back-button"

export default function ExperiencePage({ params }: { params: { slug: string } }) {
  const experience = portfolioConfig.experience.find(
    (exp) => exp.title.toLowerCase().replace(/ /g, "-") === params.slug,
  )

  if (!experience) {
    return <div>Experience not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BackButton section="experience" />
      <Card>
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold mb-4">{experience.title}</h1>
          <div className="text-xl text-cyan-400 mb-2">{experience.company}</div>
          <div className="text-lg text-muted-foreground mb-6">{experience.duration}</div>
          {experience.image && (
            <div className="relative h-64 mb-6">
              <Image
                src={experience.image || "/placeholder.svg"}
                alt={experience.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
          <p className="text-lg mb-6 whitespace-pre-wrap">{experience.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {experience.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-cyan-500/20 text-cyan-300">
                {tech}
              </Badge>
            ))}
          </div>
          {experience.moreInfo && (
            <Button asChild>
              <a href={experience.moreInfo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                More Information
              </a>
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

