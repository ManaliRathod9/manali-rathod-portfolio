"use client"

import { motion } from "framer-motion"
import { Activity, ArrowUpRight, Brain, Car, Droplets, FlaskConical, BookOpen, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import { type Project } from "@/lib/content"

const thumbnailStyles: Record<string, { icon: LucideIcon; gradient: string }> = {
  papertrail: { icon: BookOpen, gradient: "from-cyan-500/25 via-blue-500/20 to-transparent" },
  "ai-water-tracker": { icon: Droplets, gradient: "from-blue-500/25 via-cyan-500/20 to-transparent" },
  "bates-iu-tool": { icon: FlaskConical, gradient: "from-violet-500/25 via-blue-500/20 to-transparent" },
  balancebite: { icon: Activity, gradient: "from-cyan-500/25 via-violet-500/20 to-transparent" },
  "car-sales-dashboard": { icon: Car, gradient: "from-blue-500/25 via-violet-500/20 to-transparent" },
  "brain-tumor-dashboard": { icon: Brain, gradient: "from-violet-500/25 via-cyan-500/20 to-transparent" },
}

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const thumbnail = thumbnailStyles[project.id]
  const Icon = thumbnail?.icon

  return (
    <motion.article
      data-cursor="card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: (index % 3) * 0.08 }}
      whileHover={{ y: -4 }}
      className="group gradient-border glass-card flex h-full flex-col overflow-hidden rounded-2xl transition-shadow duration-300 hover:shadow-[0_0_30px_-8px_rgba(34,211,238,0.35)]"
    >
      <div
        className={`flex h-32 items-center justify-center bg-linear-to-br ${thumbnail?.gradient ?? "from-cyan-500/20 to-transparent"} border-b border-white/10`}
      >
        {Icon && <Icon className="size-10 text-foreground/70" strokeWidth={1.5} />}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
        <p className="mt-2 text-[15px] leading-7 text-slate-300 sm:text-base">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-[13px] leading-6 text-slate-300 transition-all duration-300 group-hover:border-cyan-300/15 group-hover:bg-white/[0.055] sm:text-sm">
          <p>
            <span className="font-semibold text-slate-100">Problem:</span> {project.proof.problem}
          </p>
          <p className="mt-1.5">
            <span className="font-semibold text-slate-100">Built:</span> {project.proof.built}
          </p>
          <p className="mt-1.5">
            <span className="font-semibold text-slate-100">Why it matters:</span> {project.proof.impact}
          </p>
        </div>

        <div className="mt-auto flex items-center gap-2 pt-5">
          <Button
            variant="outline"
            size="icon-sm"
            nativeButton={false}
            render={
              <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}>
                <GithubIcon className="size-4" />
              </a>
            }
          />
          {project.demoUrl && (
            <Button
              variant="secondary"
              size="sm"
              nativeButton={false}
              render={
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  Live Demo
                  <ArrowUpRight className="size-3.5" />
                </a>
              }
            />
          )}
        </div>
      </div>
    </motion.article>
  )
}
