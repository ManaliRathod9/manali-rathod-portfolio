import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { ProfilePhoto } from "@/components/profile-photo"

const paragraphs = [
  "Teaching has made me less attached to my first explanation. If a student doesn't follow it, I need to find the missing step and try again. I think about building tools the same way. The person using one doesn't see the model training or the planning meetings; they see whether it helps them get on with their day.",
  "I've worked in machine learning engineering, product, and research tools. I like moving between a conversation about what someone needs and the details of how to make it work. I want to keep doing AI work with room for both.",
]

export function About() {
  return (
    <section id="about" className="bg-about relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="blob -left-24 top-10 size-88 bg-pink/22" />
        <span className="blob blob-2 -right-20 bottom-0 size-88 bg-orange/22" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading eyebrow="About" title="About me" />

        <div className="mt-10 grid gap-10 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-14">
          <div data-reveal="left" className="mx-auto w-full max-w-68 lg:mx-0">
            <div className="group relative">
              <span
                aria-hidden
                className="anim-float absolute -right-4 -top-4 size-16 rotate-12 rounded-2xl bg-pink/25"
              />
              <div className="relative overflow-hidden rounded-2xl border border-white bg-white p-2 card-shadow transition-transform duration-300 ease-out group-hover:-translate-y-1.5">
                <ProfilePhoto
                  size={360}
                  className="aspect-4/5 rounded-xl"
                  imageClassName="group-hover:scale-[1.04]"
                />
              </div>
            </div>

            <Link
              href="/life"
              className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white bg-white/80 px-4 py-3 text-[0.9375rem] font-semibold text-ink backdrop-blur-sm transition-colors duration-200 hover:bg-white hover:text-brand"
            >
              Life outside work
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div data-reveal="right" className="max-w-2xl space-y-4 text-base leading-relaxed text-subtle">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className={index === 0 ? "text-lg font-medium text-ink" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
