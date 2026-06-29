"use client"

import { motion } from "framer-motion"
import { BarChart3, Bot, BrainCircuit, Code2, Database, Microscope, type LucideIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { skillGroups } from "@/lib/content"

const groupIcons: Record<string, LucideIcon> = {
  "ai-ml-agentic": BrainCircuit,
  "data-analytics-bi": BarChart3,
  "research-data-tools": Microscope,
  "web-product": Code2,
  "databases-cloud-devtools": Database,
  "ai-assisted-dev": Bot,
}

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_26rem_at_8%_15%,oklch(0.32_0.11_215/16%),transparent_62%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(46rem_28rem_at_92%_100%,oklch(0.32_0.12_295/16%),transparent_65%)]"
      />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section-eyebrow text-[13px] font-bold tracking-[0.16em] uppercase sm:text-sm"
        >
          Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-[2.6rem]"
        >
          What I Work With
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
          className="mt-3 max-w-2xl text-base leading-7 text-slate-300"
        >
          Grouped by what they&apos;re actually for, not just a long list.
        </motion.p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = groupIcons[group.id]
            return (
              <motion.div
                key={group.id}
                data-cursor="card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: (index % 3) * 0.08 }}
                className="glass-card gradient-border-on-hover group rounded-2xl p-5 transition-all duration-300 hover:bg-white/4 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.35)]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/15 group-hover:text-cyan-300 group-hover:shadow-[0_0_16px_-2px_rgba(34,211,238,0.55)]">
                    <Icon className="size-4" />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                </div>
                <p className="mt-3 text-[15px] leading-7 text-slate-300">{group.caption}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      data-cursor="pill"
                      className="h-6 px-2.5 text-[13px] font-medium text-slate-100 cursor-default transition-all duration-300 group-hover:brightness-110 hover:scale-105 hover:bg-cyan-500/20 hover:text-cyan-100 hover:shadow-[0_0_10px_-2px_rgba(34,211,238,0.5)]"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
