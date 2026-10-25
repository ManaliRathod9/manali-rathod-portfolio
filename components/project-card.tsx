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

/**
 * The project image inside a reflective chrome frame. On hover the frame lifts
 * (TiltCard), a lavender reflection sweeps the image and the mocha shadow deepens.
 */
function FramedThumbnail({
  project,
  className,
  linkClassName,
  sizes,
  priority,
  variant,
}: {
  project: Project
  className?: string
  linkClassName?: string
  sizes?: string
  priority?: boolean
  variant?: "fill" | "showcase"
}) {
  return (
    <TiltCard className={cn("project-frame metal-border group rounded-[1.75rem] p-1.5", className)}>
      <a
        href={primaryHref(project)}
        target="_blank"
        rel="noreferrer"
        tabIndex={-1}
        aria-hidden
        className={cn("shine relative block overflow-hidden rounded-[1.35rem]", linkClassName)}
      >
        <ProjectThumbnail projectId={project.id} sizes={sizes} priority={priority} variant={variant} />
        {/* Sits over the artwork only, never over the written detail. */}
        <span className="absolute inset-0 flex items-center justify-center bg-espresso/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/50 bg-platinum bg-metal-soft px-4 py-2.5 text-[0.9375rem] font-semibold text-espresso glow-lavender-strong">
            View Project
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </span>
      </a>
    </TiltCard>
  )
}

function TechList({ tech }: { tech: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
      {tech.map((item) => (
        <li
          key={item}
          className="rounded-md border border-platinum/20 bg-white/[0.04] px-2.5 py-1 text-[0.8125rem] font-medium tracking-wide text-platinum/85"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

/** Problem / Built / Why it matters, as hairline-ruled rows rather than a boxed panel. */
function ProofList({ project, compact = false }: { project: Project; compact?: boolean }) {
  const rows = [
    { term: "Problem", detail: project.proof.problem },
    { term: "Built", detail: project.proof.built },
    { term: "Why it matters", detail: project.proof.impact },
  ]

  return (
    <dl className={cn("border-t border-platinum/15", compact ? "mt-5" : "mt-7")}>
      {rows.map((row) => (
        <div
          key={row.term}
          className="grid gap-1 border-b border-platinum/15 py-3 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-4"
        >
          <dt className="label-mono pt-0.5 text-lavender/85">{row.term}</dt>
          <dd className="text-[0.9375rem] leading-relaxed text-platinum/85">{row.detail}</dd>
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

function LiveTag() {
  return <span className="label-mono rounded-md bg-lavender px-2 py-1 text-espresso">Live</span>
}

/** Lead projects: a full-width story, large framed preview beside open editorial text. */
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
    <article data-reveal={flipped ? "right" : "left"} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
      <FramedThumbnail
        project={project}
        variant="showcase"
        className={cn("lg:col-span-7", flipped && "lg:order-2")}
        linkClassName="aspect-[16/11]"
        sizes="(min-width: 1024px) 680px, 100vw"
        priority={priority}
      />

      <div className={cn("min-w-0 lg:col-span-5", flipped && "lg:order-1")}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="label-mono text-lavender">Featured</span>
          <span aria-hidden className="metal-rule w-10 opacity-70" />
          {project.demoUrl && <LiveTag />}
        </div>
        <h3 className="mt-4 text-[1.9rem] leading-[1.08] font-extrabold tracking-[-0.025em] text-ivory sm:text-[2.4rem]">
          {project.title}
        </h3>
        <p className="mt-3 text-lg leading-relaxed text-platinum/80">{project.description}</p>

        <TechList tech={project.tech} />
        <ProofList project={project} />
        <ProjectActions project={project} className="mt-7" />
      </div>
    </article>
  )
}

/** The remaining projects: image-led, with the detail set directly on the page below. */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article data-reveal data-reveal-delay={String(index % 2)} className="flex h-full flex-col">
      <FramedThumbnail
        project={project}
        linkClassName="aspect-16/10"
        sizes="(min-width: 768px) 600px, 100vw"
      />

      <div className="flex flex-1 flex-col px-1 pt-7">
        {project.demoUrl && (
          <div>
            <LiveTag />
          </div>
        )}
        <h3 className={cn("text-[1.5rem] leading-tight font-extrabold tracking-[-0.02em] text-ivory", project.demoUrl && "mt-3")}>
          {project.title}
        </h3>
        <p className="mt-2.5 text-base leading-relaxed text-platinum/80">{project.description}</p>

        <TechList tech={project.tech} />
        <ProofList project={project} compact />
        <ProjectActions project={project} className="mt-auto pt-7" />
      </div>
    </article>
  )
}
