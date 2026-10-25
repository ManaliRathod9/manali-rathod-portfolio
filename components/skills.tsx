import {
  BarChart3,
  Bot,
  BrainCircuit,
  Code2,
  Compass,
  Database,
  Microscope,
  Server,
  Sparkles,
  type LucideIcon,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"
import { skillGroups, supportingSkillGroups } from "@/lib/content"

const groupIcons: Record<string, LucideIcon> = {
  "ai-product-delivery": Compass,
  "genai-agents-eval": Bot,
  "ml-mlops": BrainCircuit,
  "data-eng-cloud": Database,
  "databases-dev-tools": Server,
  "analytics-bi": BarChart3,
  "web-product": Code2,
  "research-data-tools": Microscope,
  "ai-assisted-dev": Sparkles,
}

/** The first few entries of each group are the ones I lead with. */
const coreCount = 5
const supportingCoreCount = 2

/** Supporting groups cycle three category colours: mocha, deep lavender, chrome. */
const supportingTiles = ["bg-mocha text-ivory", "bg-lavender-deep text-ivory", "bg-platinum bg-metal-soft text-espresso"]

/**
 * Skills as a typographic list: the lead skills set strong, the rest lighter,
 * divided by hairlines instead of a wall of identical pills.
 */
function SkillList({ skills, lead, dark = false, small = false }: { skills: string[]; lead: number; dark?: boolean; small?: boolean }) {
  return (
    <div className="skill-list-clip">
      <ul className={cn("skill-list flex flex-wrap items-baseline gap-y-1.5", small ? "text-sm" : "text-[0.9375rem] sm:text-base")}>
        {skills.map((skill, i) => (
          <li
            key={skill}
            className={cn(
              i < lead
                ? cn("font-semibold", dark ? "text-ivory" : "text-espresso")
                : dark
                  ? "text-platinum/80"
                  : "text-subtle"
            )}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="bg-skills grain grain-faint relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="blob -left-24 top-1/4 size-96 bg-white/50" />
        <span className="blob blob-2 -right-20 bottom-0 size-96 bg-lavender-deep/10" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <SectionHeading
          index="03"
          layout="split"
          eyebrow="Skills"
          title="What I work with"
          description="From customer discovery to deployed models: the product, AI, ML, and data skills I use."
        />

        {/* The four main groups, alternating mocha and platinum like a checkerboard. */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16">
          {skillGroups.map((group, index) => {
            const Icon = groupIcons[group.id]
            const dark = index === 0 || index === 3

            return (
              <section
                key={group.id}
                aria-labelledby={`skill-${group.id}`}
                data-reveal
                data-reveal-delay={String(index % 2)}
                className={cn(
                  "metal-border flex flex-col overflow-hidden rounded-[1.75rem] p-7 sm:p-8",
                  dark ? "surface-mocha card-shadow-hover" : "surface-platinum card-shadow"
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    aria-hidden
                    className={cn(
                      "flex size-12 shrink-0 items-center justify-center rounded-2xl",
                      dark ? "bg-lavender/15 text-lavender" : "bg-mocha/10 text-mocha"
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span aria-hidden className={cn("section-index [--index-size:2.6rem] sm:[--index-size:3rem]", dark ? "text-metal" : "text-mocha-gradient")}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  id={`skill-${group.id}`}
                  className={cn("mt-6 text-[1.3rem] leading-snug font-extrabold tracking-[-0.015em] sm:text-[1.45rem]", dark ? "text-ivory" : "text-espresso")}
                >
                  {group.title}
                </h3>
                <p className={cn("mt-2 text-[0.9375rem] leading-relaxed", dark ? "text-platinum/80" : "text-subtle")}>
                  {group.caption}
                </p>

                <span aria-hidden className={cn("mt-6 block", dark ? "metal-rule opacity-50" : "metal-rule-steel opacity-70")} />
                <div className="mt-5">
                  <SkillList skills={group.skills} lead={coreCount} dark={dark} />
                </div>
              </section>
            )
          })}
        </div>

        {/* Supporting groups: an open index, columns divided by steel rules. */}
        <div className="mt-16 lg:mt-20">
          <div className="flex items-center gap-3">
            <h3 className="label-mono shrink-0 text-mocha">Also in my toolkit</h3>
            <span aria-hidden className="metal-rule-steel flex-1 opacity-80" />
          </div>

          <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {supportingSkillGroups.map((group, index) => {
              const Icon = groupIcons[group.id]
              return (
                <section
                  key={group.id}
                  aria-labelledby={`skill-${group.id}`}
                  data-reveal
                  data-reveal-delay={String(index % 3)}
                  className="relative lg:pl-10 lg:[&:nth-child(3n+1)]:pl-0"
                >
                  <span
                    aria-hidden
                    className={cn("metal-rule-v-steel absolute top-1 bottom-1 left-0 hidden opacity-70", index % 3 !== 0 && "lg:block")}
                  />
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className={cn("flex size-9 shrink-0 items-center justify-center rounded-xl", supportingTiles[index % supportingTiles.length])}
                    >
                      <Icon className="size-4" />
                    </span>
                    <h4 id={`skill-${group.id}`} className="text-base font-extrabold text-espresso">
                      {group.title}
                    </h4>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-subtle">{group.caption}</p>
                  <div className="mt-4">
                    <SkillList skills={group.skills} lead={supportingCoreCount} small />
                  </div>
                </section>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
