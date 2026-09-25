import { ArrowRight, MessagesSquare, Plug, Rocket, Route, ShieldCheck, type LucideIcon } from "lucide-react"
import { DataJourney } from "@/components/data-journey"
import { SectionHeading } from "@/components/section-heading"
import { workflowSteps } from "@/lib/content"

const stepStyles: Record<string, { icon: LucideIcon; tint: string; bar: string }> = {
  "find-use-case": { icon: MessagesSquare, tint: "bg-coral/15 text-coral", bar: "from-coral to-orange" },
  "choose-approach": { icon: Route, tint: "bg-orange/18 text-orange", bar: "from-orange to-pink" },
  "build-into-workflow": { icon: Plug, tint: "bg-brand/12 text-brand", bar: "from-brand to-indigo" },
  "push-past-demo": { icon: ShieldCheck, tint: "bg-teal/15 text-teal-ink", bar: "from-teal to-brand" },
  "ship-learn-improve": { icon: Rocket, tint: "bg-pink/12 text-pink", bar: "from-pink to-indigo" },
}

export function Workflow() {
  return (
    <section className="bg-workflow relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="blob -left-20 top-0 size-80 bg-indigo/18" />
        <span className="blob blob-2 -right-24 bottom-0 size-80 bg-orange/18" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Workflow"
          title="What happens between an AI idea and a product people use"
          description="The five steps I work through to get an AI feature from a promising idea to something people rely on."
        />

        {/* Scattered points settling into shape: an idea becoming something that holds up. */}
        <DataJourney
          uid="workflow"
          variant="divider"
          className="mt-8 h-16 w-full sm:h-20"
        />

        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {workflowSteps.map((step, index) => {
            const style = stepStyles[step.id]
            const Icon = style.icon

            return (
              <li
                key={step.id}
                data-reveal
                data-reveal-delay={String(Math.min(index, 3))}
                className="relative overflow-hidden rounded-2xl border border-white bg-white/85 backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:card-shadow-hover"
              >
                <span aria-hidden className={`block h-1 w-full bg-gradient-to-r ${style.bar}`} />

                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${style.tint}`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span className="label-mono text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-subtle">
                    {step.description}
                  </p>
                </div>

                {index < workflowSteps.length - 1 && (
                  <ArrowRight
                    aria-hidden
                    className="absolute -right-2.5 top-1/2 hidden size-5 -translate-y-1/2 text-indigo/45 lg:block"
                  />
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
