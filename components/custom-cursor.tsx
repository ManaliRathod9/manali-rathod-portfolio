"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

type CursorVariant = "default" | "nav" | "experience" | "button" | "card" | "glow" | "pill"

const sizes: Record<CursorVariant, number> = {
  default: 14,
  nav: 26,
  experience: 38,
  button: 46,
  card: 56,
  glow: 50,
  pill: 22,
}

export function CustomCursor() {
  const [variant, setVariant] = useState<CursorVariant>("default")

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return

    function handleMove(event: MouseEvent) {
      x.set(event.clientX)
      y.set(event.clientY)
      const target = event.target as HTMLElement | null
      const zone = target?.closest<HTMLElement>("[data-cursor]")
      const next = (zone?.dataset.cursor as CursorVariant | undefined) ?? "default"
      setVariant(next)
    }

    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [x, y])

  const size = sizes[variant]

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-100 hidden pointer-fine:block"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        animate={{ width: size, height: size }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
        className={cn(
          "-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border transition-colors duration-200",
          variant === "default" &&
            "border-transparent bg-cyan-400/80 shadow-[0_0_14px_4px_rgba(34,211,238,0.5)]",
          variant === "nav" && "border-cyan-300/80 bg-transparent",
          variant === "experience" &&
            "border-cyan-300/70 bg-cyan-400/10 shadow-[0_0_22px_6px_rgba(34,211,238,0.3)]",
          variant === "button" && "border-white/40 bg-white/5",
          variant === "card" && "rounded-2xl border-white/30 bg-white/5",
          variant === "glow" &&
            "border-cyan-300/60 bg-cyan-400/15 shadow-[0_0_24px_8px_rgba(34,211,238,0.45)]",
          variant === "pill" && "border-cyan-300/50 bg-cyan-400/10"
        )}
      >
        {variant === "nav" && <span className="size-1.5 rounded-full bg-cyan-300" />}
      </motion.div>
    </motion.div>
  )
}
