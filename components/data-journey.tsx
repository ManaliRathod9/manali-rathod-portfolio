interface DataJourneyProps {
  /** Unique per-instance id, so two copies on one page never share a gradient id. */
  uid: string
  className?: string
  /** "hero" is a soft full-bleed watermark; "divider" is a compact section-width strip. */
  variant?: "hero" | "divider"
}

/**
 * The portfolio's signature motif: scattered points connect through a
 * flowing path and resolve into a small structured chart - a literal
 * picture of "messy data becoming something useful." It is inline SVG (not
 * an <img>), so it is governed by the page's own prefers-reduced-motion
 * rule with no extra JS, and it never renders with an initial opacity of 0.
 */
export function DataJourney({ uid, className, variant = "hero" }: DataJourneyProps) {
  const gradId = `dj-grad-${uid}`
  const isHero = variant === "hero"

  const dots = isHero
    ? [
        { cx: 78, cy: 128, r: 4.5, c: "var(--coral)", d: "0s" },
        { cx: 148, cy: 84, r: 3.5, c: "var(--brand)", d: ".5s" },
        { cx: 112, cy: 222, r: 5, c: "var(--teal)", d: "1s" },
        { cx: 196, cy: 176, r: 3.5, c: "var(--pink)", d: "1.6s" },
        { cx: 64, cy: 300, r: 4.5, c: "var(--orange)", d: "2.1s" },
        { cx: 168, cy: 344, r: 3.5, c: "var(--indigo)", d: "2.7s" },
        { cx: 232, cy: 262, r: 5, c: "var(--brand)", d: "3.2s" },
        { cx: 128, cy: 416, r: 3.5, c: "var(--teal)", d: "3.8s" },
      ]
    : [
        { cx: 54, cy: 42, r: 4, c: "var(--coral)", d: "0s" },
        { cx: 108, cy: 78, r: 3, c: "var(--brand)", d: ".5s" },
        { cx: 70, cy: 104, r: 4, c: "var(--teal)", d: "1s" },
        { cx: 150, cy: 48, r: 3, c: "var(--pink)", d: "1.6s" },
        { cx: 40, cy: 70, r: 3, c: "var(--orange)", d: "2.1s" },
        { cx: 122, cy: 112, r: 3.5, c: "var(--indigo)", d: "2.6s" },
      ]

  const path = isHero
    ? "M150,240 C300,140 380,340 480,240 C560,160 630,320 770,250"
    : "M170,80 C320,20 420,140 560,80 C700,20 800,140 970,70"

  const bars = isHero
    ? [
        { x: 700, y: 300, h: 40 },
        { x: 734, y: 280, h: 60 },
        { x: 768, y: 292, h: 48 },
        { x: 802, y: 260, h: 80 },
        { x: 836, y: 272, h: 68 },
      ]
    : [
        { x: 1000, y: 82, h: 26 },
        { x: 1024, y: 70, h: 38 },
        { x: 1048, y: 76, h: 32 },
        { x: 1072, y: 58, h: 50 },
        { x: 1096, y: 66, h: 42 },
      ]

  const rows = isHero
    ? [
        { x: 700, y: 96 },
        { x: 700, y: 116 },
        { x: 700, y: 136 },
      ]
    : [
        { x: 1000, y: 26 },
        { x: 1000, y: 42 },
      ]

  const barBase = isHero ? 340 : 108
  const rowWidth = isHero ? 152 : 132

  return (
    <svg
      aria-hidden="true"
      viewBox={isHero ? "0 0 900 500" : "0 0 1200 140"}
      preserveAspectRatio={isHero ? "xMidYMid slice" : "none"}
      className={className}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand)" />
          <stop offset="55%" stopColor="var(--indigo)" />
          <stop offset="100%" stopColor="var(--teal)" />
        </linearGradient>
      </defs>

      {/* Scattered, unstructured points. */}
      {dots.map((dot, i) => (
        <circle
          key={i}
          className="dj-dot"
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill={dot.c}
          opacity={0.55}
          style={{ animationDelay: dot.d }}
        />
      ))}

      {/* The path that carries them somewhere useful. */}
      <path
        className="dj-path"
        d={path}
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth={isHero ? 2 : 1.75}
        strokeLinecap="round"
        opacity={0.4}
      />

      {/* What they become: a small chart and a few clean rows. */}
      {bars.map((bar, i) => (
        <rect
          key={i}
          className="dj-bar"
          x={bar.x}
          y={bar.y}
          width={isHero ? 16 : 12}
          height={bar.h}
          rx={isHero ? 4 : 3}
          fill={`url(#${gradId})`}
          opacity={0.4}
          style={{ transformOrigin: `${bar.x + (isHero ? 8 : 6)}px ${barBase}px`, animationDelay: `${i * 0.4}s` }}
        />
      ))}
      {rows.map((row, i) => (
        <g key={i} className="dj-row" opacity={0.4} style={{ animationDelay: `${i * 0.5}s` }}>
          <rect x={row.x} y={row.y} width={isHero ? 10 : 8} height={isHero ? 10 : 8} rx={2.5} fill="var(--teal)" />
          <rect x={row.x + (isHero ? 18 : 14)} y={row.y + (isHero ? 1.5 : 1)} width={rowWidth} height={isHero ? 7 : 6} rx={3.5} fill="var(--brand)" />
        </g>
      ))}
    </svg>
  )
}
