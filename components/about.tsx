import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { ProfilePhoto } from "@/components/profile-photo"
import { withBasePath } from "@/lib/site"

const paragraphs = [
  "Teaching has made me less attached to my first explanation. If a student doesn't follow it, I need to find the missing step and try again. I think about building tools the same way. The person using one doesn't see the model training or the planning meetings; they see whether it helps them get on with their day.",
  "I've worked in machine learning engineering, product, and research tools. I like moving between a conversation about what someone needs and the details of how to make it work. I want to keep doing AI work with room for both.",
]

export function About() {
  return (
    <section id="about" className="bg-about grain on-dark relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="blob -left-24 top-10 size-96 bg-lavender/12" />
        <span className="blob blob-2 -right-20 bottom-0 size-96 bg-platinum/10" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <SectionHeading index="06" tone="dark" eyebrow="About" title="About me" />

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div data-reveal="left" className="mx-auto w-full max-w-72 lg:col-span-4 lg:mx-0 lg:max-w-none">
            <div className="group relative">
              <span aria-hidden className="spotlight absolute -inset-[18%]" />
              <span aria-hidden className="orb-float absolute -top-6 -right-5 z-10 w-16 sm:w-20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={withBasePath("/images/hero/chrome-orb-240.webp")} alt="" width={240} height={240} loading="lazy" decoding="async" className="block h-auto w-full" />
              </span>
              <div className="relative overflow-hidden rounded-[2rem] bg-metal p-1.5 glow-lavender transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
                <ProfilePhoto
                  size={420}
                  className="aspect-4/5 rounded-[1.65rem]"
                  imageClassName="group-hover:scale-[1.04]"
                />
              </div>
            </div>
          </div>

          <div data-reveal="right" className="lg:col-span-8">
            {/* The first paragraph is set as a pull quote. */}
            <div className="relative">
              <span aria-hidden className="accent-serif absolute -top-10 -left-1 text-[6rem] leading-none text-lavender/30 select-none sm:-left-3">
                &ldquo;
              </span>
              <p className="relative text-[1.35rem] leading-[1.45] font-medium tracking-[-0.01em] text-ivory sm:text-[1.65rem]">
                {paragraphs[0]}
              </p>
            </div>
            <span aria-hidden className="metal-rule mt-8 block w-24 opacity-70" />
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-platinum/85 sm:text-lg">{paragraphs[1]}</p>

            <Link
              href="/life"
              className="metal-border group mt-9 inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-platinum bg-metal-soft px-5 py-3 text-[0.9375rem] font-semibold text-mocha transition-shadow duration-200 hover:glow-lavender-strong"
            >
              Life outside work
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
