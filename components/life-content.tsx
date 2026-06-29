"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Camera, ChefHat, Dumbbell, Plane, Volleyball, type LucideIcon } from "lucide-react"
import { InstagramIcon, XIcon } from "@/components/icons"
import { siteConfig } from "@/lib/site"
import { lifeItems } from "@/lib/content"

const tileStyles: Record<string, { icon: LucideIcon; ring: string; glow: string; gradient: string }> = {
  badminton: {
    icon: Volleyball,
    ring: "border-violet-400/25 hover:border-violet-400/45",
    glow: "hover:shadow-[0_0_28px_-8px_rgba(167,139,250,0.45)]",
    gradient: "from-violet-500/10 via-transparent to-transparent",
  },
  cooking: {
    icon: ChefHat,
    ring: "border-pink-400/25 hover:border-pink-400/45",
    glow: "hover:shadow-[0_0_28px_-8px_rgba(244,114,182,0.4)]",
    gradient: "from-pink-500/10 via-transparent to-transparent",
  },
  gym: {
    icon: Dumbbell,
    ring: "border-cyan-400/25 hover:border-cyan-400/45",
    glow: "hover:shadow-[0_0_28px_-8px_rgba(34,211,238,0.4)]",
    gradient: "from-cyan-500/10 via-transparent to-transparent",
  },
  "social-media": {
    icon: Camera,
    ring: "border-fuchsia-400/25 hover:border-fuchsia-400/45",
    glow: "hover:shadow-[0_0_28px_-8px_rgba(232,121,249,0.4)]",
    gradient: "from-fuchsia-500/10 via-transparent to-transparent",
  },
}

const travelItem = lifeItems.find((item) => item.id === "travel")!
const smallItems = lifeItems.filter((item) => item.id !== "travel")

export function LifeContent() {
  return (
    <div className="relative overflow-hidden">
      <div aria-hidden className="bg-grid absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-br from-violet-600/10 via-transparent to-cyan-500/10"
      />

      <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-300">
            A bit more about me
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Life{" "}
            <span className="bg-linear-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Outside Work
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            A little more about me outside work, data, and dashboards.
          </p>
        </motion.div>

        <div className="mt-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative isolate aspect-16/10 overflow-hidden rounded-2xl border border-blue-400/25 shadow-lg shadow-black/30 transition-all duration-300 hover:border-blue-400/45 hover:shadow-[0_0_32px_-8px_rgba(96,165,250,0.45)] sm:aspect-video"
          >
            <Image
              src="/images/manali-travel.jpg"
              alt="Manali traveling"
              fill
              sizes="(min-width: 1024px) 60vw, 95vw"
              className="object-cover object-[47%_40%]"
              priority
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-black/80 via-black/15 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <span className="flex size-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm">
                <Plane className="size-4" />
              </span>
              <p className="mt-2.5 text-lg font-semibold text-white sm:text-xl">{travelItem.title}</p>
              <p className="mt-1 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
                {travelItem.description}
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {smallItems.map((item, index) => {
              const style = tileStyles[item.id]
              const Icon = style.icon
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
                  className={`glass-card relative overflow-hidden rounded-2xl border p-4 transition-all duration-300 sm:p-5 ${style.ring} ${style.glow}`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br ${style.gradient}`}
                    aria-hidden
                  />
                  <span className="relative flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground">
                    <Icon className="size-4.5" />
                  </span>
                  <p className="relative mt-3 text-base font-semibold text-foreground">{item.title}</p>
                  <p className="relative mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  {item.id === "social-media" && (
                    <div className="relative mt-4 flex gap-2">
                      <a
                        href={siteConfig.social.instagram}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        className="flex size-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-fuchsia-400/40 hover:text-fuchsia-300"
                      >
                        <InstagramIcon className="size-4" />
                      </a>
                      <a
                        href={siteConfig.social.x}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="X"
                        className="flex size-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-fuchsia-400/40 hover:text-fuchsia-300"
                      >
                        <XIcon className="size-4" />
                      </a>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
