import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { ProfilePhoto } from "@/components/profile-photo"

const paragraphs = [
  "Most of what I know, I learned by building things, breaking them, and then figuring out what went wrong. That is usually where I learn the most.",
  "I recently completed my MS in Computer Science at Indiana University Bloomington, after my bachelor's in Information Technology from the University of Mumbai. My work has moved across data analytics, machine learning, dashboards, Agentic AI, and full-stack tools.",
  "Right now, my focus is on building practical data and AI systems. I enjoy working with messy datasets, cleaning and organizing them, finding patterns, building dashboards, and creating tools that make the output easier to use.",
  "I have worked on recommendation systems, user-data workflows, research data tools, business dashboards, and AI-based applications. Across these projects, I like seeing how everything connects: the data, the model, the dashboard, the backend, and the interface people actually use.",
  "Some of my recent projects include PaperTrail, AI Water Tracker, BalanceBite, MeetMinder, and the Bates IU Research Data Tool. They are different, but they all show the kind of work I enjoy: taking something unclear or messy and turning it into a useful product.",
  "Right now, I am looking for roles in Data Analytics, Business Intelligence, Machine Learning, Agentic AI, or Data-focused Full-Stack Development.",
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
