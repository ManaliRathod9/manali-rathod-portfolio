import { SectionHeading } from "@/components/section-heading"
import { FeaturedProjectCard, ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/content"

const featuredCount = 2

export function Projects() {
  const featured = projects.slice(0, featuredCount)
  const rest = projects.slice(featuredCount)

  return (
    <section id="projects" className="bg-projects relative overflow-hidden">
      {/* Colourful shapes over the white base */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="blob -left-28 top-24 size-80 bg-pink/14" />
        <span className="blob blob-2 -right-24 top-1/3 size-96 bg-brand/14" />
        <span className="blob blob-3 bottom-10 left-1/2 size-80 bg-orange/14" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Each one started from a specific problem I wanted to solve, not a tutorial."
        />

        <div className="mt-10 space-y-6">
          {featured.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              index={index}
              priority={index === 0}
            />
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
