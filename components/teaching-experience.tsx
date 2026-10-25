import { Building2, CalendarDays, GraduationCap, MessageCircle, Microscope, type LucideIcon } from "lucide-react"
import { teachingExperience } from "@/lib/content"

const cardStyles: Record<string, { icon: LucideIcon; chip: string; bar: string; dot: string }> = {
  "iu-research-data": {
    icon: Microscope,
    chip: "bg-coral/12 text-coral",
    bar: "from-mocha to-orange",
    dot: "bg-coral",
  },
  "iu-instructor": {
    icon: GraduationCap,
    chip: "bg-mocha/10 text-mocha",
    bar: "from-platinum-shade via-white to-platinum-shade",
    dot: "bg-mocha",
  },
  "ta-environment-people": {
    icon: MessageCircle,
    chip: "bg-lavender-deep/12 text-lavender-deep",
    bar: "from-lavender-deep to-mocha",
    dot: "bg-lavender-deep",
  },
}

export function TeachingExperience() {
  return (
    <div className="mt-20 lg:mt-24">
      <div className="flex items-center gap-3">
        <p className="label-mono shrink-0 text-mocha">Also</p>
        <span aria-hidden className="metal-rule-steel flex-1 opacity-80" />
      </div>
      <div className="mt-5 grid gap-3 lg:grid-cols-12 lg:items-end lg:gap-10">
        <h3 className="text-[1.6rem] leading-tight font-extrabold tracking-[-0.02em] text-espresso sm:text-[2rem] lg:col-span-6">
          Research data and teaching
        </h3>
        <p className="text-[0.9375rem] leading-relaxed text-subtle sm:text-base lg:col-span-6">
          During my MS at Indiana University, I worked with researchers on their data and helped
          students connect technical tools to real workflows.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {teachingExperience.map((exp, index) => {
          const style = cardStyles[exp.id]
          const Icon = style.icon
          return (
            <article
              key={exp.id}
              data-reveal={index % 2 === 0 ? "left" : "right"}
              className="surface-lavender metal-border overflow-hidden rounded-2xl card-shadow transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:card-shadow-hover"
            >
              <span aria-hidden className={`block h-1 w-full bg-gradient-to-r ${style.bar}`} />
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span
                    className={`inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm font-semibold ${style.chip}`}
                  >
                    <Icon className="size-4" aria-hidden />
                    {exp.label}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-subtle num-mono">
                    <CalendarDays className="size-3.5" aria-hidden />
                    {exp.period}
                  </span>
                </div>

                <h4 className="mt-4 text-lg font-extrabold text-ink">{exp.title}</h4>
                <p className="mt-2 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-subtle">
                  <Building2 className="size-4 shrink-0" aria-hidden />
                  {exp.org}
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-[0.9375rem] leading-relaxed text-subtle">
                      <span aria-hidden className={`mt-2 size-1.5 shrink-0 rounded-full ${style.dot}`} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
