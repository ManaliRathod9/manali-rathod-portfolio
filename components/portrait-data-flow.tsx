import type { CSSProperties } from "react"

interface PortraitDataFlowProps {
  uid: string
  className?: string
}

// Enters from the left, rises under the portrait and runs into the chrome loop.
const flowPath = "M6 168 C88 170 120 120 196 112 S320 128 372 86 S438 34 474 30"

/**
 * A quiet picture of the work: a few input readings (the small bars), data
 * nodes travelling along one path, and an evaluation check where it lands.
 */
export function PortraitDataFlow({ uid, className }: PortraitDataFlowProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 480 200" preserveAspectRatio="none" className={className}>
      <defs>
        <linearGradient id={`flow-${uid}`} x1="0" x2="1">
          <stop stopColor="var(--platinum)" stopOpacity="0" />
          <stop offset="0.35" stopColor="var(--platinum)" stopOpacity="0.55" />
          <stop offset="1" stopColor="var(--lavender)" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Input readings */}
      {[18, 30, 24, 38].map((height, i) => (
        <rect key={i} x={10 + i * 13} y={196 - height} width="6" height={height} rx="2" fill={i % 2 ? "var(--lavender)" : "var(--platinum)"} opacity="0.45" className="data-chart-bar" style={{ animationDuration: `${3.4 + i * 0.5}s`, animationDelay: `${-i * 0.8}s` }} />
      ))}

      <path d={flowPath} fill="none" stroke={`url(#flow-${uid})`} strokeWidth="1.2" />
      <path d={flowPath} fill="none" stroke="var(--lavender)" strokeWidth="1.2" opacity="0.5" className="flow-dash" />

      <g className="data-travel-start">
        {["var(--lavender)", "var(--platinum)", "#ffffff", "var(--lavender)"].map((color, i) => (
          <circle key={i} r="2.6" fill={color} className="data-traveler" style={{ offsetPath: `path('${flowPath}')`, offsetDistance: `${i * 25}%`, animationDelay: `${-i * 3}s` } as CSSProperties} />
        ))}
      </g>

      {/* Evaluation mark where the flow lands */}
      <g transform="translate(372 86)">
        <circle r="9" fill="var(--espresso)" stroke="var(--lavender)" strokeWidth="1" opacity="0.9" />
        <path d="M-3.6 0.2 L-1 2.8 L3.8 -2.6" fill="none" stroke="var(--lavender)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}
