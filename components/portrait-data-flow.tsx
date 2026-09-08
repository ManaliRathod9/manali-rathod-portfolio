import type { CSSProperties } from "react"

interface PortraitDataFlowProps {
  uid: string
  className?: string
}

// Runs through the left margin and underneath the photo, ending at the chart.
const flowPath = "M8 20 C85 30 28 190 114 218 S270 252 326 232"

export function PortraitDataFlow({ uid, className }: PortraitDataFlowProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 480 300" preserveAspectRatio="none" className={className}>
      <defs>
        <linearGradient id={`flow-${uid}`}>
          <stop stopColor="var(--coral)" />
          <stop offset="1" stopColor="var(--teal)" />
        </linearGradient>
      </defs>
      <path d={flowPath} fill="none" stroke={`url(#flow-${uid})`} strokeWidth="1.5" opacity="0.55" />
      <g className="data-travel-start">
        {["var(--brand)", "var(--coral)", "var(--teal)", "var(--indigo)", "var(--brand)"].map((color, i) => (
          <circle key={i} r="4" fill={color} className="data-traveler" style={{ offsetPath: `path('${flowPath}')`, offsetDistance: `${i * 20}%`, animationDelay: `${-i * 2.4}s` } as CSSProperties} />
        ))}
      </g>
      <path d="M326 232 V270 H458" fill="none" stroke="var(--teal)" strokeWidth="1.5" opacity="0.5" />
      {[26, 42, 34, 54, 46].map((height, i) => (
        <rect key={i} x={340 + i * 23} y={268 - height} width="12" height={height} rx="3" fill={i % 2 ? "var(--teal)" : "var(--brand)"} opacity="0.7" className="data-chart-bar" style={{ animationDuration: `${3 + i * 0.45}s`, animationDelay: `${-i * 0.7}s` }} />
      ))}
    </svg>
  )
}
