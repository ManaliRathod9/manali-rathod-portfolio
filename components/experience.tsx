import { Building2 } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { TeachingExperience } from "@/components/teaching-experience"
import { cn } from "@/lib/utils"
import { experiences } from "@/lib/content"

/** Accents for the earlier roles, so the timeline reads as a sequence. */
const accents = [
  { dot: "bg-coral", chip: "bg-coral/12 text-coral" },
  { dot: "bg-lavender-deep", chip: "bg-lavender text-lavender-deep" },
  { dot: "bg-teal", chip: "bg-teal/12 text-teal-ink" },
]

export function Experience() {
  return (
    // overflow-clip (not hidden) so the sticky heading still sticks to the viewport.
    <section id="experience" className="bg-experience grain grain-faint relative overflow-clip">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="blob -left-24 top-10 size-80 bg-lavender/70" />
        <span className="blob blob-2 -right-20 bottom-1/3 size-80 bg-mocha/10" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                index="01"
                eyebrow="Career"
                title="My Experience"
                gradientWord="Experience"
                description="Product management and machine learning engineering, from customer problem to deployed system."
              />
            </div>
          </div>

          <ol className="relative lg:col-span-8">
            {/* Chrome rail joining the roles */}
            <span aria-hidden className="timeline-rail metal-rule-v-steel absolute left-[7px] top-4 bottom-4" />

            {experiences.map((exp, index) => {
              const isCurrent = index === 0
              const accent = accents[(index - 1 + accents.length) % accents.length]

              return (
                <li
                  key={exp.id}
                  data-reveal={index % 2 === 0 ? "left" : "right"}
                  className={cn("relative pl-10 sm:pl-12", index > 0 && "pt-10", index > 1 && "mt-2")}
                >
                  {index > 1 && <span aria-hidden className="metal-rule-steel absolute left-10 right-0 top-0 opacity-70 sm:left-12" />}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute left-0 flex size-[15px] items-center justify-center rounded-full ring-4 ring-[#e9e7e4]",
                      isCurrent ? "top-9 bg-mocha" : "top-[3.1rem] bg-platinum-warm"
                    )}
                  >
                    <span className={cn("size-[5px] rounded-full", isCurrent ? "bg-lavender" : accent.dot)} />
                  </span>

                  {/* The current role is the one dark mocha panel; earlier roles sit open on the page. */}
                  <article
                    className={cn(
                      isCurrent &&
                        "surface-mocha metal-border overflow-hidden rounded-[1.75rem] p-6 card-shadow-hover sm:p-8"
                    )}
                  >
                    {isCurrent && <span aria-hidden className="absolute inset-x-8 top-0 h-px bg-metal opacity-80" />}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className={cn("label-mono num-mono", isCurrent ? "text-lavender" : "text-subtle")}>
                        {exp.period}
                      </span>
                      {isCurrent && (
                        <span className="label-mono rounded-md bg-lavender px-2 py-1 text-espresso">Current</span>
                      )}
                    </div>

                    <h3
                      className={cn(
                        "mt-3 font-extrabold tracking-[-0.02em]",
                        isCurrent ? "text-[1.6rem] text-ivory sm:text-[2rem]" : "text-[1.35rem] text-espresso sm:text-[1.6rem]"
                      )}
                    >
                      {exp.title}
                    </h3>

                    <p
                      className={cn(
                        "mt-2.5 inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[0.9375rem] font-semibold",
                        isCurrent ? "bg-lavender/15 text-lavender" : accent.chip
                      )}
                    >
                      <Building2 className="size-4 shrink-0" aria-hidden />
                      {exp.org}
                    </p>

                    <ul className={cn("mt-5 grid gap-2.5", isCurrent && "sm:gap-3")}>
                      {exp.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className={cn(
                            "flex gap-3 text-[0.9375rem] leading-relaxed sm:text-base",
                            isCurrent ? "text-platinum/85" : "text-subtle"
                          )}
                        >
                          <span
                            aria-hidden
                            className={cn("mt-[0.6rem] h-px w-3 shrink-0", isCurrent ? "bg-lavender" : "bg-mocha/50")}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              )
            })}
          </ol>
        </div>

        <TeachingExperience />
      </div>
    </section>
  )
}
