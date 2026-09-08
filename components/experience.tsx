import { Building2, CalendarDays } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { TeachingExperience } from "@/components/teaching-experience"
import { cn } from "@/lib/utils"
import { experiences } from "@/lib/content"

/** Alternating accents so the timeline reads as a sequence, not a list. */
const accents = [
  { dot: "bg-brand", ring: "hover:border-brand/45", chip: "bg-brand/10 text-brand", bar: "from-brand to-indigo" },
  { dot: "bg-coral", ring: "hover:border-coral/45", chip: "bg-coral/12 text-coral", bar: "from-coral to-orange" },
  { dot: "bg-teal", ring: "hover:border-teal/45", chip: "bg-teal/12 text-teal-ink", bar: "from-teal to-brand" },
  { dot: "bg-indigo", ring: "hover:border-indigo/45", chip: "bg-indigo/10 text-indigo", bar: "from-indigo to-pink" },
]

export function Experience() {
  return (
    <section id="experience" className="bg-experience relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="blob -left-24 top-10 size-80 bg-brand/15" />
        <span className="blob blob-2 -right-20 bottom-0 size-80 bg-indigo/18" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Career"
          title="My Experience"
          gradientWord="Experience"
          description="Work I've done across data, AI, and research tools."
        />

        <ol className="relative mt-10 space-y-4">
          {/* Animated rail behind the markers */}
          <span
            aria-hidden
            className="timeline-rail absolute left-[9px] top-3 bottom-3 w-0.5 rounded-full bg-gradient-to-b from-brand via-indigo to-teal sm:left-[13px]"
          />

          {experiences.map((exp, index) => {
            const isCurrent = index === 0
            const accent = accents[index % accents.length]

            return (
              <li
                key={exp.id}
                data-reveal={index % 2 === 0 ? "left" : "right"}
                className="relative pl-8 sm:pl-11"
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-0 top-6 flex size-5 items-center justify-center rounded-full ring-4 ring-white/70 sm:left-1",
                    isCurrent ? accent.dot : "bg-white"
                  )}
                >
                  <span
                    className={cn(
                      "size-2 rounded-full",
                      isCurrent ? "bg-white" : accent.dot
                    )}
                  />
                </span>

                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-white/85 backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:card-shadow-hover",
                    accent.ring,
                    isCurrent ? "border-brand/40 card-shadow" : "border-white"
                  )}
                >
                  {isCurrent && (
                    <span
                      aria-hidden
                      className={`block h-1 w-full bg-gradient-to-r ${accent.bar}`}
                    />
                  )}

                  <div className="p-5 sm:p-6">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-2.5 py-1 text-sm font-semibold text-subtle num-mono">
                        <CalendarDays className="size-3.5" aria-hidden />
                        {exp.period}
                      </span>
                      {isCurrent && (
                        <span className="label-mono rounded-lg bg-brand px-2.5 py-1.5 text-white">
                          Current
                        </span>
                      )}
                    </div>

                    <h3
                      className={cn(
                        "mt-3 font-extrabold text-ink",
                        isCurrent ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
                      )}
                    >
                      {exp.title}
                    </h3>

                    <p
                      className={cn(
                        "mt-2 inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[0.9375rem] font-semibold",
                        accent.chip
                      )}
                    >
                      <Building2 className="size-4 shrink-0" aria-hidden />
                      {exp.org}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 text-[0.9375rem] leading-relaxed text-subtle"
                        >
                          <span
                            aria-hidden
                            className={cn("mt-2 size-1.5 shrink-0 rounded-full", accent.dot)}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>

        <TeachingExperience />
      </div>
    </section>
  )
}
