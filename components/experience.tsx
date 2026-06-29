"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { experiences, type Experience } from "@/lib/content"

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="glass-card rounded-2xl p-5 transition-colors duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_28px_-6px_rgba(34,211,238,0.4)]"
    >
      <span className="inline-block rounded-full border border-cyan-400/40 bg-cyan-500/15 px-3 py-1 font-mono text-[13px] font-semibold tracking-wide text-cyan-200">
        {exp.period}
      </span>

      <h3 className="mt-3 text-lg font-semibold text-foreground sm:text-xl">{exp.title}</h3>
      <p className="mt-1 text-base font-medium text-cyan-200">{exp.org}</p>
      <p className="mt-1 flex items-center gap-1 text-sm text-slate-300">
        <MapPin className="size-3" />
        {exp.location}
      </p>

      <ul className="mt-4 space-y-2.5">
        {exp.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2 text-base leading-7 text-slate-300">
            <span className="mt-2.5 size-1 shrink-0 rounded-full bg-cyan-400" />
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export function Experience() {
  return (
    <section id="experience" data-cursor="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <p className="section-eyebrow text-[13px] font-bold uppercase tracking-[0.16em] sm:text-sm">Career</p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          My{" "}
          <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-slate-300">
          Work I&apos;ve done across data, AI, and research tools.
        </p>
      </motion.div>

      <div className="relative mt-16">
        <div
          aria-hidden
          className="absolute left-4 top-0 bottom-0 w-px bg-linear-to-b from-cyan-400/70 via-blue-500/30 to-transparent shadow-[0_0_10px_1px_rgba(34,211,238,0.45)] md:left-1/2 md:-translate-x-1/2"
        />

        <div className="space-y-10">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0
            return (
              <div
                key={exp.id}
                className="relative pl-12 md:grid md:grid-cols-2 md:items-start md:gap-x-10 md:pl-0"
              >
                <span
                  aria-hidden
                  className="absolute left-4 top-6 z-10 size-3.5 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_16px_4px_rgba(34,211,238,0.65)] ring-4 ring-background md:left-1/2"
                />

                <div>{isLeft && <ExperienceCard exp={exp} />}</div>
                <div className="mt-4 md:mt-0">{!isLeft && <ExperienceCard exp={exp} />}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
