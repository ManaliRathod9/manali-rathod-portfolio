import { SectionHeading } from "@/components/section-heading"
import { FeaturedProjectCard, ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/content"

const featuredCount = 2

export function Projects() {
  const featured = projects.slice(0, featuredCount)
  const rest = projects.slice(featuredCount)

  return (
    <section id="projects" className="bg-projects grain on-dark relative overflow-hidden">
      {/* Soft lavender and platinum light over the mocha base */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="blob -left-28 top-24 size-96 bg-lavender/10" />
        <span className="blob blob-2 -right-24 top-1/3 size-[28rem] bg-platinum/8" />
        <span className="blob blob-3 bottom-10 left-1/2 size-96 bg-orange/10" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <SectionHeading
          index="02"
          tone="dark"
          layout="split"
          eyebrow="Projects"
          title="Things I've built"
          description="Each one started from a specific problem I wanted to solve, not a tutorial."
        />

        <div className="mt-14 space-y-20 lg:mt-20 lg:space-y-28">
          {featured.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              index={index}
              priority={index === 0}
            />
          ))}
        </div>

        <span aria-hidden className="metal-rule mt-20 block opacity-60 lg:mt-28" />

        <div className="mt-16 grid gap-x-10 gap-y-20 md:grid-cols-2 lg:mt-20">
          {rest.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
