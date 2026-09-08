import { CalendarDays, GraduationCap } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { education } from "@/lib/content"

const styles = [
  { tint: "bg-brand/10 text-brand", bar: "from-brand to-indigo", ring: "hover:border-brand/45" },
  { tint: "bg-coral/12 text-coral", bar: "from-coral to-orange", ring: "hover:border-coral/45" },
]

export function Education() {
  return (
    <section id="education" className="bg-education relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="blob -right-24 top-0 size-80 bg-teal/20" />
        <span className="blob blob-2 -left-20 bottom-0 size-80 bg-brand/15" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading eyebrow="Education" title="Education" />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {education.map((entry, index) => {
            const style = styles[index % styles.length]
            return (
              <article
                key={entry.id}
                data-reveal={index === 0 ? "left" : "right"}
                className={`overflow-hidden rounded-2xl border border-white bg-white/85 backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:card-shadow-hover ${style.ring}`}
              >
                <span aria-hidden className={`block h-1 w-full bg-gradient-to-r ${style.bar}`} />

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      aria-hidden
                      className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${style.tint}`}
                    >
                      <GraduationCap className="size-5" />
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-2.5 py-1 text-sm font-semibold text-subtle num-mono">
                      <CalendarDays className="size-3.5" aria-hidden />
                      {entry.period}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-extrabold text-ink">{entry.degree}</h3>
                  <p className="mt-1.5 text-[0.9375rem] font-semibold text-brand">{entry.school}</p>
                  <p className="mt-1 text-[0.9375rem] font-semibold text-subtle">
                    GPA {entry.gpa}
                  </p>

                  {entry.coursework && entry.coursework.length > 0 && (
                    <div className="mt-5">
                      <p className="label-mono text-muted">Relevant coursework</p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {entry.coursework.map((course) => (
                          <li
                            key={course}
                            className="rounded-lg border border-hairline bg-white px-2.5 py-1 text-sm font-medium text-subtle transition-colors duration-200 hover:border-brand/40 hover:text-brand"
                          >
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
