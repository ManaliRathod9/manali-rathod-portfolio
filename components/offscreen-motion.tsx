"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Pauses the decorative CSS animations (drifting blobs, SVG data flows,
 * project previews) inside page sections that are scrolled out of view.
 *
 * Those loops otherwise keep the main thread busy on every frame even when
 * nothing they draw is visible, which delays the response to clicks on
 * slower devices. Only top-level page blocks are observed, and an animation
 * resumes as soon as its block comes back into view, so what's on screen
 * looks the same. Without JS nothing is marked, so nothing is paused.
 */
export function OffscreenMotion() {
  const pathname = usePathname()

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return

    const blocks = Array.from(document.querySelectorAll<HTMLElement>("main > *, body > footer, footer"))
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.toggleAttribute("data-offscreen", !entry.isIntersecting)
        }
      },
      // A little margin so motion is already running as a block scrolls in.
      { rootMargin: "200px 0px" }
    )

    blocks.forEach((block) => observer.observe(block))
    return () => {
      observer.disconnect()
      blocks.forEach((block) => block.removeAttribute("data-offscreen"))
    }
  }, [pathname])

  return null
}
