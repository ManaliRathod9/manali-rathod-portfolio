"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/icons"
import { siteConfig } from "@/lib/site"

const particles = [
  { top: "20%", left: "8%", size: 3, duration: 10, delay: 0 },
  { top: "70%", left: "14%", size: 2, duration: 12, delay: 0.8 },
  { top: "30%", left: "90%", size: 2, duration: 11, delay: 0.4 },
  { top: "80%", left: "88%", size: 3, duration: 13, delay: 1.2 },
  { top: "50%", left: "50%", size: 2, duration: 9, delay: 1.6 },
]

export function GithubBanner() {
  return (
    <section className="relative my-4 overflow-hidden border-y border-white/10 bg-[#06070d] py-14 sm:py-16">
      <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-br from-cyan-500/15 via-transparent to-violet-600/20"
      />
      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/60" />

      <div aria-hidden className="pointer-events-none absolute inset-0">
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            animate={{ y: [0, -14, 0], opacity: [0.15, 0.4, 0.15] }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
            className="absolute rounded-full bg-cyan-200/60"
            style={{ top: particle.top, left: particle.left, width: particle.size, height: particle.size }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="gradient-border-flow group relative mx-auto max-w-2xl rounded-3xl px-6 py-10 text-center sm:px-10 sm:py-12"
      >
        <div className="relative mx-auto flex size-16 items-center justify-center">
          <div
            aria-hidden
            className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl transition-all duration-300 group-hover:bg-cyan-400/35 group-hover:blur-2xl"
          />
          <GithubIcon className="relative size-8 text-cyan-300 transition-transform duration-300 group-hover:scale-110" />
        </div>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          More of My Work on{" "}
          <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            GitHub
          </span>
        </h2>
        <p className="mx-auto mt-2 max-w-md text-base leading-7 text-slate-300">
          You can find more projects, experiments, and practice builds on my GitHub.
        </p>

        <motion.div
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="mt-5 inline-block"
        >
          <Button
            size="lg"
            className="btn-shine"
            render={
              <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="group/btn">
                View GitHub
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            }
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
