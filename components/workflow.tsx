"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowRight, Binary, Bot, ChartColumnBig, DatabaseZap, ScanSearch, type LucideIcon } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { workflowSteps } from "@/lib/content"

const workflowIcons: Record<string, LucideIcon> = {
  "messy-data": Binary,
  "clean-structure": DatabaseZap,
  analysis: ScanSearch,
  "dashboard-or-ai-tool": Bot,
  "useful-decision": ChartColumnBig,
}

export function Workflow() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(48rem_28rem_at_88%_8%,oklch(0.34_0.12_292/13%),transparent_62%)]"
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Workflow"
          title="How I Turn Messy Data Into Something Useful"
          description="The part I enjoy most is moving from unclear inputs to something a person can actually act on."
        />

        <div className="mt-10 flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-0">
          {workflowSteps.map((step, index) => {
            const Icon = workflowIcons[step.id]

            return (
              <div key={step.id} className="flex flex-col lg:flex-1 lg:flex-row lg:items-center">
                <motion.div
                  data-cursor="card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.07 }}
                  whileHover={{ y: -4 }}
                  className="glass-card gradient-border-on-hover group rounded-2xl p-5 transition-all duration-300 hover:shadow-[0_0_26px_-10px_rgba(34,211,238,0.35)] lg:min-h-[220px] lg:flex-1"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-200 transition-all duration-300 group-hover:border-cyan-300/40 group-hover:shadow-[0_0_18px_-4px_rgba(34,211,238,0.45)]">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-slate-50 sm:text-xl">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 font-medium text-slate-300 sm:text-base">{step.description}</p>
                </motion.div>

                {index < workflowSteps.length - 1 && (
                  <>
                    <div className="flex justify-center py-1 lg:hidden">
                      <span className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-cyan-200">
                        <ArrowDown className="size-4" />
                      </span>
                    </div>
                    <div className="hidden px-2 lg:flex lg:items-center lg:justify-center">
                      <span className="flex h-10 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-cyan-200 shadow-[0_0_18px_-8px_rgba(34,211,238,0.35)]">
                        <ArrowRight className="size-4" />
                      </span>
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
