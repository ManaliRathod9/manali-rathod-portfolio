import {
  BarChart3,
  Bot,
  BrainCircuit,
  Code2,
  Database,
  Microscope,
  type LucideIcon,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { skillGroups } from "@/lib/content"

const groupStyles: Record<string, { icon: LucideIcon; tint: string; bar: string }> = {
  "ai-ml-agentic": { icon: BrainCircuit, tint: "bg-brand/25 text-[#a9beff]", bar: "from-brand to-indigo" },
  "data-analytics-bi": { icon: BarChart3, tint: "bg-teal/25 text-[#6ee7d5]", bar: "from-teal to-brand" },
  "research-data-tools": { icon: Microscope, tint: "bg-coral/25 text-[#ffa79d]", bar: "from-coral to-orange" },
  "web-product": { icon: Code2, tint: "bg-orange/25 text-[#ffc98c]", bar: "from-orange to-pink" },
  "databases-cloud-devtools": { icon: Database, tint: "bg-indigo/25 text-[#b3b6ff]", bar: "from-indigo to-teal" },
  "ai-assisted-dev": { icon: Bot, tint: "bg-pink/25 text-[#f9a8d4]", bar: "from-pink to-brand" },
}

/** The first few entries of each group are the ones I lead with. */
const coreCount = 5

export function Skills() {
  return (
    <section id="skills" className="bg-skills on-dark relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="blob -left-24 top-0 size-96 bg-brand/30" />
        <span className="blob blob-2 -right-20 bottom-0 size-96 bg-teal/25" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Skills"
          title="What I work with"
          description="Grouped by what they're actually for, not just a long list."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const style = groupStyles[group.id]
            const Icon = style.icon

            return (
              <section
                key={group.id}
                aria-labelledby={`skill-${group.id}`}
                data-reveal
                data-reveal-delay={String(index % 2)}
                className="overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] transition-[transform,background-color,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]"
              >
                <span aria-hidden className={`block h-1 w-full bg-gradient-to-r ${style.bar}`} />

                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${style.tint}`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <h3
                      id={`skill-${group.id}`}
                      className="text-lg font-extrabold text-white sm:text-xl"
                    >
                      {group.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/65">
                    {group.caption}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIndex) => (
                      <li
                        key={skill}
                        className={
                          skillIndex < coreCount
                            ? "cursor-default rounded-xl bg-gradient-to-r from-brand to-indigo px-3 py-1.5 text-[0.9375rem] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                            : "cursor-default rounded-xl border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[0.9375rem] font-medium text-white/80 transition-colors duration-200 hover:border-teal/50 hover:bg-teal/15 hover:text-white"
                        }
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </section>
  )
}
