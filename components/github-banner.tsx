import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/icons"
import { siteConfig } from "@/lib/site"

/** A full-width lavender band between the two mocha rooms, set open rather than boxed. */
export function GithubBanner() {
  return (
    <section className="bg-lavender-band grain grain-faint metal-border-y relative overflow-hidden">
      <div
        data-reveal
        className="relative mx-auto flex max-w-[1280px] flex-col items-start gap-6 px-5 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-14"
      >
        <div className="flex items-start gap-5">
          <span
            aria-hidden
            className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-espresso to-mocha text-platinum shadow-[inset_0_1px_0_rgb(255_255_255/0.15),0_14px_28px_-16px_rgb(47_30_24/0.7)]"
          >
            <GithubIcon className="size-6" />
          </span>
          <div>
            <h2 className="text-[1.5rem] leading-tight font-extrabold tracking-[-0.02em] text-espresso sm:text-[1.9rem]">
              More of my work on GitHub
            </h2>
            <p className="mt-2 max-w-lg text-[0.9375rem] leading-relaxed text-subtle sm:text-base">
              Experiments and practice builds that didn&apos;t make it onto this page.
            </p>
          </div>
        </div>

        <Button
          size="lg"
          nativeButton={false}
          className="shrink-0"
          render={
            <a href={siteConfig.social.github} target="_blank" rel="noreferrer">
              View GitHub
              <ArrowUpRight className="transition-transform duration-200 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
            </a>
          }
        />
      </div>
    </section>
  )
}
