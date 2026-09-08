import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/icons"
import { siteConfig } from "@/lib/site"

export function GithubBanner() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-6 lg:px-8">
        <div data-reveal className="flex flex-col items-start gap-6 rounded-2xl border border-white bg-gradient-to-br from-sky via-lavender to-mint p-6 card-shadow sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <span
              aria-hidden
              className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-ink to-[#243352] text-white"
            >
              <GithubIcon className="size-6" />
            </span>
            <div>
              <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
                More of my work on GitHub
              </h2>
              <p className="mt-2 max-w-lg text-[0.9375rem] leading-relaxed text-subtle">
                You can find more projects, experiments, and practice builds on my GitHub.
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
      </div>
    </section>
  )
}
