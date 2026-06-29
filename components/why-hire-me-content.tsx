"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowDown,
  BrainCircuit,
  Filter,
  Hammer,
  LayoutDashboard,
  Lightbulb,
  Rocket,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { valueProps } from "@/lib/content"

const nodeStyles: { icon: LucideIcon; border: string; iconBg: string; iconText: string; glow: string }[] = [
  {
    icon: Filter,
    border: "border-cyan-400/30",
    iconBg: "bg-cyan-500/10",
    iconText: "text-cyan-300",
    glow: "hover:shadow-[0_0_30px_-8px_rgba(34,211,238,0.4)]",
  },
  {
    icon: LayoutDashboard,
    border: "border-blue-400/30",
    iconBg: "bg-blue-500/10",
    iconText: "text-blue-300",
    glow: "hover:shadow-[0_0_30px_-8px_rgba(96,165,250,0.4)]",
  },
  {
    icon: BrainCircuit,
    border: "border-violet-400/30",
    iconBg: "bg-violet-500/10",
    iconText: "text-violet-300",
    glow: "hover:shadow-[0_0_30px_-8px_rgba(167,139,250,0.4)]",
  },
  {
    icon: Hammer,
    border: "border-fuchsia-400/30",
    iconBg: "bg-fuchsia-500/10",
    iconText: "text-fuchsia-300",
    glow: "hover:shadow-[0_0_30px_-8px_rgba(232,121,249,0.4)]",
  },
  {
    icon: Lightbulb,
    border: "border-pink-400/30",
    iconBg: "bg-pink-500/10",
    iconText: "text-pink-300",
    glow: "hover:shadow-[0_0_30px_-8px_rgba(244,114,182,0.4)]",
  },
]

export function WhyHireMeContent() {
  return (
    <div className="relative overflow-hidden">
      <div aria-hidden className="bg-grid absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-violet-600/10"
      />

      <div className="relative mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
            A quick look
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Why You Should{" "}
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Hire Me
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            A simple view of how I work and what I can bring to a team.
          </p>
        </motion.div>

        <div className="mt-14 flex flex-col items-center">
          {valueProps.map((prop, index) => {
            const style = nodeStyles[index]
            const Icon = style.icon
            return (
              <div key={prop.id} className="flex w-full flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
                  className={`glass-card flex w-full items-start gap-4 rounded-2xl border p-5 transition-all duration-300 sm:p-6 ${style.border} ${style.glow}`}
                >
                  <span
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full border ${style.border} ${style.iconBg} ${style.iconText}`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-foreground sm:text-lg">{prop.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {prop.description}
                    </p>
                  </div>
                </motion.div>

                {index < valueProps.length - 1 && (
                  <div className="flex h-10 items-center text-muted-foreground/50">
                    <ArrowDown className="size-5" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-card mx-auto mt-10 max-w-lg rounded-2xl border border-cyan-400/30 p-8 text-center"
        >
          <Rocket className="mx-auto size-7 text-cyan-300" />
          <p className="mt-3 text-lg font-semibold text-foreground">
            Let&apos;s build something useful together.
          </p>
          <Button size="lg" className="mt-5" nativeButton={false} render={<Link href="/#contact">Contact Me</Link>} />
        </motion.div>
      </div>
    </div>
  )
}
