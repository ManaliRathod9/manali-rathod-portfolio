"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

interface RevealWindow extends Window {
  __revealWatchdog?: ReturnType<typeof setTimeout>
}

/**
 * Drives the scroll reveal, as progressive enhancement.
 *
 * The `js-reveal` class is added by a tiny inline script in the root layout
 * so the hiding styles apply before first paint (no flash). The per-element
 * marking lives here instead, in an effect, because effects run after
 * hydration - setting `data-revealed` any earlier would leave the DOM
 * holding attributes the server never rendered, which React reports as a
 * hydration mismatch.
 *
 * Every failure path ends with the content visible: no JS means the class is
 * never added, and if this never mounts the inline script's watchdog removes
 * the class on its own.
 *
 * The layout (and so this component) persists across client-side navigations,
 * so the effect re-runs per pathname to pick up the new page's elements.
 */
export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const root = document.documentElement
    if (!root.classList.contains("js-reveal")) return

    const w = window as RevealWindow
    if (w.__revealWatchdog) {
      clearTimeout(w.__revealWatchdog)
      w.__revealWatchdog = undefined
    }

    let items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])"))
    if (!items.length) {
      root.classList.remove("js-reveal")
      return
    }

    let last = 0
    let trailing: ReturnType<typeof setTimeout> | undefined

    function stop() {
      if (trailing) clearTimeout(trailing)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      window.removeEventListener("beforeprint", revealEverything)
    }

    function update() {
      last = Date.now()
      const viewportHeight = window.innerHeight || root.clientHeight || 0
      items = items.filter((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < viewportHeight * 0.92 && rect.bottom > 0) {
          el.setAttribute("data-revealed", "")
          return false
        }
        return true
      })
      if (!items.length) stop()
    }

    // Plain time-throttled handler, so behaviour is identical everywhere.
    function onScroll() {
      if (trailing) clearTimeout(trailing)
      if (Date.now() - last > 60) update()
      trailing = setTimeout(update, 90)
    }

    function revealEverything() {
      items.forEach((el) => el.setAttribute("data-revealed", ""))
      items = []
      stop()
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    window.addEventListener("beforeprint", revealEverything)
    update()

    return stop
  }, [pathname])

  return null
}
