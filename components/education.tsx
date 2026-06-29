"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/section-heading"
import { education } from "@/lib/content"

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="Education" title="Education" />

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {education.map((entry, index) => (
          <motion.article
            key={entry.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
            className="glass-card glass-card-hover rounded-2xl p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">{entry.degree}</h3>
              <span className="shrink-0 whitespace-nowrap font-mono text-sm text-slate-300">
                {entry.period}
              </span>
            </div>
            <p className="mt-1 text-base font-medium text-cyan-200">{entry.school}</p>
            <p className="mt-1 text-sm leading-6 text-slate-300">
              {entry.location} · GPA {entry.gpa}
            </p>

            {entry.coursework && entry.coursework.length > 0 && (
              <div className="mt-4">
                <p className="section-eyebrow text-[13px] font-bold uppercase tracking-[0.16em]">
                  Relevant coursework
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {entry.coursework.map((course) => (
                    <Badge key={course} variant="secondary" className="h-6 px-2.5 text-[13px] font-medium text-slate-100">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  )
}
