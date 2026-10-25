"use client"

import { useState, type PointerEvent } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, BrainCircuit, ChevronDown, Database, FileDown, FlaskConical, Handshake, Rocket, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { HeroArt } from "@/components/hero-art"
import { HeroBackdrop } from "@/components/hero-backdrop"
import { ImageLightbox } from "@/components/image-lightbox"
import { siteConfig } from "@/lib/site"

/** Badge surfaces alternate chrome and lavender, so no two neighbours match (including across the loop). */
const chrome = "bg-platinum bg-metal-soft"
const lavender = "bg-lavender"

/** Focus areas, kept together in one moving row under the description. */
const focusAreas = [
  { label: "AI Product", icon: Rocket, tone: chrome },
  { label: "AI Engineering", icon: Sparkles, tone: lavender },
  { label: "Machine Learning", icon: BrainCircuit, tone: chrome },
  { label: "Forward Deployed Engineering", icon: Handshake, tone: lavender },
  { label: "AI Research", icon: FlaskConical, tone: chrome },
  { label: "Data Engineering", icon: Database, tone: lavender },
]

export function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  function followPointer(event: PointerEvent<HTMLDivElement>) {
    if (!window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty("--portrait-x", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 8}px`)
    event.currentTarget.style.setProperty("--portrait-y", `${((event.clientY - bounds.top) / bounds.height - 0.5) * 8}px`)
  }

  return (
    <section id="top" className="bg-hero grain on-dark relative overflow-hidden">
      <HeroBackdrop className="pointer-events-none absolute inset-0 hidden size-full md:block" />
      {/* Soft light behind the headline */}
      <span aria-hidden className="spotlight spotlight-soft absolute -left-[10%] top-[6%] h-[72%] w-[58%]" />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-5 pb-14 pt-12 sm:px-6 sm:pt-16 lg:min-h-[calc(100svh-3.75rem)] lg:grid-cols-12 lg:gap-6 lg:px-8 lg:py-14">
        <div className="relative z-10 min-w-0 lg:col-span-6">
          <p className="anim-enter flex items-center gap-3 text-sm font-semibold tracking-wide text-platinum/85">
            <span aria-hidden className="relative flex size-3 items-center justify-center">
              <span className="node-breathe absolute size-full rounded-full bg-lavender/35" />
              <span className="relative size-1.5 rounded-full bg-lavender" />
            </span>
            Available for new roles
            <span aria-hidden className="metal-rule w-14 opacity-60 sm:w-20" />
          </p>

          <h1 className="anim-enter anim-delay-1 mt-7 text-[2.15rem] leading-[1.04] font-extrabold tracking-[-0.035em] text-ivory sm:text-[3.1rem] lg:text-[clamp(2.9rem,4.5vw,4rem)]">
            <span className="block">Hi, I&apos;m Manali&nbsp;-</span>{" "}
            <span className="block">
              I build{" "}
              <span className="relative isolate inline-block">
                <span className="accent-serif text-lavender-glow inline-block pr-[0.06em] text-[1.22em] leading-[0.92]">useful things</span>
                {/* Lavender light behind the phrase, and a faint underline glow. */}
                <span aria-hidden className="absolute -inset-x-4 -inset-y-2 -z-10 rounded-full bg-lavender/14 blur-2xl" />
                <span aria-hidden className="absolute inset-x-1 -bottom-0.5 h-2 rounded-full bg-gradient-to-r from-lavender/0 via-lavender/45 to-lavender/0 blur-[3px]" />
              </span>
            </span>{" "}
            <span className="block">with data and AI.</span>
          </h1>

          <p className="anim-enter anim-delay-2 mt-7 max-w-[34rem] text-lg leading-relaxed text-platinum/80">
            I&apos;ve worked on AI from the model side and the product side. I enjoy figuring out
            what&apos;s worth building, getting into the data and engineering, and asking the
            question that matters once it&apos;s in use: does this make someone&apos;s work easier?
          </p>

          <div className="hero-role-ribbon mt-6 lg:max-w-[38rem]" aria-label="Focus areas">
            <div className="hero-role-track">
              {[0, 1].map((copy) => (
                <ul key={copy} className="hero-role-group" aria-hidden={copy === 1 ? true : undefined}>
                  {focusAreas.map((area) => {
                    const Icon = area.icon
                    return (
                      <li
                        key={area.label}
                        className={`metal-border inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl border border-transparent px-3 py-1.5 text-sm font-semibold text-mocha transition-shadow duration-300 hover:glow-lavender-strong ${area.tone}`}
                      >
                        <Icon className="size-4" aria-hidden />
                        {area.label}
                      </li>
                    )
                  })}
                </ul>
              ))}
            </div>
          </div>

          <div className="anim-enter anim-delay-4 mt-6 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              nativeButton={false}
              className="hover:-translate-y-0.5"
              render={
                <a href="#projects">
                  View Work
                  <ArrowRight className="transition-transform duration-200 group-hover/button:translate-x-1" />
                </a>
              }
            />
            <Button
              variant="secondary"
              size="lg"
              nativeButton={false}
              render={
                <a href={siteConfig.resumeHref} target="_blank" rel="noreferrer">
                  <FileDown className="transition-transform duration-200 group-hover/button:translate-y-0.5" />
                  Resume
                </a>
              }
            />
          </div>

          <div className="anim-enter anim-delay-5 mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.9375rem] font-semibold">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg py-1 text-platinum/85 transition-colors hover:text-lavender"
            >
              <GithubIcon className="size-[18px]" />
              GitHub
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg py-1 text-platinum/85 transition-colors hover:text-lavender"
            >
              <LinkedinIcon className="size-[18px]" />
              LinkedIn
            </a>
            <Link
              href="/why-hire-me"
              className="group inline-flex items-center gap-1.5 rounded-lg py-1 text-lavender underline-offset-4 hover:underline"
            >
              See why I could be a good fit
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div
          className="relative mx-auto w-full max-w-[25rem] sm:max-w-[32rem] lg:col-span-6 lg:-mr-[10%] lg:ml-[-2%] lg:max-w-none"
          onPointerMove={followPointer}
          onPointerLeave={(event) => {
            event.currentTarget.style.setProperty("--portrait-x", "0px")
            event.currentTarget.style.setProperty("--portrait-y", "0px")
          }}
        >
          <HeroArt onOpenPhoto={() => setLightboxOpen(true)} />
        </div>
      </div>

      <a
        href="#experience"
        aria-label="Scroll to experience"
        className="anim-enter anim-delay-5 pointer-events-auto absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center justify-center rounded-full p-2 text-platinum/60 transition-colors hover:text-lavender lg:flex"
      >
        <ChevronDown className="anim-scroll-bob size-6" />
      </a>

      <ImageLightbox open={lightboxOpen} onClose={() => setLightboxOpen(false)} />
    </section>
  )
}
