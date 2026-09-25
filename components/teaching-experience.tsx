import { Building2, CalendarDays, GraduationCap, MessageCircle, Microscope, type LucideIcon } from "lucide-react"
import { teachingExperience } from "@/lib/content"

const cardStyles: Record<string, { icon: LucideIcon; chip: string; bar: string; ring: string; dot: string }> = {
  "iu-research-data": {
    icon: Microscope,
    chip: "bg-coral/12 text-coral",
    bar: "from-coral to-orange",
    ring: "hover:border-coral/45",
    dot: "bg-coral",
  },
  "iu-instructor": {
    icon: GraduationCap,
    chip: "bg-teal/12 text-teal-ink",
    bar: "from-teal to-brand",
    ring: "hover:border-teal/45",
    dot: "bg-teal",
  },
  "ta-environment-people": {
    icon: MessageCircle,
    chip: "bg-pink/10 text-pink",
    bar: "from-pink to-indigo",
    ring: "hover:border-pink/45",
    dot: "bg-pink",
  },
}

export function TeachingExperience() {
  return (
    <div className="mt-10 border-t border-white/70 pt-8">
      <div className="mx-auto max-w-xl text-center">
        <p className="label-mono inline-flex rounded-lg bg-brand/8 px-2.5 py-1 text-brand">
          Also
        </p>
        <h3 className="mt-3 text-xl font-extrabold text-ink sm:text-2xl">
          Research data and teaching
        </h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-subtle">
          During my MS at Indiana University, I worked with researchers on their data and helped
          students connect technical tools to real workflows.
        </p>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {teachingExperience.map((exp, index) => {
          const style = cardStyles[exp.id]
          const Icon = style.icon
          return (
            <article
              key={exp.id}
              data-reveal={index % 2 === 0 ? "left" : "right"}
              className={`overflow-hidden rounded-2xl border border-white bg-white/85 backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:card-shadow-hover ${style.ring}`}
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
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted num-mono">
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
