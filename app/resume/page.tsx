import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { portfolioConfig } from "@/config/portfolio-config"
import { Briefcase, Code, Download, ExternalLink, GraduationCap, Wrench } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white">{portfolioConfig.name}</h1>
            <p className="mt-2 text-slate-300">{portfolioConfig.title}</p>
          </div>
          <Button asChild className="rounded-full bg-cyan-300 text-slate-950 hover:bg-cyan-200">
            <a
              href="https://drive.google.com/drive/folders/14fNsU2gLwbrU9Qsh-2Z7JvN_EoPTB6CN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-4 w-4" />
              PDF Version
            </a>
          </Button>
        </div>

        <section className="mb-12">
          <h2 className="mb-4 flex items-center text-2xl font-semibold text-white">
            <GraduationCap className="mr-2 h-6 w-6 text-cyan-200" />
            Education
          </h2>
          {portfolioConfig.education.map((item) => (
            <Card key={item.degree} className="border-white/10 bg-white/[0.045] backdrop-blur">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white">{item.institution}</h3>
                <p className="mt-1 text-cyan-200">{item.degree}</p>
                <p className="mt-1 text-slate-400">{item.duration}</p>
                <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="mb-4 flex items-center text-2xl font-semibold text-white">
            <Briefcase className="mr-2 h-6 w-6 text-cyan-200" />
            Work Experience
          </h2>
          <div className="space-y-5">
            {portfolioConfig.experience.map((experience) => (
              <Card key={experience.title} className="border-white/10 bg-white/[0.045] backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                      <p className="text-cyan-200">{experience.company}</p>
                    </div>
                    <p className="text-sm text-slate-400">{experience.duration}</p>
                  </div>
                  <div className="mt-4 space-y-3 text-slate-300">
                    {experience.description.split("\n\n").map((paragraph) => (
                      <p key={paragraph} className="leading-7">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="border border-white/10 bg-cyan-300/10 text-cyan-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 flex items-center text-2xl font-semibold text-white">
            <Code className="mr-2 h-6 w-6 text-cyan-200" />
            Relevant Projects
          </h2>
          <div className="space-y-5">
            {portfolioConfig.projects.map((project) => (
              <Card key={project.title} className="border-white/10 bg-white/[0.045] backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.github && (
                        <Button asChild size="sm" variant="outline" className="border-white/15 bg-white/[0.03] text-white">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            GitHub
                          </a>
                        </Button>
                      )}
                      {project.devpost && (
                        <Button asChild size="sm" variant="outline" className="border-white/15 bg-white/[0.03] text-white">
                          <a href={project.devpost} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Devpost
                          </a>
                        </Button>
                      )}
                      {project.demo && !project.devpost && (
                        <Button asChild size="sm" variant="outline" className="border-white/15 bg-white/[0.03] text-white">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="border border-white/10 bg-emerald-300/10 text-emerald-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 space-y-3 text-slate-300">
                    {(Array.isArray(project.description) ? project.description : [project.description]).map((paragraph) => (
                      <p key={paragraph} className="leading-7">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 flex items-center text-2xl font-semibold text-white">
            <Wrench className="mr-2 h-6 w-6 text-cyan-200" />
            Technical Skills
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {portfolioConfig.skills.map((skill) => (
              <Card key={skill.title} className="border-white/10 bg-white/[0.045] backdrop-blur">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-white">{skill.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{skill.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skill.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="border border-white/10 bg-slate-950/40 text-slate-300">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
