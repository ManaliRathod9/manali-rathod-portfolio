import { GraduationCap } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"
import { education } from "@/lib/content"

/** Two degrees set as open editorial columns on mocha, divided by a chrome rule. */
export function Education() {
  return (
    <section id="education" className="bg-education grain on-dark relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="blob -right-24 top-0 size-96 bg-lavender/10" />
        <span className="blob blob-2 -left-20 bottom-0 size-80 bg-platinum/8" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeading index="04" tone="dark" eyebrow="Education" title="Education" />
          </div>

          <div className="grid gap-12 sm:grid-cols-2 sm:gap-0 lg:col-span-8">
            {education.map((entry, index) => (
              <article
                key={entry.id}
                data-reveal={index === 0 ? "left" : "right"}
                className={cn("relative", index === 0 ? "sm:pr-10" : "sm:pl-10")}
              >
                {index > 0 && <span aria-hidden className="metal-rule-v absolute top-0 bottom-0 left-0 hidden opacity-60 sm:block" />}

                <div className="flex items-center justify-between gap-4">
                  <span aria-hidden className="flex size-11 items-center justify-center rounded-2xl bg-lavender/15 text-lavender">
                    <GraduationCap className="size-5" />
                  </span>
                  <span className="label-mono num-mono text-lavender/90">{entry.period}</span>
                </div>

                <h3 className="mt-6 text-[1.5rem] leading-snug font-extrabold tracking-[-0.02em] text-ivory sm:text-[1.7rem]">
                  {entry.degree}
                </h3>
                <p className="mt-2 text-base font-semibold text-lavender">{entry.school}</p>
                <p className="mt-5 flex items-baseline gap-3">
                  <span className="label-mono text-platinum/70">GPA</span>{" "}
                  <span className="section-index text-metal [--index-size:2.75rem]">{entry.gpa}</span>
                </p>

                {entry.coursework && entry.coursework.length > 0 && (
                  <div className="mt-7">
                    <div className="flex items-center gap-3">
                      <p className="label-mono shrink-0 text-platinum/70">Relevant coursework</p>
                      <span aria-hidden className="metal-rule flex-1 opacity-40" />
                    </div>
                    <div className="skill-list-clip mt-4">
                      <ul className="skill-list flex flex-wrap items-baseline gap-y-1.5 text-[0.9375rem] text-platinum/85">
                        {entry.coursework.map((course) => (
                          <li key={course}>{course}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
