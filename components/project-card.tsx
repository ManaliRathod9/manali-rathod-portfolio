import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/icons"
import { ProjectThumbnail } from "@/components/project-thumbnail"
import { TiltCard } from "@/components/tilt-card"
import { cn } from "@/lib/utils"
import { type Project } from "@/lib/content"

/** The thumbnail links to whichever project URL already exists. */
function primaryHref(project: Project) {
  return project.demoUrl ?? project.githubUrl
}

function ThumbnailLink({
  project,
  className,
  sizes,
  priority,
  variant,
}: {
  project: Project
  className?: string
  sizes?: string
  priority?: boolean
  variant?: "fill" | "showcase"
}) {
  return (
    <a
      href={primaryHref(project)}
      target="_blank"
      rel="noreferrer"
      tabIndex={-1}
      aria-hidden
      className={cn("shine relative block overflow-hidden", className)}
    >
      <ProjectThumbnail
        projectId={project.id}
        sizes={sizes}
        priority={priority}
        variant={variant}
      />
      {/* Sits over the artwork only, never over the written detail. */}
      <span className="absolute inset-0 flex items-center justify-center bg-ink/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-[0.9375rem] font-semibold text-ink shadow-lg">
          View Project
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </span>
    </a>
  )
}

const techTones = [
  "border-brand/20 bg-brand/8 text-brand",
  "border-teal/25 bg-teal/10 text-teal-ink",
  "border-indigo/20 bg-indigo/8 text-indigo",
  "border-orange/30 bg-orange/12 text-orange",
]

function TechList({ tech }: { tech: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
      {tech.map((item, index) => (
        <li
          key={item}
          className={`rounded-lg border px-2.5 py-1 text-sm font-semibold ${techTones[index % techTones.length]}`}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

function ProofList({ project, compact = false }: { project: Project; compact?: boolean }) {
  const rows = [
    { term: "Problem", detail: project.proof.problem, dot: "bg-coral" },
    { term: "Built", detail: project.proof.built, dot: "bg-brand" },
    { term: "Why it matters", detail: project.proof.impact, dot: "bg-teal" },
  ]

  return (
    <dl
      className={cn(
        "mt-5 space-y-2.5 rounded-xl border border-hairline/70 bg-gradient-to-br from-sky/60 to-lavender/60 p-4",
        compact && "mt-4 p-3.5"
      )}
    >
      {rows.map((row) => (
        <div key={row.term} className="flex gap-3">
          <span aria-hidden className={cn("mt-2 size-1.5 shrink-0 rounded-full", row.dot)} />
          <div>
            <dt className="label-mono text-muted">{row.term}</dt>
            <dd className="mt-0.5 text-[0.9375rem] leading-relaxed text-ink">{row.detail}</dd>
          </div>
        </div>
      ))}
    </dl>
  )
}

function ProjectActions({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {project.demoUrl && (
        <Button
          nativeButton={false}
          render={
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              Live Demo
              <ArrowUpRight className="transition-transform duration-200 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
            </a>
          }
        />
      )}
      <Button
        variant={project.demoUrl ? "secondary" : "default"}
        nativeButton={false}
        render={
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <GithubIcon />
            View Code
            <span className="sr-only"> for {project.title}</span>
          </a>
        }
      />
    </div>
  )
}

const cardBase =
  "group relative flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white card-shadow transition-[box-shadow,border-color] duration-300 ease-out hover:border-brand/40 hover:card-shadow-hover"

/** Large treatment for the two lead projects: animated preview beside the detail. */
export function FeaturedProjectCard({
  project,
  index,
  priority = false,
}: {
  project: Project
  index: number
  priority?: boolean
}) {
  const flipped = index % 2 === 1

  return (
    <article data-reveal={flipped ? "right" : "left"}>
      <TiltCard className={cardBase}>
        <div className={cn("grid lg:grid-cols-2", flipped && "lg:[&>a]:order-2")}>
          <ThumbnailLink
            project={project}
            variant="showcase"
            className="aspect-16/10 lg:aspect-auto lg:h-full"
            sizes="(min-width: 1024px) 600px, 100vw"
            priority={priority}
          />

          <div className="flex flex-col p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="label-mono rounded-lg bg-gradient-to-r from-brand to-indigo px-2.5 py-1.5 text-white">
                Featured
              </span>
              {project.demoUrl && (
                <span className="label-mono rounded-lg bg-teal/15 px-2.5 py-1.5 text-teal-ink">
                  Live
                </span>
              )}
            </div>

            <h3 className="mt-4 text-2xl font-extrabold text-ink sm:text-[1.75rem]">
              {project.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-subtle">{project.description}</p>

            <TechList tech={project.tech} />
            <ProofList project={project} />
            <ProjectActions project={project} className="mt-6" />
          </div>
        </div>
      </TiltCard>
    </article>
  )
}

/** Grid treatment for the remaining projects. */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article data-reveal data-reveal-delay={String(index % 2)} className="h-full">
      <TiltCard className={cn(cardBase, "h-full")}>
        <ThumbnailLink
          project={project}
          className="aspect-16/10 w-full"
          sizes="(min-width: 768px) 560px, 100vw"
        />

        <div className="flex flex-1 flex-col p-6">
          {project.demoUrl && (
            <span className="label-mono w-fit rounded-lg bg-teal/15 px-2.5 py-1.5 text-teal-ink">
              Live
            </span>
          )}

          <h3 className={cn("text-xl font-extrabold text-ink", project.demoUrl ? "mt-3" : "")}>
            {project.title}
          </h3>
          <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-subtle">
            {project.description}
          </p>

          <TechList tech={project.tech} />
          <ProofList project={project} compact />
          <ProjectActions project={project} className="mt-auto pt-6" />
        </div>
      </TiltCard>
    </article>
  )
}
