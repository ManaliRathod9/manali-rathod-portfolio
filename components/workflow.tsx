import { MessagesSquare, Plug, Rocket, Route, ShieldCheck, type LucideIcon } from "lucide-react"
import { DataJourney } from "@/components/data-journey"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"
import { workflowSteps } from "@/lib/content"

/** Node colours cycle mocha, chrome and lavender so the line reads as a sequence. */
const nodeTones = {
  mocha: "bg-mocha text-ivory",
  chrome: "bg-platinum bg-metal-soft text-mocha",
  lavender: "bg-lavender text-lavender-deep",
}

const stepStyles: Record<string, { icon: LucideIcon; tone: keyof typeof nodeTones }> = {
  "find-use-case": { icon: MessagesSquare, tone: "mocha" },
  "choose-approach": { icon: Route, tone: "chrome" },
  "build-into-workflow": { icon: Plug, tone: "lavender" },
  "push-past-demo": { icon: ShieldCheck, tone: "chrome" },
  "ship-learn-improve": { icon: Rocket, tone: "mocha" },
}

/** The workflow as one continuous process line: open steps joined by a steel rule. */
export function Workflow() {
  return (
    <section className="bg-workflow grain grain-faint relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="blob -left-20 top-0 size-96 bg-lavender/70" />
        <span className="blob blob-2 -right-24 bottom-0 size-80 bg-mocha/10" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <SectionHeading
          index="05"
          layout="split"
          eyebrow="Workflow"
          title="What happens between an AI idea and a product people use"
          description="The five steps I work through to get an AI feature from a promising idea to something people rely on."
        />

        {/* Scattered points settling into shape: an idea becoming something that holds up. */}
        <DataJourney uid="workflow" variant="divider" className="mt-10 h-16 w-full sm:h-20" />

        <ol className="relative mt-10 grid gap-10 lg:grid-cols-5 lg:gap-8">
          {/* The connecting line: horizontal on large screens, vertical when stacked. */}
          <span aria-hidden className="metal-rule-steel absolute top-[1.375rem] right-0 left-0 hidden lg:block" />
          <span aria-hidden className="metal-rule-v-steel absolute top-2 bottom-2 left-[1.375rem] lg:hidden" />

          {workflowSteps.map((step, index) => {
            const style = stepStyles[step.id]
            const Icon = style.icon

            return (
              <li
                key={step.id}
                data-reveal
                data-reveal-delay={String(Math.min(index, 3))}
                className="relative pl-16 lg:pl-0"
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute top-0 left-0 flex size-11 items-center justify-center rounded-full border border-white/60 shadow-[0_8px_16px_-10px_rgb(47_30_24/0.7)] ring-[6px] ring-[#e6e4e1] lg:relative",
                    nodeTones[style.tone]
                  )}
                >
                  <Icon className="size-[1.1rem]" />
                </span>

                <span className="label-mono num-mono block text-mocha/70 lg:mt-7">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-[1.2rem] leading-snug font-extrabold tracking-[-0.015em] text-espresso">{step.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-subtle">{step.description}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
