"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin, MessageCircle, type LucideIcon } from "lucide-react"
import { teachingExperience, type Experience } from "@/lib/content"

const cardIcons: Record<string, LucideIcon> = {
  "iu-instructor": GraduationCap,
  "ta-environment-people": MessageCircle,
}

function TeachingCard({ exp, index }: { exp: Experience; index: number }) {
  const Icon = cardIcons[exp.id]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
      className="gradient-border glass-card flex h-full flex-col rounded-2xl p-5 transition-shadow duration-300 hover:shadow-[0_0_26px_-8px_rgba(34,211,238,0.35)] sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.16em] text-cyan-200 drop-shadow-[0_0_12px_rgba(34,211,238,0.2)]">
          <Icon className="size-3.5" />
          {exp.label}
        </span>
        <span className="shrink-0 whitespace-nowrap rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 font-mono text-[13px] text-cyan-200">
          {exp.period}
        </span>
      </div>

      <h4 className="mt-3 text-lg font-semibold text-foreground sm:text-xl">{exp.title}</h4>
      <p className="mt-1 text-base font-medium text-cyan-200">{exp.org}</p>
      <p className="mt-1 flex items-center gap-1 text-sm text-slate-300">
        <MapPin className="size-3.5" />
        {exp.location}
      </p>

      <ul className="mt-4 space-y-2">
        {exp.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2 text-base leading-7 text-slate-300">
            <span className="mt-2.5 size-1 shrink-0 rounded-full bg-cyan-400/70" />
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export function TeachingExperience() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">
          Teaching and Student Support
        </h3>
        <p className="mx-auto mt-2 max-w-lg text-base leading-7 text-slate-300">
          A smaller part of my experience, where I helped students understand technical topics
          and connect tools to real workflows.
        </p>
      </motion.div>

      <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
        {teachingExperience.map((exp, index) => (
          <TeachingCard key={exp.id} exp={exp} index={index} />
        ))}
      </div>
    </section>
  )
}
