"use client"

import { useCallback, useRef, type ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"

interface TiltCardProps extends ComponentPropsWithoutRef<"div"> {
  /** Maximum rotation in degrees; kept small so it reads as a gentle lean. */
  maxTilt?: number
}

/**
 * A card that leans very slightly toward the pointer and lifts on hover.
 *
 * Rendered as an inner wrapper rather than the reveal-animated root: the
 * scroll-reveal system also sets `transform` on its target element via a
 * `[data-reveal][data-revealed]` rule, which outranks a single class
 * selector on specificity and would permanently pin `transform: none`
 * after the reveal fires, silently cancelling this component's tilt. The
 * `.tilt`/`.tilt-lift` custom properties default to a flat, unlifted state,
 * so this renders identically with no JS and is inert under
 * prefers-reduced-motion.
 */
export function TiltCard({ className, maxTilt = 2.5, ...props }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const node = ref.current
      if (!node) return
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
      const rect = node.getBoundingClientRect()
      const px = (event.clientX - rect.left) / rect.width - 0.5
      const py = (event.clientY - rect.top) / rect.height - 0.5
      node.style.setProperty("--tilt-y", `${(px * maxTilt * 2).toFixed(2)}deg`)
      node.style.setProperty("--tilt-x", `${(-py * maxTilt * 2).toFixed(2)}deg`)
    },
    [maxTilt]
  )

  const handleLeave = useCallback(() => {
    const node = ref.current
    if (!node) return
    node.style.setProperty("--tilt-x", "0deg")
    node.style.setProperty("--tilt-y", "0deg")
  }, [])

  return (
    <div
      ref={ref}
      className={cn("tilt tilt-lift", className)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    />
  )
}
