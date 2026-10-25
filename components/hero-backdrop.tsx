/**
 * Faint editorial and data details across the hero room: a measuring scale on
 * the left edge, registration marks, and one data path along the bottom with
 * a few nodes. Purely decorative; hidden on small screens.
 */
export function HeroBackdrop({ className }: { className?: string }) {
  const path = "M-20 820 C 300 760, 520 880, 820 806 S 1260 720, 1460 770"
  return (
    <svg aria-hidden="true" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className={className}>
      <g opacity="0.22" stroke="var(--platinum)" strokeWidth="1">
        {Array.from({ length: 41 }, (_, i) => (
          <line key={i} x1="26" x2={i % 5 === 0 ? 44 : 34} y1={150 + i * 15} y2={150 + i * 15} />
        ))}
      </g>

      <g stroke="var(--platinum)" strokeWidth="1" opacity="0.3">
        <path d="M98 96 h24 M110 84 v24" />
        <path d="M1318 852 h24 M1330 840 v24" />
      </g>

      <path d={path} fill="none" stroke="var(--platinum)" strokeWidth="1" opacity="0.14" />
      <path d={path} fill="none" stroke="var(--lavender)" strokeWidth="1" opacity="0.35" className="flow-dash" />
      {[
        [300, 790],
        [690, 828],
        [1040, 760],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 1 ? 3.5 : 2.5} fill={i === 1 ? "var(--lavender)" : "var(--platinum)"} opacity={i === 1 ? 0.8 : 0.45} className={i === 1 ? "node-breathe" : undefined} />
      ))}
    </svg>
  )
}
