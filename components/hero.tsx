"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown, FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { ProfilePhoto } from "@/components/profile-photo"
import { ImageLightbox } from "@/components/image-lightbox"
import { siteConfig } from "@/lib/site"

const roles = [
  "DATA ANALYST",
  "AI/ML BUILDER",
  "AGENTIC AI BUILDER",
  "DASHBOARD BUILDER",
  "POWER BI DEVELOPER",
  "RESEARCH DATA TOOL DEVELOPER",
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
}

const particles = [
  { top: "18%", left: "10%", size: 3, duration: 9, delay: 0 },
  { top: "30%", left: "85%", size: 2, duration: 11, delay: 0.6 },
  { top: "62%", left: "6%", size: 2, duration: 10, delay: 1.2 },
  { top: "75%", left: "92%", size: 3, duration: 12, delay: 0.3 },
  { top: "12%", left: "55%", size: 2, duration: 13, delay: 1.8 },
  { top: "85%", left: "45%", size: 2, duration: 10.5, delay: 0.9 },
  { top: "45%", left: "95%", size: 2, duration: 9.5, delay: 1.5 },
]

function AnimatedRole() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % roles.length)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex min-h-16 items-center justify-center sm:min-h-20 lg:min-h-24 lg:max-w-xs lg:justify-start">
      <AnimatePresence mode="wait">
        <motion.p
          key={roles[index]}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-linear-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-center text-[1.75rem] font-extrabold leading-[1.1] tracking-tight text-transparent whitespace-normal sm:text-[2.125rem] lg:text-left lg:text-[2.5rem]"
          style={{ filter: "drop-shadow(0 0 16px rgba(34,211,238,0.35))" }}
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

function PulsingPhoto({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="relative">
      <motion.div
        aria-hidden
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(196,148,104,0.4), transparent 70%)" }}
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute inset-0 -z-10 rounded-full bg-cyan-400/20 blur-2xl"
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.12, 0.24, 0.12], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute inset-0 -z-10 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.3), rgba(167,139,250,0.3), transparent 75%)",
        }}
      />
      <button
        type="button"
        onClick={onOpen}
        aria-label="Open profile image"
        data-cursor="button"
        className="block cursor-pointer rounded-full transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
      >
        <ProfilePhoto size={224} glow={false} priority className="size-36 sm:size-44 lg:size-52" />
      </button>
    </div>
  )
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })

  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -30])
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[85vh] items-center overflow-hidden bg-grid py-8 sm:py-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-linear-to-r from-blue-500/10 via-transparent to-violet-500/10"
      />

      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 24, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 top-0 size-80 rounded-full bg-cyan-500/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-1/3 size-96 rounded-full bg-violet-500/10 blur-3xl"
        />

        {particles.map((particle, index) => (
          <motion.span
            key={index}
            aria-hidden
            animate={{ y: [0, -16, 0], opacity: [0.15, 0.45, 0.15] }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
            className="absolute rounded-full bg-cyan-200/60"
            style={{
              top: particle.top,
              left: particle.left,
              width: particle.size,
              height: particle.size,
            }}
          />
        ))}
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="mx-auto w-full max-w-6xl px-4 sm:px-6"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-10"
        >
          <motion.div variants={item} className="order-2 text-center lg:order-1 lg:text-left">
            <p className="text-lg font-semibold text-slate-300 sm:text-xl">Hello! I&apos;m</p>
            <h1 className="mt-2 text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              <span className="block">MANALI</span>
              <span className="text-gradient block">RATHOD</span>
            </h1>
          </motion.div>

          <motion.div
            variants={item}
            style={{ scale: photoScale }}
            className="order-1 flex justify-self-center lg:order-2"
          >
            <PulsingPhoto onOpen={() => setLightboxOpen(true)} />
          </motion.div>

          <motion.div variants={item} className="order-3 text-center lg:text-left">
            <p className="text-lg font-semibold text-slate-300 sm:text-xl">A Passionate</p>
            <AnimatedRole />
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-col items-center gap-4"
        >
          <motion.div variants={item} className="flex flex-wrap justify-center gap-3">
            <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Button
                size="lg"
                render={
                  <a href="#projects">
                    View Work
                    <ArrowRight className="size-4" />
                  </a>
                }
              />
            </motion.div>
            <Button
              variant="outline"
              size="lg"
              className="hover:border-cyan-400/50 hover:shadow-[0_0_18px_-4px_rgba(34,211,238,0.45)]"
              render={
                <a href={siteConfig.social.github} target="_blank" rel="noreferrer">
                  <GithubIcon className="size-4" />
                  GitHub
                </a>
              }
            />
            <Button
              variant="outline"
              size="lg"
              className="hover:border-violet-400/50 hover:shadow-[0_0_18px_-4px_rgba(167,139,250,0.45)]"
              render={
                <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
                  <LinkedinIcon className="size-4" />
                  LinkedIn
                </a>
              }
            />
            <Button
              variant="secondary"
              size="lg"
              render={
                <a href={siteConfig.resumeHref} target="_blank" rel="noreferrer">
                  <FileDown className="size-4" />
                  Download Resume
                </a>
              }
            />
          </motion.div>

          <motion.p
            variants={item}
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-center text-sm text-muted-foreground backdrop-blur-sm"
          >
            New Grad with hands-on experience in data, AI/ML, dashboards, and research data tools.
          </motion.p>

          <motion.div variants={item}>
            <Button
              variant="outline"
              size="sm"
              className="gradient-border border-white/15 hover:shadow-[0_0_20px_-4px_rgba(34,211,238,0.4)]"
              render={
                <Link href="/why-hire-me" className="group">
                  See why I could be a good fit
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              }
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute inset-x-0 bottom-4 flex flex-col items-center gap-1 text-muted-foreground/70 transition-colors hover:text-muted-foreground sm:bottom-6"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </motion.a>

      <ImageLightbox open={lightboxOpen} onClose={() => setLightboxOpen(false)} />
    </section>
  )
}
