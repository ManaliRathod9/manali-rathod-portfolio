"use client"

import { useState, type PointerEvent } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, BarChart3, ChevronDown, Database, FileDown, Rocket, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { PortraitDataFlow } from "@/components/portrait-data-flow"
import { ProfilePhoto } from "@/components/profile-photo"
import { ImageLightbox } from "@/components/image-lightbox"
import { siteConfig } from "@/lib/site"

/** Category labels, kept together in one row under the description. */
const focusAreas = [
  { label: "Data", icon: Database, tone: "text-brand bg-brand/8 border-brand/20" },
  { label: "AI / ML", icon: Sparkles, tone: "text-coral bg-coral/10 border-coral/25" },
  { label: "Analytics", icon: BarChart3, tone: "text-teal-ink bg-teal/10 border-teal/25" },
  { label: "Product Building", icon: Rocket, tone: "text-indigo bg-indigo/8 border-indigo/20" },
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
    <section id="top" className="bg-hero relative overflow-hidden">
      <div className="relative mx-auto max-w-[1200px] px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="min-w-0">
            <p className="anim-enter inline-flex items-center gap-2.5 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-semibold text-subtle card-shadow backdrop-blur-sm">
              <span aria-hidden className="size-2 rounded-full bg-teal" />
              Available for new roles
            </p>

            <h1 className="anim-enter anim-delay-1 relative mt-6 text-[2.25rem] leading-[1.12] font-extrabold text-ink sm:text-[2.75rem] lg:text-[3.25rem]">
              Hi, I&apos;m Manali - I build{" "}
              <span className="relative inline-block">
                <span className="accent-serif text-gradient-signature">useful things</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-1 h-3 rounded-full bg-gradient-to-r from-brand/25 via-indigo/25 to-teal/25 blur-[2px]"
                />
              </span>{" "}
              with data and AI.
            </h1>

            <p className="anim-enter anim-delay-2 mt-5 max-w-xl text-lg leading-relaxed text-subtle">
              {siteConfig.intro}
            </p>

            <div className="hero-role-ribbon mt-6" aria-label="Focus areas">
              <div className="hero-role-track">
                {[0, 1].map((copy) => (
                  <ul key={copy} className="hero-role-group" aria-hidden={copy === 1 ? true : undefined}>
                    {focusAreas.map((area) => {
                      const Icon = area.icon
                      return (
                        <li key={area.label} className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl border px-3 py-1.5 text-sm font-semibold ${area.tone}`}>
                          <Icon className="size-4" aria-hidden />
                          {area.label}
                        </li>
                      )
                    })}
                  </ul>
                ))}
              </div>
            </div>

            <div className="anim-enter anim-delay-4 mt-7 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                nativeButton={false}
                className="bg-gradient-to-r from-brand to-indigo shadow-[0_10px_28px_-10px_rgb(49_87_246/0.65)] hover:shadow-[0_16px_34px_-10px_rgb(99_102_241/0.6)] hover:-translate-y-0.5"
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

            <div className="anim-enter anim-delay-5 mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.9375rem] font-semibold">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg py-1 text-subtle transition-colors hover:text-brand"
              >
                <GithubIcon className="size-[18px]" />
                GitHub
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg py-1 text-subtle transition-colors hover:text-brand"
              >
                <LinkedinIcon className="size-[18px]" />
                LinkedIn
              </a>
              <Link
                href="/why-hire-me"
                className="group inline-flex items-center gap-1.5 rounded-lg py-1 text-brand underline-offset-4 hover:underline"
              >
                See why I could be a good fit
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <p className="anim-enter anim-delay-5 mt-6 text-[0.9375rem] leading-relaxed text-muted">
              New Grad with hands-on experience in data, AI/ML, dashboards, and research data
              tools.
            </p>
          </div>

          <div
            className="portrait-group relative mx-auto mb-16 w-full max-w-[19rem] sm:max-w-[21rem] lg:max-w-[24rem]"
            onPointerMove={followPointer}
            onPointerLeave={(event) => {
              event.currentTarget.style.setProperty("--portrait-x", "0px")
              event.currentTarget.style.setProperty("--portrait-y", "0px")
            }}
          >
            <div aria-hidden className="portrait-data-layer pointer-events-none absolute -bottom-[20%] -left-[24%] h-[65%] w-[124%]">
              <PortraitDataFlow uid="hero" className="size-full" />
            </div>
            <span aria-hidden className="portrait-color-layer portrait-frame absolute -right-3.5 -bottom-3.5 left-3.5 top-3.5 bg-linear-to-br from-coral via-brand to-teal opacity-85" />
            <div className="portrait-frame-outline gradient-frame portrait-frame relative p-0.75">
              <div className="portrait-reveal-mask">
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  aria-label="Open larger profile photo"
                  className="portrait-photo-layer block w-full cursor-pointer"
                >
                  <ProfilePhoto size={560} priority className="portrait-frame aspect-4/5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#experience"
        aria-label="Scroll to experience"
        className="anim-enter anim-delay-5 pointer-events-auto relative mx-auto -mt-2 mb-6 hidden w-fit items-center justify-center rounded-full p-2 text-subtle transition-colors hover:text-brand sm:flex"
      >
        <ChevronDown className="size-6" />
      </a>

      <ImageLightbox open={lightboxOpen} onClose={() => setLightboxOpen(false)} />
    </section>
  )
}
