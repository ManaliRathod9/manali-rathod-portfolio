import type { CSSProperties } from "react"
import { PortraitDataFlow } from "@/components/portrait-data-flow"
import { withBasePath } from "@/lib/site"

const asset = (name: string) => withBasePath(`/images/hero/${name}`)

/**
 * One layer of the liquid-chrome orbit (pre-rendered; see public/images/hero).
 * The back layer holds the whole form; the front layer holds only the short
 * stretch that passes in front of the portrait's faded lower edge. Both share
 * the same drift, so the form stays whole while it moves.
 */
function ChromeLayer({ half, className }: { half: "back" | "front"; className?: string }) {
  const src = asset(`chrome-orbit-${half}.webp`)
  const mask = { WebkitMaskImage: `url("${src}")`, maskImage: `url("${src}")` } as CSSProperties
  return (
    <div aria-hidden className={`chrome-layer parallax-far pointer-events-none ${className ?? ""}`}>
      {/* CORS mode matches the CSS mask fetch below, so both share one download. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" width={1200} height={1200} crossOrigin="anonymous" decoding="async" fetchPriority={half === "back" ? "high" : "auto"} />
      <span className="chrome-sheen hidden lg:block" style={mask} />
    </div>
  )
}

// Points on a faint orbit line around the portrait.
const orbit = { cx: 612, cy: 684, rx: 590, ry: 238, tilt: (-24 * Math.PI) / 180 }
function orbitPoint(t: number) {
  const x = orbit.rx * Math.cos(t)
  const y = orbit.ry * Math.sin(t)
  return {
    x: orbit.cx + x * Math.cos(orbit.tilt) - y * Math.sin(orbit.tilt),
    y: orbit.cy + x * Math.sin(orbit.tilt) + y * Math.cos(orbit.tilt),
  }
}
const orbitNodes = [3.55, 4.6, 5.55].map(orbitPoint)
const constellation = [
  [70, 168], [150, 104], [236, 150], [198, 236], [112, 262],
] as const

/** Hairline technology details drawn behind the sculpture. */
function ArtDetails({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 1200 1200" className={className}>
      <ellipse
        cx={orbit.cx}
        cy={orbit.cy}
        rx={orbit.rx}
        ry={orbit.ry}
        transform={`rotate(-24 ${orbit.cx} ${orbit.cy})`}
        fill="none"
        stroke="var(--platinum)"
        strokeWidth="1.2"
        opacity="0.16"
      />
      {orbitNodes.map((p, i) => (
        <g key={i} transform={`translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})`}>
          {i === 1 && <circle r="16" fill="var(--lavender)" opacity="0.12" className="node-breathe" />}
          <circle r={i === 1 ? 5 : 3.5} fill={i === 1 ? "var(--lavender)" : "var(--platinum)"} opacity={i === 1 ? 0.95 : 0.55} />
        </g>
      ))}

      {/* Connected points: signals coming together. */}
      <g stroke="var(--platinum)" strokeWidth="1" opacity="0.28" fill="none">
        <polyline points={constellation.map((p) => p.join(",")).join(" ")} />
        <line x1={constellation[1][0]} y1={constellation[1][1]} x2={constellation[3][0]} y2={constellation[3][1]} />
      </g>
      {constellation.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 2 ? 4.5 : 3} fill={i === 2 ? "var(--lavender)" : "var(--platinum)"} opacity={i === 2 ? 0.9 : 0.5} className={i === 2 ? "node-breathe" : undefined} />
      ))}

      {/* Evaluation scale on the right: ticks with one reading marked. */}
      <g opacity="0.4">
        {Array.from({ length: 23 }, (_, i) => (
          <line key={i} x1={i % 5 === 0 ? 1138 : 1148} x2="1162" y1={300 + i * 18} y2={300 + i * 18} stroke="var(--platinum)" strokeWidth="1" />
        ))}
      </g>
      <g transform="translate(1124 408)">
        <path d="M0 -6 L9 0 L0 6 Z" fill="var(--lavender)" opacity="0.9" />
      </g>

      {/* Registration marks */}
      <g stroke="var(--platinum)" strokeWidth="1" opacity="0.35">
        <path d="M1120 1130 h28 M1134 1116 v28" />
        <path d="M56 70 h24 M68 58 v24" />
      </g>
    </svg>
  )
}

/**
 * The hero centrepiece: Manali's own portrait (background removed, nothing
 * else changed) with an original liquid-chrome orbit that sits mostly behind
 * her. Layered back to front: spotlight, hairline details, chrome back layer,
 * the portrait, chrome front layer. On phones the orbit is scaled down and the
 * front layer is dropped, so the whole form stays behind the portrait.
 */
export function HeroArt({ onOpenPhoto }: { onOpenPhoto: () => void }) {
  return (
    <div className="relative aspect-square w-full">
      <span aria-hidden className="spotlight absolute left-[11%] top-0 h-[78%] w-[78%]" />
      <ArtDetails className="pointer-events-none absolute inset-0 hidden size-full sm:block" />
      <PortraitDataFlow uid="hero" className="pointer-events-none absolute -left-[6%] bottom-[9%] hidden h-[17%] w-[40%] lg:block" />

      <ChromeLayer half="back" className="max-sm:scale-[0.86]" />

      <button
        type="button"
        onClick={onOpenPhoto}
        aria-label="Open larger profile photo"
        className="portrait-reveal parallax-near absolute left-[19%] top-[13%] w-[62%] cursor-pointer"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("manali-portrait-760.webp")}
          srcSet={`${asset("manali-portrait-520.webp")} 520w, ${asset("manali-portrait-760.webp")} 760w`}
          sizes="(min-width: 1024px) 380px, 62vw"
          alt="Manali Rathod"
          width={760}
          height={859}
          fetchPriority="high"
          decoding="async"
          className="block h-auto w-full"
        />
      </button>

      <ChromeLayer half="front" className="hidden sm:block" />
    </div>
  )
}
