import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  Filter,
  Hammer,
  LayoutDashboard,
  Lightbulb,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { valueProps } from "@/lib/content"

const cardStyles: { icon: LucideIcon; tint: string; ring: string }[] = [
  { icon: Filter, tint: "bg-brand/10 text-brand", ring: "hover:border-brand/40" },
  { icon: LayoutDashboard, tint: "bg-coral/12 text-coral", ring: "hover:border-coral/45" },
  { icon: BrainCircuit, tint: "bg-teal/12 text-teal-ink", ring: "hover:border-teal/45" },
  { icon: Hammer, tint: "bg-orange/15 text-orange", ring: "hover:border-orange/50" },
  { icon: Lightbulb, tint: "bg-brand/10 text-brand", ring: "hover:border-brand/40" },
]

export function WhyHireMeContent() {
  return (
    <div className="bg-life relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="blob -left-24 top-0 size-96 bg-brand/22" />
        <span className="blob blob-2 -right-20 bottom-10 size-96 bg-pink/22" />
      </div>
      <div className="relative mx-auto max-w-[1200px] px-5 py-12 sm:px-6 sm:py-14 lg:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-lg py-1 text-[0.9375rem] font-semibold text-subtle transition-colors hover:text-brand"
        >
          <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
          Back to portfolio
        </Link>

        <header className="mt-6 max-w-2xl">
          <p className="label-mono inline-flex rounded-lg bg-white/70 px-2.5 py-1 text-brand backdrop-blur-sm">
            A quick look
          </p>
          <h1 className="anim-enter mt-4 text-[2rem] font-extrabold text-ink sm:text-[2.5rem]">
            Why you should hire{" "}
            <span className="accent-serif bg-gradient-to-r from-brand via-indigo to-pink bg-clip-text text-transparent">
              me
            </span>
          </h1>
          <p className="anim-enter anim-delay-1 mt-3 text-lg leading-relaxed text-subtle">
            A simple view of how I work and what I can bring to a team.
          </p>
        </header>

        <ol className="mt-10 grid gap-5 md:grid-cols-2">
          {valueProps.map((prop, index) => {
            const style = cardStyles[index % cardStyles.length]
            const Icon = style.icon
            const isLast = index === valueProps.length - 1

            return (
              <li
                key={prop.id}
                data-reveal={index % 2 === 0 ? "left" : "right"}
                className={`rounded-2xl border border-white bg-white/85 p-6 backdrop-blur-sm card-shadow transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-2 hover:card-shadow-hover ${style.ring} ${
                  isLast ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${style.tint}`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="label-mono text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-1.5 text-lg font-extrabold text-ink sm:text-xl">
                      {prop.title}
                    </h2>
                    <p className="mt-2 text-base leading-relaxed text-subtle">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>

        <div data-reveal className="bg-contact on-dark mt-10 flex flex-col items-start gap-5 rounded-2xl p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <p className="text-xl font-extrabold text-white sm:text-2xl">
            Let&apos;s build something{" "}
            <span className="accent-serif text-orange">useful</span> together.
          </p>
          <Button
            variant="contrast"
            size="lg"
            nativeButton={false}
            className="shrink-0"
            render={
              <Link href="/#contact">
                Contact Me
                <ArrowRight className="transition-transform duration-200 group-hover/button:translate-x-0.5" />
              </Link>
            }
          />
        </div>
      </div>
    </div>
  )
}
